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


//funcon que filtrar en base a la busqeda
function filtrarAuto(){ // funcion general para filtra el auto
    const resultado = autos.filter(filtrarMarca).filter(filtrarYear);

    console.log(resultado);
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
    const {year} = datosBusqueda; // se agregan los elementos del objeto para que no se vuelvan a llamar mas
    if(year){ //validamos que marca exista, en este casi si existe y se vale como true
        return auto.year === year; //validamos que el evento de auto.marca sea igual con la marca del objeto
    }else{
        return auto; //si no hay un fltro que muestre todos los datos de los autos
    }
}
