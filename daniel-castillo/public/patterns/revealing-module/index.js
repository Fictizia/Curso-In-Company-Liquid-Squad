var myRevealingModule = (function() {

  var _privateVar = 'I am private',
      publicVar = 'I am public';

  var _privateMethod = function() {
    console.log('I am the private method');
  };

  var publicMethod = function() {
    console.log('Public method gets the private var ' + _privateVar);
  };

  var changePrivateVar = function(newString) {
    _privateVar = newString;
    _privateMethod();
  };

  return {
    something: publicVar,
    publicMethod: publicMethod,
    changeTheVar: changePrivateVar

  };

})();


console.log(myRevealingModule._privateVar); // undefined
console.log(myRevealingModule.something);

myRevealingModule.publicMethod;
myRevealingModule.changeTheVar('New value');

console.log(myRevealingModule.publicMethod());