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

    setInterval(showNextImage, 3000); // Change image every 5 seconds

    updateCarousel();
});


// code for the message box on the about me page

function sendEmail() {
    const message = document.getElementById('messageBox').value;
    const mailtoLink = `mailto:wgblendz@gmail.com?subject=Contact&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoLink;
}