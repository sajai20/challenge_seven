'use strict';

const textEl = document.getElementById("text");
const paraEl = document.getElementById('para');
const subEl = document.getElementById('set_pass');


function init() {
    textEl.value = null;
    paraEl.innerHTML = null;
}
function set_pass() {
    if (textEl.value.length < 10) {
        alert("password is too short");
        init();
    }
    else {
        paraEl.classList.add('green');
        paraEl.innerHTML = `<h4>sucess</h4>`;
    }
}

function updateValue(val) {
    val.preventDefault();
    console.log(textEl.value);
}

function no() {
    subEl.classList.add('btn');
    // subEl.innerHTML = null;
}

function yes() {
    subEl.classList.remove('btn');
    // subEl.innerHTML = `<button onclick="set_pass()" id="set_pass" class="red">submit</button>`;
}


textEl.addEventListener('', updateValue);


function red() {
    if (textEl.classList.contains('green'))
        textEl.classList.remove('green');
    textEl.classList.add('red');
    // paraEl.innerHTML = `<h4>${textEl.value}</h4>`;
}
function green() {
    if (textEl.classList.contains('red'))
        textEl.classList.remove('red');
    textEl.classList.add('green');
    // paraEl.innerHTML = `<h4>${textEl.value}</h4>`;
}

clear.addEventListener('click', () => {
    init();
})