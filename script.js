const red = document.getElementById("lightRed");
const yellow = document.getElementById("lightYellow");
const green = document.getElementById("lightGreen");
const messg = document.getElementById("message");


redBtn.onclick = function () {
    message.textContent = `Stop 🛑`;
    red.style.opacity = "1";
    yellow.style.opacity = "0.3";
    green.style.opacity = "0.3";
   
}

yellowBtn.onclick = function () {
    message.textContent = `Alert 🚨`;
    yellow.style.opacity = "1";
    red.style.opacity = "0.3";
    green.style.opacity = "0.3";

}

greenBtn.onclick = function () {
    message.textContent = `Go 😀`;
    green.style.opacity = "1";
    yellow.style.opacity = "0.3";
    red.style.opacity = "0.3";
}