function sayHello(name) {
    console.log('Hello ' + name);
}
// sayHello('mosh');


// GLOBAL OBJECTS

// console.log(window);

console.log(); //global scope objects
//setTimeout(); //call a function after a specific delay
//setInterval( ); //call a function repeatedly with a specific interval
//clearInterval(); //stop the function from being called repeatedly

// window.console.log(); where this object is defined, they all belong to the window object
// in node we have the global prefix instead of window
//globalThis.setTimeout();

// variables we define are not added to the global object, their only scope is in this file

// MODULE SECTION

//var sayHello = function() { //in js this would be added to the global scope

//}

// to fix this and not have two functions with the same name override each other in different files,
// we use modules that encapsulate speicific files and functions, like private in oop terms
// every node file has a main module

console.log(module); //hmodule is not a global object

    /*Every module has an id, exports, parent, filename, loaded, children, and paths*/ 


// CREATING MODULES