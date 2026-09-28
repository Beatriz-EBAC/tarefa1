const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', function(event) {
    event.preventDefault();

const campoA = Number(document.getElementById('campoA').value);
const campoB = Number(document.getElementById('campoB').value);

if (campoB > campoA) {
    alert('Formulário válido!');
} else {
    alert('Formulário inválido!');
}

});