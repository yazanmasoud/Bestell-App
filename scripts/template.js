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
                        <span>${(meal.price).toFixed(2)}€</span>
                        <button onclick="addMealToBasket(${mealIndex})"><img src="./buttons/addToBasketButton.svg" alt=""></button>
                    </div>
                </div>
            </article>`
}

function getCategoryTemplate(category) {
    return `    <div id="${createID(category)}" class="meal-content-title">
                    <div class="content meal-content-title-inner">
                    <img class="category-icon" src="${getCategoryIcon(category)}" alt="category icon">
                    <h2 class="meal-content-title-h2">${category}</h2>
                    </div>
                </div>`
}

function getBasketTemplate(meal,mealIndex) {
    return `    
                    <div class="basket-meal">
                        <div class="basket-meal-name">
                            <h3>${meal.name}</h3>
                            <div class="basket-icons-block">
                               <button onclick="decreaseOrDeleteBasketMealAmount(${mealIndex})"><img class="delet-icon" src="${getBasketAmountImageSource(mealIndex)}" alt="Delete Icon"></button>
                                <span>${meal.amount}</span>
                                <button onclick="increaseBasketMealAmount(${mealIndex})"><img class="plus-icon" src="./assets/icons/+.svg" alt="Plus Icon"></button>  
                            </div>
                        </div>
                        <span>${(meal.price * meal.amount).toFixed(2)}€</span>
                    </div>`
}

function getBasketPriceTemplate(subTotal , totalPrice , deliveryFee) {
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
              <div class="basket-split-line">.</div>
              <tr>
                    <td><strong>Total</strong></td>
                    <td>${totalPrice.toFixed(2)}€</td>
              </tr>
            </table>
            <button class="buy-now-button">Buy Now (${totalPrice.toFixed(2)}€)</button>

            
       `
}

