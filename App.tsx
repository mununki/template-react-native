import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { Provider } from "react-redux";
import AppNavigator from "./src/routes";
import wrapApollo from "./src/lib/wrapApollo";
import store from "./src/store";
import codePush from "react-native-code-push";

interface Props {}

class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <AppNavigator />
        </View>
      </Provider>
    );
  }
}

export default codePush({
  checkFrequency: codePush.CheckFrequency.ON_APP_RESUME
})(wrapApollo(App));

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
