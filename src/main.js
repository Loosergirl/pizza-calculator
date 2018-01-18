function calculatePizzaAmount(people) {
	return people * 0.5;
}

function calculatePizzaPrice(pizzaAmount) {
	return pizzaAmount * 100;
}

function calculateDrinkAmount(people) {
	return people * 0.25;
}

function calculateDrinkPrice(drinkAmount) {
	return drinkAmount * 20;
}

function calculateTotalPrice(pizzaPrice, drinkPrice) {
	return pizzaPrice + drinkPrice;
}

module.exports = {
	calculatePizzaAmount,
	calculatePizzaPrice,
	calculateDrinkAmount,
	calculateDrinkPrice,
	calculateTotalPrice
};