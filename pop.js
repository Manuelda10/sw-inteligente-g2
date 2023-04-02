var btnAbrirPopup = document.getElementById('open'),
  overlay = document.getElementById('overlay'),
  popup = document.getElementById('popup'),
  btnCerrarPopup = document.getElementById('btn-cerrar-popup'),
  btnAbrirChat = document.querySelector('.btn-open-chat');

btnAbrirPopup.addEventListener('click', function () {
  overlay.classList.add('active');
  popup.classList.add('active');
});

btnCerrarPopup.addEventListener('click', function (e) {
  e.preventDefault();
  overlay.classList.remove('active');
  popup.classList.remove('active');
});

const abrir = () => {};

btnAbrirChat.addEventListener('click', abrir);
