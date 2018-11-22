import React, { Component } from "react";
import { StyleSheet, View, Button } from "react-native";
import { Client, Configuration } from "bugsnag-react-native";

const config = new Configuration();
config.apiKey = "test_api_key_here";
config.codeBundleId = "0.1.0";
config.releaseStage = "staging";

const bugsnag = new Client(config);

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button title="send error" onPress={() => bugsnag.notify(new Error("test error"))} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
});
