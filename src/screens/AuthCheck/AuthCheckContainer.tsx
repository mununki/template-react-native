import React from "react";
import { View, Text } from "react-native";
import { Query } from "react-apollo";
import { GET_MY_PROFILE } from "./AuthCheckQueries";

const AuthCheckContainer = () => {
  return (
    <Query query={GET_MY_PROFILE}>
      {({ loading, error, data }) => {
        if (loading) return <Text>Loading</Text>;
        if (error) return <Text>Error</Text>;

        return (
          <View>
            <Text>AuthCheck</Text>
          </View>
        );
      }}
    </Query>
  );
};

export default AuthCheckContainer;
