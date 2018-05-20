import * as React from "react";

import ContainerView from "./components/ContainerView";
import { IContainerViewProps } from "./components/ContainerView";
import { PRICE_INCREASED } from "./constants";

export default class App extends React.Component<{}, {}> {

  public render() {
    let priceStatus: IContainerViewProps;
    priceStatus = {
      status: PRICE_INCREASED,
    };
    return (
      <ContainerView {...priceStatus} />
    );
  }
}
