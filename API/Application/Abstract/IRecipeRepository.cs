using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using API.Domain;

namespace API.Application.Abstract
{
    public interface IRecipeRepository : IRepository
    {
        Task<IEnumerable<Recipe>> GetRecipes();

        Task<Recipe> GetRecipe(Guid id);
    }
}