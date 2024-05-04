function openNav() {
    document.getElementById("navbar").classList.toggle("start-0");
    document.body.classList.toggle("overflow_hidden");
    document.querySelector(".menu").classList.toggle("cross")
  }

   // --------slider
   $('.firstslider').slick({
    autoplay: true,
    autoplaySpeed: 0,
    speed: 8000,
    pauseOnHover: true,
    cssEase: 'linear',
    infinite: true,    
    dots: false,
    variableWidth: true,
    slidesToShow: 5,
    slidesToScroll: 1,
});

const tabcontant = document.querySelectorAll(".tabcontant");
const firstcontant = document.querySelector(".tabcontant");
const fistactivetab = document.querySelector(".allbtn button");
tabcontant.forEach(e => e.style.display = "none");
firstcontant.style.display = "block";
fistactivetab.classList.add("active");
function clickhere(tabs) {
    tabcontant.forEach(e => e.style.display = "none");
    const selectcontant = document.getElementById(tabs)
    selectcontant.style.display = "block";
    const tabsactive = document.querySelectorAll(".allbtn button")
    tabsactive.forEach(e => e.classList.remove("active"))
    const selecttab = document.querySelector(`button[onclick="clickhere('${tabs}')"]`)
    selecttab.classList.add("active")
}


const d = new Date();
let year = d.getFullYear();
document.getElementById("year").innerHTML = year

const y = new Date();
let Year = y.getFullYear();
document.getElementById("year2").innerHTML = Year

//------------------------pre-loder
document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("load", function () {
    setTimeout(function () {
      let loadingOverlay = document.getElementById("loadingOverlay");
      loadingOverlay.style.display = "none";
      document.querySelector("body").classList.remove("overflow-hidden");
    },2000);
  }); 
});
// -----------------------back-to-top
// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}