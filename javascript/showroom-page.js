var maxSlides = 1;
var slideIndex = 0;

window.addEventListener('load', function() {
    var username = localStorage.getItem("username");
    var userDisplayElement = document.getElementById("usernameDisplay");
    userDisplayElement.innerText = username


    updateSlide();
});

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

function prevSlide() {
    if (slideIndex === 0) {
        return; // Jika sudah di slide pertama, tidak melakukan apa-apa
    }
    slideIndex--;
    updateSlide();
}

function nextSlide() {
    if (slideIndex === maxSlides) {
        return; // Jika sudah di slide terakhir, tidak melakukan apa-apa
    }
    slideIndex++;
    updateSlide();
}

function updateSlide() {
    var slideWidth = document.querySelector('.showroom').offsetWidth;
    var slideTransform = -slideIndex * slideWidth;
    document.querySelector('.carousel-slide-showroom').style.transform = 'translateX(' + slideTransform + 'px)';
    console.log(slideIndex)
    console.log(maxSlides)
    // Menonaktifkan tombol prev jika slideIndex adalah 0
    if (slideIndex === 0) {
        document.querySelector('.prev').disabled = true;
    } else {
        document.querySelector('.prev').disabled = false;
    }

    // Menonaktifkan tombol next jika slideIndex mencapai maxSlides - 1
    if (slideIndex >= maxSlides) {
        document.querySelector('.next').disabled = true;
    } else {
        document.querySelector('.next').disabled = false;
    }
}