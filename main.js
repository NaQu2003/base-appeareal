
const submitButton = document.querySelector('.submit-button')
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const error = document.querySelector('.error');
const errorIcon = document.querySelector('.error-icon');
const form = document.querySelector('.form');



function checkValid(){
    const emailInput = document.querySelector('.email-input').value

    if(!emailInput.match(emailPattern)){
        error.innerHTML ="Invalid email adress";
        errorIcon.style.display = "block";
        
        return false;
    }else{
        error.innerHTML = 'Submitted';
        
        errorIcon.style.display = "none";
        return true;
    }
    
}
form.addEventListener('submit',(event) =>{
    event.preventDefault();
    checkValid();
})