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
        this.efectivo += cantidad;
        this.methods.operaciones.logOperacion("El administrador ha añadido: " + cantidad + " euros");
      },
      retirarDinero: function(cantidad){
        if (cantidad > this.efectivo){
          console.log("No hay disponibilidad de tanto efectivo");
        }else{
          this.efectivo -= cantidad;
          this.methods.operaciones.logOperacion("Se ha retirado " + cantidad + "euros por el administrador");
        }
      }
    },
    administrador: {
      agregarCliente: function(nombre){
        //var posicion = this.clientes.indexOf(undefined);
        var nuevoCliente = {nombre: nombre, saldo:0};
        var posicion = this.methods.operaciones.buscarCliente(this.clientes, nombre, 'nombre');
        if (posicion !== -1){
          this.clientes[posicion] = nuevoCliente;
        }else{
          this.clientes.push(nuevoCliente);
        }
        this.methods.operaciones.logOperacion("Se ha añadido el Cliente: " + nombre);
      },
      eliminarCliente: function(nombre){
        //var posicion = this.clientes.indexOf(nombre);
        var posicion = this.methods.operaciones.buscarCliente(this.clientes, nombre, 'nombre');
        if (posicion !== -1){
          this.clientes[posicion] = undefined;
          this.methods.operaciones.logOperacion("Se ha eliminado el Cliente: " + nombre);
        }else{
          console.error("No existe el cliente");
        }
      }
    },
    cliente:{
      anadirEfectivo: function(cantidad, nombre){
        var posicion = this.methods.operaciones.buscarCliente(this.clientes, nombre, 'nombre');
        if (posicion !== -1){
          var objetoCliente = this.clientes[posicion];
          objetoCliente.saldoCliente += cantidad;
        }else{
          console.error("No existe el cliente");
        }
      },
      retirarEfectivo: function(cantidad, nombre){
        var posicion = this.methods.operaciones.buscarCliente(this.clientes, nombre, 'nombre');
        if (posicion === -1){
          console.error("No existe el cliente");
        }else{
          var objetoCliente = this.clientes[posicion];
          if (cantidad > objetoCliente.saldo){
            console.log("No hay disponibilidad de tanto efectivo");
          }else{
            objetoCliente.saldo -= cantidad;
            this.methods.operaciones.logOperacion("Se ha retirado " + cantidad + "euros por el cliente: " + nombre);
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
