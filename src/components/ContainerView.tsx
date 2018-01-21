import * as React from "react";
import {
  StyleSheet,
  Text,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";

import { PRICE_INCREASED } from "../constants";
import { IPriceStatus } from "../types";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
// tslint:disable-next-line:no-empty-interface
export interface IContainerViewProps extends IPriceStatus {
}

interface IContainerViewState {
  color: string[];
}
export default class ContainerView extends React.Component<IContainerViewProps, IContainerViewState> {
  private statusColor: string[];
  private readonly increasedColor: string[] = ["#a11514", "#aa691c"];
  private readonly decreasedColor: string[] = ["#5d990c", "#a5231c"];
  constructor(props: IContainerViewProps) {
    super(props);
    this.statusColor = props.status === PRICE_INCREASED ? this.increasedColor : this.decreasedColor;
    this.state = { color: this.statusColor };
  }
  public render() {
    return (
      <LinearGradient colors={this.state.color} style={styles.container}>
        <Text >
          Sign in
        </Text>
      </LinearGradient>
    );
  }
}
