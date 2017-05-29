## Ejercicios


**1 -** Reorganizar la [lista de profesores de Fictizia](http://www.fictizia.com/profesores/) por nombre y apellidos (alfabético)

```javascript
const teachersUl = document.getElementById('teachersList');

const teachersList = teachersUl.childNodes;

let sortedList = Array.from(teachersList).sort(function(a, b) {
  const aText = escape(a.getElementsByTagName("h4")[0].innerText);
  const bText = escape(b.getElementsByTagName("h4")[0].innerText);

  if ( aText < bText )
    return -1;
  if ( aText > bText )
    return 1;
  return 0;
});


const reorderTeachers = () => {
  teachersUl.innerHTML = '';
  for (let item of sortedList) {
    teachersUl.appendChild(item);
  }
}
```


**2 -** Saca una lista de los [cursos disponibles en Fictizia](http://www.fictizia.com/) en las 4 areas de formación y conviertelo en Markdown.
Características:
- Cada Bloque de cursos debe estar identificado por el título correspondiente.
- Cada curso debe contener el enlace al mismo y especificar el número de horas entre parentesis.

```javascript
const areasDiv = document.getElementById('areas');
const areasList = Array.from(areasDiv.getElementsByTagName('section'));


const printSection = (area) => {
  const sectionName = area.getElementsByTagName('h2')[0].innerText;
  console.log('## ' + sectionName);

  const coursesList = Array.from(area.getElementsByTagName('li'));
  console.log('**Total de cursos' + coursesList.length + '**' );

  coursesList.forEach((course) => {
    const name = course.getElementsByTagName('strong')[0].innerText;
    const hours = course.getElementsByClassName('contextualInfo')[0].innerText;
    const url = course.getElementsByTagName('a')[0].href;
    console.log('- [' + name + '('+ hours +')' + '] ('+ url +')');
  })
}

const printCourses = () => {
  console.log('# Cursos de Fictizia');
  areasList.forEach((area) => {
    printSection(area);
  });
}
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
	// Tu solución
```

**4 -**  Diseña un script que sustituya todas las imágenes de las entradas de [Tecnología del Mundo Today](http://www.elmundotoday.com/noticias/tecnologia/) por [imágenes dummy de gatitos](https://placekitten.com/).

```javascript
	// Tu solución
```

**5 -** Diseña un script que agrupe todos los titulares, sus autores y categorias dentro de [Genbeta:dev](http://www.genbetadev.com/) y luego vacíe el html para cargar una lista hecha por nosotros con la información previamente recolectada.

```javascript
	// Tu solución
```