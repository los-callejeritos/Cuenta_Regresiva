//Aqui le daremos funciones basicas
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
  "Deciembre",
];
const semanas = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sábado",
];
const Navidad = document.querySelector(".Navidad");
const contador = document.querySelector(".contador");
const formato = document.querySelectorAll(".formato h4");

// months are ZERO index based;

let temporal = new Date();
let tempAño = temporal.getFullYear();
let tempMes = temporal.getMonth();
let tempDia = temporal.getDate();

//Aqui podemos hacer las modificaciones para establecer
//la fecha en la se culminara la cuenta regresiva
const fechaFinal = new Date(tempAño, tempMes, tempDia + 30, 0, 0, 0);

const año = fechaFinal.getFullYear();
const horas = fechaFinal.getHours();
const minutos = fechaFinal.getMinutes();
let mes = fechaFinal.getMonth();

mes = meses[mes];
const semana = semanas[fechaFinal.getDay()];
const fecha = fechaFinal.getDate();
Navidad.textContent = `La Cuenta Regresiva Termina El ${semana}, ${fecha} ${mes} ${año} ${horas}:${minutos} am`;

const tiempoFinal = fechaFinal.getTime();
function getRemaindingTime() {
  const Hoy = new Date().getTime();

  const t = tiempoFinal - Hoy;
  // 1s = 1000ms
  // 1m = 60s
  // 1hr = 60m
  // 1d = 24hr
  // valores en milisegundos
  const unDia = 24 * 60 * 60 * 1000;
  const unaHora = 60 * 60 * 1000;
  const unMinuto = 60 * 1000;
  // calcular todos los valores
  let dias = t / unDia;
  dias = Math.floor(dias);
  let horas = Math.floor((t % unDia) / unaHora);
  let minutos = Math.floor((t % unaHora) / unMinuto);
  let segundos = Math.floor((t % unMinuto) / 1000);

  // set values array
  const valores = [dias, horas, minutos, segundos];
  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  }

  formato.forEach(function (item, index) {
    item.innerHTML = format(valores[index]);
  });

  if (t < 0) {
    clearInterval(contadora);
    contador.innerHTML = `<h4 class="expiró">Felicidades, ya es Navidad</h4>`;
  }
}
// cuenta regresiva;
let contadora = setInterval(getRemaindingTime, 1000);
//establecer valores iniciales
getRemaindingTime();
