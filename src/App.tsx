/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import * as React from "react";
import {
  Text,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";

// const instructions = Platform.select({
//   ios: "Press Cmd+R to reload,\n" +
//     "Cmd+D or shake for dev menu",
//   android: "Double tap R on your keyboard to reload,\n" +
//     "Shake or press menu button for dev menu",
// });

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#F5FCFF",
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: "center",
//     margin: 10,
//   },
//   instructions: {
//     textAlign: "center",
//     color: "#333333",
//     marginBottom: 5,
//   },
// });
export default class App extends React.Component<{}, {}> {
  public render() {
    return (
      <LinearGradient colors={["#fff", "#111111"]}>
        <Text >
          Sign in with Facebook
        </Text>
      </LinearGradient>
    );
  }
}
