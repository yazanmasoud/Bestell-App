function getFoodTemplate(meal) {
    return `<article class="Meal">

                <div class="MealContent">
                    <img class="MealContentImage" src="./assets/images/meals/burgers/allMeatBurger.png"
                        alt="all Meat Burger">
                    <div class="MealContentDescribtion">
                        <h2>${meal.name}</h2>
                        <p>${meal.ingredients}</p>
                    </div>
                    <div class="MealContentPriceAndButton">
                        <span>${meal.price}</span>
                        <button><img src="./buttons/addToBasketButton.svg" alt=""></button>
                    </div>
                </div>
            </article>`
}

function getCategoryTemplate(category) {
    return `    <div class="MealContentTitle">
                    <img src="./assets/icons/hamburgerIcon.svg" alt="hamburger icon">
                    <h2 class="MealContentTitleH2">${category}</h2>
                </div>`
} 