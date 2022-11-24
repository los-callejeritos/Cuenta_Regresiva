const meses = [ 
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Setiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
];
const semanas = [ 
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Sabado",
    "Domingo",
];

const sub_navidad = document.querySelector(".Navidad");
const contador = document.querySelector(".contador");
const formato = document.querySelectorAll(".contador h4");

let fechafinal = new Date(2022, 12, 25, 0, 0, 0);
console.log(fechafinal);

const año = fechafinal.getFullYear();
const horas = fechafinal.getHours();
const minutos = fechafinal.getMinutes();

let mes = fechafinal.getMonth();
mes = meses [mes];
const fecha = fechafinal.getDate();

const semana = semanas[fechafinal.getDay()];

sub_navidad.textContent = `Ya esta cerca la Navidad solo faltan ${semanas}, ${fecha} ${mes} ${año} ${horas}:${minutos}am`;


const tiempofinal = fechafinal.getTime();
console.log(tiempofinal)

function getRemainingTime() {
    const hoy = new Date().getTime();
    const t = tiempofinal - hoy;
    console.log(t);
}

//Equivalencias del tiempo
const un_dia = 24 * 60 * 60 * 1000;
const una_hora = 60 * 60* 1000;
const un_minuto = 60 * 1000;

//teniendo en cuenta ello los valores serian los siguientes
let dias = t / un_dia;
dias = Math.floor(dias);
let hora = t / una_hora;
//falta terminar 
getRemainingTime()