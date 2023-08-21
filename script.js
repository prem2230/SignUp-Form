const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const cPassword = document.getElementById("c-password");

// submit
form.addEventListener('submit',e=>{
    e.preventDefault();
    checkInput();
})
 

// input check
function checkInput(){
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const cPasswordValue = cPassword.value.trim();


    usernameValue === ''?setError(username,"Username can't be Blank"):setSuccess(username)

    emailValue === ''?setError(email, " Email can't be Blank"):!isEmail(emailValue)? setError(email,"Not a valid email"):setSuccess(email)

    passwordValue === '' ? setError(password,"Password can't be Blank") : setSuccess(password)
    
    cPasswordValue === ''?setError(cPassword,"Password can't be Blank"):passwordValue!==cPasswordValue ? setError(cPassword,"Password doesn't Match"):setSuccess(cPassword)
    
    }
    //error function

    function setError(input, message){
        const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;

    }

    // success function
    function setSuccess(input, message){
        const formControl  = input.parentElement;
        formControl.className = "form-control success";
    }


    // email condition
    function isEmail(email){
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    }
