# Clase 4


### Open Source Weekends (OSWeekends)

![company](https://pbs.twimg.com/media/C-f1SboXsAUksRb.jpg:large)

**Lugar**
- [Ironhack](https://www.google.es/maps/place/Casa+del+Lector/@40.3923033,-3.6996187,17z/data=!3m1!4b1!4m5!3m4!1s0x40658756e5207ea9:0x6f4143e04c9c9d86!8m2!3d40.3923033!4d-3.69743)

**Fecha**
- Sábado, 20 de Mayo. 10:30-14:30

**Contenido**
- Charla de Electrónica con Nodejs [Ulises Gascón (@kom_256)](https://twitter.com/kom_256)
- Charla de polymer 2 [Borja Godoy (@gody11)](https://twitter.com/amil101)

**Apuntate**
- [Meetup](https://www.meetup.com/es-ES/Open-Source-Weekends/events/239491681/)
- [Slack](https://invitations-osweekends.herokuapp.com/)



### POO

- **Programación basada en prototipos**

>La programación basada en prototipos es un estilo de programación orientada a objetos en la que las clases no están presentes y la reutilización de comportamiento (conocido como herencia en lenguajes basados en clases) se lleva a cabo a través de un proceso de decoración de objetos existentes que sirven de prototipos. Este modelo también se conoce como programación sin clases, orientada a prototipos o basada en ejemplos.
>[Mozilla developer network](https://developer.mozilla.org/es/docs/Web/JavaScript/Introducci%C3%B3n_a_JavaScript_orientado_a_objetos)


- **Terminología**

> 
- Clase
	- Define las características del Objeto.
- Objeto
	- Una instancia de una Clase.
- Propiedad
	- Una característica del Objeto, como el color.
- Método
	- Una capacidad del Objeto, como caminar.
- Constructor
	- Es un método llamado en el momento de la creación de instancias.
- Herencia
	- Una Clase puede heredar características de otra Clase.
- Encapsulamiento
	- Una Clase sólo define las características del Objeto, un Método sólo define cómo se ejecuta el Método.
- Abstracción
	- La conjunción de herencia compleja, métodos, propiedades que un objeto debe ser capaz de simular en un modelo de la realidad.
- Polimorfismo
	- Diferentes Clases podrían definir el mismo método o propiedad.
> - [Mozilla developer network](https://developer.mozilla.org/es/docs/Web/JavaScript/Introducci%C3%B3n_a_JavaScript_orientado_a_objetos)


- Entendiendo los objetos:
```javascript
	/*
	[Objeto]{
	    [ Propiedad = Variables (no funciónes) ]
	    [ Método = Solo funciónes ]
	}
	*/
```


- Constructor de Objetos:
```javascript
	var coche = function (parametros) {
	    /* Codigo*/
	};
```


- Propiedades del Objeto:
```javascript
	var coche = function (marca, modelo, antiguedad, color, tipo) {
	    this.marca = marca;
	    this.modelo = modelo;
	    this.antiguedad = antiguedad
	    this.color = color;
	    this.tipo = tipo;
	};
	
	var miCoche = new coche ("Seat", "Panda", 20, "azul", "turismo");
```

- Si hacer uso de this:
```javascript
	var coche = function (marca, modelo, antiguedad, color, tipo) {
	    return {marca, modelo, antiguedad, color, tipo};
	};
	
	var miCoche = new coche ("Seat", "Panda", 20, "azul", "turismo");
```

### Métodos

- En el Constructor
```javascript
	var coche = function (marca, modelo, antiguedad, color, tipo) {
	    this.marca = marca;
	    this.modelo = modelo;
	    this.antiguedad = antiguedad;
	    this.color = color;
	    this.tipo = tipo;
	    this.detalles = function(){
	      console.log("Tu coche es un "+this.marca+" "+this.modelo+" con "+this.antiguedad+" años, clase "+this.tipo+" y color "+this.color);
	    }
	};

	var miCoche = new coche ("Seat", "Panda", 20, "azul", "turismo");
	miCoche.detalles();
```


- Extensión del prototipo
```javascript
	var coche = function (marca, modelo, antiguedad, color, tipo) {
	    this.marca = marca;
	    this.modelo = modelo;
	    this.antiguedad = antiguedad;
	    this.color = color;
	    this.tipo = tipo;
	};

	coche.prototype.detalles = function(){
	  console.log("Tu coche es un "+this.marca+" "+this.modelo+" con "+this.antiguedad+" años, clase "+this.tipo+" y color "+this.color);
	}

	var miCoche = new coche ("Seat", "Panda", 20, "azul", "turismo");
	miCoche.detalles();
```


- Vinculación Externa
```javascript
	var coche = function (marca, modelo, antiguedad, color, tipo) {
	    this.marca = marca;
	    this.modelo = modelo;
	    this.antiguedad = antiguedad;
	    this.color = color;
	    this.tipo = tipo;
	    this.detalles = dameDetalles;
	};

	function dameDetalles(){
	  console.log("Tu coche es un "+this.marca+" "+this.modelo+" con "+this.antiguedad+" años, clase "+this.tipo+" y color "+this.color);
	}

	var miCoche = new coche ("Seat", "Panda", 20, "azul", "turismo");
	miCoche.detalles();
```

### Herencia

- Herencia:
```javascript
	var coche = function (marca, modelo, antiguedad, color, tipo) {
	    this.marca = marca;
	    this.modelo = modelo;
	    this.antiguedad = antiguedad;
	    this.color = color;
	    this.tipo = tipo;
	    this.detalles = dameDetalles;
	};

	var furgon = function (taraMinima, cargaUtil, volumenCarga) {
	    this.taraMinima = taraMinima;
	    this.cargaUtil = cargaUtil;
	    this.volumenCarga = volumenCarga;
	    this.detallesTecnicos = detallesTecnicos;
	};


	function dameDetalles(){
	  console.log("Tu coche es un "+this.marca+" "+this.modelo+" con "+this.antiguedad+" años, clase "+this.tipo+" y color "+this.color);
	}

	function detallesTecnicos(){
	  console.warn("Tu coche tiene una Tara mínima de "+this.taraMinima+". Carga útil de "+this.cargaUtil+" y un volumen de carga de "+this.volumenCarga+"m3");
	}

	var miPickup = new coche ("Land Rover", "Santana Aníbal", 35, "Marrón tierra", "4x4");
	miPickup.prototype = new furgon (1200, 768, 4.5);


	miPickup.detalles();
	miPickup.prototype.detallesTecnicos();
```

- Herencia (simplificada):
```javascript
	var perro  = function () {
	    this.patas = 4;
	    this.ojos = 2;
	};

	var pastorAleman = function () {
	    this.colorLengua = "negra";
	    this.colorOjos = "marrón";
	    this.capacidadTrabajo = true;
	    this.especialidad = "Pastoreo";
	};

	pastorAleman.prototype = new perro();

	var miPerro = new pastorAleman();
	console.log("Número patas: "+miPerro.patas+"\n Número ojos: "+miPerro.ojos+"\n Color Lengua: "+miPerro.colorLengua+"\n Color ojos: "+miPerro.colorOjos+"\n Capacidad de trabajo: "+miPerro.capacidadTrabajo+"\n Especialidad: "+miPerro.especialidad);
```

### POO en detalle

- Privado y público:
```javascript
	var cocheEmpresa = function (marca, modelo, antiguedad, color, tipo) {
	    // públicas
	    this.marca = marca;
	    this.modelo = modelo;
	    this.antiguedad = antiguedad;
	    this.color = color;
	    this.tipo = tipo;
	    
	    // privadas
	    var ITVPasada = true;
	    var ITVfrecuencia = "Cada año";
	    var seguroEnRegla = true;
	    var companySeguros = "SegurExpress";
	    var tipoSeguro = "a terceros";
		
		// Público
		this.dameDetalles = function () {
			console.log("Tu coche es un "+marca+" "+modelo+" con "+antiguedad+" años, clase "+tipo+" y color "+color);
	    }
		
		// Privadas
	    function datosPrivados() {
	        if (ITVPasada && seguroEnRegla)
	            console.info("INFO: Todo en Regla, tienes que pasar la ITV "+ITVfrecuencia+". Tienes un seguro "+tipoSeguro+" con "+companySeguros);
	        else{
	            console.error("ALERTA! El coche no puede usarse. El seguro o la ITV no esta en regla.");
	        }
	    }

	    datosPrivados();
	    this.dameDetalles();
	};

	var miCoche = new cocheEmpresa ("Audi", "S8", 2, "negro", "Berlina");
	var miCoche2 = new cocheEmpresa ("Audi", "S4", 2, "Rojo", "Compacto");
```

- Datos opcionales:
```javascript
	var cocheEmpresa = function (marca, modelo, antiguedad, color) {

	    this.marca = marca || "Seat";
	    this.modelo = modelo || "Ibiza";
	    this.antiguedad = antiguedad || 6;
	    this.color = color || "Azul Corporativo";

		this.dameDetalles = function () {
			console.log("Tu coche es un "+this.marca+" "+this.modelo+" con "+this.antiguedad+" años y color "+this.color);
	    }
		
	    this.dameDetalles();
	};

	var miCoche = new cocheEmpresa ("Audi", "S8", 2, "negro", "Berlina");
	var miCoche2 = new cocheEmpresa ();
	var otroCoche = new cocheEmpresa ("Seat", "Leon");
```


- Creando un ID:
```javascript

	var contador = 0;
	var cocheEmpresa = function (marca, modelo, antiguedad, color, tipo) {

	    this.marca = marca;
	    this.modelo = modelo;
	    this.antiguedad = antiguedad;
	    this.color = color;
	    this.tipo = tipo;
	   	this.id = contador++;
	    	    
	    var ITVPasada = true;
	    var ITVfrecuencia = "Cada año";
	    var seguroEnRegla = true;
	    var companySeguros = "SegurExpress";
	    var tipoSeguro = "a terceros";
		
		this.dameDetalles = function () {
			console.log("Tu coche es un "+marca+" "+modelo+" con "+antiguedad+" años, clase "+tipo+" y color "+color);
	    }
		
	    function datosPrivados() {
	        if (ITVPasada && seguroEnRegla)
	            console.info("INFO: Todo en Regla, tienes que pasar la ITV "+ITVfrecuencia+". Tienes un seguro "+tipoSeguro+" con "+companySeguros);
	        else{
	            console.error("ALERTA! El coche no puede usarse. El seguro o la ITV no esta en regla.");
	        }
	    }

	    function identificador(){
	        console.warn("Recuerda! Tu coche esta identificado como coche numero "+contador);
	    }
		
		
	    datosPrivados();
	    this.dameDetalles();
	    identificador();
	};

	var miCoche = new cocheEmpresa ("Audi", "S8", 2, "negro", "Berlina");
	var otroCoche = new cocheEmpresa ("Audi", "A8", 5, "gris", "Berlina");
	var miCoche2 = new cocheEmpresa ("Seat", "Ibiza", 9, "rojo", "Utilitario");
	console.info("Total de coches de empresa hasta el momento "+contador);
```


- Extensión de objetos nativos (usando prototipos):
```javascript
	var otrosDatos = ["aa", "bb", "cc", "bb"];
	Array.prototype.coincidencias = function(palabra) {
	    var coincidencias = 0;
	    for (var i=0; i<this.length; i++) {
	        if (this[i] == palabra) {
	            coincidencias++;
	        }
	    }
	    console.warn("Se encontraron "+coincidencias+" coincidencia(s) de la palabra");
	};


	var amigos = ["Charlie", "Marco", "Luis", "Jose", "Miguel", "Jose", "Luis", "Oscar"];
	amigos.coincidencias("Jose");
	otrosDatos.coincidencias("dd");
```


### POO Avanzado

- Dominando los Contextos de *this*: 
    - Window:
    ```javascript
        console.log( this === window );
         
        function prueba(){
          console.log( this === window);
        }
         
        prueba();
    ```
    - Otro Contexto:
    ```javascript
        var usuario = {
          nombre : 'Yo',
          apellido : 'Mismo',
          nombreCompleto : this.name + this.lastName,
          metodoNombre: function(){
            return this.nombre + " " + this.apellido
          },
          valorThis: function (){
            console.log(this);
          }
        }
        // ERROR - Undefined  -> this=window
        console.log( usuario.nombreCompleto);
        
        // FUNCIONA - this=usuario
        console.log(usuario.metodoNombre());
        
        // FUNCIONA - this=usuario
        usuario.valorThis();
    ```

- Usando this:
	```javascript
	var objeto = {
	    valor: 0,
	    incrementar: function(incremento){
	       this.valor += incremento;
	    }
	};

	objeto.incrementar(6);
	
	// objeto.valor
	```


- Alternado el valor de this:
	- ERROR!:
	```javascript
	var objeto = {
	    valor: 0,
	    incrementar: function(incremento){
	       function otraFuncion(unValor){
	           this.valor += unValor;
	       }
	       otraFuncion(incremento);
	    }
	};

	objeto.incrementar(6);
	
	// objeto.valor
	```

	- CORRECTO:
	```javascript
	var objeto = {
	    valor: 0,
	    incrementar: function(incremento){
	       var esto = this;
	       function otraFuncion(unValor){
	           esto.valor += unValor;
	       }
	       otraFuncion(incremento);
	    }
	};

	objeto.incrementar(6);
	
	// objeto.valor
	```


- Usando this en Constructor:
	```javascript
	var fabricaPersonas = function(){
	    this.nombre = 'Pepe';
	};

	fabricaPersonas.prototype.mostrarNombre = function(){
	    console.log(this.nombre);
	};

	var miPersona = new fabricaPersonas();
	miPersona.mostrarNombre();
	```


- Usando *.apply()* para modificar el contexto del *this*:
	```javascript
	var fabricaPersonas  = function(){
	    this.nombre = 'Pepe';
	};

	fabricaPersonas.prototype.mostrarNombre = function(){
	    console.log(this.nombre);
	};

	var otroObjeto = {
	    nombre: 'Oscar'
	};

	var miPersona = new fabricaPersonas();
	miPersona.mostrarNombre();
	miPersona.mostrarNombre.apply(otroObjeto);
	```

- Modificación de contexto
    - con *.call()*:
    	```javascript
    	var objeto = {
    	  multiplicador: 2,
    	  sumatorio: function(num1, num2){
    	     return (num1 + num2) * this.multiplicador;
    	  }
    	};
    
    	var resultado = objeto.sumatorio(2,2);
    	console.log(resultado);
    
    
    	var cambio = {
    	  multiplicador: 5
    	};
    
    	var resultado = objeto.sumatorio.call(cambio, 5, 5);
    	console.log(resultado);
    	```
    
    
    - con *.apply()*:
    	```javascript
    	var objeto = {
    	  multiplicador: 2,
    	  sumatorio: function(num1, num2){
    	     return (num1 + num2) * this.multiplicador;
    	  }
    	};
    
    	var resultado = objeto.sumatorio(2,2);
    	console.log(resultado);
    
    
    	var cambio = {
    	  multiplicador: 5
    	};
    
    	var resultado = objeto.sumatorio.apply(cambio, [5,5]);
    	console.log(resultado);
    	```
    
    
    - con *.bind()*:
    	```javascript
    	var objeto = {
    	  multiplicador: 2,
    	  sumatorio: function(num1, num2){
    	     return (num1 + num2) * this.multiplicador;
    	  }
    	};
    
    	var resultado = objeto.sumatorio(2,2);
    	console.log(resultado);
    
    	var cambio = {
    	  multiplicador: 5
    	};
    
    	var cambiandoFuncion = objeto.sumatorio.bind(cambio);
    	var resultado = cambiandoFuncion(5, 5);
    	console.log(resultado);
    
    	```


### Trabajando con prototipos

- .create():
	```javascript
	var coche = {
	    marca: "Seat",
	    modelo: "Panda",
	    antiguedad: 20,
	    color: "azul",
	    tipo: "turismo"
	};

	var clonCoche = Object.create(coche);

	console.log(clonCoche.marca+" "+clonCoche.modelo);
	```


- .isPrototypeOf():
	```javascript
	console.log(coche.isPrototypeOf(clonCoche));
	```


- .constructor():
	```javascript
	function arbol (nombre) {
	   this.nombre = nombre;
	}

	var miArbol = new arbol( "Pino" );
	console.log( "miArbol.constructor es " + miArbol.constructor );
	```


- .toString():
	```javascript
	function Perro(nombre, criadero, color, sexo) {
	   this.nombre=nombre;
	   this.criadero=criadero;
	   this.color=color;
	   this.sexo=sexo;
	}

	var elPerro = new Perro("Gabby","Laboratorio","chocolate","femenino");

	elPerro.toString();

	Perro.prototype.toString = function perroToString() {
	  var retorno = "Perro " + this.nombre + " es " + this.sexo + " " + this.color + " " + this.criadero;
	  return retorno;
	};

	elPerro.toString();
	```


### Ejercicios

# Clase 4

#### Cajero Automático

![cajero automatico](https://news.bitcoin.com/wp-content/uploads/2015/10/Bitcoin-ATM.jpg)

El objetivo de este ejercicio es crear un cajero automático que funcione solamente con la consola del navegador.

- Importante: 
	- No es necesario incluir Html o css
	- No es necesario encapsular el código en una función anónima

- Objetivos:
	- Crear el cajero como un objeto literal
	- Añadir detalles como empresa, tipo, materiales, tamaño, moneda, etc...
	- Añadir métodos para el usuario administrador (añadir y retirar dinero del deposito)
	- Añadir métodos para el administrador (agregar y quitar clientes de la lista de clientes autorizados)
	- Añadir métodos para los clientes (añadir y retirar efectivo)
	- Añadir métodos para validar los clientes (Clientes autorizados) y las cantidades (números reales)

- Objetivos opcionales: 
	- Agrupa las operaciones realizadas en grupos (éxito o fracaso)
	- Crear un sistema de log que registre todas las operaciones que se realizan con la mayor cantidad de detalles
		- Tipo de error - "info" o "error".
		- origen del error - "usuario", "maquina" o "administrador".
		- (opcional) código de error - código de error
		- (opcional) detalles - Descripción del error.
	- Añadir un método para resetear (borrar) el log
		- (opcional) utilizar como parámetro un número que nos permite borrar el log solo si no se llega a una determinada cantidad de operaciones registradas.

- Consejos:
	- Refactoriza a menudo
	- Desarrolla paso a paso, usa comentarios y pseudocódigo si es necesario
	- Mantén el código fácil
	- Utiliza herramientas como [jsHint](http://jshint.com/)

```javascript
	var debugMode = true;

	function logger(mensaje) {
	    if (debugMode) console.info(mensaje)
	}

	var clientesBD = ["Alicia Gutierrez", "Alfonso Gomez", "Luis Navarro", "Oscar Garcia", "Andres Fernandez", "Lucia Mellado"];

	var cajeroAutomatico = {

	    // Propiedades
	    empresaPropietaria: "SuperExpress",
	    modelo: "Al-201",
	    año: 2010,
	    serie: "01 Beta",
	    tipo: "Prototipo",
	    unidadMedida: "metros",
	    alto: 1,
	    ancho: 0.5,
	    largo: 0.5,
	    unidadPeso: "Kg",
	    peso: 600,
	    materiales: ["acero", "plástico", "cables", "circuitos"],
	    clientesAutorizados: clientesBD,
	    moneda: "Euros",
	    dineroDisponible: 65000,
	    volumenMedida: "m3",

	    // Métodos
	    sistema: {
	        /**
	         * Añade información sobre todo lo que ocurre en cajeroAutomatico.log.(logNUMERO).
	         * Actualiza cajeroAutomatico.logTotal con operaciones fallidas y operaciones realizadas.
	         * @param {string} tipo - "info" o "error".
	         * @param {string} origen - "usuario", "maquina" o "administrador".
	         * @param {string} codigo - código de error
	         * @param {string} detalles - Descripción del error.
	         */
	        dataLog: function(tipo, origen, codigo, detalles) {
	            cajeroAutomatico["operaciones fallidas"] = cajeroAutomatico["operaciones fallidas"] || 0;
	            cajeroAutomatico["operaciones realizadas"] = cajeroAutomatico["operaciones realizadas"] || 0;
	            cajeroAutomatico.logTotal = cajeroAutomatico.logTotal || 1;
	            cajeroAutomatico.log = cajeroAutomatico.log || [];
	            cajeroAutomatico.logTotal = cajeroAutomatico["operaciones fallidas"] + cajeroAutomatico["operaciones realizadas"];
	            cajeroAutomatico.log[cajeroAutomatico.logTotal] = [cajeroAutomatico.logTotal, tipo, origen, codigo, detalles]
	        },
	        esCliente: function(nombre) {
	            if (cajeroAutomatico.clientesAutorizados === 0) {
	                logger("La lista esta vacía.");
	                return false;
	            } else {
	                if (cajeroAutomatico.clientesAutorizados.indexOf(nombre) !== -1) {
	                    logger(nombre + " eres cliente de " + cajeroAutomatico.empresaPropietaria);
	                    return true;
	                } else {
	                    logger(nombre + " no encontrado!");
	                    return false;
	                }
	            }
	        },
	        esNumero: function(n) {
	            return !isNaN(parseFloat(n)) && isFinite(n);
	        },
	        operacionRealizada: function() {
	            if (isNaN(cajeroAutomatico["operaciones realizadas"]) || cajeroAutomatico["operaciones realizadas"] === undefined) {
	                cajeroAutomatico["operaciones realizadas"] = 1;
	                logger("Primera operación realizada con éxito!");
	            } else {
	                cajeroAutomatico["operaciones realizadas"]++;
	                logger("La operación #" + cajeroAutomatico["operaciones realizadas"] + " realizada con éxito!");
	            }
	        },
	        operacionFallida: function() {
	            if (isNaN(cajeroAutomatico["operaciones fallidas"]) || cajeroAutomatico["operaciones fallidas"] === undefined) {
	                cajeroAutomatico["operaciones fallidas"] = 1;
	                logger("ERROR: Primera operación fallida!");
	            } else {
	                cajeroAutomatico["operaciones fallidas"]++;
	                logger("ERROR: La operación #" + cajeroAutomatico["operaciones fallidas"] + " fallo!");
	            }
	        },
	        borrandoDatosVacios: function(objeto, propiedad, valorMinimo) {
	            if (objeto[propiedad] <= valorMinimo) {
	                delete objeto[propiedad];
	                return true;
	            } else {
	                return false;
	            }
	        }
	    },
	    administrador: {
	        agregarCliente: function(nombre, lista) {
	            lista.push(nombre);
	            cajeroAutomatico.sistema.operacionRealizada();
	            cajeroAutomatico.sistema.dataLog("info", "administrador", 11, "Ingreso de " + nombre + " a la base de datos de clientes");
	            return true;
	        },
	        quitarCliente: function(nombre, lista) {
	            if (lista.length === 0) {
	                if (debugMode) {
	                    console.log("La lista esta vacía.");
	                }
	                cajeroAutomatico.sistema.operacionFallida();
	                cajeroAutomatico.sistema.dataLog("error", "maquina", 12, "Eliminacion de " + nombre + " fallida. Base de datos, vacía.");
	                return false;
	            } else {
	            	var posicion = lista.indexOf(nombre)
	                if ( posicion !== -1) {
	                    lista.splice(posicion, 1);
	                    logger("El Cliente \"" + nombre + "\" eliminado con éxito!");
	                    logger(lista);
	                    cajeroAutomatico.sistema.operacionRealizada();
	                    cajeroAutomatico.sistema.dataLog("info", "administrador", 13, "Eliminado " + nombre + " de la base de datos de clientes");
	                    return true;
	                } else {
	                    logger("El cliente \"" + nombre + "\" no encontrado!");
	                    cajeroAutomatico.sistema.operacionFallida();
	                    cajeroAutomatico.sistema.dataLog("error", "maquina", 14, "Eliminacion de " + nombre + " fallida. Cliente inexistente.");
	                    return false;
	                }
	            }
	        },
	        agregarDinero: function(cantidad) {
	            if (cajeroAutomatico.sistema.esNumero(cantidad)) {
	                cajeroAutomatico.dineroDisponible = cajeroAutomatico.dineroDisponible + cantidad;
	                cajeroAutomatico.sistema.operacionRealizada();
	                cajeroAutomatico.sistema.dataLog("info", "administrador", 7, "Ingreso de " + cantidad + cajeroAutomatico.moneda);
	                logger("Dinero disponible en el cajero, " + cajeroAutomatico.dineroDisponible);
	                return true;
	            } else {
	                cajeroAutomatico.sistema.operacionFallida();
	                cajeroAutomatico.sistema.dataLog("error", "administrador", 8, "Ingreso fallido por " + cantidad + " - errónea.");
	                logger(cantidad + " No es un numero valido!");
	                return false;
	            }
	        },
	        quitarDinero: function(cantidad) {
	            if (cajeroAutomatico.sistema.esNumero(cantidad)) {
	                cajeroAutomatico.dineroDisponible = cajeroAutomatico.dineroDisponible - cantidad;
	                cajeroAutomatico.sistema.operacionRealizada();
	                cajeroAutomatico.sistema.dataLog("info", "administrador", 9, "Retirada de " + cantidad + cajeroAutomatico.moneda);
	                logger("Dinero disponible en el cajero, " + cajeroAutomatico.dineroDisponible);
	                return true;
	            } else {
	                cajeroAutomatico.sistema.operacionFallida();
	                cajeroAutomatico.sistema.dataLog("error", "administrador", 10, "Retirada fallida por " + cantidad + " - errónea.");
	                logger(cantidad + " No es un numero valido!");
	                return false;
	            }
	        }
	    },
	    cliente: {
	        retirarEfectivo: function(nombre, cantidad) {
	            if (cajeroAutomatico.sistema.esCliente(nombre)) {
	                if (cajeroAutomatico.sistema.esNumero(cantidad)) {
	                    cajeroAutomatico.dineroDisponible = cajeroAutomatico.dineroDisponible - cantidad;
	                    cajeroAutomatico.sistema.operacionRealizada();
	                    cajeroAutomatico.sistema.dataLog("info", "usuario", 1, "Retirada de " + cantidad + cajeroAutomatico.moneda + " por " + nombre);
	                    logger("Dinero disponible en el cajero, " + cajeroAutomatico.dineroDisponible);
	                    return true;
	                } else {
	                    cajeroAutomatico.sistema.operacionFallida();
	                    cajeroAutomatico.sistema.dataLog("error", "usuario", 2, "Retirada fallida por " + cantidad + " errónea. Usuario: " + nombre);
	                    logger(cantidad + " No es un numero valido!");
	                    return false;
	                }
	            } else {
	                cajeroAutomatico.sistema.operacionFallida();
	                cajeroAutomatico.sistema.dataLog("error", "usuario", 3, nombre + " No es cliente");
	                logger(nombre + " No eres un cliente de " + cajeroAutomatico.empresaPropietaria + "!");
	                return false;
	            }
	        },
	        ingresarEfectivo: function(nombre, cantidad) {
	            if (cajeroAutomatico.sistema.esCliente(nombre)) {
	                if (cajeroAutomatico.sistema.esNumero(cantidad)) {
	                    cajeroAutomatico.dineroDisponible = cajeroAutomatico.dineroDisponible + cantidad;
	                    cajeroAutomatico.sistema.operacionRealizada();
	                    cajeroAutomatico.sistema.dataLog("info", "usuario", 4, "Ingreso de " + cantidad + cajeroAutomatico.moneda + " por " + nombre);
	                    logger("Dinero disponible en el cajero, " + cajeroAutomatico.dineroDisponible);
	                    return true;
	                } else {
	                    cajeroAutomatico.sistema.operacionFallida();
	                    cajeroAutomatico.sistema.dataLog("error", "usuario", 5, "Ingreso fallido por " + cantidad + " - errónea. Usuario: " + nombre);
	                    logger(cantidad + " No es un numero valido!");
	                    return false;
	                }
	            } else {
	                cajeroAutomatico.sistema.operacionFallida();
	                cajeroAutomatico.sistema.dataLog("error", "usuario", 6, nombre + " No es cliente");
	                logger(nombre + " No eres un cliente de " + cajeroAutomatico.empresaPropietaria + "!");
	                return false;
	            }
	        }
	    }
	};


	/* Demo

	cajeroAutomatico.administrador.agregarCliente ("yo mismo", clientesBD)
	cajeroAutomatico.administrador.quitarCliente ("yo mismo", clientesBD)
	cajeroAutomatico.administrador.quitarCliente ("yo mismo", clientesBD)
	cajeroAutomatico.administrador.quitarDinero (1000)
	cajeroAutomatico.administrador.quitarDinero ("Mucho!!")
	cajeroAutomatico.administrador.agregarDinero (1000000)
	cajeroAutomatico.administrador.agregarDinero ("Poco!")
	
	cajeroAutomatico.cliente.ingresarEfectivo ("Yo mismo", 1000);
	cajeroAutomatico.cliente.ingresarEfectivo ("Alicia Gutierrez", "Poco!");
	cajeroAutomatico.cliente.ingresarEfectivo ("Alicia Gutierrez", 10);
	cajeroAutomatico.cliente.retirarEfectivo("Yo mismo", 1000)
	cajeroAutomatico.cliente.ingresarEfectivo ("Alicia Gutierrez", "Muchoo!");
	cajeroAutomatico.cliente.ingresarEfectivo ("Alicia Gutierrez", 10000);

	cajeroAutomatico.sistema.borrandoDatosVacios(cajeroAutomatico, "operaciones realizadas", 0);
	
	*/
```