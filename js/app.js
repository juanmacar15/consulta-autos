//variables
const resultado = document.querySelector('#resultado');
const year = document.querySelector('#year');

const max = new Date().getFullYear();
const min = max - 14;

console.log(max);
console.log(min);

///eventos
document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos();// muestra los autos al cargar

    //llenas las opciones de años
    llenarSelect();
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

//genera los años del select
function llenarSelect(){

    for(let i = max; i >= min; i--){
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion); //agrega las opciones de año al select
    }
}