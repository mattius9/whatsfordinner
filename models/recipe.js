const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
    name: {type: String},
    category: { type: String},
    prepTime: {type: Number},
    ingredients: {},
    
})