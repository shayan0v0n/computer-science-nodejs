//1 "Function Definition"
// Lets look at a very simple "Function Definition"
// The biggest benefit of function definition over Function Expressions is that they are "Hoisted" by the JavaScript Compiler. This also means that a variable can appear to be used before it's declared. This behavior is called "hoisting",
// as it appears that the variable declaration is moved to the top of the function or global code by the compiler.
// Hoisting is when a JS declaration is lifted (“hoisted”) to the top of it’s scope.
// What this really means is that a variable or function isn’t necessarily declared where you think it is. Function Definition and Variable Declaration are always Hoisted on the top of the Function Scope or Global Scope.
funcDefinition()
function funcDefinition(){
    console.log("This is the function Definition");
}

//2 "Function Expression"
// Lets look at a very simple "Function Expression"
// Since the above function does start the keyword "function", its a "Function Expression"
// The above code assigns a function definition to a variable "funcExpression".
// This would mean that the variable "funcExpression" shall now represent a function definition.
const funcExpression = function(){
    console.log("This is the function Expression")
};
funcExpression()

//3 IIFE (Immediately Invoked Function Expression)
// IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.
// This is a simple function in which anything written inside the function block shall be executed immediately.
// The variable and functions that were declared in the scope of IIFE are available for garbage collection,
// once the IIFE is executed. Hence managing Memory in an efficient manner and ensures that the function and variables do not bind itself to the global scope.
(function(){
    console.log("This is the Immediately Invoked Function Expression (IIFE)")
})();