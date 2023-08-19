document.getElementById('submit-btn').addEventListener('click', function(){
    const emailId = document.getElementById('email');
    const email = emailId.value;
    emailId.value = '';
    console.log(email);
})