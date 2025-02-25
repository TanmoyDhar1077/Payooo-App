// document.getElementById('log-btn').addEventListener('click', function (event) {
//     event.preventDefault();
//     const mobileNumber = document.getElementById('mobile-num').value;
//     const pinNumber = document.getElementById('pin-num').value;

//     if (mobileNumber.length === 11 && pinNumber.length === 4) {

//         if (pinNumber === '1234') {
//             window.location.href = 'dashboard.html';
//         }else{
//             alert('Invalid Mobile Number or Pin Number');
//         }
//     }
//     else {
//         alert('Invalid Mobile Number or Pin Number');
//     }
// });


function handleLogin(event) {
    event.preventDefault(); // Prevent form submission if inside a form

    const mobileNumber = document.getElementById('mobile-num').value;
    const pinNumber = document.getElementById('pin-num').value;

    if (mobileNumber.length === 11 && pinNumber.length === 4) {
        if (pinNumber === '1234') {
            window.location.href = './dashboard.html';
        } else {
            alert('Invalid Pin Number');
        }
    } else {
        alert('Invalid Mobile Number or Pin Number');
    }
}

// Add event listener for click on the button
document.getElementById('log-btn').addEventListener('click', handleLogin);

// Add event listener for "Enter" key inside the input fields
document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        handleLogin(event);
    }
});
