
// header scroll effects 
window.addEventListener("scroll", function() {
    var header = document.getElementById("header");
    header.classList.toggle("sticky-top", window.scrollY > 0);    

});

// navbar toggle button style ( menu button style )

const toggle = document.getElementById("rbtn");
toggle.onclick = function(){
    toggle.classList.toggle('menu-btn');
}



// navbar toggle button style ( menu button style )

const rotate = document.getElementById("main-1");
rotate.onclick = function(){
    rotate.classList.toggle('main-rotate');
}
