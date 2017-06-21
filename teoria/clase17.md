# Clase 17

### Require.js & AMD

![Require & AMD logo](http://www.dynamicproducts.nl/wp-content/uploads/2016/09/require_logo_big.jpg)

- *Asincronia*

![Asincronia](http://www.codeproject.com/KB/scripting/625262/AMD.png)

- *Dependencias y modularidad*

![Modularidad](http://1.bp.blogspot.com/-RWKQH6r6AQ8/Uutpgj0letI/AAAAAAAAAnk/Rd7hmZ-0-Rg/s1600/fig01.png)


**Entendiendo la utilidad de Require.js**
- Código convencional (Código espagueti):
  - [Código espagueti](https://www.wikiwand.com/es/C%C3%B3digo_espagueti)
  - index.html:
  ```html
    <!doctype html>

    <html lang="en">
    <head>
      <meta charset="utf-8">

      <title>Testing Requirejs</title>


    </head>

    <body>
      <script src="calculadora.js"></script>
    </body>
    </html>
  ```

  - calculadora.js
  ```javascript
  function sumar (x, y) {
      return x+y
  };

  function restar (x, y) {
      return x-y
  };

  function multiplicar (x, y) {
      return x*y
  };


  function dividir (x, y) {
      return x/y
  };
  ```

- Código convencional (Creando un objeto):

  - calculadora.js
  ```javascript
  var calculadora = {};

  calculadora.sumar = function (x,y) {
      return x + y
  };
  calculadora.restar = function (x, y) {
      return x - y
  }
  calculadora.multiplicar = function (x, y) {
      return x * y
  }
  calculadora.divir = function (x, y) {
      return x / y
  }
  ```


- Código convencional (Mejorando la escalabilidad "dividiendo el objeto"):
  - index.html:
  ```html
  <script src="sumar.js"></script>
  <script src="restar.js"></script>
  <script src="divir.js"></script>
  <script src="multiplicar.js"></script>
  ```

  - /sumar.js
  ```javascript
  var calculadora = calculadora || {};
  calculadora.sumar = function (x,y) {
      return x + y
  };
  ```

  - /restar.js
  ```javascript
  var calculadora = calculadora || {};
  calculadora.restar = function (x, y) {
      return x - y
  }
  ```

  - /dividir.js
  ```javascript
  var calculadora = calculadora || {};
  calculadora.divir = function (x, y) {
      return x / y
  }
  ```


  - /multiplicar.js
  ```javascript
  var calculadora = calculadora || {};
  calculadora.multiplicar = function (x, y) {
      return x * y
  }
  ```


**Usando Require.js**
- AMD:
  - [Asynchronous module definition](https://www.wikiwand.com/es/Asynchronous_module_definition)

  - index.html:
  ```html
  <script data-main="calculadora" src="require.js"></script>
  ```
  - /calculadora.js
  ```javascript
  require(['calculadora/sumar', 'calculadora/restar', 'calculadora/cuadrado'], function (sum, res, cua) {
    console.info(sum(1,2)); // 1 + 2
    console.info(res(3,1)); // 3 - 1
    console.log(cua(2)); // 2 * 2
  });
  ```

  - calculadora/sumar.js
  ```javascript
  define(function () {
    return function (x, y) {
        return x + y;
    };
  });
  ```

  - calculadora/restar.js
  ```javascript
  define(function () {
    return function (x, y) {
        return x - y;
    };
  });
  ```

  - calculadora/multiplicar.js
  ```javascript
  define(function () {
    return function (x, y) {
        return x * y;
    };
  });
  ```

  - calculadora/cuadrado.js
  ```javascript
  define(['calculadora/multiplicar'], function (multiplicar) {
    return function (x) {
        return multiplicar(x, x);
    };
  });
  ```


**Require.js - Modo Avanzado**

- Require.js con dependencias externas:
  - vendor/jquery.min.js (en local)

  - script.js
  ```javascript
  require(['vendor/jquery'], function($){
      $('#hola').html("<h1>HOLA! Hola!</h1>");
  });
  ```


- Require.js varios modulos en el mismo archivo:
  - script.js
  ```javascript
  require(['hola', 'adios'], function(hola, adios){
      $('#hola').html("<h1>"+hola+" y "+adios+"!</h1>");
  });
  ```

  - hola.js
  ```javascript
  define(function() {
      return "Hola";
  });

  define('adios', function() {
      return "adios";
  });
  ```

- Require.js configurando baseUrl:

  - Estructura del proyecto:
  ```  
    www/
        /assets/
        /css/
        /js/
            /App/
                main.js
        /vendor/
            bootstrap.js
            jquery.js
  ```

  - config.js:
  ```javascript    
  requirejs.config({
      baseUrl: '.assets/js'
  });
  ```

  - *.js
  ```javascript
  require(['vendor/jquery', 'vendor/bootstrap', 'app/main']);
  ```


- Require.js configurando Paths:

  - Estructura del proyecto:
  ```  
    www/
        /assets/
        /css/
        /js/
            /app/
                main.js
        /vendor/
            bootstrap.js
            jquery.js

  ```  

  - config.js:
  ```javascript
  requirejs.config({
      baseUrl: '.assets/js',
      paths: {
          'jquery': 'vendor/jquery',
          'bootstrap': 'vendor/bootstrap',
          'main': 'app/main'
      }
  });
  ```

  - *.js:
  ```javascript
  require(['jquery', 'bootstrap', 'main']);
  ```


### Webpack

![webpack](http://blog.ogpoyraz.com/content/images/2017/01/Webpack.png)

### Importante

- [Guía de migración de v1.x a v2.x](https://webpack.js.org/guides/migrating/)
- [Comparación (Webpack, require, browserify...)](https://webpack.github.io/docs/comparison.html)

### [Conceptos clave](https://webpack.js.org/concepts/)

- Sistema CLI
- Fichero `webpack.config.js`

**[Entry](https://webpack.js.org/concepts/#entry)**

```javascript
module.exports = {
  entry: './path/to/my/entry/file.js'
};
```


**[Output](https://webpack.js.org/concepts/#output)**
```javascript
const path = require('path');

module.exports = {
  entry: './path/to/my/entry/file.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'my-first-webpack.bundle.js'
  }
};
```

**[Loaders](https://webpack.js.org/concepts/#loaders)**
```javascript
const path = require('path');

const config = {
  entry: './path/to/my/entry/file.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'my-first-webpack.bundle.js'
  },
  module: {
    rules: [
      {test: /\.txt$/, use: 'raw-loader'}
    ]
  }
};

module.exports = config;
```

**[Plugins](https://webpack.js.org/concepts/#plugins)**
```javascript
const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const webpack = require('webpack'); //to access built-in plugins
const path = require('path');

const config = {
  entry: './path/to/my/entry/file.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'my-first-webpack.bundle.js'
  },
  module: {
    rules: [
      {test: /\.txt$/, use: 'raw-loader'}
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new HtmlWebpackPlugin({template: './src/index.html'})
  ]
};

module.exports = config;
```


### [Puntos de entrada (entry)](https://webpack.js.org/concepts/entry-points/)

> 

**[Entrada única](https://webpack.js.org/concepts/entry-points/#single-entry-shorthand-syntax)**
```javascript
const config = {
  entry: './path/to/my/entry/file.js'
};

module.exports = config;
```

**[Entrada única (objeto)](https://webpack.js.org/concepts/entry-points/#object-syntax)**
```javascript
const config = {
  entry: {
    app: './src/app.js',
    vendors: './src/vendors.js'
  }
};
```

**[Separanado app y vendors](https://webpack.js.org/concepts/entry-points/#separate-app-and-vendor-entries)**
```javascript
const config = {
  entry: {
    app: './src/app.js',
    vendors: './src/vendors.js'
  }
};
```

**[Aplicación multipágina](https://webpack.js.org/concepts/entry-points/#multi-page-application)**
```javascript
const config = {
  entry: {
    pageOne: './src/pageOne/index.js',
    pageTwo: './src/pageTwo/index.js',
    pageThree: './src/pageThree/index.js'
  }
};
```

### [Salida (output)](https://webpack.js.org/concepts/output/)

> Options affecting the output of the compilation. output options tell webpack how to write the compiled files to disk. Note that, while there can be multiple entry points, only one output configuration is specified.


### [Cargadores (loaders)](https://webpack.js.org/concepts/loaders/)

> Loaders are transformations that are applied on the source code of a module. They allow you to preprocess files as you require() or “load” them. Thus, loaders are kind of like “tasks” in other build tools, and provide a powerful way to handle front-end build steps. Loaders can transform files from a different language (like TypeScript) to JavaScript, or inline images as data URLs. Loaders even allow you to do things like require() CSS files right in your JavaScript!


### [Plugins](https://webpack.js.org/concepts/plugins/)

> Plugins are the backbone of webpack. webpack itself is built on the same plugin system that you use in your webpack configuration!
> They also serve the purpose of doing anything else that a loader cannot do.

### [Modules (modules)](https://webpack.js.org/concepts/modules/)

> In modular programming, developers break programs up into discrete chunks of functionality called a module.
> Each module has a smaller surface area than a full program, making verification, debugging, and testing trivial. Well-written modules provide solid abstractions and encapsulation boundaries, so that each module has a coherent design and a clear purpose within the overall application.
> Node.js has supported modular programming almost since its inception. On the web, however, support for modules has been slow to arrive. Multiple tools exist that support modular JavaScript on the web, with a variety of benefits and limitations. webpack builds on lessons learned from these systems and applies the concept of modules to any file in your project.



### [Objetivos (targets)](https://webpack.js.org/concepts/targets/)
> Because JavaScript can be written for both server and browser, webpack offers multiple deployment targets that you can set in your webpack configuration.

### [Hot Module Replacement](https://webpack.js.org/concepts/hot-module-replacement/)

> Hot Module Replacement (HMR) exchanges, adds, or removes modules while an application is running, without a full reload. This can significantly speed up development in a few ways:
> - Retain application state which is lost during a full reload.
> - Save valuable development time by only updating what's changed.
> - Tweak styling faster -- almost comparable to changing styles in the browser's debugger.


### ¡Manos a la obra!

**[awesome-webpack](https://github.com/webpack-contrib/awesome-webpack)**
**[Guides](https://webpack.js.org/guides/)**
**[Documentación](https://webpack.js.org/configuration/)**
