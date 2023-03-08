import React, { Component } from "react";
import { Provider } from "react-redux";
import { AppRouter } from "./modules/app-navigator";
import store from "./redux/store";

function Root() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  )
}
export default Root;
