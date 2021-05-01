const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ingredientSchema = new Schema({
    name: {type: String, required: true},
    category: { type: String},
    quantity: {type: Number},
    unit: { type: String}

}, {
    timestamps: true
})

module.exports = mongoose.model('Ingredient', ingredientSchema);string