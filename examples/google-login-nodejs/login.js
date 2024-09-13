var passport = require("./_passport")


module.exports = passport.authenticate('google', {
  scope: ['profile', 'email'],
  session: false
})


// Vulnerable JavaScript Example

// 1. Cross-Site Scripting (XSS)
function displayUserInput() {
    var userInput = document.getElementById('userInput').value;
    // Directly inserting user input into the DOM without sanitization
    document.getElementById('output').innerHTML = userInput;
}

// 2. Insecure use of eval
function executeUserScript() {
    var userScript = document.getElementById('userScript').value;
    // Using eval to execute user-provided script
    eval(userScript);
}

// 3. Unsecured AJAX request
function loadUserData() {
    var xhr = new XMLHttpRequest();
    // Using HTTP instead of HTTPS and no proper handling of CORS
    xhr.open('GET', 'http://example.com/userdata', true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById('ajaxOutput').innerHTML = xhr.responseText;
        }
    };
    xhr.send();
}
