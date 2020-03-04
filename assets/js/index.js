window.onscroll = function () {scrollFunction()};
const digit = document.querySelector(".digit");

function scrollFunction() {
    let menu = document.querySelector(".style-nav");
    
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        menu.style.backgroundColor = "#000";    
    } else {
        menu.style.backgroundColor = "";    
    }
}


function typeWriter(element) {
    elementArray = element.innerHTML.split("");
    element.innerHTML = "";
    elementArray.forEach((letra, i) => {
        setTimeout(() => element.innerHTML += letra, 75 * i);
    });
}

typeWriter(digit);

setInterval(() => { typeWriter(digit) }, 5000);