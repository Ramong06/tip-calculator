const calculateTip = () => {
    let billAmount = document.getElementById("billAmt".value);
    // let serviceQual = "";
    document.getElementById("serviceQual").value;
    let numberOfPeople = document.getElementById("peopleAmt").value;

    if (billAmount === "" || serviceQual === 0) {
        alert("A value must be entered");
        return;
    }

    if (numberOfPeople === "" || numberOfPeople <= 1) {
        numberOfPeople = 1;
        document.getElementById("each").style.display = "none";
    } else {
        document.getElementById("each").style.display = "block";
    }

    
}

document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

document.getElementById("calculate").onclick = function() {
    calculateTip();
}