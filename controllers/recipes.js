const Recipe = require('../models/recipe');
const Ingredient = require('../models/ingredient');

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
    res.render('recipes/new', {title: 'Add New Recipe'})
}

async function create(req,res){
    try {
        const newRecipe = await Recipe.create(req.body);
        await newRecipe.save();
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
        const recipe = await Recipe.findOneAndUpdate({_id: req.params.id},
            {name: req.body.name,
            category: req.body.category,
            prepTime: req.body.prepTime,
            directions: req.body.directions,
            $push: {ingredients: {$each: req.body.ingredients}}
        },
            
        );
        await recipe.save();
        console.log(recipe);
        res.status(200).json({url: '/recipes'})
    } catch (err){
        res.status(500).send(err);

    }
}

async function search(req,res){
    try{
        console.log(req.query.q);
        const ingredient = await Ingredient.find({name: req.query.q});
        const recipes = await Recipe.find({"ingredients.ingredient" : ingredient});
        res.render('recipes/index',{ title: 'Recipes Found', recipes });

    } catch (err){
        res.status(500).send(err);
    }
}