window.addEventListener('load', function() {
    var username = localStorage.getItem("username");
    var userDisplayElement = document.getElementById("usernameDisplay");
    userDisplayElement.innerText = username
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