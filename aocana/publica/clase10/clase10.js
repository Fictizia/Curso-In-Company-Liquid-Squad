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
        cajero.efectivo += cantidad;
        cajero.methods.operaciones.logOperacion("El administrador ha añadido: " + cantidad + " euros");
      },
      retirarDinero: function(cantidad){
        if (cantidad > cajero.efectivo){
          console.log("No hay disponibilidad de tanto efectivo");
        }else{
          cajero.efectivo -= cantidad;
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
            objetoCliente.saldoCliente += cantidad;
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
            objetoCliente.saldo -= cantidad;
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
      }
    }
  }
  }
})();


//*  ADMINISTRATOR FUNCTIONS *////
function adminAnadirDinero(){
  var cantidad = document.getElementById('cantidad').value;
  cajero.methods.usuario_administrador.anadirDinero(cantidad);
}

function retirarDineroAdmin(){
  var cantidad = document.getElementById('cantidad').value;
  cajero.methods.usuario_administrador.retirarDinero(cantidad);
}

/* CLIENT FUNCTIONS */
function clienteAnadirDinero(){
  var nombre = document.getElementById('nombreCliente').value;
  var cantidad = document.getElementById('cantidadCliente').value;
  cajero.methods.cliente.anadirEfectivo(cantidad, nombre);
}

function retirarDineroCliente(){
  var nombre = document.getElementById('nombreCliente').value;
  var cantidad = document.getElementById('cantidadCliente').value;
  cajero.methods.cliente.retirarEfectivo(cantidad, nombre);
}

/* ADMINISTRATOR FUNCTIONS*/
function anadirCliente(){
  var nombre = document.getElementById('nombreCA').value;
  var cantidad = document.getElementById('cantidad').value;
  cajero.methods.administrador.agregarCliente(nombre,cantidad);
}
