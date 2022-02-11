document.getElementById('submit_btn').addEventListener('click', function () {
    const emailInput = document.getElementById('emailId').value;
    // console.log(emailInput);
    const passwordInput = document.getElementById('passwordId').value;
    // console.log(passwordInput);
    if (emailInput == 'mehedi@gmail.com' && passwordInput == 'password') {
        console.log(emailInput);
        console.log(passwordInput);
        window.location.href = 'https://tailwindcss.com/docs/border-color'
    }
    else {
        console.log("not valid username or email");
    }
})