import React from "react";
import { useRecoilState } from "recoil";
import { recipesState } from "./store";

import "./styles.css";
// We add new ids in the recipes list to show that recoil will do the async stuff by itself
const AddRecipe = () => {
  const [recipes, setRecipes] = useRecoilState(recipesState);
  const idCounter = Math.max(...recipes) + 1;

  const addImage = () => {
    setRecipes([...recipes, idCounter]);
  };
  //Limit the counter because I run out of ids with the meal DB :D
  return (
    <>{idCounter <= 52777 && <button onClick={addImage}>Add recipe</button>}</>
  );
};

export default AddRecipe;
