/*******   EJERCICIO 1 *************/
var lista = document.getElementById("teachersList");

var elementos = Array.prototype.slice.call(document.querySelectorAll('ul > li > div > h4'));
var nombres = [];
elementos.forEach(function(item){nombres.push(item.firstChild.data)});
console.log(nombres);
nombres.sort(function(a, b){
  var n = a.toLocaleLowerCase().localeCompare(b.toLocaleLowerCase());
  return n === 0 && a !== b ? b.localeCompare(a) : n;
  /*var nameA=a.toLowerCase(), nameB=b.toLowerCase();
  if (nameA < nameB) //sort string ascending
   return -1;
  if (nameA > nameB)
   return 1;
  return 0; //default return value (no sorting)*/
});
console.log(nombres);




/*******   EJERCICIO 2 *************/
console.log("# Cursos de Fictizia");
var elementos = Array.prototype.slice.call(document.querySelectorAll('#areas .mainWrapper'));
//console.log(elementos);

elementos.forEach(function(item){
  console.log("## " + item.firstElementChild.innerText);
  var numeroCursos = 0;
  console.log("** Total de cursos: "+ item.childNodes[3].childElementCount +" **");
  var hijos = item.childNodes[3].children;
  for(var i=0;i<hijos.length;i++){
    console.log("- "+ hijos[i].innerText+"]("+ hijos[i].firstElementChild.href +")");
  }
});


/*******   EJERCICIO 3 *************/
var elementos = Array.prototype.slice.call(document.querySelectorAll('.bloquet'));
//console.log(elementos);
elementos.forEach(function(item){
  console.log(item.children[1].children[0].innerText);
});

/*******   EJERCICIO 4 *************/

var elementos = Array.prototype.slice.call(document.querySelectorAll('.td-animation-stack-type0-1'));
//console.log(elementos);
elementos.forEach(function(item){
  item.currentSrc =" http://placekitten.com.s3.amazonaws.com/homepage-samples/408/287.jpg";
});
/*******   EJERCICIO 5 *************/
var elementos = Array.prototype.slice.call(document.querySelectorAll('.abstract-date'));
//console.log(elementos);
elementos.forEach(function(item){
  item.innerText =" Ola k ase";
});
