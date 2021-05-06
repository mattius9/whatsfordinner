const Recipe = require('../models/recipe');
const Ingredient = require('../models/ingredient');

module.exports = {
    index,
}

async function index(req,res){
    let ingredients = await Ingredient.find({})
    res.render('ingredients/index',{ title: 'Ingredients', ingredients});
}