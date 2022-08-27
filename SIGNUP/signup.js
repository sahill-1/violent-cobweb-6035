import myNavbar from "../components/navbar.js";
console.log(myNavbar);

let container = document.getElementById("navbar");
container.innerHTML = myNavbar();

import myFooter from "../components/footer.js";
console.log(myFooter);

let contain = document.getElementById("footer");
contain.innerHTML = myFooter();
class FormData {
  constructor(F, L, E, P, C1, C2) {
    this.first_name = F;
    this.last_name = L;
    this.email = E;
    this.password = P;
    this.check1 = C1;
    this.check2 = C2;
  }
}
let form = document.querySelector("form");
let formData = JSON.parse(localStorage.getItem("formdetail")) || [];
form.addEventListener("submit", function (event) {
  event.preventDefault();
  let first_name = form.first_name.value;
  let second_name = form.second_name.value;
  let email = form.email.value;
  let password = form.password.value;
  let check1 = form.check1.value;
  let check2 = form.check2.value;

  if (first_name === "") {
    alert("First name is required");
    return false;
  }
  if (second_name === "") {
    alert("Last name is required");
    return false;
  }
  if (password.length < 5) {
    alert("Password is required more than 5 words");
    return false;
  }
  let check = formData.filter((el) => {
    return el.email === email;
  });

  if (check.length > 0) {
    alert("User already exists!");
  } else {
    let S1 = new FormData(
      first_name,
      second_name,
      email,
      password,
      check1,
      check2
    );

    formData.push(S1);
    localStorage.setItem("formdetail", JSON.stringify(formData));

    alert("Sign-Up Successfull");
    form.reset();
    window.location.href = "login.html";
  }
});
