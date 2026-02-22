let basket = [];


function init() {
    renderMealsAndCategories();
    renderBasket();
    syncSliderWithBasket();
}


function renderMealsAndCategories() {
    let myFood = document.getElementById('meal-category');
    myFood.innerHTML = "";
    getMealsAndCategoryLoop(myFood);
}


function getMealsAndCategoryLoop(myFood) {
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


function addMealToBasket(mealIndex) {
    const meal = meals[mealIndex];
    const existingMeal = basket.find(item => item.name === meal.name);

    addOrUpdateMealInBasket(existingMeal, meal);
    updateBasketCount();
    renderBasket();

    if (window.innerWidth > 1150) {
        openBasket();
    }

}


function addOrUpdateMealInBasket(existingMeal, meal) {

    if (existingMeal) {
        existingMeal.amount++;
    } else {
        basket.push({
            name: meal.name,
            price: meal.price,
            amount: 1
        });
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


function updateBasketMealAmount(mealIndex, plusOrMinus) {
    const meal = basket[mealIndex];
    if (meal.amount === 1 && plusOrMinus === -1) {
        basket.splice(mealIndex, 1);
    } else {
        meal.amount += plusOrMinus;
    }
    updateBasketCount();
    renderBasket();
}


function deleteMealFromBasket(mealIndex) {
    basket.splice(mealIndex, 1);
    renderBasket();
    updateBasketCount();
}


function renderTotalPrice() {
    const total = document.getElementById('order-price');
    total.innerHTML = "";
    const result = getPrice();
    total.innerHTML += getBasketPriceTemplate(
        result.subTotal,
        result.totalPrice,
        result.deliveryFee
    );
}


function getPrice() {
    let subTotal = 0;
    let deliveryFee = 4.99;
    let totalPrice = 0;

    for (let basketIndex = 0; basketIndex < basket.length; basketIndex++) {
        const oneMeal = basket[basketIndex];
        subTotal += oneMeal.price * oneMeal.amount;
    }

    if (basket.length === 0) {
        deliveryFee = 0;
    } else if (subTotal > 50) {
        deliveryFee = 0;
        totalPrice = subTotal;
    } else {
        totalPrice = subTotal + deliveryFee;
    }

    return {
        subTotal,
        totalPrice,
        deliveryFee
    };
}


function createID(category) {
    return category
        .toLowerCase()
        .replace(/[^a-z0-9\s]/g, "")
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
        document.body.classList.add("no-scroll");
    }
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

    if (window.innerWidth > 1150) {
        basket.classList.toggle('closed');
    } else {
        basket.classList.toggle('open');

        if (basket.classList.contains('open')) {
            document.body.classList.add("no-scroll");
        } else {
            document.body.classList.remove("no-scroll");
        }
    }
    syncSliderWithBasket();
}


function updateBasketCount() {
    let basketCount = document.getElementById('basket-count');
    let basketCountMobile = document.getElementById('basket-count-mobile');

    let totalAmount = 0;

    for (let i = 0; i < basket.length; i++) {
        totalAmount += basket[i].amount;
    }

    basketCount.textContent = totalAmount;
    basketCountMobile.textContent = totalAmount;
}


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
