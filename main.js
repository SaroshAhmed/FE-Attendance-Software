/*function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form_message");
    messageElement.textContent = message;
    messageElement.classlist.remove("form_message_success","form_message_error" );
    messageElement.classlist.add(`form_message_${type}`);
}
setFormMessage(loginform, "Welcome")

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");

    loginForm.addEventListener("submit", e=> {
        
        setFormMessage(loginForm, "form_message_error", "Invalid Username or Password"); 
 
    })
});*/
