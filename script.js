
// LEFT CONTENT
const billvalue = document.querySelector("#bill");
const peoplevalue = document.querySelector("#number");
const inputFields = document.querySelectorAll('input[type="text"]');

// BUTTON
const five = document.querySelector(".five");
const ten = document.querySelector(".ten");
const fifteen = document.querySelector(".fifteen");
const twentyfive = document.querySelector(".twenty-five");
const fifty = document.querySelector(".fifty");
const custom = document.querySelector(".custom");

// RIGHT CONTENT

const tipvalue = document.querySelector("#tip");
const totalvalue = document.querySelector("#total");
const reset = document.querySelector(".reset");

reset.onclick = function(){
    const value = document.querySelectorAll("input");

    value.forEach((values)=>{
        values.value = '';
    });
}

function removeTotal(){
        tipvalue.value = null;
        totalvalue.value = null;
}

function tip(number){

    let percent = number * billvalue.value;
    let tip =  percent / peoplevalue.value ;
    let totalpay = (billvalue.value / peoplevalue.value) + tip;

    tipvalue.value += "$" + tip.toFixed(2);
    totalvalue.value += "$" + totalpay.toFixed(2);
}

function error(){
    if(billvalue.value.length === 0 || peoplevalue.value.length === 0){
        tipvalue.value = "$0.00";
        totalvalue.value = "$0.00";
    }
}

function validateInput(input) {
    // Use a regular expression to remove non-numeric characters
    input.value = input.value.replace(/[^0-9]/g, '');
  }

five.onclick = function(){
    removeTotal();
    let number = 5/100;
    tip(number);
}

ten.onclick = function(){
    removeTotal();
    let number = 10/100;
    tip(number);
}

fifteen.onclick = function(){
    removeTotal();
    let number = 15/100;
    tip(number);
}

twentyfive.onclick = function(){
    removeTotal();
    let number = 25/100;
    tip(number);
}

fifty.onclick = function(){
    removeTotal();
    let number = 50/100;
    tip(number);
}

custom.onchange = function(){
    removeTotal();
    let number = custom.value/100;
    tip(number);
    error();
}

peoplevalue.addEventListener("input", ()=>{

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
