function calculateFee()
{
    // Determine how many books are being returned
    var numOfBooks = prompt ("How many books are being returned?");

    // Determine How many days late the books are
    var daysLate = prompt ("How many days late are the books?");

    // convert to number
    daysLate = parseFloat(daysLate * 0.25) * numOfBooks ;



    // Determine how many DVD's are being returned

    var numOfDVDs = prompt ("How many DVDs are being returned?");


    // Determine how many days late the DVDs are
    var dvdLate = prompt ("How many days late are the DVDs?");

    //convert to number
    dvdLate = parseFloat (dvdLate * 0.50) * numOfDVDs;


    // Determine total cost
    var totalCost = (dvdLate + daysLate);
    // Display total cost
    alert("Your total late fees are $" + totalCost.toFixed(2));
}


function calculateSplit()
{
    // Determine how many people are splitting

    var numOfPeople = prompt ("How many people are splitting pizza?");


    // Determine how many pizzas

    var numOfPizza = prompt ("How many pizzas are you ordering?");


    // convert to number

    var pizzaCost = numOfPizza * 15;



    // Determine how many toppings per pizza

    var toppingAmount = prompt ("How many toppings are you adding?");

    // Convert to number

    var totalToppings = (toppingAmount * 1.25);

    // total cost

    var totalCostPizza = totalToppings + pizzaCost;


    // total cost per person

    var splitCost = totalCostPizza / numOfPeople;


    // Display cost per person

    alert ("Your total share for this order is $" + splitCost.toFixed(2));


}
