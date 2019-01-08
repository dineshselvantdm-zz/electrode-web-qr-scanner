import React from "react";
import ReactDOM from "react-dom";
import Home from "../../../src/client/components/home";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "../../../src/client/reducers/index";
import { BrowserRouter } from "react-router-dom";
import { mount } from "enzyme";

describe("Home", () => {
  let component;
  let container;

  beforeEach(() => {
    container = document.createElement("div");
  });

  afterEach(() => {
    ReactDOM.unmountComponentAtNode(container);
  });

  it("should mount - deep render entire component with initial store", () => {
    const initialState = {
      checkBox: { checked: false },
      number: { value: 999 }
    };
    const store = createStore(rootReducer, initialState);
    component = mount(<Provider store={store}>
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </Provider>,
    container
    );
    expect(component).not.toBe(false);
  });
});

