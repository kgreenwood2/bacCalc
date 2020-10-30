$(document). ready(
    function() {


        $("#calculateBAC").click(calculateBAC);


        // other functions
        function calculateBAC()
        {

            // get all input from boxes and parse to number data type
            var numOfBeer = $("#numOfBeer").val();
            numOfBeer = parseFloat(numOfBeer) * 0.54;

            var numOfWine = $("#numOfWine").val();
            numOfWine = parseFloat(numOfWine)  * 0.60;

            var numOfShot = $("#numOfShot").val();
            numOfShot = parseFloat(numOfShot)  * 0.60;

            var numOfWeight = $("#numOfWeight").val();
            numOfWeight = parseFloat(numOfWeight);

            var numOfHour = $("#numOfHour").val();
            numOfHour = parseFloat(numOfHour)  * 0.015;



            // calculate cost and time


            var totalBAC = (numOfBeer + numOfWine + numOfShot) * 7.5;

            var divideWeight = totalBAC / numOfWeight;

            var hourLoss = divideWeight - numOfHour;



            // put output into paragraphs


            $("#Output").text(`Your current BAC is ${hourLoss.toFixed(3)} %`);


        }

    }
);

