/* Main Site (meals) */
function getFoodTemplate(meal, mealIndex) {
    return `<article class="meal content">
                <div class="meal-content">
                    <img class="meal-content-image" src="${meal.image}"
                        alt="all Meat Burger">
                    <div class="meal-content-describtion">
                        <h2 class="meal-name-font">${meal.name}</h2>
                        <p>${meal.ingredients}</p>
                    </div>
                    <div class="meal-content-price-and-button">
                        <span><strong>${(meal.price).toFixed(2)}€</strong></span>
                        <button class="add-meal-button" onclick="addMealToBasket(${mealIndex})">Add To Basket</button>
                    </div>
                </div>
            </article>`
}

/* Category of meals */
function getCategoryTemplate(category) {
    return `    <div id="${createID(category)}" class="meal-content-title">
                    <div class="content meal-content-title-inner">
                        <img class="category-icon" src="${getCategoryIcon(category)}" alt="category icon">
                        <h2 class="meal-content-title-h2">${category}</h2>
                    </div>
                </div>
            `
}

/* basket */
function getBasketTemplate(meal, mealIndex) {
    return `
                    <div class="basket-meal">
                        <div class="basket-meal-name">
                                <h3 class="basket-meal-h3">${meal.name}</h3>
                            <div class="basket-icons-block">
                                <button onclick="decreaseOrDeleteBasketMealAmount(${mealIndex})"><img class="plus-minus-delet-icon" src="${getBasketAmountImageSource(mealIndex)}" alt="Delete Icon"></button>
                                <span>${meal.amount}</span>
                                <button onclick="increaseBasketMealAmount(${mealIndex})"><img class="plus-minus-delet-icon" src="./assets/icons/icons8-plus.svg" alt="Plus Icon"></button>  
                            </div>
                        </div>
                        <div class="basket-meal-name-price">
                            <button class="delete-meal-from-basket-button" onclick="deletMealFromBasket(${mealIndex})"><img class="plus-minus-delet-icon" src="./assets/icons/icons8-trash.svg" alt=""></button>
                            <span>${(meal.price * meal.amount).toFixed(2)}€</span>
                        </div>
                    </div>`
}


function getBasketPriceTemplate(subTotal, totalPrice, deliveryFee) {
    return `
            <table class="basket-price-table">
              <tr>
                    <td>Subtotal</td>
                    <td>${subTotal.toFixed(2)}€</td>
              </tr>
              <tr>
                    <td>delivery fee (Free for orders over €50.)</td>
                    <td>${deliveryFee}€</td>
              </tr>
              <div class="basket-split-line"></div>
              <tr>
                    <td ><strong>Total</strong></td>
                    <td>${totalPrice.toFixed(2)}€</td>
              </tr>
            </table>
                <button onclick="openConfirmationDialog()" class="buy-now-button">Buy Now (${totalPrice.toFixed(2)}€)</button>
       `
}


function getBasketEmptyTemplate() {
    return `    
            <div class="empty-basket">
                <div class="empty-basket-paragraph">
                    <span>Nothing here yet.</span>
                    <span>Go ahead and choose somthing</span>
                    <span>delicious!</span>
                </div>
                    <img class="empty-basket-logo" src="./logos/basket.svg" alt="basket logo">
            </div>
        `
}

