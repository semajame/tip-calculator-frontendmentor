
const inputFields = document.querySelectorAll('input[type="text"]');
const reset = document.querySelector(".reset");

const billvalue = document.querySelector("#bill");
const peoplevalue = document.querySelector("#number");
const tipvalue = document.querySelector("#tip");
const totalvalue = document.querySelector("#total");
const custom = document.querySelector(".custom");

reset.onclick = function(){
    const value = document.querySelectorAll(".total-value");

    inputFields.forEach((input)=> {
        input.value = '';
    });

    value.forEach((values)=>{
        values.innerHTML = "$0.00";
    });
}

function validateInput(input) {
    // Use a regular expression to remove non-numeric characters
    input.value = input.value.replace(/[^0-9]/g, '');
}

function emptyInput(){
    tipvalue.innerHTML = "";
    totalvalue.innerHTML = "";
}

function tip(number){

    let billValue = parseFloat(billvalue.value);
    let peopleValue = parseFloat(peoplevalue.value);
   
    let tip_per_person = Math.round((((billvalue.value * (number / 100)) / peoplevalue.value)) * 100) / 100
    let total_per_person = Math.round((tip_per_person + (billvalue.value / peoplevalue.value)) * 100) / 100

    if (isNaN(billValue) || isNaN(peopleValue) || billValue <= 0 || peopleValue <= 0) {
        // Input validation: Check if values are empty or non-numeric
        tipvalue.innerHTML = "$0.00";
        totalvalue.innerHTML = "$0.00";
    } else{
        emptyInput()
        tipvalue.innerHTML += "$" + tip_per_person.toFixed(2);
        totalvalue.innerHTML += "$" + total_per_person.toFixed(2);
    }

}

// function customTip(custom){
//     let tip_per_person = Math.round((((billvalue.value  * (custom.value / 100)) / peoplevalue.value)) * 100) / 100
//     let total_per_person = Math.round((tip_per_person + (billvalue.value  / peoplevalue.value)) * 100) / 100

//     // if (event.key === 'Enter' || custom.focus) {
//     //     emptyInput()
//     //     tipvalue.innerHTML += "$" + tip_per_person.toFixed(2);
//     //     totalvalue.innerHTML += "$" + total_per_person.toFixed(2);
//     // } else {
//     //     emptyInput()
//     // }
//     emptyInput()
//     tipvalue.innerHTML += "$" + tip_per_person.toFixed(2);
//     totalvalue.innerHTML += "$" + total_per_person.toFixed(2);
    
// }

function customTip() {

    let billValue = parseFloat(billvalue.value);
    let peopleValue = parseFloat(peoplevalue.value);
    let customValue = parseFloat(custom.value);

    if (isNaN(billValue) || isNaN(peopleValue) || isNaN(customValue) || billValue <= 0 || peopleValue <= 0) {
        tipvalue.innerHTML = "$0.00";
        totalvalue.innerHTML = "$0.00";
    } else {
        let tipPerPerson = Math.round(((billValue * (customValue / 100)) / peopleValue) * 100) / 100;
        let totalPerPerson = Math.round((tipPerPerson + (billValue / peopleValue)) * 100) / 100;

        // Update HTML elements
        tipvalue.innerHTML = "$" + tipPerPerson.toFixed(2);
        totalvalue.innerHTML = "$" + totalPerPerson.toFixed(2);
    }
}

custom.addEventListener('keyup', function (event) {
    if (event.key === 'Enter' || custom.focus) {
        customTip();
    }
});


peoplevalue.addEventListener("input", ()=>{
    const peoplevalue = document.querySelector("#number");
    const error = document.querySelector(".cant-zero");

    if(peoplevalue.value.length === 0){
        error.style.display = "block";
        peoplevalue.style.outline = "1.5px solid rgb(214, 131, 112)";
    } else {
        error.style.display = null;
        peoplevalue.style.outline = null;
    }
})

document.addEventListener('DOMContentLoaded', function() {
    inputFields.forEach((input)=> {
        input.value = '';
    });
});

document.addEventListener("input", ()=>{
    inputFields.forEach((input)=>{
        input.value = input.value.replace(/[^0-9]/g, '');
    })
})
