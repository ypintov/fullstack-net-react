import http from "./http";

const apiEndpoint = "/recipes";

const RecipeService = {
    list: () => http.request.get(apiEndpoint),
    details: async (id) => await http.request.get(`${apiEndpoint}/${id}`),
}

export default RecipeService;