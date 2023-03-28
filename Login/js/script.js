// @iliymans

let eyeIcon = document.querySelector(".fa-solid");
let passInput = document.querySelector("#password");
let userInput = document.querySelector("#username");
eyeIcon.style.display = "none";

passInput.addEventListener("keyup", function () {
  if (passInput.value.length == 0) {
    eyeIcon.style.display = "none";
  } else {
    eyeIcon.style.display = "block";
  }
});

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

function submitBtn() {
  if (userInput.value.length == 0) {
    Swal.fire({
      icon: "error",
      text: "Fill out username",
    });
  }
  if (passInput.value.length < 8) {
    Swal.fire({
      icon: "error",
      text: "Password must be minimum 8 characters",
    });
  } else if (passInput.value.length > 8 && userInput.value.length > 0) {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: "success",
      title: "Signed in successfully",
    });
  }
}
