                    // Global scope 
var name = "Saurabh"
console.log(name);
function func(){
    console.log(name)

}
func()


        // Local Scope or function Scope variable 

function func(){
    var num=55
    console.log (num)
}
func()
// console.log(num)



        //  Block Scope 
{var x=20
console.log(x)
}
console.log(x)
