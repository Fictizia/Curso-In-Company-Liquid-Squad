var cajero = (function() {
  return{
  empresa: 'Liberbank',
  tipo: '4B',
  materiales: ['plastico', 'metal'],
  tamanyo: ['1', '1.5'],
  moneda: 'eur',
  efectivo: 1000000,
  clientes: [
    {
      nombre: 'Pepito Pérez',
      saldo: 1000
    }
  ],
  methods:{
    usuario_administrador:{
      anadirDinero: function(cantidad){
        cajero.efectivo += parseFloat(cantidad);
        cajero.methods.operaciones.logOperacion("El administrador ha añadido: " + cantidad + " euros");
      },
      retirarDinero: function(cantidad){
        if (parseFloat(cantidad) > cajero.efectivo){
          console.log("No hay disponibilidad de tanto efectivo");
        }else{
          cajero.efectivo -= parseFloat(cantidad);
          cajero.methods.operaciones.logOperacion("Se ha retirado " + cantidad + "euros por el administrador");
        }
      }
    },
    administrador: {
      agregarCliente: function(nombre, cantidad){
        //var posicion = cajero.clientes.indexOf(undefined);
        var nuevoCliente = {nombre: nombre, saldo: cantidad};
        var posicion = cajero.methods.operaciones.buscarCliente(cajero.clientes, nombre, 'nombre');
        if (posicion !== -1){
          cajero.clientes[posicion] = nuevoCliente;
        }else{
          cajero.clientes.push(nuevoCliente);
        }
        cajero.efectivo += parseFload(cantidad);
        cajero.methods.operaciones.logOperacion("Se ha añadido el Cliente: " + nombre);
      },
      eliminarCliente: function(nombre){
        //var posicion = cajero.clientes.indexOf(nombre);
        var posicion = cajero.methods.operaciones.buscarCliente(cajero.clientes, nombre, 'nombre');
        if (posicion !== -1){
          cajero.clientes[posicion] = undefined;
          cajero.methods.operaciones.logOperacion("Se ha eliminado el Cliente: " + nombre);

        }else{
          console.error("No existe el cliente");
        }
      }
    },
    cliente:{
      anadirEfectivo: function(cantidad, nombre){
        var posicion = cajero.methods.operaciones.buscarCliente(cajero.clientes, nombre, 'nombre');
        if (posicion !== -1){
          var objetoCliente = cajero.clientes[posicion];
          if (cantidad > 0){
            objetoCliente.saldoCliente += parseFloat(cantidad);
            cajero.methods.operaciones.logOperacion("Se ha ingresado " + cantidad + "euros por el cliente: " + nombre);
          }else {
            console.error("Introduzca una cantidad");
          }
        }else{
          console.error("No existe el cliente");
        }
      },
      retirarEfectivo: function(cantidad, nombre){
        var posicion = cajero.methods.operaciones.buscarCliente(cajero.clientes, nombre, 'nombre');
        if (posicion === -1){
          console.error("No existe el cliente");
        }else{
          var objetoCliente = cajero.clientes[posicion];
          if (cantidad > objetoCliente.saldo){
            console.log("No hay disponibilidad de tanto efectivo");
          }else{
            objetoCliente.saldo -= parseFloat(cantidad);
            cajero.methods.operaciones.logOperacion("Se ha retirado " + cantidad + "euros por el cliente: " + nombre);
          }
        }
      }
    },
    operaciones:{
      logOperacion: function(mensaje){
        console.info(mensaje);
      },
      buscarCliente: function(myArray, searchTerm, property) {
        for(var i = 0, len = myArray.length; i < len; i++) {
          if (myArray[i][property] === searchTerm) return i;
        }
        return -1;
      },
      calcularCambio: function (cantidad) {
          var registro = "";

          var Peticion = function(cantidad) {
              this.cantidad = cantidad;
              registro += "Pedido: " + cantidad + "€\n";

              this.get = function(valorMoneda) {
                  var cuenta = Math.floor(this.cantidad / valorMoneda);
                  this.cantidad -= cuenta * valorMoneda;

                  if(cuenta !== 0){
                      if(valorMoneda < 5 ) {
                          registro += "Facilita un total de " + cuenta + " monedas de " + valorMoneda + "€\n";
                      } else {
                          registro += "Facilita un total de " + cuenta + " billetes de " + valorMoneda + "€\n";
                      }
                  }
                  return this;
              }
          }

          var peticion = new Peticion(cantidad);

          peticion.get(500).get(200).get(100).get(50).get(20).get(10).get(5) // Billetes
                  .get(2).get(1).get(0.50).get(0.20).get(0.10).get(0.05).get(0.02).get(0.01); // Monedas

          console.log(registro);

      }      
    }
  }
  }
})();


//*  ADMINISTRATOR FUNCTIONS *////
function recargarListaAdmin(){
  document.getElementById('listadoAdmin').innerHTML = '';

  var cadena = "";
  cadena += "<p><strong>Dinero Disponible: </strong>"+ cajero.efectivo +" €</p><br><br>";
  cadena += "<p>Listado de Clientes</p>";
  cadena+= "<ul>";
  cajero.clientes.forEach(function(item){
    cadena += "<li>"+ item.nombre + "</li>";
  });
  cadena+= "</ul>";
  document.getElementById('listadoAdmin').innerHTML = cadena;
}


function adminAnadirDinero(){
  var cantidad = document.getElementById('cantidad').value;
  cajero.methods.usuario_administrador.anadirDinero(cantidad);
  recargarListaAdmin();
  mostrarMensajes("Se ha añadido el dinero correctamente", "info");
}

function retirarDineroAdmin(){
  var cantidad = document.getElementById('cantidad').value;
  cajero.methods.usuario_administrador.retirarDinero(cantidad);
  recargarListaAdmin();
  mostrarMensajes("Se ha retirado el dinero correctamente", "info");
}

/* CLIENT FUNCTIONS */
function clienteAnadirDinero(){
  var nombre = document.getElementById('nombreCliente').value;
  var cantidad = document.getElementById('cantidadCliente').value;
  cajero.methods.cliente.anadirEfectivo(cantidad, nombre);
  mostrarMensajes("Se ha ingresado el dinero correctamente", "info");
}

function retirarDineroCliente(){
  var nombre = document.getElementById('nombreCliente').value;
  var cantidad = document.getElementById('cantidadCliente').value;
  cajero.methods.cliente.retirarEfectivo(cantidad, nombre);
  mostrarMensajes("Se ha retirado dinero correctamente", "info");
}

/* ADMINISTRATOR FUNCTIONS*/

function mostrarMensajes(texto, tipo){
  var clase = "";
  switch(tipo){
    case 'error':
      clase = "danger";
      break;
    case 'info':
      clase = 'success';
      break;
  }
  var cadena = "<div class='alert alert-" + clase + " alert-dismissable'><button type='button' class='close' data-dismiss='alert'>&times;</button>"+ texto +"</div>";

  document.getElementById('alertas').innerHTML = cadena;
};


function anadirCliente(){
  var nombre = document.getElementById('nombreCA').value;
  var cantidad = document.getElementById('cantidad').value;
  cajero.methods.administrador.agregarCliente(nombre,cantidad);
  recargarListaAdmin();
  mostrarMensajes("Se ha añadido el cliente correctamente", "info");
}



/*var appCache = window.applicationCache;



window.addEventListener("offline", function(){
       console.warn("Estas desconectado!")
   });

 window.addEventListener("online", function(){
     console.info("Estas conectado!")
 });*/
