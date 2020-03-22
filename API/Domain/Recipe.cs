
using System;

namespace API.Domain
{
    public class Recipe
    {
        public Guid Id {get; set;}
        public string Title { get; set; }

        public string Summary { get; set; }

        public string Ingredients { get; set; }

        public string Directions {get; set;}

        public string NutritionInfo  { get; set; }
    }
}