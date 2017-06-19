function expresionesEmail(){
  /*
demo@demo.com, demo_demo@demo.com.ar, demo-demo12312@sub.dom.com.ar, demo@novalido, novalido>@demo.com,
demo@novalido-.com, demo@-novalido.com
  */

  var expresionRegular = /^[a-zA-z]+(\-[a-zA-z0-9]+)?@[a-zA-z0-9]+\.[a-zA-Z]{2,4}(\.[a-zA-Z]{2,4})*/g;
}


function expresionesNIFNIE(){
  var expresionRegular = /(^([0-9]{8,8}\-[A-Z])|^)$/;

  var nif = /^[0-9]{8}([-]?)[A-Z]$/g;
  var nie = /^[XYZ]{1}([-]?)[0-9]{7}[A-Z]$/g;

  var coincidencias1 = expresionRegular.test('12345678-A');
  var coincidencias2 = expresionRegular.test('A11223344');
  console.log(coincidencias);
  console.log(coincidencias2);
}

function comprobarPassword(){
  var expresionRegular = (?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$;
  var exp = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{6,20})/gm;
}
