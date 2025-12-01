const form = document.getElementById("formReserv");

form.addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Réservation envoyée ! Nous vous contacterons rapidement.");
});
const burger = document.querySelector('.burger');
const links = document.querySelector('.links');

burger.addEventListener('click', () => {
  links.classList.toggle('active');
});
