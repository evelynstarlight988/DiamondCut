var maxSlidesTopTier = 0;
var slideIndexTopTier = 0;

var slideIndexTop = 0;
var slides = 0
var totalSlides = 0

window.addEventListener('load', function() {
    var username = localStorage.getItem("username");
    var userDisplayElement = document.getElementById("usernameDisplay");
    userDisplayElement.innerText = username
    maxSlidesTopTier = document.querySelectorAll('.top-tier-content').length; // cari banyaknya item pada carousel


	slides = document.getElementsByClassName('slides');
	totalSlides = slides.length;
	console.log(totalSlides)

    updateSlideTopTier();
	showSlide(slideIndexTop);
});

function showSlide(index) {
    if (index >= totalSlides) {
        slideIndexTop = 0;
    } else if (index < 0) {
        slideIndexTop = totalSlides - 1;
    } else {
        slideIndexTop = index;
    }
	console.log(slideIndexTop)
    for (let i = 0; i < totalSlides; i++) {
        slides[i].classList.remove('active');
    }

    slides[slideIndexTop].classList.add('active');
}

function changeSlide(n) {
    showSlide(slideIndexTop + n);
}



function toggleDropdown(event) {
    event.preventDefault(); // Prevent the default link behavior
    var dropdown = document.getElementById("accountDropdown");
    dropdown.classList.toggle("show"); // Toggle the dropdown visibility
}

document.onclick = function(event) {
    var target = event.target;
    var accountLink = document.getElementById("usernameDisplay");
    var dropdown = document.getElementById("accountDropdown");

    if (!accountLink.contains(target) && !dropdown.contains(target)) {
        dropdown.classList.remove("show");
    }
};

function prevSlideTopTier() {
    if (slideIndexTopTier === 0) {
        return; // Jika sudah di slide pertama, tidak melakukan apa-apa
    }
    slideIndexTopTier--;
    updateSlideTopTier();
}

function nextSlideTopTier() {
    if (slideIndexTopTier === maxSlidesTopTier-1) {
        return; // Jika sudah di slide terakhir, tidak melakukan apa-apa
    }
    slideIndexTopTier++;
    updateSlideTopTier();
}

function updateSlideTopTier() {
    var slideWidth = document.querySelector('.top-tier-content').offsetWidth;
    var slideTransform = -slideIndexTopTier * slideWidth;
    document.querySelector('.carousel-slide-top-tier').style.transform = 'translateX(' + slideTransform + 'px)';
    console.log(slideIndexTopTier)
    console.log(maxSlidesTopTier)
    // Menonaktifkan tombol prev jika slideIndex adalah 0
    if (slideIndexTopTier === 0) {
        document.querySelector('.prev-top-tier').disabled = true;
    } else {
        document.querySelector('.prev-top-tier').disabled = false;
    }

    // Menonaktifkan tombol next jika slideIndex mencapai maxSlides - 1
    if (slideIndexTopTier >= maxSlidesTopTier) {
        document.querySelector('.next-top-tier').disabled = true;
    } else {
        document.querySelector('.next-top-tier').disabled = false;
    }
}