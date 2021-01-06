//Calculate Tip
function calculateTip() {
    let billAmt = document.getElementById('billAmt').value
    let numOfPeople = document.getElementById('peopleAmt').value
    let serviceQual = document.getElementById('serviceQual').value
    
    //validate input
    if (billAmt === "" || serviceQual == 0) {
        alert("Please enter values")
        return;
    }
    //Check to see if this input is empty or less than or equal to 1
    if (numOfPeople === "" || numOfPeople <= 1) {
        numOfPeople = 1;
        document.getElementById('each').style.display = "none"
    } else {
        document.getElementById('each').style.display = "block"
    }

    //Calculate tip
    let total = (billAmt * serviceQual) / numOfPeople
    //Round to two decimal places
    total = Math.round(total * 100) / 100;
    total = total.toFixed(2);

    //Display the tip
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;

}

//Hide the tip amount on load

document.getElementById("totalTip").style.display = "none";
document.getElementById('each').style.display = "none"


let button = document.getElementById('calculate');   
button.addEventListener('click', calculateTip)
