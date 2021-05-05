const Recipe = require('../models/recipe');

module.exports = {
    index,
    new: newForm,
    create,
    editForm,
    update,
    search,
}

async function index(req,res){
    let recipes = await Recipe.find({}).populate('ingredients.ingredient').exec();
    res.render('recipes/index',{ title: 'Recipes', recipes });
}

async function newForm(req,res){
    //const newRecipe = new Recipe();
    //await newRecipe.save();
    res.render('recipes/new', {title: 'Add New Recipe'/*, recipe: newRecipe*/})
}

async function create(req,res){
    try {
        console.log(`This is the body ${req.body}`);
        console.log(req.body);
        const newRecipe = await Recipe.create(req.body);
        await newRecipe.save();
        //res.redirect('/recipes');
        res.status(200).json({url: '/recipes'});
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

async function search(req,res){
    try{
        const ingredient = await Ingredient.find({name: req.body.ingredientQuery});
        const recipes = await Recipe.find({"ingredients.ingredient" : ingredient});
        res.render('recipes/index',{ title: 'Recipes Found', recipes });

    } catch (err){
        res.status(500).send(err);
    }
}