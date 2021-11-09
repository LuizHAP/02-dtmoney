import React from "react";
import ReactDOM from "react-dom";
import { createServer } from "miragejs";
import { App } from "./App";

createServer({
  routes() {
    this.namespace = "api";
    this.get("/transactions", () => {
      return [
        {
          id: 1,
          title: "Transactions 1",
          amount: 400,
          type: "deposit",
          category: "Food",
          createAt: new Date(),
        },
        {
          id: 2,
          title: "Transactions 2",
          amount: 500,
          type: "deposit",
          category: "House",
          createAt: new Date(),
        },
      ];
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
