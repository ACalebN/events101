'use strict';
/**
 * Add your functions here...
 */

function targetTextToConsole(event) {
    let text = event.target.textContent;
    console.log(text);
}

function tttcAttacher() {
    button0.addEventListener('click', targetTextToConsole);
}

function lovelyParaAttacher() {
    thisisalovelyparagraph.addEventListener('click', lovelyToggle)
}

function lovelyButtonAttacher() {
    button1.addEventListener('click', lovelyToggle)
}

function concatHandler() {
    const in1Value = in1.value;
    const in2Value = in2.value;
    out1.textContent = in1Value + in2Value;
}

function concatAttacher() {
    in1.addEventListener('change', concatHandler);
    in2.addEventListener('change', concatHandler);
}

function snitchAttacher() {
    mousewatcher.addEventListener('mouseover', snitchUpdater)
    mousewatcher.addEventListener('mouseout', snitchUpdater)
}

function reportAttacher() {
    
}