var username = ""
var loggedAccount;

window.onload = function loadData(){
    var username = localStorage.getItem("username");
    if (username == null && !window.location.pathname.endsWith("login_page.html")) {
		console.log("nu")
		if (!window.location.pathname.endsWith("signup_page.html")){
			console.log("abc")
			window.location.href = "../html/login_page.html";
		}
    }
    else if (username && window.location.pathname.endsWith("login_page.html")) {
        window.location.href = "../html/home_page.html";
    }
    else {
        var userDisplayElement = document.getElementById("usernameDisplay");
        userDisplayElement.innerText = username
    }
    
};

function login() {
    // Mendapatkan nilai input username dan password
    username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Validasi input (di sini Anda dapat menambahkan validasi lainnya)
    if (username === "" || password === "") {
        alert("Silakan masukkan username dan password.");
    } 
    else {
        var accounts = JSON.parse(localStorage.getItem("accounts"));
        if(accounts){
            // Cari akun dengan username yang sesuai
            var account = accounts.find(account => account.username === username);
            if(account){
                // Periksa apakah akun ditemukan dan password sesuai
                if (account.username === username && account.password === password) {
                    localStorage.setItem('username', username)
                    alert("Login successful!");
                    // Redirect ke halaman lain setelah login berhasil
                    window.location.href = "../html/home_page.html"; // Ganti dengan halaman yang diinginkan
                } 
                else {
                    alert("Invalid username or password.");
                }
            }
            else{
                alert("Username not found");
            }
        }
        else {
            alert("Sign Up First!");
        }
        
        

        
    }
}

function goToSignUpPage() {
    // Navigate to the sign-up page
    window.location.href = "../html/signup_page.html"; // Change "signup.html" to the URL of your sign-up page
}

function isValidEmail(email) {
    var input = document.createElement('input');
    input.type = 'email';
    input.value = email;
    
    return input.checkValidity();
}

function isValidPhoneNumber(phone) {
    for (var i = 0; i < phone.length; i++) {
        if (phone[i] < '0' || phone[i] > '9') {
            return false;
        }
    }
    return true;
}

function signUp(){
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var phone = document.getElementById("phone").value;
    var agree = document.getElementById("agree").checked;
    
    if (username === "" || email === "" || password === "" || confirmPassword === "" || phone === "") {
        alert("Please fill out the form");
    }
    else if (!gender) {
        alert("Choose your gender");
    }
    else if(!isValidEmail(email)){
        alert("Email format is not valid")
    }
    else if(!isValidPhoneNumber(phone)) {
        alert("Phone number is not valid")
    }
    else if(password != confirmPassword){
        alert("Password mismatch error")
    }
    else{
        if(!agree){
            alert("Please check agreement box")
        }
        else{
            // Ambil akun-akun yang sudah ada dari localStorage
            var accounts = JSON.parse(localStorage.getItem("accounts")) || [];

            // Periksa apakah username sudah ada
            
            if(accounts) {
                var existingAccount = accounts.find(account => account.username === username);    
                if (existingAccount) {
                    alert("Username already exists. Please choose a different username.");
                    return;
                }
            }
            
            

            // Tambahkan akun baru ke array accounts
            accounts.push({ username: username, password: password });

            // Simpan array accounts yang diperbarui kembali ke localStorage
            localStorage.setItem("accounts", JSON.stringify(accounts));
            alert("Account created successfully!");
            window.location.href = "../html/login_page.html";
        }
        
    }
        
}

function logout(){
    localStorage.removeItem("username");
    window.location.href = "../html/login_page.html";
}