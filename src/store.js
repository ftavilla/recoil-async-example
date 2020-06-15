import { atom, atomFamily } from "recoil";

const getRecipe = async id => {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    const data = await response.json();
    return data.meals[0];
  } catch (error) {
    throw error;
  }
};

export const recipeState = atomFamily({
  key: "recipeState",
  default: async id => getRecipe(id)
});

export const selectedRecipeState = atom({
  key: "selectedRecipeState",
  default: 52764
});

export const recipesState = atom({
  key: "recipesState",
  default: [52764, 52765, 52767]
});
