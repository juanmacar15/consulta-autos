//variables
const resultado = document.querySelector('#resultado');


///eventos
document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos();
})


//funciones
function mostrarAutos(){
    autos.forEach( auto => {
        const {marca, modelo, year, precio, puertas, color, transmision} = auto
        const autoHTML = document.createElement('p');

        autoHTML.textContent = `
            ${marca} ${modelo} - ${year} - ${precio} - ${puertas} PUERTAS - COLOR: ${color} - TRANSMISIÓN: ${transmision}
        `;

        //insertar en el HTML
        resultado.appendChild(autoHTML);
    });
}