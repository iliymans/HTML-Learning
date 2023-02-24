let eyeIcon = document.querySelector(".fa-solid");
let passInput = document.querySelector(".pass");
if(passInput.value==""){
  eyeIcon.style.display = "none"
}else{
  console.log("object");
}
eyeIcon.addEventListener("click", function () {
  if (passInput.getAttribute("type") == "password") {
    passInput.setAttribute("type", "text");
    eyeIcon.classList.remove("fa-eye");
    eyeIcon.classList.add("fa-eye-slash");
  } else {
    passInput.setAttribute("type", "password");
    eyeIcon.classList.remove("fa-eye-slash");
    eyeIcon.classList.add("fa-eye");
  }
});
