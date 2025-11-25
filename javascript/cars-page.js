var countSlides = 0;
var maxSlides = 0;
var slideIndex = 0;

var countSlidesNewCar = 0;
var maxSlidesNewCar = 0;
var slideIndexNewCar = 0;

var countSlidesUsedCar = 0;
var maxSlidesUsedCar = 0;
var slideIndexUsedCar = 0;

window.addEventListener('load', function() {
	var screenWidth = window.innerWidth;
    var temp = screenWidth >= 768 ? 6 : 3
    var tempCar = screenWidth >= 768 ? 2 : 1
    var username = localStorage.getItem("username");
    var userDisplayElement = document.getElementById("usernameDisplay");
    userDisplayElement.innerText = username

    var brands = ["Ferrari", "Pagani", "BMW", "Rolls Royce", "Bugatti", "Cadillac", "Porche"];
    var carouselSlide = document.getElementById("carouselBrand");

    brands.forEach(function(brand) {
        var brandDiv = document.createElement("div");
        brandDiv.classList.add("brand");
		console.log('a')
        brandDiv.textContent = brand;
        carouselSlide.appendChild(brandDiv);
        countSlides += 1
    });
    maxSlides = Math.ceil(brands.length/temp)
    maxSlidesNewCar = Math.ceil(document.querySelectorAll('.car-content').length);
    maxSlidesUsedCar = Math.ceil(document.querySelectorAll('.used-car-content').length);
    
    updateSlide();
    updateSlideNewCar();
    updateSlideUsedCar();
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

function prevSlideBrand() {
    if (slideIndex === 0) {
        return; // Jika sudah di slide pertama, tidak melakukan apa-apa
    }
    slideIndex--;
    updateSlide();
}

function nextSlideBrand() {
    if (slideIndex === maxSlides) {
        return; // Jika sudah di slide terakhir, tidak melakukan apa-apa
    }
    slideIndex++;
    updateSlide();
}

function prevSlideNewCar() {
    if (slideIndexNewCar === 0) {
        return; // Jika sudah di slide pertama, tidak melakukan apa-apa
    }
    slideIndexNewCar--;
    updateSlideNewCar();
}

function nextSlideNewCar() {
    if (slideIndexNewCar === maxSlidesNewCar-1) {
        return; // Jika sudah di slide terakhir, tidak melakukan apa-apa
    }
    slideIndexNewCar++;
    updateSlideNewCar();
}

function prevSlideUsedCar() {
    if (slideIndexUsedCar === 0) {
        return; // Jika sudah di slide pertama, tidak melakukan apa-apa
    }
    slideIndexUsedCar--;
    updateSlideUsedCar();
}

function nextSlideUsedCar() {
    if (slideIndexUsedCar === maxSlidesUsedCar-1) {
        return; // Jika sudah di slide terakhir, tidak melakukan apa-apa
    }
    slideIndexUsedCar++;
    updateSlideUsedCar();
}

function updateSlide() {
    var slideWidth = document.querySelector('.brand').offsetWidth;
    var slideTransform = -slideIndex * (slideWidth + 10); // 10px untuk margin-right
    document.querySelector('.carousel-slide').style.transform = 'translateX(' + slideTransform + 'px)';
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

function updateSlideNewCar() {
    var slideWidth = document.querySelector('.car-content').offsetWidth;
    var slideTransform = -slideIndexNewCar * (slideWidth + 10); // 10px untuk margin-right
    document.querySelector('.carousel-slide-new-car').style.transform = 'translateX(' + slideTransform + 'px)';
    
    // Menonaktifkan tombol prev jika slideIndex adalah 0
    if (slideIndexNewCar === 0) {
        document.querySelector('.prev-new-car').disabled = true;
    } else {
        document.querySelector('.prev-new-car').disabled = false;
    }

    // Menonaktifkan tombol next jika slideIndex mencapai maxSlides - 1
    if (slideIndexNewCar >= maxSlidesNewCar) {
        document.querySelector('.next-new-car').disabled = true;
    } else {
        document.querySelector('.next-new-car').disabled = false;
    }
}

function updateSlideUsedCar() {
    var slideWidth = document.querySelector('.used-car-content').offsetWidth;
    var slideTransform = -slideIndexUsedCar * (slideWidth + 10); // 10px untuk margin-right
    document.querySelector('.carousel-slide-used-car').style.transform = 'translateX(' + slideTransform + 'px)';
    
    // Menonaktifkan tombol prev jika slideIndex adalah 0
    if (slideIndexUsedCar === 0) {
        document.querySelector('.prev-used-car').disabled = true;
    } else {
        document.querySelector('.prev-used-car').disabled = false;
    }

    // Menonaktifkan tombol next jika slideIndex mencapai maxSlides - 1
    if (slideIndexUsedCar >= maxSlidesUsedCar) {
        document.querySelector('.next-used-car').disabled = true;
    } else {
        document.querySelector('.next-used-car').disabled = false;
    }
}



