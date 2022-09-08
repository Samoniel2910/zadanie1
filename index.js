function SendMessage() {
   const inputName = document.getElementById("name");
   const inputEmail = document.getElementById("email");
   const inputPhone = document.getElementById("phone");
   if (inputName.value == "" && inputEmail.value == ""){
      inputName.style.outline = inputEmail.style.outline = inputPhone.style.outline = "none";
      inputName.style.borderColor = inputEmail.style.borderColor = inputPhone.style.borderColor = "red";
   }
}