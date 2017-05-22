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






