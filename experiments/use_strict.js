// Strict mode is declared by adding "use strict"; to the beginning of a script or a function.
// Declared at the beginning of a script, it has global scope (all code in the script will execute in strict mode):
"use strict"
const x = 3.14;       // Normally, this will not cause an error, but it will result in a global variable being declared.
myFunction();

function myFunction() {
  "use strict";
  const y = 3.14;   // This will cause an error
}

// in normal JavaScript, mistyping a variable name creates a new global variable. In strict mode, this will throw an error, 
// making it impossible to accidentally create a global variable.
// In strict mode, any assignment to a non-writable property, a getter-only property, a non-existing property, 
// a non-existing variable, or a non-existing object, will throw an error.

// Deleting objects/variables is not allowed
// let z = 3.14;
// delete z;                // This will cause an error

// The this keyword in functions behaves differently in strict mode.

// The this keyword refers to the object that called the function.

// If the object is not specified, functions in strict mode will return undefined and functions in normal mode will return the global object (window):

function myFunction() {
  console.log(this); // will log "undefined"
}
myFunction();

// Any assignment that silently fails in normal code (assignment to a non-writable global or property, assignment to a getter-only property, 
// assignment to a new property on a non-extensible object) will throw in strict mode