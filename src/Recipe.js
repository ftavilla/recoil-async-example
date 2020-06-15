/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { useRecoilValue, useRecoilState } from "recoil";
import { recipeState, selectedRecipeState } from "./store";

const Recipe = ({ id }) => {
  const { strMeal, strMealThumb } = useRecoilValue(recipeState(id));
  const [selectedRecipe, setSelectedRecipe] = useRecoilState(
    selectedRecipeState
  );

  const onClick = () => {
    setSelectedRecipe(id);
  };
  return (
    <div
      onClick={onClick}
      css={{
        flex: 1,
        margin: "20px",
        cursor: "pointer",
        border: selectedRecipe === id ? "2px solid red" : "2px solid black"
      }}
    >
      <div
        css={{
          minWidth: "120px",
          height: "120px",
          img: {
            width: "100%",
            height: "100%",
            objectFit: "cover"
          }
        }}
      >
        <img src={strMealThumb} alt={strMeal} />
      </div>

      <div>{strMeal}</div>
    </div>
  );
};

export default Recipe;
