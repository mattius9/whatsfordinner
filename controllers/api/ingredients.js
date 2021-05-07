const Recipe = require('../../models/recipe');
const Ingredient = require('../../models/ingredient')

module.exports = {
    search,
    index,
    add
}

async function search(req,res){
    try{
        let result = await Ingredient.find({$or: [{name: new RegExp(req.params.q, 'i')}, {category: new RegExp(req.params.q, 'i')}]});
        res.status(200).json({result});
    }catch(err){
        res.status(500).json(err);
    }
}

async function index(req,res){
    try{
        let results = await Ingredient.find({});
        res.status(200).json({results});
    }catch(err){
        res.status(500).json(err);
    }
}

async function add(req,res){
    try{
        const newIngredient = await Ingredient.create(req.body);
        await newIngredient.save();
        res.status(200).json({newIngredient});
    }catch(err){
        res.status(500).json(err);
    }
}