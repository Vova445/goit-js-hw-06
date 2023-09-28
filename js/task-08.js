const form = document.querySelector('.login-form');

form.addEventListener('submit', function (element) {
  element.preventDefault();
  const { email, password } = this.elements;
  if (!email.value || !password.value) {
    alert('Заповніть усі поля');
  } 
  else {
    const dataObject = {
      email: email.value,
      password: password.value,
    };
 console.log(dataObject);
 this.reset();
}
});
