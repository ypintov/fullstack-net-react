using API.Application.Contracts.Request;
using FluentValidation;

namespace API.Application.Validators
{
    public class CreateRecipeValidator : AbstractValidator<CreateRecipeRequest>
    {
        public CreateRecipeValidator()
        {
            RuleFor(x => x.Title).NotEmpty();
            RuleFor(x => x.Summary).NotEmpty();
            RuleFor(x => x.Ingredients).NotEmpty();
            RuleFor(x => x.Directions).NotEmpty();
            RuleFor(x => x.NutritionInfo).NotEmpty();
        }
    }

    public class UpdateRecipeValidator : AbstractValidator<UpdateRecipeRequest>
    {
        public UpdateRecipeValidator()
        {
            RuleFor(x => x.Title).NotEmpty();
            RuleFor(x => x.Summary).NotEmpty();
            RuleFor(x => x.Ingredients).NotEmpty();
            RuleFor(x => x.Directions).NotEmpty();
            RuleFor(x => x.NutritionInfo).NotEmpty();
        }
    }
}