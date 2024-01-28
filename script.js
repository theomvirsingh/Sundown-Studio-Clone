const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


var loader = document.querySelector("#loader")
    setTimeout(function () {
        loader.style.top = "-100%"
    }, 4200)


function page3Animation(){
    var elemC = document.querySelector("#elem-container")
    var fixed = document.querySelector("#fixed-image")
    
    elemC.addEventListener("mouseenter",function(){
        fixed.style.display = "block"
    })
    elemC.addEventListener("mouseleave",function(){
        fixed.style.display = "none"
    })

    var elems = document.querySelectorAll(".elem")
    elems.forEach(function(e){
        e.addEventListener("mouseenter",function(){
            var image = e.getAttribute("data-image")
            fixed.style.backgroundImage = `url(${image})`
        })
    })
}

page3Animation()

// JavaScript to handle button clicks and show corresponding content
function showContent(index) {
    // Hide all images
    var images = document.querySelectorAll('.image');
    images.forEach(function(image) {
      image.classList.remove('active');
    });

    // Show the selected image
    images[index].classList.add('active');

    // Hide all descriptions
    var descriptions = document.querySelectorAll('#P4Description p');
    descriptions.forEach(function(description) {
      description.style.display = 'none';
    });

    // Show the description for the selected button
    document.getElementById('P4Description' + (index + 1)).style.display = 'block';

    // Update button styles
    var buttons = document.querySelectorAll('.btn');
    buttons.forEach(function(btn,i) {
      if (i === index) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }

document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".mySwiper", {
    freeMode: true,
    loop: true,
    allowTouchMove: true,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 100,
    speed: 2000,
  });
});



// function menuAnimation() {

//   var menu = document.querySelector("nav h3")
//   var full = document.querySelector("#full-scr")
//   var navimg = document.querySelector("nav img")
//   var flag = 0
//   menu.addEventListener("click", function () {
//       if (flag == 0) {
//           full.style.top = 0
//           navimg.style.opacity = 0
//           flag = 1
//       } else {
//           full.style.top = "-100%"
//           navimg.style.opacity = 1
//           flag = 0
//       }
//   })
// }


// By default, show content for the first button
showContent(0);
menuAnimation()
loaderAnimation()
swiperAnimation()