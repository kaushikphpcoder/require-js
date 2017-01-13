// Declaring our Animal object
var Animal = function () {

    this.name = 'unknown';

    this.getName = function () {
        return this.name;
    }

    return this;
};

// Declaring our Dog object
var Dog = function () {

    // A private variable here        
    var private = 42;

    // overriding the name
    this.name = "Bello";

    // Implementing ".bark()"
    this.bark = function () {
        return 'MEOW';
    }  

    return this;
};

var Fox= function(){
    this.habit=function(){
        return 'Cleaver Animal';
    }
    return this;
}
// Dog extends animal
Dog.prototype = new Animal();
Fox.prototype = new Dog();  

// -- Done declaring --

// Creating an instance of Dog.
var fox = new Fox();
//console.log(fox.habit());    

// Proving our case

console.log("Is dog an instance of Dog? ", fox instanceof Dog, "\n")
/*console.log(  
    "Is dog an instance of Dog? ", fox instanceof Dog, "\n",
    "Is dog an instance of Animal? ", fox instanceof Animal, "\n",
   // dog.bark() +"\n", // Should be: "MEOW"
   // dog.getName() +"\n", // Should be: "Bello"
   // dog.private +"\n" // Should be: 'undefined'
);
*/

var lib={};
var arr=[];
for(var i=0; i<20;i++){
    arr.push(i=i);
    lib.i=i;
}

//console.log(lib);

for(var keys in lib){
   // console.log('Keys :'+keys+'// Values :'+lib[keys]);
}

var items = [ { id1: 1 }, { id2: 2}, { id3: 3}, { id4: 4 }];

items.forEach(function(keys,value) {
  arr.push(keys=value);
});//alert('inherit')
//console.log(arr)
