import React from "react";
import Ingredient from "./Ingredient";

function IngredientList({ ingredient }) {
  const IngredientElements = ingredient.map((ingredient) => {
    return <Ingredient key={ingredient.id} {...ingredient} />;
  });
  return <div className="ingredient-grid">{IngredientElements}</div>;
}

export default IngredientList;
