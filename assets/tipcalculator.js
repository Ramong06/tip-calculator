

const calculateTip = () => {
    if (billAmount === "" || serviceQual === 0) {
    var billAmount = document.getElementById("billAmt".value);
    var serviceQual = document.getElementById("serviceQual").value;
    var numberOfPeople = document.getElementById("peopleAmt").value;
        alert("A value must be entered");
        return;
    }

    if (numberOfPeople === "" || numberOfPeople <= 1) {
        numberOfPeople = 1;
        document.getElementById("each").style.display = "none";
    } else {
        document.getElementById("each").style.display = "block";
    }

    let total = (billAmount * serviceQual) / numberOfPeople;
    total = Math.round(total * 100) / 100;
    total = total.toFixed(2);

    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;


}

document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

document.getElementById("calculate").onclick = function() {
    calculateTip();
}