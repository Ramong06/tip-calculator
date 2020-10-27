
//function to calulate tip amount
function calculateTip() {
    let billAmount = document.getElementById("billAmt").value;
    let serviceQual = document.getElementById("serviceQual").value;
    let numberOfPeople = document.getElementById("peopleAmt").value;

    //Checks if the Bill Amount and Service Quality areas have a value entered
    if (billAmount === " " || serviceQual === 0) {
        alert("A value must be entered");
        return;
    }

    //Checks if there is a value inside Number of People or if the value is greater than 0
    if (numberOfPeople === "" || numberOfPeople <= 1) {
        numberOfPeople = 1;
        document.getElementById("each").style.display = "none";
    } else {
        document.getElementById("each").style.display = "block";
    }

    //Calculates Tip
    var total = (billAmount * serviceQual) / numberOfPeople;
    total = Math.round(total * 100) / 100;
    total = total.toFixed(2);

    //renders total 
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;


}

//hides area for total until click event happens
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

//click event to begin Tip Calculation
document.getElementById("calculate").onclick = function() {
    calculateTip();
}