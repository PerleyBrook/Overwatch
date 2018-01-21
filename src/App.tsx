/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import * as React from "react";

import ContainerView from "./components/ContainerView";
import { IContainerViewProps } from "./components/ContainerView";
import { PRICE_DECREASED } from "./constants/index";

export default class App extends React.Component<{}, {}> {

  public render() {
    let priceStatus: IContainerViewProps;
    priceStatus = {
      status: PRICE_DECREASED,
    };
    return (
      <ContainerView {...priceStatus} />
    );
  }
}
