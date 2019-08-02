'use strict';

const log = console.log.bind(console);

$('#exampleModal').modal('show');


let currentValue = 100;
let maxRange = 1200;
let inputBtn = $('.inputButtons__inputBtn');
let outputText = document.getElementById('inputBlock__inputTextValue');
let rangeBlockAmount = document.getElementById('rangeBlock__amount');
let rangeBlockCurrent = document.getElementById('rangeBlock__current');
let inputTextValue = document.getElementById('inputBlock__inputTextValue');



$(document).ready(function () {
    outputText.value = currentValue;
    changeRangeLines();
});


function changeRange(){
    if(currentValue > maxRange){
        currentValue = maxRange;
        log('maxRange');
    } else if (currentValue < 0){
        currentValue = 0;
    }
    outputText.value = currentValue;
    changeRangeLines();
}

for (let i = 0; i < inputBtn.length; i++) {
    inputBtn[i].addEventListener('click', function () {
        if ($(this).hasClass("inputButtons__up")){
            if (currentValue < maxRange){
                currentValue += 10;
            }
            
        } else if ($(this).hasClass("inputButtons__down")){
            if (currentValue > 0) {
                currentValue -= 10;
            }
        }
        changeRange();
    });
}

function changeRangeLines(){
    let rangeLinesAmountWidth, rangeLinesCurrentWidth;

    rangeLinesAmountWidth = Math.round(((maxRange - currentValue) / maxRange * 100) * 100) / 100;
    
    if (rangeLinesAmountWidth >= 0 && rangeLinesAmountWidth <= 100){
        log(rangeLinesAmountWidth);
        rangeBlockAmount.style.width = rangeLinesAmountWidth + '%';
    }

    rangeLinesCurrentWidth = Math.round(((currentValue) / maxRange * 100) * 100) / 100;
    if (rangeLinesCurrentWidth >= 0 && rangeLinesCurrentWidth <=100){
        rangeBlockCurrent.style.width = rangeLinesCurrentWidth + '%';
    }
}

inputTextValue.addEventListener("focusout", changeTextInput);
function changeTextInput(){
    currentValue = +inputTextValue.value;
    log('changeTextInput ' + currentValue);
    changeRange();
}