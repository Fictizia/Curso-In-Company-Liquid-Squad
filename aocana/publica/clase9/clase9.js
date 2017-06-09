function guardarDatos(){
  if (!localStorage.getItem(document.getElementById('nombre').value)){
    var objeto = {
      nombre: document.getElementById('nombre').value,
      email: document.getElementById('email').value,
      telefono: document.getElementById('telefono').value
    }
    console.log(objeto);
    localStorage.setItem(document.getElementById('nombre').value, JSON.stringify(objeto));
  }else{
     editarDatos();
   }
   listadoElementos();
}

function editarDatos(){
  if(localStorage.getItem(document.getElementById('nombre').value)){
    var objeto = {
      nombre: document.getElementById('nombre').value,
      email: document.getElementById('email').value,
      telefono: document.getElementById('telefono').value
    }
    localStorage.setItem(document.getElementById('nombre').value, JSON.stringify(objeto));
  }

  listadoElementos();
}

function eliminarElemento(){
  if(localStorage.getItem(document.getElementById('nombre').value)){
    localStorage.removeItem(document.getElementById('nombre').value);
  }
  listadoElementos();
}

function eliminarTodos(){
  for ( var i = 0; i < localStorage.length; i++ ) {
    localStorage.removeItem(localStorage.key( i ));
  }
  listadoElementos();
}

function listadoElementos(){
  document.getElementById('listado').innerHTML = '';
  var elemento = '<ul>';

  for ( var i = 0; i < localStorage.length; i++ ) {
    var item = JSON.parse(localStorage.getItem( localStorage.key( i ) ));
    elemento += "<li><p>Nombre: "+ item.nombre +"</p><p>Email: "+ item.email +"</p><p>Teléfono: "+ item.telefono +"</p></li>";
    //console.log( localStorage.getItem( localStorage.key( i ) ) );
  }
  elemento += "</ul>";
  document.getElementById('listado').innerHTML = elemento;
}
