var animal = 'dog';
function makeZoo() {
  var animal = 'cat';
 
  console.log(`I think I'll put this ${animal} in the zoo.`);
}
makeZoo();
console.log(animal)

function outerFunction() {
  var innerVariable = "I'm sort of a secret.";
 
  return function innerScope() {
    var inaccessible = "Nothing can touch me.";
 
    return innerVariable;
  }
}

var myScope = outerFunction()
(myScope);