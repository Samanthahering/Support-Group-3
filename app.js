//Toggle Nav
const navSlide = ()=>{
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");

    burger.addEventListener("click", ()=>{
        nav.classList.toggle("nav-active");

    });
};

navSlide();
//
// //LighBox
// function openModal() {
//   document.getElementById("myModal").style.display = "block";
// }
//
// function closeModal() {
//   document.getElementById("myModal").style.display = "none";
// }
//
// var slideIndex = 1;
// showSlides(slideIndex);
//
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }
//
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }
//
// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("demo");
//   var captionText = document.getElementById("caption");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
//   captionText.innerHTML = dots[slideIndex-1].alt;
// }


//Fundraising images
const panels = document.querySelectorAll(".panel");

     function toggleOpen(){
         this.classList.toggle("open");
     };

     panels.forEach(panel => panel.addEventListener("mouseover", toggleOpen));
