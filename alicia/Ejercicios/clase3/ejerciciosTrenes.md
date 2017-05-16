### Ejercicios

> Vamos a crear un sistema de control para el metro. Nuestro objetivo será desarrollar una aplicación para gestionarlo todo. Con este ejercicio nos centraremos en aplicar conceptos básicos de JavaScript

![Foto de trenes](http://estaticos04.elmundo.es/elmundo/imagenes/2010/06/29/1277838432_0.jpg)

**1 -** Imprimimos por consola el estado de cada tren en movimiento de manera individualizada... usando *while*.

```javascript
    var trenesOperativos = 3;
    var totalTrenes = 8;

    function estadoDetalle () {
    	var numeroTren = 1;
    	while(numeroTren <= totalTrenes) {
    		console.log("El tren " + numeroTren + " esta " + (numeroTren <= trenesOperativos ? "funcionando" : "parado"));
    		numeroTren++
    	};
    };
```

- Respuesta esperada (consola):

```
El tren número 1 esta funcionando
El tren número 2 esta funcionando
El tren número 3 esta funcionando
El tren número 4 no esta funcionando
El tren número 5 no esta funcionando
El tren número 6 no esta funcionando
El tren número 7 no esta funcionando
El tren número 8 no esta funcionando
```

**2 -** Imprimimos por consola el estado de cada tren en movimiento de manera individualizada...  usando *Do... While*.

```javascript
var trenesOperativos = 3;
var totalTrenes = 8;

function estadoDetalle () {
  var numeroTren = 1;
  do {
    console.log("El tren " + numeroTren + " esta " + (numeroTren <= trenesOperativos ? "funcionando" : "parado"));
    numeroTren++
  } while (numeroTren <= totalTrenes);
};
```


**3 -** Imprimimos por consola el estado de cada tren en movimiento de manera individualizada...  usando *for*.

```javascript
var trenesOperativos = 3;
var totalTrenes = 8;

function estadoDetalle () {
  var numeroTren = 1;
  for (i=1; i <= totalTrenes; i++) {
    console.log("El tren " + numeroTren + " esta " + (numeroTren <= trenesOperativos ? "funcionando" : "parado"));
    numeroTren++
  }
};

```


**4 - #compliquemos!** Servicio nocturno en el tren 10.
*Nota: Frente al ejercicio anterior, en este caso queremos que siempre que hablemos del
tren 10 se especifique que es nocturno. Independientemente de si esta parado o funcionando.*

```javascript
var trenesOperativos = 3;
var totalTrenes = 15;

function estadoDetalle () {
  var numeroTren = 1;
  for (i=1; i <= totalTrenes; i++) {
    if (numeroTren === 10 ){
    console.log("El tren nocturno " + numeroTren + " esta " + (numeroTren <= trenesOperativos ? "funcionando" : "parado"));        }
    else{
    console.log("El tren " + numeroTren + " esta " + (numeroTren <= trenesOperativos ? "funcionando" : "parado"));
    }
    numeroTren++
  }
};
```


**5 - ¡Refactoricemos!** ¿Y si todos los trenes están en las vías funcionando o por el contrario si ninguno de los trenes esta funcionando?.

```javascript
var trenesOperativos = 5;
var totalTrenes = 10;

function estadoDetalle () {
	if(trenesOperativos === 0){
		console.log("Ningún tren está operativo");
		return
	}

	if(trenesOperativos === totalTrenes){
		console.log("Todos los trenes está operativos");
		return
	}

  for (var i = 1; i <= totalTrenes; i++) {
	  let extraInfo = "";
	  if (i === 10){
		  extraInfo += ". Info: servicio nocturno";
	  }
	  let info = "El tren " + i + " esta " + (i <= trenesOperativos ? "funcionando" : "parado");
	  console.log(info + extraInfo);
  }
};
```

**6 -** El servicio nocturno se queda un poco corto y necesitamos añadir un nuevo tren de refuerzo. El 12 será destinado a cubrir esta necesidad, exactamente igual que el 10 anteriormente.

```javascript
  // Tu solución
```


**7 -** El departamento de Marketing ha decidido lanzar un nuevo servicio los sábados.
 El "tren fiestero" será un tren adaptado a un público más intrépido y funcionará solo en los sábados.
 Este tren será el número 13.

*NOTA: EL TREN 13 SOLO FUNCIONA LOS SÁBADOS. Es necesario incluir el día de la semana en tu código*

```javascript
  // Tu solución
```