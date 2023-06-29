const form = document.getElementById("meu-formulario");

form.addEventListener("submit", function (event) {
  const emailInput = document.getElementById("email");
  const numberInput = document.getElementById("number");
  const passwordInput = document.getElementById("password");
  const confirmPasswordInput = document.getElementById("confirmPassword");

  const emailValidacao = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const numberValidacao = /^\(\d{2}\)\s\d{5}-\d{4}$/;
  const passwordValidacao =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;

  if (!emailValidacao.test(emailInput.value)) {
    event.preventDefault();
    alert("Por favor, insira um email válido.");
  }

  if (!numberValidacao.test(numberInput.value)) {
    event.preventDefault();
    alert("Por favor, insira um número válido. (xx) xxxxx-xxxx");
  }

  if (!passwordValidacao.test(passwordInput.value)) {
    event.preventDefault();
    alert(
      "A senha deve conter pelo menos 8 caracteres, incluindo pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial."
    );
  }

  if (passwordInput.value !== confirmPasswordInput.value) {
    event.preventDefault();
    alert("As senhas não coincidem. Por favor, verifique novamente.");
  }
});

form.addEventListener("submit", function (event) {
  const genderInputs = document.querySelectorAll('input[name="gender"]');
  let genderSelected = false;

  genderInputs.forEach(function (input) {
    if (input.checked) {
      genderSelected = true;
    }
  });

  if (!genderSelected) {
    event.preventDefault();
    alert("Por favor, selecione uma opção de gênero.");
  }
});
