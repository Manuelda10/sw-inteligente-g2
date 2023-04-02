var btnAbrirPopup = document.getElementById('open'),
	overlay = document.getElementById('overlay'),
	popup = document.getElementById('popup'),
	btnCerrarPopup = document.getElementById('btn-cerrar-popup'),

	btnAbrirChat = document.querySelector('.btn-open-chat'),
	overlayChat = document.querySelector('.overlay-chat'),
	overlayChatContent = document.querySelector('.overlay-chat-content'),
	btnCerrarChat = document.querySelector('.btn-cerrar-chat');

btnAbrirPopup.addEventListener('click', function(){
	overlay.classList.add('active');
	popup.classList.add('active');
});

btnCerrarPopup.addEventListener('click', function(e){
	e.preventDefault();
	overlay.classList.remove('active');
	popup.classList.remove('active');
});

btnAbrirChat.addEventListener('click', function(){
	console.log("Abriendo chat");
	overlayChat.classList.add('active');
	overlayChatContent.classList.add('active');
});

btnCerrarChat.addEventListener('click', function(e){
	e.preventDefault();
	overlayChat.classList.remove('active');
	overlayChatContent.classList.remove('active');
});

