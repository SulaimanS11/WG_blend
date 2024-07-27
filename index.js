// js for the index page img slider

document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.carousel-images img');
    const dots = document.querySelectorAll('.carousel-dots .dot');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    let currentIndex = 0;

    function updateCarousel() {
        document.querySelector('.carousel-images').style.transform = `translateX(${-currentIndex * 100}%)`;
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    function showNextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        updateCarousel();
    }

    function showPrevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateCarousel();
    }

    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            currentIndex = parseInt(e.target.dataset.index);
            updateCarousel();
        });
    });

    nextButton.addEventListener('click', showNextImage);
    prevButton.addEventListener('click', showPrevImage);

    setInterval(showNextImage, 3000); // Change image every 3 seconds

    updateCarousel();
});



// const slides = document.querySelector(".slides");
// const slideImgs = document.querySelector(".slides img");

// const prevBtn = document.querySelector("#PrevB");
// const nextBtn = document.querySelector("#NextB");

// let counter = 1;
// const size = slideImgs[0].clientWidth;

// slides.style.transform = "translateX(" + (-size * counter) + "px)";

// // input actions
// nextBtn.addEventListener("click",()=>{
//     slides.style.transition = "transform 0.4s ease-in-out"
//     counter++;
//     slides.style.transform = "translateX(" + (-size * counter) + "px)";
    
// });



// code for the message box on the about me page

function sendEmail() {
    const message = document.getElementById('messageBox').value;
    const mailtoLink = `mailto:wgblendz@gmail.com?subject=Contact&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoLink;
}