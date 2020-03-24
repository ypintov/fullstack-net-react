namespace API.Application.Contracts.Request
{
    public class CreateRecipeRequest
    {
        public string Title { get; set; }

        public string Summary { get; set; }

        public string Ingredients { get; set; }

        public string Directions { get; set; }

        public string NutritionInfo { get; set; }
    }
}