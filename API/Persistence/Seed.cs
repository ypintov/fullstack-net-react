using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Domain;
using Microsoft.AspNetCore.Identity;

namespace API.Persistence
{
    public class Seed
    {
        public static async Task SeedData(DataContext context, UserManager<AppUser> userManager)
        {

            if (!userManager.Users.Any())
            {
                var users = new List<AppUser>()
                {
                    new AppUser{
                        DisplayName = "Yojan Pinto",
                        UserName = "ypinto",
                        Email = "ypinto@test.com"
                    },
                    new AppUser{
                        DisplayName = "Jane Doe",
                        UserName = "jane.doe",
                        Email = "jdoe@test.com"
                    },
                    new AppUser{
                        DisplayName = "John DOe",
                        UserName = "jhon.doe",
                        Email = "jhon@test.com"
                    }
                };

                foreach (var user in users)
                {
                    await userManager.CreateAsync(user, "P@ssw0rd");
                }

            };


            if (!context.Recipes.Any())
            {
                var recipes = new List<Recipe>{
                         new Recipe
                            {
                                Title = "Yakisoba Chicken",
                                Summary = "Japanese buckwheat flour noodles with chicken at their best! Noodles can be found in an Asian foods market.",
                                Ingredients = "1/2 teaspoon sesame oil, 1 tablespoon canola oil, 2 tablespoons chile paste, 2 cloves garlic, chopped, 4 skinless, boneless chicken breast halves - cut into 1 inch cubes, 1/2 cup soy sauce, 1 onion, sliced lengthwise into eighths, 1/2 medium head cabbage, coarsely chopped, 2 carrots, coarsely chopped, 1/2 pound soba noodles, cooked and drained",
                                Directions = "In a large skillet combine sesame oil, canola oil and chili paste; stir-fry 30 seconds. Add garlic and stir fry an additional 30 seconds. Add chicken and 1/4 cup of the soy sauce and stir fry until chicken is no longer pink, about 5 minutes. Remove mixture from pan, set aside, and keep warm. Then In the emptied pan combine the onion, cabbage, and carrots. Stir-fry until cabbage begins to wilt, 2 to 3 minutes. Stir in the remaining soy sauce, cooked noodles, and the chicken mixture to pan and mix to blend. Serve and enjoy!",
                                NutritionInfo = "Per Serving: 295 calories; 4.8 g total fat; 46 mg cholesterol; 1621 mg sodium. 40.7 g carbohydrates; 26.3 g protein"
                            },
                            new Recipe
                            {
                                Title = "Blueberry Nut Oat Bran Muffins",
                                Summary = "This is a delicious and lighter version of a type of oat bran muffin. You could vary the fruit - blueberries, strawberries, canned peaches, etc. They are incredibly delicious served with fresh strawberries. Ingredients",
                                Ingredients = "1 1/2 cups oat bran,1 1/2 cups all-purpose flour,1/2 cup packed brown sugar,2 teaspoons baking soda,2 teaspoons baking powder,1 teaspoon ground cinnamon,1/2 teaspoon salt,1 1/8 cups applesauce,1/2 cup egg substitute,2 tablespoons canola oil,1 teaspoon vanilla extract,1 1/2 cups blueberries,1/4 cup chopped pecans,1/2 cup low fat granola",
                                Directions  = "Preheat oven to 400 degrees F (200 degrees C). Line a 12 cup muffin pan with paper muffin liners, and spray liners with cooking spray. In a large bowl, mix the oat bran, flour, brown sugar, baking soda, baking powder, cinnamon, and salt. In a separate bowl, blend the applesauce, egg substitute, canola oil, and vanilla extract. Thoroughly mix the applesauce mixture into the flour mixture. Fold in the blueberries and pecans. Spoon the batter into the prepared muffin cups. Sprinkle batter with granola, and press granola lightly to make it stick. Bake 18 minutes in the preheated oven, or until a toothpick inserted into a muffin comes out clean. Cool on a wire rack.",
                                NutritionInfo = "Per Serving: 203 calories; 5.6 g fat; 37.8 g carbohydrates; 5.7 g protein; < 1 mg cholesterol; 397 mg sodium."
                            },
                              new Recipe
                            {
                                Title = "Wisconsin Five-Cheese Bake",
                                Summary = "A savory twist on traditional macaroni and cheese made with multiple cheeses for layers of cheese flavor in every bite.",
                                Ingredients = "1 (16 ounce) package elbow macaroni,1 cup shredded mozzarella cheese,1 cup shredded Swiss cheese,1 cup grated Parmesan cheese,1 cup shredded provolone cheese,1/2 cup ricotta cheese,1/2 cup sour cream,1/2 cup heavy cream,1 tablespoon chopped fresh parsley,1/2 teaspoon dried Italian seasoning,1/2 teaspoon garlic salt",
                                Directions = "Preheat the oven to 400 degrees F (200 degrees C). Lightly grease a 9x13 inch baking dish. Bring a large pot of lightly salted water to a boil. Add macaroni, and cook until tender, 6 to 8 minutes. Drain.",
                                NutritionInfo = "Per Serving: 328 calories; 15.4 g fat; 30.8 g carbohydrates; 16 g protein; 46 mg cholesterol; 359 mg sodium."
                            },
                            new Recipe
                            {
                                Title = "Arroz Rojo (Mexican Red Rice)",
                                Summary = "Authentic Mexican red rice. Easy to make! Use a different chile if you want milder or hotter rice.",
                                Ingredients = "2 Roma (plum tomatoes), cored,2 tablespoons vegetable oil,1 cup minced onion,2 cloves garlic, minced,1 cup uncooked long-grain white rice,1 3/4 cups low-sodium chicken broth,1/4 cup canned tomato sauce,1 jalapeno pepper, chopped,2 sprigs fresh cilantro,salt to taste",
                                Directions = "Grate tomatoes into a bowl using a box grater; discard tomato skins. Heat vegetable oil in a heavy skillet over medium-high heat and cook onion until translucent, stirring often, about 5 minutes. Stir garlic into onion and cook until fragrant, about 1 minute.",
                                NutritionInfo = "Per Serving: 213 calories; 6 g fat; 35.1 g carbohydrates; 4.6 g protein; 1 mg cholesterol; 109 mg sodium."
                            } , new Recipe
                            {
                                Title = "Reuben Sandwich",
                                Summary = "I make this Reuben for my husband...hope you will enjoy it. Serve with coleslaw or potato salad.",
                                Ingredients = "8 slices rye bread,3/4 cup thousand island dressing,1 (16 ounce) can sauerkraut, drained8 slices Swiss cheese,8 slices pastrami,1/4 cup margarine, softened",
                                Directions = "Spread each slice of bread with thousand island dressing. Top 4 of the bread slices with sauerkraut, cheese and pastrami. Place remaining bread slices on sandwich. Spread margarine on the outsides of each sandwich. ",
                                NutritionInfo = "Per Serving: 793 calories; 51.7 g fat; 50.2 g carbohydrates; 34.2 g protein; 107 mg cholesterol; 2447 mg sodium."
                            }

                };

                await context.Recipes.AddRangeAsync(recipes);
                await context.SaveChangesAsync();
            }
        }
    }
}