const frm_recipes = document.querySelector('#frm-recipes');
const list_recipes = document.querySelector('.list-recipes')


let list_items = [];


const handle_form_submit = (e) => {
  e.preventDefault();
  
  const recipe_name = document.querySelector('#txt-name').value;
  const recipe_method = document.querySelector('#list-method').value;
  const recipe_notes = document.querySelector('#txt-note').value;

  const new_recipes = { recipe_name, recipe_method, recipe_notes, id: Date.now()};
  list_items.push(new_recipes);

  e.target.reset();

  document.querySelector('#txt-name').focus();
  list_recipes.dispatchEvent(new CustomEvent('refresh_recipes'));
}

const handle_refresh_recipes = () => {
  const list_recipes_ui = list_items.map(recipe => `
    <div class='recipes-item'>
      <h3>${recipe.recipe_name}</h3>
      <ul>
        <li><strong>Method:</strong> ${recipe.recipe_method}</li>
        <li><strong>Note:</strong>${!recipe.recipe_notes ? '<em>Nothing</em>' : recipe.recipe_notes} </li>
      
      </ul>
      <button type="button" class="btnDelete" onclick="handle_delete_recipes(${recipe.id})">DONE</button>
    </div>
    `).join('');

    list_items.innerHTML = list_recipes_ui;
}

const handle_delete_recipes = (id) => {
  let recipe_id = list_items.findIndex(recipe => recipe.id == id);
  list_items.splice(recipe_id, 1);
  list_recipes.dispatchEvent(new CustomEvent('handle_refresh_recipes'));
}

frm_recipes.addEventListener('submit', handle_form_submit);
list_recipes.addEventListener('refresh_recipes', handle_refresh_recipes);