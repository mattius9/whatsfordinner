require('./config/database');
const Ingredient = require('./models/ingredient');
const Recipe = require('./models/recipe');
const data = require('./data');

const p1 = Recipe.deleteMany({});
const p2 = Ingredient.deleteMany({});

Promise.all([p1,p2]).then(()=> {
    const c1 = Recipe.create(data.recipes);
    const c2 = Ingredient.create(data.ingredients);
    return Promise.all([c1,c2]);
}).then(function(){
    process.exit();
});