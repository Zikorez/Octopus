// auth.js
function registerUser(event) {
    event.preventDefault(); // Prevent the default form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Store user data in Local Storage
    localStorage.setItem(username, password);

    // Redirect to dashboard
    window.location.href = 'dashboard.html';
}

document.getElementById('registrationForm')?.addEventListener('submit', registerUser);

function loginUser(event) {
    event.preventDefault(); // Prevent the default form submission

    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    // Validate user credentials
    if (localStorage.getItem(username) === password) {
        // Redirect to dashboard if valid
        window.location.href = 'dashboard.html';
    } else {
        alert('اسم المستخدم أو كلمة المرور غير صحيحة!');
    }
}

document.getElementById('loginForm')?.addEventListener('submit', loginUser);
