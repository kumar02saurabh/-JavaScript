let name ="Saurabh"
let city ="Haridwar"
console.log(name , city)
console.log(typeof name,)

// Assesing Charatcter In String 
console.log (name[0])
console.log(name[5])
console.log(name[11]) //Gives undefined B/C there uis only 7 character 


//  Find the length Of String 
console.log (name.length)
console.log(city.length)

// Join The two string 
let firstName = "Saurabh"
let MiddleName = ' kumar'
let lastName = " Yadav"
let fullName=firstName.concat(MiddleName,lastName)
console.log(fullName)
console.log(firstName+MiddleName+lastName)


//  Convert String into Upper case

console.log(name.toUpperCase())

// Character at any index
console.log(firstName.charAt(3))

// Slicing
console.log(fullName)
console.log(fullName.slice(2))
console.log(fullName.slice(2,5))
console.log(firstName.slice(-5))
console.log(firstName.slice(-2,-5))

//  IndexOf

console.log(name.indexOf('h'))
console.log(name.indexOf('z'))

// Trim
let word='  New York'
console.log(word)
console.log(word.trim())

// Split
console.log(fullName.split(""))



