
const passwordInput = document.getElementById("password");
const submitBtn = document.getElementById("sub");

const re = /^[A-Za-z]\w{7,14}$/;

const checkPass = (inputTxt) => {
  if (inputTxt.value.match(re)) {
    console.log("good");
    return true;
  } else {
    console.log("false");
    passwordInput.style.border = "2px solid orangered";
    return false;
  }
};

submitBtn.addEventListener("click", (e) => {
  checkPass(passwordInput);
});
