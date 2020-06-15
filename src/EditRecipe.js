/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { useRecoilValue, useRecoilState } from "recoil";
import { selectedRecipeState, recipeState } from "./store";

const EditRecipe = () => {
  const selectedRecipeId = useRecoilValue(selectedRecipeState);
  const [recipe, setRecipe] = useRecoilState(recipeState(selectedRecipeId));
  const onChange = e => {
    const value = e.target.value;
    setRecipe({
      ...recipe,
      strMeal: value
    });
  };
  return (
    <div
      css={{
        maxWidth: "150px",
        height: "150px",
        img: {
          width: "100%",
          height: "100%",
          objectFit: "cover"
        }
      }}
    >
      <strong>EDIT: </strong>
      <input
        css={{ marginBottom: "10px" }}
        type="text"
        value={recipe.strMeal}
        onChange={onChange}
      />
      <img src={recipe.strMealThumb} alt={recipe.strMeal} />
    </div>
  );
};

export default EditRecipe;
