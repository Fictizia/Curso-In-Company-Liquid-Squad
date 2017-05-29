var trenes = 13;
var trenesFuncionando = 3;
var diaFiestero = "Sábado";

var trenesFuncionando = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var trenesNocturnos = [10, 12];
var trenesFiesteros = [13];

var pasajeros = ["Pedro Jiménez", "Carlos Rubio", "María Moreno", "Perico Palotes"];
var asientos = [1, 2, 3, 4];

var reservas = [];
// Primera parte del ejercicio
/*for(var i = 1;i<=trenes;i++){
  if (i === 10){
    console.log("El tren 10 es nocturno");
  }else{
    if (i <= trenesFuncionando){
      console.log("El tren número " + i + " está funcionando")
    }else{
      console.log("El tren número " + i + " no está funcionando");
    }
  }
}*/

//Refactorización con trenes funcionando y trenes fiesteros
/*for (var i = 1;i<=trenes;i++){
  if (trenesNocturnos.indexOf(i) !== -1){
    console.log("El tren " + i + " es nocturno" );
  }else if (trenesFiesteros.indexOf(i) !== -1){
    console.log("El tren " + i + " es un tren fiestero y funciona el " + diaFiestero);
  }else if (trenesFuncionando.indexOf(i) !== -1){
    console.log("El tren " + i + " está funcionando");
  }else{
    console.log("El tren " + i + " no está funcionando");
  }
}*/

//Refactorización con pasajeros
function anadirElementoLista(elemento, lista){
  var listaTemp = lista;

  listaTemp.push(elemento);

  return listaTemp;
}

function eliminarElementoLista(elemento, lista){
  var listaTemp = lista;
  if (listaTemp.length== 0){
    console.log("La lista está vacía");
    return;
  }

  var posicion = listaTemp.indexOf(elemento);
  if (posicion !== -1){
    listaTemp.splice(posicion, 1);
  }

  return listaTemp;
}


//mejor con forEach
for (var i = 0;i<pasajeros.length;i++){
  console.log("El pasajero " + pasajeros[i] + " tiene el asiento: " + (i+1));
}

console.log("\n\n\n");
anadirElementoLista("Juan Gómez", pasajeros);
var valor = asientos.length + 1;
asientos.push(valor);

for (var i = 0;i<pasajeros.length;i++){
  console.log("El pasajero " + pasajeros[i] + " tiene el asiento: " + (i+1));
}

console.log("\n\n\n");
eliminarElementoLista("Carlos Rubio", pasajeros);

for (var i = 0;i<pasajeros.length;i++){
  console.log("El pasajero " + pasajeros[i] + " tiene el asiento: " + (i+1));
}

function reservar(usuario, asiento){
  var reserva = {
    persona: usuario,
    asiento: asiento
  };
  reservas.push(reserva);
}

//para el ejercicio 11
function calculador(x) {
  return function(y) {
    return x + y;
  };
}

//variables último ejercicio
var tetuan = calculador(12); //Closure
var moncloa = calculador(19); //Closure
var hortaleza = calculador(21); //Closure
