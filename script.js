function init() {
    let myFood = document.getElementById('site-main');
    myFood.innerHTML = "";

    for (let index = 0; index < meals.length; index++) {
        const meal = meals[index];
            myFood.innerHTML += getFoodTemplate(meal);
    }
    
}