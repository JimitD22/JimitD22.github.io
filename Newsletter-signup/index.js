const form = document.querySelector("form");
const signup = document.querySelector(".container.form");
const success = document.querySelector(".container.success");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    signup.classList.toggle("hide");
    success.classList.toggle("hide");
})