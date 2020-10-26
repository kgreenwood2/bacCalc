function calculateTrip()
{
// get length of trip in miles
    var tripLengthMiles = prompt("How many miles is your trip>?");

    // convert to number
    tripLengthMiles = parseFloat(tripLengthMiles);

    // get miles per gallon of vehicle
    var mpgOfVehicle = prompt("What is your vehicle's MPG?");

    // convert to number
   mpgOfVehicle = parseFloat(mpgOfVehicle);

    // get dollars per gallon of gas
    var costOfGasPerGallon = prompt ("How much is a gallon of gas?");

    // convert to number
    costOfGasPerGallon = parseFloat (costOfGasPerGallon);

    // get average speed driven in MPH
    var averageSpeedDriven = prompt("What is your average MPH?")

    // convert to number
    averageSpeedDriven = parseInt(averageSpeedDriven);

    // divide miles by MPG to get total gallons
    var totalGallons = tripLengthMiles / mpgOfVehicle;

    // multiply total gallons by $/gallon of gas
    var totalGasCost = totalGallons * costOfGasPerGallon;

    // divide miles by MPH to get total hours
    var totalHours = tripLengthMiles / averageSpeedDriven;

    //round for display!
    var totalGasCostDisplay = totalGasCost.toFixed(2);


    // display cost of gas
    alert("Your trip will cost $" + totalGasCost.toFixed(2) + " for gas.");
    alert(`Your trip will cost ${totalGasDisplay} for gas.`);

    // desplay total hours
    alert("your trip will take" + totalHours.toFixed(1) + " hours.");
    alert(`Your trip will take ${totalHours.toFixed(1)} hours.`);
}