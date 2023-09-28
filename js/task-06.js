const input = document.querySelector("#validation-input");

input.addEventListener("input", () => {
  const isValid = input.value.length === Number(input.dataset.length);
  
  input.classList.remove("valid", "invalid");
  input.classList.add(isValid ? "valid" : "invalid");
});
