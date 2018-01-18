const main = require('../src/main.js');


/*
Feature: Calculate pizza prices and amount to buy
  Scenario: We want to know the cost of the pizzas
    Given 2l of drink costs 20 kr
	  And 1 person eats 1/2 pizza
	  And 1 person drinks 1/2 l
	  And 1 pizza costs 100 kr

    When 6 people want to order
     Then we buy 3 pizzas
	    And we need to drink 1.5 liters
	    And we calculate 2 bottles of drink
	    And total cost is 340 kr.
	    And ~57 kr per person.
*/

describe('Calculate pizza prices and amount to buy', () => {

    it('Should calculate how many pizzas are needed', () => {
		const people = 5;
		expect(main.calculatePizzaAmount(people)).toEqual(3);
    })  
	
	it('Should calculate cost for the pizzas', () => {
		const pizzaAmount = 3;
		expect(main.calculatePizzaPrice(pizzaAmount)).toEqual(300);
    })  
})

describe('Calculate drink prices and amount to buy', () => {

    it('Should calculate how many bottles are needed', () => {
		const people = 9;
		expect(main.calculateDrinkAmount(people)).toEqual(3);
    })  
	
	it('Should calculate cost for the drinks', () => {
		const drinkAmount = 2;
		expect(main.calculateDrinkPrice(drinkAmount)).toEqual(40);
    })  
})

describe('Calculate total cost', () => {
	
	it('Should summarize cost of drinks and cost of pizzas', () => {
		const pizzaPrice = main.calculatePizzaPrice(3);
		const drinkPrice = main.calculateDrinkPrice(2);
		expect(main.calculateTotalPrice(pizzaPrice, drinkPrice)).toEqual(340);
    })  
})
