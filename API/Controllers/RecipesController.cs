using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using API.Application.Abstract;
using API.Domain;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class RecipesController : ControllerBase
    {
        private readonly IRecipeRepository repository;
        public RecipesController(IRecipeRepository repository)
        {
            this.repository = repository;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Recipe>>> List()
        {

            var recipes = await repository.GetRecipes();

            return Ok(recipes);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Recipe>> Details(Guid id)
        {
            var recipe = await repository.GetRecipe(id);
            return recipe;
        }
    }


}