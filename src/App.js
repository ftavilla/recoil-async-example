/** @jsx jsx */
import React, { Suspense } from "react";
import { jsx } from "@emotion/core";
import "./styles.css";
import Recipes from "./Recipes";
import EditRecipe from "./EditRecipe";
import AddRecipe from "./AddRecipe";

export default function App() {
  return (
    <div
      className="App"
      css={{ display: "flex", textAlign: "center", height: "80vh" }}
    >
      <Suspense fallback="Loading...">
        <EditRecipe />
        <div>
          <AddRecipe />
          <Recipes />
        </div>
      </Suspense>
    </div>
  );
}
