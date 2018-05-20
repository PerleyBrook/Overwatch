import { configure, shallow } from "enzyme";
import ReactSixteenAdapter from "enzyme-adapter-react-16";
import * as React from "react";

import * as constants from "../../constants";
import ContainerView from "../ContainerView";

configure({ adapter: new ReactSixteenAdapter() });

it("renders correctly with decrement color", () => {
  const containerView = shallow(<ContainerView status={constants.PRICE_DECREASED} />);
  const linearGradient = containerView.find("LinearGradient");
  expect(linearGradient.prop("colors")).toEqual(["#5d990c", "#a5231c"]);
});

it("renders correctly with increment color", () => {
  const containerView = shallow(<ContainerView status={constants.PRICE_INCREASED} />);
  const linearGradient = containerView.find("LinearGradient");
  expect(linearGradient.prop("colors")).toEqual(["#a11514", "#aa691c"]);
});
