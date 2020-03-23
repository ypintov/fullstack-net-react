import React, { useEffect, useCallback } from "react";
import { Grid } from "semantic-ui-react";
import { useState } from "react";
import RecipeService from "../../../app/api/recipeService";
import RecipeDetailHeader from "./RecipeDetailHeader";
import RecipeDetailInfo from "./RecipeDetailInfo";
import RecipeDetailSideBar from "./RecipeDetailSideBar";

const RecipeDetails = ({ location, match }) => {
  const [recipe, setRecipe] = useState(null);

  const loadRecipe = useCallback(async () => {
    try {
      const recipe = await RecipeService.details(match.params.id);
      setRecipe(recipe);
    } catch (e) {
      console.log(e);
    }
  }, [match.params.id]);

  useEffect(() => {
    loadRecipe();
  }, [loadRecipe, match.params.id]);

  return (
    <Grid>
      {recipe && (
        <>
          <Grid.Column width={10}>
            <RecipeDetailHeader recipe={recipe} />
            <RecipeDetailInfo recipe={recipe} />
          </Grid.Column>
          <Grid.Column width={6}>
            <RecipeDetailSideBar recipe={recipe} />
          </Grid.Column>
        </>
      )}
    </Grid>
  );
};

export default RecipeDetails;
