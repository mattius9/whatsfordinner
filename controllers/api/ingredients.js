const Recipe = require('../../models/recipe');
const Ingredient = require('../../models/ingredient')

module.exports = {
    search,
    // addToRecipe,
}

async function search(req,res){
    try{
        let result = await Ingredient.find({$or: [{name: req.params.q}, {category: req.params.q}]});
        res.status(200).json({result});
    }catch(err){
        res.status(500).json(err);
    }
}

// async function addToRecipe(req,res){
//     try{
//         let recipe = await Recipe.findById(req.params.id);
//         recipe.ingredients.push({ingredient: req.body.ingredientId, amount: req.body.amount, unit: req.body.unit});
//         res.status(200).json(recipe);
        
//     } catch(err){
//         res.status(500).json(err);

//     }

//}