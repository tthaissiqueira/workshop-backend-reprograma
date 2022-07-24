var inputValorHora = document.querySelector('#valorhora');
var inputHoras = document.querySelector('#horas');
var resultado = document.querySelector('#resposta');

function calcularValorHora(){

    var valorHora = inputValorHora.valueAsNumber;
    var horas = inputHoras.valueAsNumber;
    var valorHora = valorHora * horas
    var valorHoraDuasCasas = valorHora.toFixed(2)
    
    valorhora.textContent = valorHoraDuasCasas;
    resultado.textContent = "R$ " + valorHoraDuasCasas;

}