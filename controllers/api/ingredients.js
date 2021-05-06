const Recipe = require('../../models/recipe');
const Ingredient = require('../../models/ingredient')

module.exports = {
    search,
}

async function search(req,res){
    try{
        let result = await Ingredient.find({$or: [{name: { $regex: new RegExp(req.params.q, 'i')}}, {category: { $regex: new RegExp(req.params.q, 'i')}}]});
        res.status(200).json({result});
    }catch(err){
        res.status(500).json(err);
    }
}