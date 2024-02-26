//variables
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');

//contenedor para los resultados


const resultado = document.querySelector('#resultado');

const max = new Date().getFullYear();
const min = max - 14;

//generar un objeto con la busqueda
const datosBusqueda = {
    marca : '',
    year : '',
    minimo : '',
    maximo : '',
    puertas : '',
    transmision : '',
    color : '',
}


///eventos
document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos();// muestra los autos al cargar

    //llenas las opciones de años
    llenarSelect();
})

//Events listener para los selects de busqueda
//para marca
marca.addEventListener('change', e => {
    datosBusqueda.marca = e.target.value;
    console.log(datosBusqueda);
})
//para year
year.addEventListener('change', e => {
    datosBusqueda.year = e.target.value;
})
//para minimo
minimo.addEventListener('change', e => {
    datosBusqueda.minimo = e.target.value;
})
//para maximo
maximo.addEventListener('change', e => {
    datosBusqueda.maximo = e.target.value;
})
//para puertas
puertas.addEventListener('change', e => {
    datosBusqueda.puertas = e.target.value;
})
//para transmision
transmision.addEventListener('change', e => {
    datosBusqueda.transmision = e.target.value;
})
//para color
color.addEventListener('change', e => {
    datosBusqueda.color = e.target.value;
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