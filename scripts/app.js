const email = document.getElementById("email");
const username = document.getElementById("username");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const button = document.querySelector("button");


button.addEventListener(
  "click",
  e => {
    e.preventDefault();
    validateInput();
  }
);

function errorDisplay(element, mssg){
  
  const inputControl = element.parentElement;
  const error = inputControl.querySelector('.error');
  error.innerHTML = mssg;

  // inputControl.classList.add('error');
  // inputControl.classList.remove('success')
}

const validateInput = () => {
  person = []
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

  if(usernameValue === '' || usernameValue === null){
    errorDisplay(username, "Username required");
  }


  const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  if(emailValue === '' || emailValue === null){
    errorDisplay(email, "Email required.");
    
  }else if(!isValidEmail(emailValue)){
    errorDisplay(email, "Invalid email address.");
  }
 

  if(passwordValue === '' || passwordValue === null){
    errorDisplay(password, "Please enter the password.");
    
  }else if(passwordValue.length <= 8){
    errorDisplay(password, "Password too short.");

  }else if(passwordValue.length >= 20){
    errorDisplay(password, "Password too long.");

  }




  if(password2Value !== passwordValue){
    errorDisplay(password, "Password did not match.");
  } 
  

  if(username && email && password && password2){
    person.push(username, email, password, password2);
  }else{
    return;
  }

 console.log(person);
}