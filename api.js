const api = 'http://localhost:3000';

const form = document.getElementById('contactForm');
const alertDiv = document.getElementById('alert');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // предотвращаем стандартное поведение формы
  alertDiv.classList.remove('tea__alert--show');
  
  const formData = new FormData(event.target);

  const data = Object.fromEntries(formData.entries());

  fetch(`${api}/send-data`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
  })
  .then(response => response.text())
  .then(data => {
      form.reset();
      alertDiv.innerText = data;
      alertDiv.classList.add('tea__alert--show');
  })
  .catch(error => {
      console.error('Ошибка:', error);
      alertDiv.innerText = 'Произошла ошибка при отправке заявки.';
      alertDiv.classList.add('tea__alert--show');
  });
});