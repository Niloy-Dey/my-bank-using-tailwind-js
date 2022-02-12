// User login event handaler process
document.getElementById('submit-btn').addEventListener('click', function(event){
     event.preventDefault(); // if form used then some problem show the console so this property used
    // console.log('button is clicked');
    //Get Email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    // console.log(userEmail);
    //Get Password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    // console.log(userPassword);

   if(userEmail == '' && userPassword==''){
        alert('please enter input');
   }
   else{
       window.location.href = 'banking.html';
   }
})


