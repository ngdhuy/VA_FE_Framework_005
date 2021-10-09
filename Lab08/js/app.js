/**
 * * Using ES6 to progress
 */

//? Query Object from HTML
const recipeForm = document.querySelector('#recipe-form');
const recipeContainer = document.querySelector('#recipe-container');

let listItems = [];

//? BUS functions
const handlerFormSubmit = (e) => {
  e.preventDefault();

  const name = recipeForm.name.value;
  const method = recipeForm.method.value;
  const note = recipeForm.note.value;

  const newRecipe = { name, method, note, id: Date.now() };
  listItems.push(newRecipe);
  
  e.target.reset();
  recipeForm.name.focus();
  recipeContainer.dispatchEvent(new CustomEvent('refreshRecipes'));
}

const handlerRefreshRecipes = () => {
  const tempRecipeUI = listItems.map(recipe => `
    <div class="col">
      <div class="card mb-4 rounded-3 shadow-sm border-success">
        <div class="card-header py-3 text-white bg-success border-success>
          <h4 class="my-0">${recipe.name}</h4>
        </div>
        <div class="card-body">
          <ul class="text-start">
            <li><strong>Method: </strong>${recipe.method}</li>
            ${!recipe.note.length ? "" : `<li><strong>Note: </strong>${recipe.note}</li>`}
          </ul>
        </div>
      </div>
    </div>
  `).join('');
  recipeContainer.innerHTML = tempRecipeUI;
}


//? Event handlers
recipeForm.addEventListener('submit', handlerFormSubmit);
recipeContainer.addEventListener('refreshRecipes', handlerRefreshRecipes);