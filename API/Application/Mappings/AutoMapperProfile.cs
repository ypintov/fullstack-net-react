using API.Application.Contracts.Request;
using API.Application.Contracts.Response;
using API.Domain;
using AutoMapper;

namespace API.Application.Mappings
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<Recipe, RecipeResponse>();
            CreateMap<CreateRecipeRequest, Recipe>();
            CreateMap<UpdateRecipeRequest, Recipe>();
        }
    }
}