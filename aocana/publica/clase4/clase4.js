var cajero = {
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
      agregarCliente: function(nombre){
        //var posicion = cajero.clientes.indexOf(undefined);
        var nuevoCliente = {nombre: nombre, saldo:0};
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
          objetoCliente.saldoCliente += cantidad;
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
};
