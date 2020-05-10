import request from "./http";

const apiEndpoint = "/recipes";

const RecipeService = {
    list: () => request.get(apiEndpoint),
    details: async (id) => await request.get(`${apiEndpoint}/${id}`),
    create: (recipe) => request.post(apiEndpoint, recipe),
    update: (recipe) => request.put(`${apiEndpoint}/${recipe.id}`, recipe),
    delete: (id) => request.delete(`${apiEndpoint}/${id}`)
}

export default RecipeService;