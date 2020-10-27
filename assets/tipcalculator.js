const calculateTip = () => {
    let billAmount = document.getElementById("billAmt".value);
    let serviceQual = "";
    document.getElementById("serviceQual").value;
    let numberOfPeople = document.getElementById("peopleAmt")
}

document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

document.getElementById("calculate").onclick = function() {
    calculateTip();
}