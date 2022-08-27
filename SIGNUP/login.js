import myNavbar from "../components/navbar.js";
console.log(myNavbar);

let container = document.getElementById("navbar");
container.innerHTML = myNavbar();

import myFooter from "../components/footer.js";
console.log(myFooter);

let contain = document.getElementById("footer");
contain.innerHTML = myFooter();
let formData = JSON.parse(localStorage.getItem("formdetail")) || [];
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let email = form.email.value;
  let password = form.password.value;

  let check = formData.filter((el) => {
    return el.email === email && el.password === password;
  });

  if (check.length > 0) {
    localStorage.setItem("login", "true");
    alert("Login successful!");
    form.reset();
    window.location.href = "landingpage.html";
  } else {
    alert("Wrong credentials");
    form.reset();
  }
});
