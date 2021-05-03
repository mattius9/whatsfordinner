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

function newForm(req,res){
    res.render('recipes/new', {title: 'Add New Recipe'})
}

async function create(req,res){
    try {
        const newRecipe = new Recipe(req.body);
        let saveRecipe = await newRecipe.save();
        console.log(saveRecipe);
        res.redirect('/recipes');
    } catch (err){
        console.log('ERROR' + err);
        res.status(500).send(err);
    }
}

async function editForm(req,res){
    console.log(req.params.id);
    try{
        const editRecipe = await Recipe.findById(req.params.id);
        res.render('recipes/update', {title: "Update Recipe", recipe: editRecipe});
    } catch (err){
        res.status(500).send(err);
    }
    
    
}

async function update(req,res){
    try{
        console.log(req.params.id);
        console.log(req.body);
        const recipe = await Recipe.findByIdAndUpdate(req.params.id,req.body);
        res.redirect('/recipes');
    } catch (err){
        res.status(500).send(err);

    }
}