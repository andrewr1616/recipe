let recipeCount = 1;

document.getElementById("addRecipeBtn").addEventListener("click", function () {
  recipeCount++;
  const newRecipeInput = document.createElement("div");
  newRecipeInput.classList.add("recipeInput");
  newRecipeInput.innerHTML = `
        <h2>Recipe ${recipeCount}</h2>
        <form class="recipeForm" action="display.html" method="post">
            <label for="recipeName">Recipe Name:</label>
            <input type="text" name="recipeName" required>
            <label for="ingredients">Ingredients:</label>
            <textarea name="ingredients" rows="4" required></textarea>
            <label for="instructions">Instructions:</label>
            <textarea name="instructions" rows="4" required></textarea>
        </form>
    `;
  document.getElementById("recipeInputs").appendChild(newRecipeInput);
});

document.getElementById("submitAllBtn").addEventListener("click", function () {
  const allRecipeForms = document.querySelectorAll(".recipeForm");
  const formDataArray = [];
  allRecipeForms.forEach((form) => {
    const formData = new FormData(form);
    formDataArray.push({
      recipeName: formData.get("recipeName"),
      ingredients: formData.get("ingredients"),
      instructions: formData.get("instructions"),
    });
  });
  localStorage.setItem("allRecipes", JSON.stringify(formDataArray));
  window.location.href = "display.html";
});
