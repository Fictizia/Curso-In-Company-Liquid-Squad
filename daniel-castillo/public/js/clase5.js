// Dar una vuelta a los selectores css

// Echar un ojo a esta web
// http://youmightnotneedjquery.com/

// Leer sobre bubbling de eventos


// var teachersArray = Array.prototype.slice.call(document.getElementById('teachersList').childNodes)
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





