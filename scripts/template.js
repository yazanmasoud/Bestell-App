function getFoodTemplate(meal , mealIndex) {
    return `<article class="content meal">
                <div class="meal-content">
                    <img class="meal-content-image" src="${meal.image}"
                        alt="all Meat Burger">
                    <div class="meal-content-describtion">
                        <h2>${meal.name}</h2>
                        <p>${meal.ingredients}</p>
                    </div>
                    <div class="meal-content-price-and-button">
                        <span>${meal.price}</span>
                        <button onclick="addMealToBasket(${mealIndex})"><img src="./buttons/addToBasketButton.svg" alt=""></button>
                    </div>
                </div>
            </article>`
}

function getCategoryTemplate(category) {
    return `    <div class="meal-content-title">
                    <div class="content meal-content-title-inner">
                    <img class="category-icon" src="${getCategoryIcon(category)}" alt="category icon">
                    <h2 class="meal-content-title-h2">${category}</h2>
                    </div>
                </div>`
}

function getBasketTemplate(meal) {
    return `    
                    <div class="basket-meal">
                        <div class="basket-meal-name">
                            <h3>${meal.name}</h3>
                            <div class="basket-icons-block">
                               <button><img class="delet-icon" src="./assets/icons/deleteIcon.svg" alt="Delete Icon"></button>
                                <span>1</span>
                                <button><img class="plus-icon" src="./assets/icons/+.svg" alt="Plus Icon"></button>  
                            </div>
                        </div>
                        <span>${meal.price} $</span>
                    </div>
                </section>`

}

