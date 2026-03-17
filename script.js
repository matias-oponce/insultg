const sujetos = [
  "Sos más inútil que",
  "sos mas pajero que",
  "Sos más puto que",
  "Sos más duro que",
  "Tenés menos onda que"
];

const comparaciones = [
  "el tole mirando por la cerradura",
  "un velorio apagado",
  "una tortuga con sueño",
  "pan de hace 3 días",
  "radio sin antena",
  "WiFi del subte",
  "teclado sin teclas"
];

function generarInsulto() {
  const s = sujetos[Math.floor(Math.random() * sujetos.length)];
  const c = comparaciones[Math.floor(Math.random() * comparaciones.length)];

  const resultado = `${s} ${c}`;
  document.getElementById("insulto").innerText = resultado;
}

function copiar() {
  const texto = document.getElementById("insulto").innerText;
  navigator.clipboard.writeText(texto);
  alert("Copiado!");
}

function compartir() {
  const texto = document.getElementById("insulto").innerText;
  const url = `https://wa.me/?text=${encodeURIComponent(texto)}`;
  window.open(url, "_blank");
}
