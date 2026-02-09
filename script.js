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
    const imgSrc = "";

    const existingMeal = basket.find(item => item.name === meal.name);
    if (existingMeal) {
        existingMeal.amount++;
    } else {
        basket.push({
            name: meal.name,
            price: meal.price,
            amount: 1
        });

    }
    renderBasket();
    getBasketAmountImageSource(mealIndex);
}

function getBasketAmountImageSource(mealIndex) {
    const meal = basket[mealIndex]
    let imgSrc = "";
    if (meal.amount === 1) {
        imgSrc = "./assets/icons/deleteIcon.svg";
    }
    else {
        imgSrc = "./assets/icons/-.svg";
    }
    return imgSrc;
}

function increaseBasketMealAmount(mealIndex) {
    const meal = basket[mealIndex];
    meal.amount += 1;
    renderBasket();
}

function decreaseOrDeleteBasketMealAmount(mealIndex) {
    const meal = basket[mealIndex];
    if (meal.amount > 1) {
        meal.amount -= 1;

    } else {
        basket.splice(mealIndex, 1);
    }
    renderBasket();
}

function renderBasket() {
    let basketMeal = document.getElementById('basket');
    basketMeal.innerHTML = "";
    for (let mealIndex = 0; mealIndex < basket.length; mealIndex++) {
        basketMeal.innerHTML += getBasketTemplate(basket[mealIndex], mealIndex);
    }
    renderTotalPrice();

}

function renderTotalPrice() {
    let total = document.getElementById('order-price');
    total.innerHTML="";
    let subTotal = 0;
    let deliveryFee = 4.99;
    let totalPrice
    for (let basketIndex = 0; basketIndex < basket.length; basketIndex++) {
        const oneMeal = basket[basketIndex];
        subTotal += oneMeal.price * oneMeal.amount;
    }
    if (subTotal>50){
        totalPrice = subTotal;
        deliveryFee = 0;
    }else{
        totalPrice = subTotal + deliveryFee
    }
    
    total.innerHTML += getBasketPriceTemplate(subTotal , totalPrice , deliveryFee);
}

function createID(category) {
  return category
    .toLowerCase()                 
    .replace(/[^a-z0-9\s]/g, "") /* delete everything which is not a-z,0-9 and space(/s) everywhere in the whole text /g, replace all that with nothing , "" */   
    .trim()                        
    .replace(/\s+/g, "-");         
}


