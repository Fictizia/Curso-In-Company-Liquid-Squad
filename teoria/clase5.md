# Clase 5

### Las funciones son objetos...

```javascript
function miFuncion () {
	console.log("Hola! Soy una función")
}

miFuncion();
console.log("'miFuncion' es una función?", typeof miFuncion === "function");

miFuncion.saludar = function (nombre) {
	console.log("Hola", nombre);
}

miFuncion.propiedad = "Yo mismo"

miFuncion.saludar("amigo");
miFuncion.saludar(miFuncion.propiedad);

console.log("'miFuncion' es una función?", typeof miFuncion === "function");
console.log("'miFuncion.saludar' es una función?", typeof miFuncion.saludar === "function");
console.log("'miFuncion.propiedad' es una cadena?", typeof miFuncion.propiedad === "string");
```


### BOM (Browser Object Model)

![DOM, BOM y JS](http://kottans.org/js-slides/js_dom/img/windowObjects.png)

**window.history**
- propiedades:
```javascript
	history.length
```
- Métodos:
```javascript
	// Ir atras
	history.go(-1);
	history.back();
	
	// Ir adelante
	history.go(1);
	history.forward();
```

**window.navigator**
- Propiedades:
```javascript
	function conversorTiempo(segundos){
		var fecha = new Date(segundos * 1000);
		var hh = fecha.getUTCHours();
		var mm = fecha.getUTCMinutes();
		var ss = fecha.getSeconds();

		if (hh < 10) {hh = "0"+hh;}
		if (mm < 10) {mm = "0"+mm;}
		if (ss < 10) {ss = "0"+ss;}

		return hh+":"+mm+":"+ss;
	}

	function informacionSistema(){
		console.log("appCodeName:", window.navigator.appCodeName);
		console.log("appName:", window.navigator.appName);
		console.log("appVersion:", window.navigator.appVersion);
		console.log("platform:", window.navigator.platform);
		console.log("product:", window.navigator.product);
		console.log("userAgent:", window.navigator.userAgent);
		console.log("javaEnabled:", window.navigator.javaEnabled());
		console.log("language (used):", window.navigator.language);
		console.log("language (support):", window.navigator.languages);
		console.log("conectado a internet?", window.navigator.onLine);
		console.log("mimeTypes:",window.navigator.mimeTypes);
		console.log("Plugins:", navigator.plugins);

		navigator.getBattery().then(function(bateria){
			console.log("Batería cargando?", bateria.charging)
			
			if(bateria.charging){
				console.log("Tiempo de carga:", bateria.chargingTime)
			}
			console.log("Batería %:", bateria.level*100)
			console.log("Tiempo restante:", conversorTiempo(bateria.dischargingTime))

		});

	}
```

**window.screen**
- Propiedades:
```javascript
	function informacionPantalla(){
		console.log("availTop:", window.screen.availTop);
		console.log("availLeft:", window.screen.availLeft);
		console.log("availHeight:", window.screen.availHeight);
		console.log("availWidth:", window.screen.availWidth);
		console.log("colorDepth:", window.screen.colorDepth);
		console.log("height:", window.screen.height);
		console.log("left:", window.screen.left);
		console.log("orientation:", window.screen.orientation);
		console.log("pixelDepth:", window.screen.pixelDepth);
		console.log("top:", window.screen.top);
		console.log("width:", window.screen.width);
	}
```



**Window.location y Document.location**

- Propiedades:
```javascript
	function informacionEnlace(url){
	
		var enlace = document.createElement('a');
		enlace.href = url || 'https://fictizia.com:3000/formacion/curso_javascript?q=JS#contenido-curso';
		
		console.log("href:" ,enlace.href);
		console.log("protocol:", enlace.protocol);
		console.log("host:", enlace.host);
		console.log("hostname:", enlace.hostname);
		console.log("port:", enlace.port);
		console.log("pathname:", enlace.pathname);
		console.log("search:", enlace.search);
		console.log("hash:", enlace.hash);
		console.log("origin:", enlace.origin);
	}
```

- Métodos:
	- .assign() *Carga una página nueva*
	```javascript
		document.location.assign('http://fictizia.com/formacion/curso_javascript');
	```
	- .reload() *Recarga*
	```javascript
		document.location.reload(); // Recarga
		document.location.reload(true); // Recarga sin usar el cache
		document.location.reload(forcedReload); // Recarga SIEMPRE sin usar el cache
	```
	- .replace() *Carga una página nueva, sustituyendo la actual en el historial*
	```javascript
		document.location.replace('http://fictizia.com/formacion/curso_javascript');
	```
	- .toString() *Devuelve el href como cadena*
	```javascript
		var enlace = document.createElement('a');
		enlace.href = 'http://fictizia.com/formacion/curso_javascrip';
		
		console.log("toString:" ,enlace.toString());
	```


### DOM

- **[DOM - Document Object Model](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)**
- **[Element](https://developer.mozilla.org/en-US/docs/Web/API/Element)**
- **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node)**
- **[NodeList](https://developer.mozilla.org/en-US/docs/Web/API/NodeList)**


IMPORTANTE:  Los retornos de *Node.childNodes* y *document.querySelectorAll* - NO son arrays. 

```javascript

var listaDivs = document.querySelectorAll('div');

// Iteración
for (var i = 0; i < listaDivs.length; ++i) {
  var elemento = listaDivs[i];
  console.log("Elemento: ", elemento);
}

// Conversión
var listaDivsArray = Array.prototype.slice.call(listaDivs);
```

### Estilos con Javascript
```javascript
// getter
window.getComputedStyle(document.getElementById("id"));
window.getComputedStyle(document.body).getPropertyValue('display');
// setter
document.body.style.display="none";
document.getElementById("id").style.display="none";
```


### Selectors

- [Soporte](http://caniuse.com/#search=querySelector)

- Convencional:
    - getElementById():
    ```javascript
        // <tag id = "x" >
        document.getElementById("id");
    ```
    
    - getElementsByName():
    ```javascript
        // <tag name = "x" >
        document.getElementsByName("x");
    ```
    
    - getElementsByTagName():
    ```javascript
        // <tag >
        document.getElementsByTagName("input");
    ```

- Selectores CSS3:

    - URL que empieza con "javascript:"
    ```javascript
        a[href^="javascript:"] {color:blue;}
    ```
    
    - URL que contiene "google.es"
    ```javascript
        a[href*="google.es"] {color:orange;}
    ```
    
    - URL que termina con ".pdf"
    ```javascript
        a[href$=".pdf"] {color:red;}
    ```


- Comprobando disponibilidad del API:
```javascript
// op.1 - Positivo

    if( document.querySelector && document.querySelectorAll ){
        console.info("querySelector() y querySelectorAll() estan soportados!!")
    } else {
        console.warn("querySelector() y querySelectorAll() no estan soportados!!")
    }
// op.2 - Negativo

    if( typeof document.querySelector !== "function" && typeof document.querySelectorAll !== "function" ){
        console.warn("querySelector() y querySelectorAll() no estan soportados!!")
    } else {
        console.info("querySelector() y querySelectorAll() estan soportados!!")
    }

```

- querySelector():
Devuelve el primer elemento que coincida con el selector 

```html
    <div id="miDiv">
        <span id="miId5" class="miClase" title="cinco"></span>
        <span id="miId4" class="miClase" title="cuatro"></span>
        <span id="miId3" class="miClase" title="tres"></span>
        <span id="miId2" class="miClase" title="dos"></span>
        <span id="miId1" class="miClase" title="uno"></span>
    </div> 
```

```javascript
    document.getElementById('miId1').title // uno
    document.querySelector('#miDiv .miClase').title // cinco
    document.querySelector('#miDiv #miId1.miClase').title // uno
    document.querySelector('#miDiv .inventado').title // ERROR -> undefined
    document.querySelector('#miDiv .miClase[title^=u]').title // uno
```

- querySelectorAll():
Devuelve todos los elementos que coincida con el selector en un pseudo-array
```javascript
    document.querySelectorAll('#miDiv .miClase') // [<span id="miId5" ... ]
    document.querySelectorAll('p') // todos los parrafos
    document.querySelectorAll('div, img') // todos los divs e imágenes
    document.querySelectorAll('a > img') // todos las imágenes contenidas en enlaces
```

### Conversión a Arrays

- Mas info en [Convert NodeList to Array de David Walsh](https://davidwalsh.name/nodelist-array)
```javascript

//Opción 1
var nodesArray = Array.prototype.slice.call(document.querySelectorAll("div"));

//Opción 2
var nodesArray = [].slice.call(document.querySelectorAll("div"));
```

### Trabajar sin JQuery

- **[You Might Not Need Jquery](http://youmightnotneedjquery.com/)**
- **[You Might Not Need Jquery(en GitHub)](https://github.com/HubSpot/youmightnotneedjquery)**


### Extras

- [15 JavaScript Methods For DOM Manipulation for Web Developers](http://www.hongkiat.com/blog/dom-manipulation-javascript-methods/)
- [The Basics of JavaScript DOM Manipulation](http://callmenick.com/post/basics-javascript-dom-manipulation)


### Eventos

- [Soporte](http://caniuse.com/#search=addEventListener)

- Podemos escuchar eventos y enlazar funciones (*event handler*)
![img_pro_bu](http://i.stack.imgur.com/liJ5u.png)
- [Demo](http://jsfiddle.net/L79xw5ye/)
- Propagación:
	- *Capturing* desde *document* hasta el elemento
	- *Target* impacta el elemento
	- *Bubbling* sube desde el elemento hasta *document*
	 

- Usando Eventos (Tradicional)
	- Solo una función por evento
	```html
		<button onclick="cambiarFondo()">Cambia el fondo</button>
	```
	
	```javascript
		function cambiarFondo() {
		
		// color = 'rgb(0-255,0-255,0-255'
		var color = 'rgb(' + Math.floor((Math.random() * 255))+ ',';
		color += Math.floor((Math.random() * 255)) + ',';
		color += Math.floor((Math.random() * 255)) + ')';
		
		document.body.style.backgroundColor= color;
		}
	```

- Usando Eventos (Callbacks)
	- Multiples funciones por evento
	- Necesidad de compatibilizar para IE8 
	```javascript
		// Callback - Manejador de Eventos
		function manejadorEventos(elEvento) {
		  	// Compatibilizar el evento
		  	var evento = elEvento || window.event;
		  	// Imprimir detalles
		  	console.log("-----------------------------")
		  	console.log("Type: "+evento.type); // Tipo
		  	console.log("Bubbles: "+evento.bubbles);
		  	console.log("Cancelable: "+evento.cancelable);
		  	console.log("CurrentTarget: ", evento.currentTarget);
			console.log("DefaultPrevented: "+evento.defaultPrevented);
			console.log("EventPhase: "+evento.eventPhase);
			console.log("Target: ", evento.target);
			console.log("TimeStamp: "+evento.timeStamp);
			console.log("IsTrusted: "+evento.isTrusted); // true - Usuario o false - Script
			console.log("=============================")
			// Desactivamos
			if (document.removeEventListener){ 
				document.removeEventListener('click', manejadorEventos, false);
				console.info("Listener quitado con exito");
			} else { // IE8
				document.detachEvent('onclick', manejadorEventos);
				console.info("Listener quitado con exito");
			}

		}
		
		// Añadimos Listener
		if (document.addEventListener){ 
			document.addEventListener('click', manejadorEventos, false);
			console.info("Listener añadido con exito");
		} else if (document.attachEvent){ // IE8
			document.attachEvent('onclick', manejadorEventos);
			console.info("Listener añadido con exito");
		} else {
			document.onclick = manejadorEventos;
			console.info("Listener añadido con exito");
		}
	```	

- Dominando el flujo
	- *.preventDefault()* evita el comportamiento por defecto (ex: Link -> nueva URL)
	- *.stopPropagation()* evita la propagación por el DOM (bubble) pero permite la acción por defecto.
	- *[Unable to understand useCapture attribute in addEventListener](http://stackoverflow.com/questions/7398290/unable-to-understand-usecapture-attribute-in-addeventlistener)*


- Gestión vs. Delegación de eventos
	- Gestión (asociar un evento por elemento)
	```html
		<ul id="miNav">
			 <li><a href="#nosotros">¿Quienes Somos?</a></li>
			 <li><a href="#objetivos">Los objetivos</a></li>
			 <li><a href="#equipo">Nuestro Equipo</a></li>
			 <li><a href="#detalles">Más detalles</a></li>
			 <li><a href="#contacta">Contactanos</a></li>
		</ul>
	```
	```javascript
	   var miNav = document.getElementById("miNav");
	   var miNavLinks = miNav.getElementsByTagName("a");
	   for (var i = 0; i < miNavLinks.length; i++) {
	     miNavLinks[i].onclick = function(){
	        console.info(this.innerHTML);
	     }
	   }
	```
	- Delegación (asociar un único evento al padre de los elementos)
	```html
		<ul id="miNav">
			 <li><a href="#nosotros">¿Quienes Somos?</a></li>
			 <li><a href="#objetivos">Los objetivos</a></li>
			 <li><a href="#equipo">Nuestro Equipo</a></li>
			 <li><a href="#detalles">Más detalles</a></li>
			 <li><a href="#contacta">Contactanos</a></li>
		</ul>
	```
	```javascript
	   var miNav = document.getElementById("miNav");
	   miNav.onclick = function(evento){
	      var evento = evento || window.event;
	      var elemento = evento.target || evento.srcElement;
	      console.info(elemento.innerHTML);
	   }
	```

### Programación dirigida a eventos

> La programación dirigida por eventos es un paradigma de programación en el que tanto la estructura como la ejecución de los programas van determinados por los sucesos que ocurran en el sistema, definidos por el usuario o que ellos mismos provoquen.

> Para entender la programación dirigida por eventos, podemos oponerla a lo que no es: mientras en la programación secuencial (o estructurada) es el programador el que define cuál va a ser el flujo del programa, en la programación dirigida por eventos será el propio usuario —o lo que sea que esté accionando el programa— el que dirija el flujo del programa. Aunque en la programación secuencial puede haber intervención de un agente externo al programa, estas intervenciones ocurrirán cuando el programador lo haya determinado, y no en cualquier momento como puede ser en el caso de la programación dirigida por eventos. [Wikiwand](https://www.wikiwand.com/es/Programaci%C3%B3n_dirigida_por_eventos)

- **Ejemplo:**
	```javascript
		var eventos = {
			agregar: null,
			quitar: null,
			manejador: function(evento) {
		        console.group("Manejador de Eventos");
			        console.log("-----------------------------");
		            console.log("Type: " + evento.type); // Tipo
		            console.log("Bubbles: " + evento.bubbles); // sube por el DOM
		            console.log("Cancelable: " + evento.cancelable);
		            console.log("CurrentTarget: ", evento.currentTarget);
		            console.log("DefaultPrevented: " + evento.defaultPrevented);
		            console.log("EventPhase: " + evento.eventPhase);
		            console.log("Target: ", evento.target);
		            console.log("TimeStamp: " + evento.timeStamp);
		            console.log("IsTrusted: " + evento.isTrusted); // true - Usuario o false - Script
		            console.log("=============================");
		        console.groupEnd();
		    }
		}
		
		// Init-time branching (Patrón)
		if (typeof window.addEventListener === 'function') {
		    eventos.agregar = function(el, type, fn) {
		    	el.addEventListener(type, fn, false);
			};
		    eventos.quitar = function(el, type, fn) {
		    	el.removeEventListener(type, fn, false);
		    };
		} else { // Soporte para IE8
		    eventos.agregar = function(el, type, fn) {
		        el.attachEvent('on' + type, fn);
		    };
		    eventos.quitar = function(el, type, fn) {
		        el.detachEvent('on' + type, fn);
		    };
		}
		
		eventos.agregar(document.body, 'click', function (e) {
			var color = 'rgb(' + Math.floor((Math.random() * 255))+ ',';
			color += Math.floor((Math.random() * 255)) + ',';
			color += Math.floor((Math.random() * 255)) + ')';
			document.body.style.backgroundColor= color;
			console.info("Nuevo color:", color);
		})
	```

### Eventos (custom)
```javascript
document.body.addEventListener("eventoCustom", function(e) {
	
	console.info("Detalles del evento: ", e);
	console.info("Información adiccional: ", e.detail);
	e.detail.metodo1();
});

var miEvento = new CustomEvent("eventoCustom", {
  detail: {
    dato1: "Hola!",
    metodo1: function(){
        console.log(this.dato1);
    }
  }
});

document.body.dispatchEvent(miEvento);
```

- [Soporte](http://caniuse.com/#search=customEvent)



### Ejercicios


**1 -** Reorganizar la [lista de profesores de Fictizia](http://www.fictizia.com/profesores/) por nombre y apellidos (alfabético)

**Solución Parcial**
```javascript
	var profesoresData = "";
	var profesores = Array.prototype.slice.call(document.querySelectorAll('#teachersList > li'));
	
	profesores.sort(function (a, b) {
	    if (a.innerText < b.innerText)
	        return -1;
	    if (a.innerText > b.innerText)
	        return 1;
	    return 0;
	});
	
	profesores.forEach(function(profesor){
	  profesoresData += profesor.outerHTML;
	})
	
	document.getElementById('teachersList').innerHTML = profesoresData;
```

**Solución Total**
```javascript
	//@see: https://davidwalsh.name/sorting-strings-accented-characters
	var profesoresData = "";
	var profesores = Array.prototype.slice.call(document.querySelectorAll('#teachersList > li'));
	
	profesores.sort(function (a, b) {
	    return a.innerText.localeCompare(b.innerText);
	});
	
	profesores.forEach(function(profesor){
	  profesoresData += profesor.outerHTML;
	})
	
	document.getElementById('teachersList').innerHTML = profesoresData;
```



**2 -** Saca una lista de los [cursos disponibles en Fictizia](http://www.fictizia.com/) en las 4 areas de formación y conviertelo en Markdown. 
Características:
- Cada Bloque de cursos debe estar identificado por el título correspondiente.
- Cada curso debe contener el enlace al mismo y especificar el número de horas entre parentesis.

```javascript
	// Simular el Click (Opcional)
	document.getElementById('web_Tab').click();
	
	var areas = document.querySelectorAll('#areas > section');
	var markdown = "# Cursos de Fictizia\n\n";
	
	for (var i = 0; areas.length > i; i++) {
	
	    var area = areas[i].querySelectorAll('li > a');
	    markdown += "## " + areas[i].querySelector('h2').innerText.trim() + "\n\n";
	    markdown += "**Total de cursos: " + area.length + "**\n";
	  
	    for (var j = 0; area.length > j; j++) {
	            var link = area[j].getAttribute("href");
	            var horas = area[j].querySelector(".contextualInfo").innerText.trim();
	                horas = horas.replace("Curso de ", "").replace("Workshop de ").replace("Master de ", "").replace("undefined", "");
	            var titulo = area[j].querySelector("strong").innerText.trim();
	            var curso = "- [" + titulo + " (" + horas + ")](" + link + ")\n";
	            markdown += curso;
	    }
	    markdown += "\n\n"
	}
	
	console.log(markdown);
```

- Respuesta esperada (consola):

```
	# Cursos de Fictizia
	
	## Cursos de Diseño interactivo & Desarrollo Web
	
	**Total de cursos: 13**
	- [Master en Diseño de interfaz y Front-end con HTML5, CSS3 y jQuery (150 horas)](http://www.fictizia.com/formacion/master_interfaz_frontend_html5_css3_jquery)
	- [Curso de Diseño de interfaz en proyectos Web, Apps y Smart TV (45 horas)](http://www.fictizia.com/formacion/curso_diseno_interfaz_web_apps_smart_tv)
	- [Curso de JavaScript para desarrolladores web (45 horas)](http://www.fictizia.com/formacion/curso_javascript)
	- [Curso de JavaScript Avanzado para desarrolladores Front-end (72 horas)](http://www.fictizia.com/formacion/curso_javascript_avanzado)
	- [Curso de Node.js para desarrolladores Front-end (24 horas)](http://www.fictizia.com/formacion/curso_nodejs)
	- [Curso de AngularJS (30 horas)](http://www.fictizia.com/formacion/curso_angularjs)
	- [Curso de Maquetación web con HTML5 y CSS3 (60 horas)](http://www.fictizia.com/formacion/curso_frontend_html5_css3)
	- [Curso de JQuery para maquetadores web (36 horas)](http://www.fictizia.com/formacion/curso_programacion_jquery)
	- [Curso de Wordpress esencial (24 horas)](http://www.fictizia.com/formacion/wordpress_esencial)
	- [Curso de WordPress (45 horas)](http://www.fictizia.com/formacion/curso_wordpress_profesionales)
	- [Curso de Programación PHP (45 horas)](http://www.fictizia.com/formacion/curso_php_mysql)
	- [Curso de PHP Avanzado con Laravel (36 horas)](http://www.fictizia.com/formacion/curso-laravel-php-avanzado)
	- [Curso de React + Redux (30 horas)](http://www.fictizia.com/formacion/curso-react-js-redux)
	
	## Cursos de Producción 3D & Efectos visuales
	...
```

**3 -** Hagamos la [web del Metro](https://www.metromadrid.es/es/index.html) más divertida.
- Saca el estado actual de todas las líneas del metro de Madrid por consola.

```javascript
	var lineas = document.querySelectorAll('.bloquet');
	
	for (var i = 0; i < lineas.length; i++) {
	  var estado = lineas[i].querySelector('.circulacion > .txt > a');
	  
	  if(!estado) estado = lineas[i].querySelector('.circulacion > .r > a');
	  
	  if(estado) console.log(estado.innerText.trim());
	  
	}
```

**4 -**  Diseña un script que sustituya todas las imágenes de las entradas de [Tecnología del Mundo Today](http://www.elmundotoday.com/noticias/tecnologia/) por [imágenes dummy de gatitos](https://placekitten.com/).

```javascript
		var imagenes = document.querySelectorAll('.td-module-thumb img');
		var imagenesLog = [];
		for(var i = 0; i < imagenes.length; i++){
			var url = document.querySelectorAll('.td-module-thumb img')[i].src;
			var ancho = document.querySelectorAll('.td-module-thumb img')[i].width;
			var alto = document.querySelectorAll('.td-module-thumb img')[i].height;
			var sustituto = "http://lorempixel.com/"+ancho+"/"+alto+"/cats";
			var datos = [url, ancho, alto, sustituto]
			imagenesLog.push(datos);
			document.querySelectorAll('.td-module-thumb img')[i].src = sustituto;
		}
```

**5 -** Diseña un script que agrupe todos los titulares, sus autores y categorias dentro de [Genbeta:dev](http://www.genbetadev.com/) y luego vacíe el html para cargar una lista hecha por nosotros con la información previamente recolectada.

```javascript
	var datos = [];
	var plantilla = "";
	
	for(var i = 0; i < document.querySelectorAll(".article-home-header a").length -1; i++){
		var autor;
		var titular;
		var categorias;
	
		// Autor 
		if(document.querySelectorAll(".article-author a")[i]){
			autor = document.querySelectorAll(".article-author a")[i].innerHTML
		} else {
	 		autor = "Desconocido"
		}
	
		// Titular
		if(document.querySelectorAll(".article-home-header a")[i]){
			titular = document.querySelectorAll(".article-home-header a")[i].innerHTML
		} else {
			titular = "Sin título"
		}
	
		// Categorias
		if(document.querySelectorAll(".article-category a")[i]){
			categorias = document.querySelectorAll(".article-category a")[i].innerHTML
		} else {
			categorias = "Sin categorizar"
		}
	
		datos.push([ autor, titular, categorias]);
	
		plantilla += '<h1>Titular: '+titular+'</h1>';
		plantilla += '<h3>Autor: '+autor+'</h3>';
		plantilla += '<p>Categoria: '+categorias+'</p>';
	};
	
	document.body.innerHTML = plantilla;
```