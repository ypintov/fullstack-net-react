using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using API.Application.Abstract;
using API.Domain;
using API.Persistence;
using Microsoft.EntityFrameworkCore;

namespace API.Infrastructure.Repository
{
    public class RecipeRepository : IRecipeRepository
    {
        private readonly DataContext context;
        public RecipeRepository(DataContext context)
        {
            this.context = context;

        }
        public void Add<T>(T entity) where T : class
        {
            context.Add(entity);
        }

        public void Delete<T>(T entity) where T : class
        {
            context.Remove(entity);
        }

        public async Task<Recipe> GetRecipe(Guid id)
        {
            return await context.Recipes.FindAsync(id);
        }

        public async Task<IEnumerable<Recipe>> GetRecipes()
        {
            return await context.Recipes.ToListAsync();
        }

        public async Task<bool> SaveAll()
        {
            return await context.SaveChangesAsync() > 0;
        }
    }
}