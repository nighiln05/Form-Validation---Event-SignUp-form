/* 
    This is the JavaScript code for the functionalities associated with the 
    form validation html page 
*/
document.addEventListener("DOMContentLoaded",function (){
    const form=document.getElementById("registrationForm");
    const submitBtn=document.getElementById("submitBtn");

    function showError(id,message){
        document.querySelector(`#${id}+small`).textContent=message;
    }

    function clearError(id){
        document.querySelector(`#${id}+small`).textContent="";
    }

    function checkForm(){
        const name=document.getElementById("fullName").value.trim();
        const email=document.getElementById("email").value.trim();
        const phone=document.getElementById("phone").value.trim();
        const age=document.getElementById("age").value.trim();

        let valid=true;

        if (name.length<2){
            showError("fullName","Enter atleast 2 characters");
            valid=false;
        }
        else{
            clearError("fullName");
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
            showError("email","Enter a valid email");
            valid=false;
        }
        else{
            clearError("email");
        }

        if (!/^\d{10}$/.test(phone)){
            showError("phone","Enter 10 digit phone number");
            valid=false;
        }
        else{
            clearError("phone");
        }

        if(isNaN(age)||age<18){
            showError("age","Age must be 18 or older");
            valid=false;
        }
        else{
            clearError("age");
        }

        submitBtn.disabled=!valid;
    }

    const inputs=document.querySelectorAll("#registrationForm input");
    inputs.forEach(input=>input.addEventListener("input",checkForm));

    form.addEventListener("submit",function (e){
        e.preventDefault();
        checkForm();
        if(!submitBtn.disabled){
            alert("Successfully submitted the Form");
            form.reset();
            submitBtn.disabled=true;
        }

    });
});