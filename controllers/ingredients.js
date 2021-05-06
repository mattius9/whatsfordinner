const Recipe = require('../models/recipe');
const Ingredient = require('../models/ingredient');

module.exports = {
   addToRecipe,
}

async function addToRecipe(req,res){
    try{
        let recipe = await Recipe.findById(req.params.id).populate('ingredients.ingredient').exec();
    
        recipe.ingredients.push({ingredient: req.body.ingredientId, amount: req.body.amount, unit: req.body.unit});
        await recipe.save();
        res.redirect(`/recipes/${req.params.id}/edit`);

        
    } catch(err){
        res.status(500).json(err);

    }

}