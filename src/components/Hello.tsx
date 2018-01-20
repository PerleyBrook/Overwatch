import * as React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

// tslint:disable-next-line:interface-name
export interface Props {
  name: string;
  enthusiasmLevel?: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
}
// styles

const styles = StyleSheet.create({
  root: {
      alignItems: "center",
      alignSelf: "center",
  },
  buttons: {
      flexDirection: "row",
      minHeight: 70,
      alignItems: "stretch",
      alignSelf: "center",
      borderWidth: 5,
  },
  button: {
      flex: 1,
      paddingVertical: 0,
  },
  greeting: {
      color: "#999",
      fontWeight: "bold",
  },
});

function Hello({ name, enthusiasmLevel = 1, onIncrement, onDecrement }: Props) {
  if (enthusiasmLevel <= 0) {
    throw new Error("You could be a little more enthusiastic. :D");
  }

  return (
    <View style={styles.root}>
        <Text style={styles.greeting}>
        Hello {name + getExclamationMarks(enthusiasmLevel)}
        </Text>
        <View style={styles.buttons}>
            <View style={styles.button}>
            <Button title="-" onPress={onDecrement || (() => {})} accessibilityLabel="decrement" color="red" />
            </View>
            <View style={styles.button}>
                <Button title="+" onPress={onIncrement || (() => {})}  accessibilityLabel="increment" color="blue" />
            </View>
        </View>
    </View>
  );
}

export default Hello;

// helpers

export const getExclamationMarks = (numChars: number) => {
  return Array(numChars + 1).join("!");
};
