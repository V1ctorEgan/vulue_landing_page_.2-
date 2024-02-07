window.addEventListener('scroll', function(){
    var navbar = document.getElementById('navbar');
    var scrollPosition = window.scrollY;
    // var icon = document.getElementById('bar-slash')

    var threshold = 50;

    if (scrollPosition > threshold){
        // navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
        navbar.style.backgroundColor = ' transparent';

        // icon.style.display = 'none';
    }
    else{
        // navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        // icon.style.display = 'block';
    }
    
});

document.addEventListener("DOMContentLoaded",function(){
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach(link => {
        link.addEventListener("mouseover", function(){
            this.style.color = "blue";
        });
        link.addEventListener("mouseout", function(){
            this.style.color = "white";
        });
    });
});
const WindowWidth = window.innerWidth;
if (WindowWidth > 729){
    const end = document.getElementById("dont-show");
    end.style.display ="none";
}
if (WindowWidth < 730){
    document.getElementById('rec').style.display = 'none';
}


// document.addEventListener("DOMContentLoaded", function(){
//     footerExplain = document.querySelectorAll('.footside p a');
//     reduceFont = forEach(function(footerExplain){
//         this.fontWeight = 'normal';
// });

// })
var buttonNumbers = querySelectorAll('.btn').length
for(var i = 0; i < buttonNumbers; i++ ){
    document.querySelectorAll('.btn')[i].addEventListener('click', function(){
        currentButton = this.innerHTML;
        pressedButton(currentButton);
    })
   
}
function pressedButton(currentButton){
    currentButton.classList.add('pressed')
    setTimeout(function(){
        currentButton.classList.remove('pressed');
    }, 100);
}