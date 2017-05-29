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