import React from "react";
import "./App.css";
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import AppRoutes from "./AppRoutes";
import Header from "./common/components/Header";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          <AppRoutes />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
