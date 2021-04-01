const loginBtn = document.querySelector("#login-btn");
const modal = document.querySelector(".modal");

loginBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

modal.addEventListener("click", () => {
  modal.style.display = "none";
});
