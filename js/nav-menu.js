const burger = document.querySelector('.burger');
const listaItens = document.querySelector(".lista-nav")

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  listaItens.classList.toggle('nav-ativa');
});