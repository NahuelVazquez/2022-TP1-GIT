const label = prompt('Insert your label')

document.getElementById('id-label').innerHTML += label ? label.toLowerCase() : "no label"