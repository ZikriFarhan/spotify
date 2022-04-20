import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Albums from "../src/components/component/Album";
import store from "../src/components/pages/reducer/store";
import Provider from "react-redux";
import { BrowserRouter } from "react-router-dom";

test("render Albums component", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Albums />
      </BrowserRouter>
    </Provider>
  );
});
