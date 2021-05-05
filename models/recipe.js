const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeIngredientSchema = new Schema({
    amount: {type: Number},
    unit: {type: String},
    ingredient: {type: Schema.Types.ObjectId, ref: 'Ingredient'}

})
const recipeSchema = new Schema({
    name: {type: String },
    category: { type: String},
    prepTime: {type: Number },
    ingredients: [recipeIngredientSchema],
    directions: { type: String}

}, {
    timestamps: true
})

module.exports = mongoose.model('Recipe', recipeSchema);