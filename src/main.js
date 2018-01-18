function calculatePizzaAmount(people) {
	return Number((people*0.5).toFixed(0));
}

function calculatePizzaPrice(pizzaAmount) {
	return pizzaAmount * 100;
}

function calculateDrinkAmount(people) {
	if(people % 4 > 0 ){
		return ((people - (people % 4)) / 4 + 1);
//		return Math.ceil(people * 0.25);
	} else {
		return people * 0.25;
	}
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