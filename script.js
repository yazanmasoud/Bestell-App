let basket = [];
function init() {
    let myFood = document.getElementById('meal-category');
    myFood.innerHTML = "";

    let currentCategory = "";

    for (let index = 0; index < meals.length; index++) {
        const meal = meals[index];

        if (meal.category !== currentCategory) {
            myFood.innerHTML += getCategoryTemplate(meal.category)
            myFood.innerHTML += getFoodTemplate(meal, index);
            currentCategory = meal.category;
        }
        else {
            myFood.innerHTML += getFoodTemplate(meal, index);
        }
    }
}


/*  also erstmal in dem init()
 wenn eine neue category gefunden wird,
  wir zum erstellen dieser category 
  getCategoryTemplate(category) aufgerufen 
  und da drinne beim img erstellen wird die methode
   {getCategoryIcon(category) aufgerufen zum erstellen 
   eines bildes aber wir wissen schon da die category
    jetzt Burger & Sandwiches heisst also die methode
    wird mit dieser parameter aufgerufen erstmal und da
    wird es mit einem if geprüft und wenn das stimmt gibt
    sie etwas zurück der zurück zur template
    kommt und das dort funktioniert */
function getCategoryIcon(category) {

    if (category == "Burger & Sandwiches") {
        return "./assets/icons/hamburgerIcon.svg";
    }
    else if (category == "Pizza") {
        return "./assets/icons/Pizza.svg";

    }
    else {
        return "./assets/icons/Salad.svg";
    }
}

function addMealToBasket(mealIndex) {
    const meal = meals[mealIndex];
    basket.push(meal);
    renderBasket();
}

function renderBasket() {
    let basketMeal = document.getElementById('basket');
    basketMeal.innerHTML = "";
    for (let mealIndex = 0; mealIndex < basket.length; mealIndex++) {
        basketMeal.innerHTML += getBasketTemplate(basket[mealIndex]);
    }
}



