// Dar una vuelta a los selectores css

// Echar un ojo a esta web
// http://youmightnotneedjquery.com/

// Leer sobre bubbling de eventos


// 1 - Reorganizar la lista de profesores de Fictizia por nombre y apellidos (alfabético)
// http://www.fictizia.com/profesores/
var teachersArray = Array.from(document.getElementById('teachersList').childNodes)

var teachersArrayOrder = teachersArray.sort(function(a, b) {
	var a = a.getElementsByTagName('h4')[0].innerHTML
	var b = b.getElementsByTagName('h4')[0].innerHTML
 	return a.localeCompare(b)
})

document.getElementById('teachersList').innerHTML = ''

for (var i = 0; i <= teachersArrayOrder.length; i++) {
	if(teachersArrayOrder[i] !== undefined)
		document.getElementById('teachersList').appendChild(teachersArrayOrder[i])
}

// 2 - Saca una lista de los cursos disponibles en Fictizia en las 4 areas de formación y conviertelo en Markdown. 
// Características:
// Cada Bloque de cursos debe estar identificado por el título correspondiente.
// Cada curso debe contener el enlace al mismo y especificar el número de horas entre parentesis.
// http://www.fictizia.com/

var markdown = '# Cursos de Fictizia\n\n'
var trainingAreas = Array.from(document.getElementById('areasIndex').getElementsByTagName('li'))

trainingAreas.forEach(function(area) {

	var title = area.innerText.replace(/\s+/g, ' ')

	markdown += '\n## ' + title + '\n'

	var id = area.getAttribute('id')

	id = id.substring(0, id.indexOf('_')) + '_Area'

	var courses = Array.from(document.getElementById(id).getElementsByTagName('li'))

	markdown += '\n**Total de cursos: ' + courses.length + '**\n'

	courses.forEach(function(course) {
		var href = '(' + course.getElementsByTagName('a')[0].getAttribute('href') + ')'
		var hours = course.getElementsByClassName('contextualInfo')[0].innerText.match( /\d+/ig)
		markdown += '- [' + course.getElementsByTagName('strong')[0].innerText.replace(/\s+/g, ' ') 
					+ ' (' + hours + ' horas)]' 
					+ href + '\n'
	})

})

console.log(markdown)


// 3 - Hagamos la web del Metro más divertida.
// Saca el estado actual de todas las líneas del metro de Madrid por consola.
// https://www.metromadrid.es/es/index.html


var lines = Array.from(document.getElementsByClassName('bloquet'))

lines.forEach(function(line) {
	var status = line.getElementsByTagName('a')[0].innerText
	console.log(status)
})


// 4 - Diseña un script que sustituya todas las imágenes de las entradas 
// de Tecnología del Mundo Today por imágenes dummy de gatitos.
// http://www.elmundotoday.com/noticias/tecnologia/
// https://placekitten.com/

var images = Array.from(document.getElementsByTagName('img'))

images.forEach(function(img) {
	var width = img.clientWidth
	var height = img.clientWidth
	img.src = 'http://placekitten.com/g/' + width + '/' + height
})


// 5 - Diseña un script que agrupe todos los titulares, sus autores y categorias dentro de Genbeta:dev y 
// luego vacíe el html para cargar una lista hecha por nosotros con la información previamente recolectada.
// https://www.genbetadev.com/



