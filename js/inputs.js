function setUpNewsletter() {
  const form = document.forms["newsletter"];
  const pattern = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const inputContainer = form.querySelector(".input-container");
    const input = inputContainer.querySelector("#email");

    if (pattern.test(input.value)) {
      inputContainer.classList.remove("invalid");
      return;
    }

    inputContainer.classList.add("invalid");
  });
}

export default setUpNewsletter;
