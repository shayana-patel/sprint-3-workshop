
// DATATYPES //

name: "SHAYANA"         // string
age = 26                // int
isCool = false           // bool
pets = ["Cooper", "Wes"]  // array

// BUILDING AN OBJECT //

shayana = {
    name: name,
    age: age,
    isCool: isCool,
    pets: pets
}

nakita = {
    name: "NAKITA",
    age: 29,
    isCool: true,
    pets: ["Leo", "Zaki"]
}

brianna = {
    name: "BRIANNA",
    age: 19,
    isCool: true,
}

// WHAT ARE FUNCTIONS //

function printName(person) {
    console.log(person.name)
}
printName(shayana)

function getAge(person) {
    return person.age
}

nakitasAge = getAge(nakita)

console.log(nakitasAge)

function decideIfPersonIsCool(person) {
    
    // if person is cool, console log out that they are cool
    // otherwise, log out that they're not cool

    if (person.isCool) {
        console.log(person.name + " is cool!")
    } else {
        console.log(person.name + " is NOT cool!")
    }
}

decideIfPersonIsCool(shayana)
decideIfPersonIsCool(nakita)
decideIfPersonIsCool(brianna)