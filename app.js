



document.getElementById('submit-btn').addEventListener('click', function(){
    const emailId = document.getElementById('email');
    const email = emailId.value;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const errorMessage = document.getElementById('error');
    const div = document.getElementById('success');
    const signUp = document.getElementById('sign-up');
    emailId.value = '';
    if (!emailRegex.test(email)) {
        // Display an error message
       
        errorMessage.style.display = 'block';
      } else {
        // Valid email, you can proceed with form submission or other actions
        errorMessage.style.display = 'none';
        signUp.style.display = 'none';
        
        div.style.display = 'block';
        // Uncomment the next line to submit the form
        // document.getElementById("emailForm").submit();
      }
    
})
document.getElementById("dismiss").addEventListener("click", function(){
    const signUp = document.getElementById('sign-up');
    const div = document.getElementById('success');
    signUp.style.display = 'block';
    div.style.display = 'none';
})