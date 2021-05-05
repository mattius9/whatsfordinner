const Recipe = require('../models/recipe');

module.exports = {
    index,
    new: newForm,
    create,
    editForm,
    update,
}

async function index(req,res){
    let recipes = await Recipe.find({});
    res.render('recipes/index',{ title: 'Recipes', recipes });
}

async function newForm(req,res){
    const newRecipe = new Recipe();
    await newRecipe.save();
    res.render('recipes/new', {title: 'Add New Recipe', recipe: newRecipe})
}

async function create(req,res){
    try {
        const newRecipe = new Recipe(req.body);
        await newRecipe.save();
        res.redirect('/recipes');
    } catch (err){
        console.log('ERROR' + err);
        res.status(500).send(err);
    }
}

async function editForm(req,res){
    try{
        const editRecipe = await Recipe.findById(req.params.id).populate('ingredients.ingredient').exec();
        res.render('recipes/update', {title: "Update Recipe", recipe: editRecipe});
    } catch (err){
        res.status(500).send(err);
    }
    
    
}

async function update(req,res){
    try{
        const recipe = await Recipe.findByIdAndUpdate(req.params.id,req.body);
        res.redirect('/recipes');
    } catch (err){
        res.status(500).send(err);

    }
}