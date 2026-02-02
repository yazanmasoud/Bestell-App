function getFoodTemplate(meal) {
    return `<article class="Content Meal">
                <div class="MealContent">
                    <img class="MealContentImage" src="${meal.image}"
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
                    <div class="Content MealContentTitleInner">
                    <img class="CategoryIcon" src="${getCategoryIcon(category)}" alt="category icon">
                    <h2 class="MealContentTitleH2">${category}</h2>
                    </div>
                </div>`
} 

