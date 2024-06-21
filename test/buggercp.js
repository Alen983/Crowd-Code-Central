window.onload = function() {
    var preloader = document.getElementById('loading');
    //var mainContent = document.querySelector('section');
    setTimeout(function() {
        preloader.style.display = 'none';
        //mainContent.style.opacity = '1';
    }, 2000); 
};

hamburger = document.querySelector(".hamburger");
hamburger.onclick = function(){
    navBar = document.querySelector(".nav-bar")
    navBar.classList.toggle("active");
}