var express = require('express');
var fs = require('fs');
var exp = express();
var cors=require('cors');
var parser = require('body-parser');
var recipes = fs.readFileSync("../../assets/recipes.json");
var ingredients = fs.readFileSync("../../assets/ingredients.json");
var recipeData = JSON.parse(recipes);
var ingredientData = JSON.parse(ingredients);

exp.use(parser.json());

exp.route('/addRecipe',cors()).post((req,res)=>
{
    var newRecipe = req.body;
    let data = {
        "name":newRecipe.name,
        "description":newRecipe.description,
        "imageUrl":newRecipe.imageUrl
    }

    recipeData.push(data);
    fs.writeFileSync('../../assets/recipes.json',JSON.stringify(recipeData))
});

exp.route('/delete').post((req, res) => {
    var deleteData = req.body.name;
    console.log(deleteData)
    for (var j in recipeData) {
        if (deleteData == recipeData[j].name) {
            recipeData.splice(j, 1);
        }
    }

    fs.writeFileSync('../../assets/recipes.json', JSON.stringify(recipeData));
});

exp.route('/addIngredient',cors()).post((req,res)=>
{
    var newIngredient = req.body;
    let data = {
        "name":newIngredient.name,
        "amount":newIngredient.amount
    }

    ingredientData.push(data);
    fs.writeFileSync('../../assets/ingredients.json',JSON.stringify(ingredientData))
});
exp.listen(4210);