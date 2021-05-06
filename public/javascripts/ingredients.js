// Cached elements
const ingredientsTable = document.getElementById('ingredients-table');

// Buttons
const newIngredientBtn = document.getElementById('new-ingredient');

// Ingredient value fields

const ingredientCategory = document.getElementById('ingredient-category');
const ingredientName = document.getElementById('ingredient-name');

/* Event Listeners */
newIngredientBtn.addEventListener('click', newIngredient);

async function newIngredient(e){
    console.log('click');
    try{
        e.preventDefault();
        let response = await fetch('/api/ingredients', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name: ingredientName.value,
                category: ingredientCategory.value,
            })
        });
        response = await response.json();
        let html = `<td>${response.newIngredient.name}</td>
                    <td>${response.newIngredient.category}</td>`;
        let tableRow = document.createElement('tr');
        tableRow.innerHTML = html;
        ingredientsTable.prepend(tableRow);
    }catch(err){
        console.log(err);
    }
   
}