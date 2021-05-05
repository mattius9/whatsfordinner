let ingredientArray = [];


const ingredientSearchBtn = document.getElementById('ingredient-search-btn');
const ingredientAddBtn = document.getElementById('ingredient-add-btn');
const searchBar = document.getElementById('ingredient-search');
const searchResults = document.getElementById('ingredient-search-results');
const ingredientList = document.getElementById('ingredient-list');

const addRecipeBtn = document.getElementById('add-recipe');
const newRecipeForm = document.getElementById('new-recipe-form');

// Recipe value fields
const recipeName = document.getElementById('recipe-name');
const category = document.getElementById('category');
const prepTime = document.getElementById('prep-time');
const directions = document.getElementById('directions');


const amountEl = document.getElementById('amount');
const unitEl = document.getElementById('unit');



ingredientSearchBtn.addEventListener('click',searchIngredients);

ingredientAddBtn.addEventListener('click',addIngredient);

addRecipeBtn.addEventListener('click', addRecipe);

async function addRecipe(e){
    e.preventDefault();
    try{
        let response = await fetch('/recipes', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name: recipeName.value,
                category: category.value,
                prepTime: prepTime.value,
                directions: directions.value,
                ingredients: ingredientArray
            })
        });
        //await response.json();
        response = await response.json();
        window.location.replace(response.url);
    }catch(err){
        console.log(err);
    }
    
    
}
async function searchIngredients(e){
    e.preventDefault();
    const ingredientQuery = searchBar.value;
    const response = await fetch(`/api/ingredients/${ingredientQuery}`);
    const ingredients = await response.json();
    console.log(ingredients);
    let html = ingredients.result.reduce((html,ing) => html +
    `<option value='${ing._id}' data-name='${ing.name}'>${ing.name} (${ing.category})</option>`, '');
    searchResults.innerHTML = html;
}

async function addIngredient(e){
    e.preventDefault();
    // const searchResults = document.getElementById('ingredient-search-results');
    console.log(searchResults.value);
    let recipeIngredient = {
        ingredient: searchResults.value,
        //name: searchResults.dataname,
        name: searchResults.options[searchResults.selectedIndex].getAttribute('data-name'),
        amount: amountEl.value,
        unit: unitEl.value
    }
    ingredientArray.push(recipeIngredient);
    console.log(ingredientArray);
    let listItem = document.createElement('li');
    listItem.classList.add('list-group-item');
    listItem.innerText = `${recipeIngredient.name} (${recipeIngredient.amount} ${recipeIngredient.unit})`
    ingredientList.append(listItem);
}

//fetch post to recipe create