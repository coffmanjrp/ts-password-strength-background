"use strict";
var bg = document.getElementById('background');
var password = document.getElementById('password');
function clearBlur(e) {
    var input = e.target.value;
    var length = input.length;
    var blurValue = 20 - length * 2;
    bg.style.filter = "blur(".concat(blurValue, "px)");
}
password.addEventListener('input', clearBlur);
