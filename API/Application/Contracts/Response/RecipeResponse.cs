using System;

namespace API.Application.Contracts.Response
{
    public class RecipeResponse
    {
        public Guid Id { get; set; }
        public string Title { get; set; }
        public string Summary { get; set; }
        public string Ingredients { get; set; }
        public string Directions { get; set; }
        public string NutritionInfo { get; set; }
    }
}