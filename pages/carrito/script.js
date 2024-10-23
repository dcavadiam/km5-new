// const steps = document.querySelectorAll('.step');
// let currentStep = 0;

// function nextStep() {
//     if (currentStep < steps.length) {
//         steps[currentStep].classList.add('completed');
//         currentStep++;
//     }
// }

// // Example of triggering next step every 2 seconds (you can replace this with user interactions)
// setInterval(nextStep, 2000);

// Checkbox entrega

const checkboxDatosEntrega = document.getElementById('datos-entrega');
const entrega = document.getElementById('entrega');

checkboxDatosEntrega.addEventListener('change', () => {
    if (checkboxDatosEntrega.checked) {
        entrega.classList.add('hidden');
    } else {
        entrega.classList.remove('hidden');
    }
});

// finalizar boton

const botonFinalizar = document.getElementById('boton-finalizar');
const datos = document.querySelector('.data')

botonFinalizar.addEventListener('click', () => {
    datos.classList.remove('hidden');
});