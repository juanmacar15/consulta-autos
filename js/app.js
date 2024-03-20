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
    mostrarAutos(autos);// muestra los autos al cargar

    //llenas las opciones de años
    llenarSelect();
})

//Events listener para los selects de busqueda
//para marca
marca.addEventListener('change', e => {
    datosBusqueda.marca = e.target.value;
    
    filtrarAuto(); // se ejecuta la funcion para que haga el filtro
})
//para year
year.addEventListener('change', e => {
    datosBusqueda.year = parseInt(e.target.value);

    filtrarAuto(); // se ejecuta la funcion para que haga el filtro
})
//para minimo
minimo.addEventListener('change', e => {
    datosBusqueda.minimo = e.target.value;

    filtrarAuto();
})
//para maximo
maximo.addEventListener('change', e => {
    datosBusqueda.maximo = e.target.value;

    filtrarAuto();
})
//para puertas
puertas.addEventListener('change', e => {
    datosBusqueda.puertas = parseInt(e.target.value);

    filtrarAuto();
})
//para transmision
transmision.addEventListener('change', e => {
    datosBusqueda.transmision = e.target.value;

    filtrarAuto();
})
//para color
color.addEventListener('change', e => {
    datosBusqueda.color = e.target.value;

    filtrarAuto();
})



//funciones
function mostrarAutos(autos){

    limpiarHTML(); //elimina el HTML previo

    autos.forEach( auto => {
        const {marca, modelo, year, precio, puertas, color, transmision} = auto
        const autoHTML = document.createElement('p');

        autoHTML.textContent = `
            ${marca} ${modelo} - ${year} - ${puertas} PUERTAS - TRANSMISIÓN: ${transmision} - PRECIO: ${precio} - COLOR: ${color}
        `;

        //insertar en el HTML
        resultado.appendChild(autoHTML);
    });
}

//limipar html
function limpiarHTML(){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }
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


//funcon que filtrar en base a la busqeda
function filtrarAuto(){ // funcion general para filtra el auto
    const resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor);

    if(resultado.length){
        mostrarAutos(resultado);
    }else{
        noResultado();
    }
}

function noResultado(){

    limpiarHTML();

    const noResultado = document.createElement('div');
    noResultado.classList.add('alerta', 'error');
    noResultado.textContent = "No hay resultados, Intenta con otros terminos de búsqueda";
    resultado.appendChild(noResultado)

}

function filtrarMarca(auto){ //filtro por marca
    const {marca} = datosBusqueda; // se agregan los elementos del objeto para que no se vuelvan a llamar mas
    if(marca){ //validamos que marca exista, en este casi si existe y se vale como true
        return auto.marca === marca; //validamos que el evento de auto.marca sea igual con la marca del objeto
    }else{
        return auto; //si no hay un fltro que muestre todos los datos de los autos
    }
}

function filtrarYear (auto){
    const {year} = datosBusqueda; 
    if(year){ 
        return auto.year === year; 
    }else{
        return auto;
    }
}

function filtrarMinimo(auto){
    const {minimo} = datosBusqueda; 
    if(minimo){ 
        return auto.precio >= minimo; 
    }else{
        return auto;
    }
}

function filtrarMaximo(auto){
    const {maximo} = datosBusqueda; 
    if(maximo){ 
        return auto.precio <= maximo; 
    }else{
        return auto;
    }
}

function filtrarPuertas(auto){
    const {puertas} = datosBusqueda; 
    if(puertas){ 
        return auto.puertas === puertas; 
    }else{
        return auto;
    }
}

function filtrarTransmision(auto){
    const {transmision} = datosBusqueda; 
    if(transmision){ 
        return auto.transmision === transmision; 
    }else{
        return auto;
    }
}

function filtrarColor(auto){
    const {color} = datosBusqueda; 
    if(color){ 
        return auto.color === color; 
    }else{
        return auto;
    }
}