import React from "react";
import ReactDOM from "react-dom";
import { DemoButtons } from "../../../src/client/components/demo-buttons";
import { shallow } from "enzyme";

describe("Demo Buttons", () => {
  let component;
  let container;

  beforeEach(() => {
    container = document.createElement("div");
  });

  afterEach(() => {
    ReactDOM.unmountComponentAtNode(container);
  });

  it("should shallow render demo button component", () => {
    component = shallow(<DemoButtons />);
    expect(component).toMatchSnapshot();
  });
});

