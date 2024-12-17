import React from "react";

import { useQuery } from "@tanstack/react-query";
import { getAllRecipes } from "../api/auth";

const Recipes = () => {
  const { data: recipes } = useQuery({
    queryKey: ["Recipes"],
    queryFn: getAllRecipes,
  });

  return (
    <div className="card-container">
      {recipes?.map((recipes) => (
        <div key={recipes.id}></div>
      ))}
    </div>
  );
};
export default Recipes;
