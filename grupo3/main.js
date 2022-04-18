(function (){

const label = prompt('Insert your label')

document.getElementById('render-label').innerHTML += label ? label.toUpperCase() : 'NO LABEL'

const number = prompt('Insert your first number')

const number2 = prompt('Insert your second number')

document.getElementById('sum-label').innerHTML += `${number} + ${number2} = ${Number(number) + Number(number2)}`

}())
