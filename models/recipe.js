const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
    name: {type: String, required: true},
    category: { type: String},
    prepTime: {type: Number, required: true},
    ingredients: [{type: Schema.Types.ObjectId, ref: 'Ingredient'}],

}, {
    timestamps: true
})

module.exports = mongoose.model('Recipe', recipeSchema);