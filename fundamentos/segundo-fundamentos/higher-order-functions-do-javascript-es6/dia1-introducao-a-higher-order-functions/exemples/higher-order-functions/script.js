// função addEventListerner é uma HOF, porque ela recebe outra função como parâmetro.

const button = document.querySelector('#signup-button');

const registerUser = () => {
  console.log('Registrado com sucesso!');
};

button.addEventListener('click', registerUser);