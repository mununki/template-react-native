import React from "react";
import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createUploadLink } from "apollo-upload-client";
import { ApolloLink } from "apollo-link";
import { setContext } from "apollo-link-context";
// import { withClientState } from "apollo-link-state";
import { getTokenFromAsyncStorage } from "../utils/handleAsyncStorage";
import { getAPIUrl } from "../../env.config";

// set args to "prod" or "dev"
const GRAPHQL_URL = getAPIUrl("dev");

const initApollo = () => {
  const httpLink = createUploadLink({
    uri: GRAPHQL_URL,
    credentials: "same-origin"
  });

  const authLink = setContext(async (_, { headers }) => {
    let token;
    try {
      // token = await getTokenFromAsyncStorage();
      token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOiIyMDE5LTA3LTA0VDE3OjUwOjAyLjcyOTA5NSswOTowMCIsInVzZXJJRCI6IjEifQ.gjg8kK5Y5nhhtA6QIeGewjM4cpnj-NdDJjZlojHiK5Q";
    } catch (err) {
      console.log(`Can't get a token`, err);
    }
    return {
      headers: {
        ...headers,
        authorization: token ? `${token}` : ""
      }
    };
  });

  const cache = new InMemoryCache();

  // const stateLink = withClientState({
  //   defaults,
  //   resolvers
  // });

  return new ApolloClient({
    link: ApolloLink.from([
      authLink,
      // stateLink,
      httpLink
    ]),
    cache
  });
};

export default (App: React.ElementType) =>
  class WrapApollo extends React.Component<{}, {}> {
    private client: any;

    constructor(props: {}) {
      super(props);
      this.client = initApollo();
    }

    render() {
      return (
        <ApolloProvider client={this.client}>
          <App />
        </ApolloProvider>
      );
    }
  };
