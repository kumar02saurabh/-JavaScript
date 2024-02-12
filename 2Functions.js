function hellostudents(){
    console.log("Hello Students!")
}
hellostudents()



      // Add Two number by using function
function sum(a,b){
    return a+b
}
console.log(sum(5,6))





// Subtract  Two number by using function
function sub(a,b){
    return a-b
}
console.log(sub(5,2))


// concept of Undefined 
function sum(a,b){
    return a+b
}
console.log(sum(5))


                // Concept of default 
function sum(a,b=5){
    return a+b
}
console.log(sum(3))



                 // Arguments as object 
function func(){
console.log(arguments)
}
func(1,2,3,4,5)



                    //  Arrow Functions 

var hello =()=>console.log("Hello Students")
hello()


            // Function with parametre & Return
var sum=(a,b)=> a+b
console.log(sum(5,3))

        // Function with parametre multiple lines of function body 
var process =(a,b)=> {
    console.log ("Need to process")
    return a*b
}
console.log(process(5,6))









