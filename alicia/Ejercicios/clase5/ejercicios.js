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