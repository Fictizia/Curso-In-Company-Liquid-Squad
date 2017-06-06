# Clase 11

### Monitorizar Variables Globales

- [Detectar variables globales en Javascript por Carlos Benítez](http://www.etnassoft.com/2011/04/04/detectar-variables-globales-en-javascript/)
```javascript
    /**
    * Snippet Detectar variables globales
    * en Javascript por Carlos Benítez
    */
    (function( context ){
      var globals = { viewGlobals : true },
          startGlobals = [],
          newGlobals = [];

      for (var j in window) {
        globals[j] = true;
        startGlobals.push(j);
      }

      setInterval(function() {
        for ( var j in window ) {
          if ( !globals[j] ) {
            globals[j] = true;
            newGlobals.push(j);
            console.warn( 'New Global: ' + j + ' = ' + window[j] + '. Typeof: ' + (typeof window[j]) );
          }
        }
      }, 1000);

      context.viewGlobals = function(){
        console.groupCollapsed( 'View globals' );
          console.groupCollapsed( 'Initial globals' );
            console.log( startGlobals.sort().join( ",\n" ) );
          console.groupEnd();
          console.groupCollapsed( 'New globals' );
            console.warn( newGlobals.sort().join( ",\n" ) );
          console.groupEnd();
        console.groupEnd();
      };

    })(this);
```


### Colas de Ejecución

- Ejemplo (modificado) de Valentín Starck:
    - [Versión con comentarios](http://blog.aijoona.com/2011/04/30/implementando-colas-de-ejecucion-en-javascript/)
```javascript

    function write(t) {
      console.log(new Date + ' | ' +t);
    }

    var Queue = function() {
      this._tasks = [];
    };

    Queue.prototype.add = function(fn, scope) {
      this._tasks.push({
        fn: fn,
        scope: scope
      });
      return this;
    };

    Queue.prototype.process = function() {
      var proxy, self = this;

      task = this._tasks.shift();

      if(!task) {
        return;
      }

      proxy = {
        end: function() {
          self.process();
        }
      };

      task.fn.call(task.scope, proxy);

      return this;    
    };

    Queue.prototype.clear = function() {
      this._tasks = [];

      return this;
    };

    var q = new Queue();

    // Tarea 1 (sincronica)
    q.add(function(proxy) {
      write('Tarea 1 (sincronica)');
      proxy.end();
    });

    // Tarea 2 (asincronica)
    q.add(function(proxy) {
      write('Tarea 2 (asincronica)');
      setTimeout(function() {
        proxy.end();        
      }, 2500);
    });

    // Tarea 3 (sincronica)
    q.add(function(proxy) {
      write('Tarea 3 (sincronica)');
      proxy.end();
    });

    // Tarea 4 (asincronica)
    q.add(function(proxy) {
      write('Tarea 4 (asincronica)');
      setTimeout(function() {
        proxy.end();        
      }, 2500);
    });

    // Tarea 5 (sincronica)
    q.add(function(proxy) {
      write('Tarea 5 (sincronica)');
      proxy.end();
    });

    q.process();
```
- [Librería QueQue de Valentín Starck](https://github.com/Aijoona/QueQue)


### Callback Hell
-![callback_humor](http://cdn.meme.am/instances/400x/63888921.jpg)
- Callback Hell
    - Escalabilidad limitada
    - Problemas para gestionar errores
    - Anidaciones complejas
    ```javascript
    obj.metodo1(data, function(data1) {  
        function(data1, function(data2) {
            obj.otroMetodo(data2, function(data3) {
                obj.otroMetodoMas(data3, function(data4) {
                    // más y más.....
                })
            })
        })
    })

    ```
### Promesas
![promises_ecma6](https://mdn.mozillademos.org/files/8633/promises.png)
> A promise represents the eventual result of an asynchronous operation. The primary way of interacting with a promise is through its *then* method, which registers callbacks to receive either a promise’s eventual value or the reason why the promise cannot be fulfilled.
> From [promisesaplus.com/](http://promisesaplus.com/)

- Estados:
    - Fulfilled – La acción en relación con la promesa se logró.
    - Rejected – La acción en relación con la promesa falló.
    - Pending – Pendiente, no se ha cumplido o rechazado aún.
    - Settled - Arreglada, se ha cumplido o se ha rechazado (resuelta).

- En ECMA6:
- [Soporte en navegadores](http://caniuse.com/#search=promise)  
    - Una promesa
    ```javascript
        var cuentaPromesas = 0;
        var errorMode = false;
        function testPromesa() {

          var numPromesaActual = ++cuentaPromesas;

          console.warn("Promesa Asíncrona numero ("+numPromesaActual+") - Iniciada")

          var miPromesa = new Promise(
            function(resolve, reject) {       

              console.info("Promesa Asíncrona numero ("+numPromesaActual+") - Proceso asincrónico empezado");

              if(errorMode){
                  reject(numPromesaActual)
              } else{
                window.setTimeout(
                  function() {
                    resolve(numPromesaActual)
                  }, Math.random() * 2000 + 1000);
              }
            });
          miPromesa.then(
            function(val) {
              console.info("Promesa Asíncrona numero ("+val+") - Proceso asincrónico terminado");
              console.warn("Promesa Asíncrona numero ("+numPromesaActual+") - Finalizada");
            }).catch(
              function(val){
                console.error("Promesa Asíncrona numero ("+val+") - ERROR FATAL");
            });
        };

        testPromesa();
    ```
    - Usando *.race()*
    ```javascript   
        var p1 = new Promise(function(resolve, reject) {
            setTimeout(resolve, 500, "uno");
        });
        var p2 = new Promise(function(resolve, reject) {
            setTimeout(resolve, 100, "dos");
        });

        Promise.race([p1, p2]).then(function(value) {
          console.log(value); // "dos" - p2 más rápida
        });
    ```
    - Usando *.all()*
    ```javascript
        var errorMode = false

        var p1 = new Promise(function(resolve, reject) {
          console.log("P1 - Iniciada");
          setTimeout(resolve, 1000, "P1 - Terminada");
        });
        var p2 = new Promise(function(resolve, reject) {
          console.log("P2 - Iniciada");
          setTimeout(resolve, 2000, "P2 - Terminada");
        });
        var p3 = new Promise(function(resolve, reject) {
          if(errorMode){
            reject("errorMode-Activado");
          } else {
            console.log("P3 - Iniciada");
            setTimeout(resolve, 3000, "P3 - Terminada");
          }

        });
        var p4 = new Promise(function(resolve, reject) {
          console.log("P4 - Iniciada");
          setTimeout(resolve, 4000, "P4 - Terminada");
        });

        Promise.all([p1, p2, p3, p4]).then(function(value) {
          console.info("Promise.all -> TODO TERMINADO", value)
        }, function(reason) {
          console.log("Parece... que fallamos!", reason)
        });
    ```
    - Usando Ajax
    ```javascript
        function $http(url){

          var core = {

            ajax : function (method, url, args) {

              var promise = new Promise( function (resolve, reject) {

                var client = new XMLHttpRequest();
                var uri = url;

                if (args && (method === 'POST' || method === 'PUT')) {
                  uri += '?';
                  var argcount = 0;
                  for (var key in args) {
                    if (args.hasOwnProperty(key)) {
                      if (argcount++) {
                        uri += '&';
                      }
                      uri += encodeURIComponent(key) + '=' + encodeURIComponent(args[key]);
                    }
                  }
                }

                client.open(method, uri);
                client.send();

                client.onload = function () {
                  if (this.status >= 200 && this.status < 300) {
                    resolve(this.response);
                  } else {
                    reject(this.statusText);
                  }
                };
                client.onerror = function () {
                  reject(this.statusText);
                };
              });

              return promise;
            }
          };

          // Patrón Adaptador
          return {
            'get' : function(args) {
              return core.ajax('GET', url, args);
            },
            'post' : function(args) {
              return core.ajax('POST', url, args);
            },
            'put' : function(args) {
              return core.ajax('PUT', url, args);
            },
            'delete' : function(args) {
              return core.ajax('DELETE', url, args);
            }
          };
        };

        var callback = {
          success : function(data){
             console.log(1, 'success', JSON.parse(data));
          },
          error : function(data){
             console.log(2, 'error', JSON.parse(data));
          }
        };

        // Prueba bicis
        $http("http://bicimad-api.herokuapp.com/api-v1/locations/")
          .get()
          .then(callback.success)
          .catch(callback.error);

        // Prueba bicis 2
        var bicisCerca = {
          url: 'http://bicimad-api.herokuapp.com/api-v1/locations/nearest/',
          lat: '40.418889',
          long: '-3.691944',
          distance: '1000000000'
        };
        var cercaMio = bicisCerca.url+"?lat="+bicisCerca.lat+"&long="+bicisCerca.long+"&distance="+bicisCerca.distance;

        $http(cercaMio)
          .get()
          .then(callback.success)
          .catch(callback.error);
    ```

- Alternativas para usar promesas:
    - [Q](https://github.com/kriskowal/q)
        - Muy utilizada en Nodejs
        - [Q.js](https://rawgit.com/kriskowal/q/v1/q.js);
        - [Q Docs](https://github.com/kriskowal/q/wiki/API-Reference)
        ```javascript
            function primeraFuncion() {
                var deferred = Q.defer();
                setTimeout(function() {
                    console.info('Primera funcion');
                    deferred.resolve();
                }, 2000);
                return deferred.promise;
            }

            function segundaFuncion() {
                var deferred = Q.defer();
                setTimeout(function() {
                    console.info('Segunda funcion');
                    deferred.resolve();
                }, 1000);
                return deferred.promise;
            }
            Q()
                .then(primeraFuncion)
                .then(segundaFuncion)
                .done();        
        ```

    - [RSVP.js](https://github.com/tildeio/rsvp.js)
    - [When.js](https://github.com/cujojs/when)

**Lectura recomendada: [Pensar asíncronamente en un mundo síncrono by @ulisesGascon](https://medium.com/@ulisesGascon/pensar-as%C3%ADncronamente-en-un-mundo-s%C3%ADncrono-8e25cfcafd83)**


### MVC Convencional

![MVC Convencional](http://cdn.infoq.com/statics_s1_20151222-0055/resource/news/2014/05/facebook-mvc-flux/en/resources/flux-react-mvc.png)

- [Aproximación de Alex Netkachov](https://alexatnet.com/articles/model-view-controller-mvc-javascript)
- [Ejemplo de Alex Netkachov](http://jsfiddle.net/alex_netkachov/ZgBrK/)

### Más Patrones

- [Colección de patrones de Javascript de Shi Chuan](https://github.com/shichuan/javascript-patterns)
- [Libro "Essential Javascript Design Patterns" de Addy Osmani](https://github.com/addyosmani/essential-js-design-patterns)
- [Libro "JavaScript Patterns" de Stoyan Stefanov](http://shop.oreilly.com/product/9780596806767.do)


### Algoritmia

- [Introducción al diseño de algoritmos en Javascript](http://www.etnassoft.com/2011/07/06/introduccion-al-diseno-de-algoritmos-en-javascript/)
- [Algorithm Visualizer](https://github.com/parkjs814/AlgorithmVisualizer)
- [Minimal and clean examples of machine learning algorithms](https://github.com/rushter/MLAlgorithms)
- [Torch implementation of neural style algorithm](https://github.com/jcjohnson/neural-style)
- [Collection of classic computer science paradigms, algorithms, and approaches written in JavaScript.](https://github.com/nzakas/computer-science-in-javascript)
- [JavaScript implementation of different computer science algorithms](https://github.com/mgechev/javascript-algorithms)
- [Atwood's Law applied to CS101 - Classic algorithms and data structures implemented in JavaScript](https://github.com/felipernb/algorithms.js)


### Ejercicios

**2 -** Adaptamos el cajero para que funcione offline

```javascript
    // Tu solución
```