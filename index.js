import myNavbar from "../components/navbar.js";
console.log(myNavbar);

let container = document.getElementById("navbar");
container.innerHTML = myNavbar();
var slides = document.querySelectorAll(".slide");
    var btns = document.querySelectorAll(".btn")
    let currenSlide = 1;

    //Javascript for manual sliding
    let manualNav = function(manual){
        slides.forEach((slide) => {
            slide.classList.remove("active");

        btns.forEach((btn) => {
            btn.classList.remove("active")
        })
        })
        slides[manual].classList.add("active");
        btns[manual].classList.add("active")
    }

    btns.forEach((btn, i) => {
        btn.addEventListener("click", () => {
            manualNav(i);
            currenSlide = i;
        });
    });

    //For Autoplay Navigation
var repeat = function(activeClass){
    let active = document.getElementsByClassName("active");
    let i=1;
    
    var repeater = () => {
        setTimeout(function(){

            [...active].forEach((activeSlide) => {
                activeSlide.classList.remove("active");
            })

            slides[i].classList.add("active")
            btns[i].classList.add("active")
            i++;

            if(slides.length == i){
                i=0;
            }
            if(i>=slides.length){
                return;
            }
            repeater();
        }, 3000);
    }
    repeater();
}
repeat();

//card slider



