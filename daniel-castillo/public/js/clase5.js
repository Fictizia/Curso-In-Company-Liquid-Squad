// Dar una vuelta a los selectores css

// Echar un ojo a esta web
// http://youmightnotneedjquery.com/

// Leer sobre bubbling de eventos


var teachersArray = Array.prototype.slice.call(document.getElementById('teachersList').childNodes)

var teachersArrayOrder = teachersArray.sort(function(a, b) {
	var a = a.getElementsByTagName('img')[0].getAttribute('src')
	var b = b.getElementsByTagName('img')[0].getAttribute('src')
 	return a < b ? -1 : 1
})

document.getElementById('teachersList').innerHTML = ''

for (var i = 0; i <= teachersArrayOrder.length; i++) {

	if(teachersArrayOrder[i] !== undefined)
		document.getElementById('teachersList').appendChild(teachersArrayOrder[i])
}





