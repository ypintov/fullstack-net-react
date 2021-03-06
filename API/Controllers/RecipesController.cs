using System.Net;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using API.Application.Abstract;
using API.Application.Contracts.Response;
using API.Application.Contracts.Request;
using API.Domain;
using Microsoft.AspNetCore.Mvc;
using API.Application.Errors;
using API.Application.Constants;
using AutoMapper;

namespace API.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class RecipesController : ControllerBase
    {
        private readonly IRecipeRepository repository;
        private readonly IMapper _mapper;
        public RecipesController(IRecipeRepository repository, IMapper mapper)
        {
            this.repository = repository;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<RecipeResponse>>> List()
        {

            var recipes = await repository.GetRecipes();
            /* var recipeList = new List<RecipeResponse>();

            foreach (var recipe in recipes)
            {
                var recipeResponse = new RecipeResponse
                {
                    Id = recipe.Id,
                    Title = recipe.Title,
                    Summary = recipe.Summary,
                    Directions = recipe.Directions,
                    Ingredients = recipe.Ingredients,
                    NutritionInfo = recipe.NutritionInfo
                };
                recipeList.Add(recipeResponse);
            }
            */

            var recipeList = _mapper.Map<IEnumerable<RecipeResponse>>(recipes);
            return Ok(recipeList);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<RecipeResponse>> Details([FromRoute]Guid id)
        {
            var recipe = await repository.GetRecipe(id);
            if (recipe == null)
                throw new RestException(HttpStatusCode.NotFound, new { Recipe = GlobalConstants.NOT_FOUND });
            /* var recipeResponse = new RecipeResponse
            {
                Id = recipe.Id,
                Title = recipe.Title,
                Summary = recipe.Summary,
                Directions = recipe.Directions,
                Ingredients = recipe.Ingredients,
                NutritionInfo = recipe.NutritionInfo
            }; */

            var recipeResponse = _mapper.Map<RecipeResponse>(recipe);
            return recipeResponse;
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] CreateRecipeRequest request)
        {
          /*   var recipe = new Recipe
            {
                Title = request.Title,
                Summary = request.Summary,
                Directions = request.Directions,
                Ingredients = request.Ingredients,
                NutritionInfo = request.NutritionInfo
            }; */

            var recipe = _mapper.Map<Recipe>(request);

            repository.Add(recipe);

            if (await repository.SaveAll())
                return Ok();

            throw new Exception(GlobalConstants.ERROR_SAVING_CHANGES);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Edit([FromRoute] Guid id, [FromBody] UpdateRecipeRequest request)
        {
            var recipe = await repository.GetRecipe(id);

            if (recipe == null)
                throw new RestException(HttpStatusCode.NotFound, new { Recipe = GlobalConstants.NOT_FOUND });

           /*  recipe.Title = request.Title;
            recipe.Summary = request.Summary;
            recipe.Directions = request.Directions;
            recipe.Ingredients = request.Ingredients;
            recipe.NutritionInfo = request.NutritionInfo; */

            _mapper.Map(request, recipe);

            if (await repository.SaveAll())
                return Ok();

            throw new Exception(GlobalConstants.ERROR_SAVING_CHANGES);

        }


        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete([FromRoute] Guid id)
        {
            var recipe = await repository.GetRecipe(id);

            if (recipe == null)
            {
                throw new RestException(HttpStatusCode.NotFound, new { Recipe = GlobalConstants.NOT_FOUND });
            }

            repository.Delete(recipe);

            if (await repository.SaveAll())
                return Ok();

            throw new Exception(GlobalConstants.ERROR_SAVING_CHANGES);
        }

    }
}