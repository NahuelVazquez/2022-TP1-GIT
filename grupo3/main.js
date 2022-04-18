const label = prompt("Ingresa algun label");

document.getElementById("id-label").innerHTML += label
  ? label.normalize()
  : "No ingresaste nada bro";
