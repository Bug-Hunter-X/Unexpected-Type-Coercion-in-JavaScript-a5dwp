function foo(a,b){
if(typeof a !== 'number' || typeof b !== 'number'){
throw new Error("Both parameters must be numbers");
}
return a+b;}
console.log(foo(1,2)); //3
//console.log(foo(1,"2")); //Throws Error
//console.log(foo(1,[2])); //Throws Error