function getElement() {
  const element = document.getElementsByTagName("h1");
  element[0].innerText = "Cambiado.";
  console.log(element);
}

window.onload = getElement;
