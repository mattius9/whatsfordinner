const Recipe = require('../../models/recipe');
const Ingredient = require('../../models/ingredient')

module.exports = {
    search,
}

async function search(req,res){
    try{
        let result = await Ingredient.find({$or: [{name: req.params.q}, {category: req.params.q}]});
        res.status(200).json({result});
    }catch(err){
        res.status(500).json(err);
    }
}