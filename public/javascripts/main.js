
const ingredientSearchBtn = document.getElementById('ingredient-search-btn');
const ingredientAddBtn = document.getElementById('ingredient-add-btn');
const searchBar = document.getElementById('ingredient-search');
const searchResults = document.getElementById('ingredient-search-results');
const ingredientsList = document.getElementById('ingredient-list');



ingredientSearchBtn.addEventListener('click',searchIngredients);

//ingredientAddBtn.addEventListener('click',addIngredient);


async function searchIngredients(e){
    e.preventDefault();
    const ingredientQuery = searchBar.value;
    const response = await fetch(`/api/ingredients/${ingredientQuery}`);
    const ingredients = await response.json();
    console.log(ingredients);
    let html = ingredients.result.reduce((html,ing) => html +
    `<option value='${ing._id}'>${ing.name} (${ing.category})</option>`, '');
    searchResults.innerHTML = html;
}

async function addIngredient(e){
    e.preventDefault();
    
}