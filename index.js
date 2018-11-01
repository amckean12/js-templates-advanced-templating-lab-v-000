function init() {
  //put any page initialization/handlebars initialization here
  let recipeForm = document.getElementById("recipe-form-template").innerHTML;
  let recipeFormFn = Handlebars.compile(recipeForm);
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

function handleSubmit(){
  let recipe = {
    name: ,
    description: ,
    ingredients: [
    ]
  }
}
