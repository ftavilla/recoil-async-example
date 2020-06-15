/** @jsx jsx */
import React, { Suspense } from "react";
import { jsx } from "@emotion/core";
import { useRecoilValue } from "recoil";
import { recipesState } from "./store";
import Recipe from "./Recipe";

const Recipes = () => {
  const recipes = useRecoilValue(recipesState);
  return (
    <div
      css={{
        display: "flex",
        flexWrap: 'wrap',
        margin: "0 auto",
        padding: "20px",
        maxWidth: "100%",
      }}
    >
      {recipes.map(id => (
        <Suspense key={id} fallback="Loading...">
          <Recipe id={id} />
        </Suspense>
      ))}
    </div>
  );
};

export default Recipes;
