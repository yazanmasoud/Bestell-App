function init() {
    let myFood = document.getElementById('meal-category');
    myFood.innerHTML = "";

    let currentCategory = "";

    for (let index = 0; index < meals.length; index++) {
        const meal = meals[index];

        if (meal.category !== currentCategory) {
            myFood.innerHTML += getCategoryTemplate(meal.category)
            currentCategory = meal.category;
        }
            myFood.innerHTML += getFoodTemplate(meal);
        
    }

}



