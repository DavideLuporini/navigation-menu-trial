let menu = document.getElementById('menu');
let dot1 = document.getElementById("dot-1");
let dot2 = document.getElementById("dot-2");
let dot3 = document.getElementById("dot-3");
let dot4 = document.getElementById("dot-4");
let dot5 = document.getElementById("dot-5");
let dot6 = document.getElementById("dot-6");
let dot7 = document.getElementById("dot-7");
let dot8 = document.getElementById("dot-8");
let dot9 = document.getElementById("dot-9");

menu.addEventListener('click', function() {
    menu.classList.toggle('active');
    dot1.classList.toggle('dot-active');
    dot2.classList.toggle('dot-active');
    dot3.classList.toggle('dot-active');
    dot4.classList.toggle('dot-active');
    dot5.classList.toggle('dot-active');
    dot6.classList.toggle('dot-active');
    dot7.classList.toggle('dot-active');
    dot8.classList.toggle('dot-active');
    dot9.classList.toggle('dot-active');

})