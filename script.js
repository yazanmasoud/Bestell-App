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
    renderBasket();
    syncSliderWithBasket();

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

    updateBasketCount();
    renderBasket();

    if (window.innerWidth > 1150) {
        openBasket();
    }
}




function getBasketAmountImageSource(mealIndex) {
    const meal = basket[mealIndex]
    let imgSrc = "";
    if (meal.amount === 1) {
        imgSrc = "./assets/icons/icons8-trash.svg";
    }
    else {
        imgSrc = "./assets/icons/icons8-minus-48.png";
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


function deletMealFromBasket(mealIndex) {
    basket.splice(mealIndex, 1);
    renderBasket();
    updateBasketCount();
}

function renderBasket() {
    let basketMeal = document.getElementById('basket');
    basketMeal.innerHTML = "";

    if (basket.length === 0) {
        basketMeal.innerHTML = getBasketEmptyTemplate();
    } else {
        for (let mealIndex = 0; mealIndex < basket.length; mealIndex++) {
            basketMeal.innerHTML += getBasketTemplate(basket[mealIndex], mealIndex);
        }
    }
    renderTotalPrice();
}


function renderTotalPrice() {
    let total = document.getElementById('order-price');
    total.innerHTML = "";
    let subTotal = 0;
    let deliveryFee = 4.99;
    let totalPrice = 0;
    for (let basketIndex = 0; basketIndex < basket.length; basketIndex++) {
        const oneMeal = basket[basketIndex];
        subTotal += oneMeal.price * oneMeal.amount;
    }
    if (basket.length === 0) {
        deliveryFee = 0;
    }
    else if (subTotal > 50) {
        totalPrice = subTotal;
        deliveryFee = 0;
    } else {
        totalPrice = subTotal + deliveryFee
    }
    total.innerHTML += getBasketPriceTemplate(subTotal, totalPrice, deliveryFee);
}


function createID(category) {
    return category
        .toLowerCase()
        .replace(/[^a-z0-9\s]/g, "") /* delete everything which is not a-z,0-9 and space(/s) everywhere in the whole text /g, replace all that with nothing , "" */
        .trim()
        .replace(/\s+/g, "-");
}


function syncSliderWithBasket() {
    const basket = document.getElementById('basket-site');

    if (window.innerWidth > 1150) {
        basket.classList.remove('open');

        if (!basket.classList.contains('closed')) {
            handleSliderClass("add");
        } else {
            handleSliderClass("remove");
        }

    } else {
        basket.classList.remove('closed');
        handleSliderClass("remove");
    }
}


function openBasket() {
    const basket = document.getElementById('basket-site');

    if (window.innerWidth > 1150) {
        basket.classList.remove('closed');
    } else {
        basket.classList.add('open');
    }

    document.body.classList.add("no-scroll");

    syncSliderWithBasket();
}



function closeBasket() {
    const basket = document.getElementById('basket-site');

    if (window.innerWidth > 1150) {
        basket.classList.add('closed');
    } else {
        basket.classList.remove('open');
    }

    document.body.classList.remove("no-scroll");

    syncSliderWithBasket();
}



function toggleBasket() {
    const basket = document.getElementById('basket-site');

    let isOpen;

    if (window.innerWidth > 1150) {
        basket.classList.toggle('closed');
        isOpen = !basket.classList.contains('closed');
    } else {
        basket.classList.toggle('open');
        isOpen = basket.classList.contains('open');
    }

    if (isOpen) {
        document.body.classList.add("no-scroll");
    } else {
        document.body.classList.remove("no-scroll");
    }

    syncSliderWithBasket();
}



function updateBasketCount() {
    let basketCount = document.getElementById('basket-count');
    let basketCountMobile = document.getElementById('basket-count-mobile');
    basketCount.textContent = basket.length;
    basketCountMobile.textContent = basket.length;
}

/* these functions make the footer content fit when the basket is open and
get it back bigger when basket is closed  */
function handleSliderClass(action) {
    const barSlider = document.getElementById('bar-slider-inner');
    barSlider.classList[action]('bar-slider-inner-Responsive');
}


function openConfirmationDialog() {
    const dialog = document.getElementById('confirmation-dialog');

    if (basket.length >= 1) {
        dialog.showModal();
        setTimeout(() => { dialog.close(); }, 4000);
        basket = [];
        renderBasket();
        updateBasketCount();
    }

}

window.addEventListener("resize", syncSliderWithBasket);
