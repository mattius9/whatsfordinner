const Recipe = require('../models/recipe');
const Ingredient = require('../models/ingredient');

module.exports = {
   addToRecipe,
}

async function addToRecipe(req,res){
    // Need to add conditional to see which page it's on
    try{
        let recipe = await Recipe.findById(req.params.id).populate('ingredients.ingredient').exec();
        //let ingredient = await Ingredient.findById(req.body.ingredientId);
    
        recipe.ingredients.push({ingredient: req.body.ingredientId, amount: req.body.amount, unit: req.body.unit});
        await recipe.save();
        console.log(`Current Pages URL: ${req.url}`);
        res.redirect(`/recipes/${req.params.id}/edit`); // must redirect to previous page

        
    } catch(err){
        res.status(500).json(err);

    }

}