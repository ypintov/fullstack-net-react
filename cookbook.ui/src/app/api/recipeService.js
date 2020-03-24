import http from "./http";

const apiEndpoint = "/recipes";

const RecipeService = {
    list: () => http.request.get(apiEndpoint),
    details: async (id) => await http.request.get(`${apiEndpoint}/${id}`),
    create: (recipe) => http.request.post(apiEndpoint, recipe),
    update: (recipe) => http.request.put(`${apiEndpoint}/${recipe.id}`, recipe),
    delete: (id) => http.request.delete(`${apiEndpoint}/${id}`)
}

export default RecipeService;