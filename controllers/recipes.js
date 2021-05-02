const Recipe = require('../models/recipe');

module.exports = {
    index,
    new: newForm
}

async function index(req,res){
    let recipes = await Recipe.find({});
    res.render('recipes/index',{ title: 'Recipes', recipes });
}

function newForm(req,res){
    res.render('recipes/new', {title: 'Add New Recipe'})
}