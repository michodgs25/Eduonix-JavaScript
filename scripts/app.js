window.alert('JavaScript BRO')


// Scope: 
//Mechanism for concealing variable declarations
// within smaller contexts

//__THIS__: 
//A reference to the current scope

//--------------------SCOPE examples

var amountToAdd = 50

function add22(number) {
    var amountToAdd = 20

    return (function add2(number) {
        var amountToAdd = 2
        return number + amountToAdd // number + 2
    })(number) + amountToAdd // number + 20
}

console.log('1 + 22 = ' + add22(1))
console.log('amountToAdd: ' + amountToAdd) // still 50


var amountToAdd = 50

function add22(number) {
    var amountToAdd = 20

    return (function (number) {
        var amountToAdd = 2
        return number + amountToAdd // number + 2
    })(number) + amountToAdd // number + 20
}

console.log('1 + 22 = ' + add22(1))
console.log('amountToAdd: ' + amountToAdd) // still 50

var numericArray = [1, 20, -1, 4, -70]

function compareNumbers(numberA, numberB) {
    return numberA - numberB
}

numericArray.sort(compareNumbers)
console.log(numericArray)

var numericArray = [1, 20, -1, 4, -70]

numericArray.sort(function compareNumbers(numberA, numberB) {
    return numberA - numberB
})
console.log(numericArray)

var myObject = {
    innerProperty: 'hello',
    getInnerProperty: function () {
        return myObject.innerProperty
    }
}

var getInnerProperty = myObject.getInnerProperty
myObject = {
    innerProperty: 'something completely different'
}

console.log(myObject.innerProperty)
console.log(getInnerProperty())

var differentName = {
    innerProperty: 'hello',
    getInnerProperty: function () {
        return differentName.innerProperty // need to change the name 'myObject => differentName'
    }
}

console.log(differentName.innerProperty)
console.log(differentName.getInnerProperty())

function getInnerProperty() {
    return this.innerProperty
}

var myObject = {
    innerProperty: 'hello',
    getInnerProperty: function () {
        return this.innerProperty // need to change the name 'myObject => differentName'
    }
}

console.log(differentName.innerProperty)
console.log(differentName.getInnerProperty())


var myObject = (function () {
    var innerProperty = 'hello'

    return {
        getInnerProperty: function () {
            return innerProperty
        }
    }
})()
console.log(myObject.getInnerProperty) //undefined because not exposed
console.log(myObject.getInnerProperty())


var myObjectConstructor = function () {
    var innerProperty = 'hello'

    return {
        getInnerProperty: function () {
            return innerProperty
        }
    }
}

var myObject = new myObjectConstructor()
myObject.innerProperty // SHOULD BE UNDEFINED

myObject.getInnerProperty()


var myObjectConstructor = function () {
    var innerProperty = 'hello'


    this.getInnerProperty = function () {
        return innerProperty
    }
    // return this
}

var myObject = new myObjectConstructor()

myObject.getInnerProperty()

var myObject = new myObjectConstructor()

// ---------------------- scope example end

// If statements:
// if the condition is met,
//---------------------executes section of code

// IF STATEMENTS EXAMPLE

if (true) {
    console.log('I show up')
}

if (false) {
    console.log('I do not show up')
}

// TRUTH VALUES
//------ 0 , '' , null, NaN

Boolean('something') // returns true
Boolean('') // empty string
!!('something') // returns true
!!('') // returns false
!!'something' // true
!!'' // false


// '!' NOT OPERATOR
// Converts a value or expression to a Boolean
// And inverts it

// --------- !false => true
// --------- !true => false
// --------- !0 => true
// !'hello' => false
// !!'hello' => true

var name = 'Sarah'
if (name) {
    let name = 'Different name'
    console.log('Name is specified')
}
console.log(name)

if (name) {
    console.log('Name specified')
}

if (!name) {
    console.log('Name is not specified')
}

// if else statement, executes if statement
var name = 'Hi'

if (name) {
    console.log('Name specified')
} else {
    console.log('Name is not specified')
}

// Empty string variable, executes else statement
var name = ''

if (name) {
    console.log('Name specified')
} else {
    console.log('Name is not specified')
}

//empty variable string, 2nd else block executes

var name = ''

if (name) {
    if (name.length > 10) {
        console.log('Name is too long')
    } else {
        console.log('Name specified')
    }
} else {
    console.log('Name is not specified')
}


// Name specified, under ten, 1st else block executes
var name = 'Hello'

if (name) {
    if (name.length > 10) {
        console.log('Name is too long')
    } else {
        console.log('Name specified')
    }
} else {
    console.log('Name is not specified')
}

// Name specified, over ten, if block executes
var name = 'Hello'

if (name) {
    if (name.length > 10) {
        console.log('Name is too long')
    } else {
        console.log('Name specified')
    }
} else {
    console.log('Name is not specified')
}

// Name specified, name is too short, if else runs
var name = 'Mr'

if (name) {
    if (name.length > 10) {
        console.log('Name is too long')
    } else if (name.length < 2) {
        console.log('Name is too short')
    } else {
        console.log('Name specified')
    }
} else {
    console.log('Name is not specified')
}

// Create two variables, measuring name either
// less than 2, or more than 10, name is too short
// thus 1st else if runs
var name = 'M'

if (name) {
    var nameLengthGreaterThan10 = name.length > 10
    var nameLengthLessThan2 = name.length < 2

    if (nameLengthGreaterThan10) {
        console.log('Name is too long')
    } else if (nameLengthLessThan2) {
        console.log('Name is too short')
    } else {
        console.log('Name specified')
    }
} else {
    console.log('Name is not specified')
}

// string name over ten characters, if statement runs
var name = 'Mansnameisfartoolonggawddammit'

if (name) {
    var nameLengthGreaterThan10 = name.length > 10
    var nameLengthLessThan2 = name.length < 2

    if (nameLengthGreaterThan10) {
        console.log('Name is too long')
    } else if (nameLengthLessThan2) {
        console.log('Name is too short')
    } else {
        console.log('Name specified')
    }
} else {
    console.log('Name is not specified')
}

// AND && AND OPERATOR --- a && b
// ------------IF a is truthy, RETURN b
//-------------IF a is not truthy, RETURN a

// 'aaa' && 2 => 2
// 0 && 'something' => 0

'aaa' && 2
0 && 'something'

// apply 'and/&&' operator to check name length
// is greater than 2 and less than 10
// name is greater than 2 and 10 
// Since name is incorrect length, if statement will run
var name = 'Mmmmmmmmmmmmmmmmmmmmmmmmmmm'

if (name) {
    if (name.length > 2 && name.length < 10) {
        console.log('Name is not specified')
    } else {
        console.log('Name is not the correct length')
    }
} else {
    console.log('Name is not specified')
}

// If, else, if else statements examples end

// loop section 

let number = 0
if (number < 10) {
    console.log(number)
    number = number + 1
}
console.log('Finished with number at ' + number)

let x = 5
let y = x++

let number = 0 //  start
while (number < 10) { // condition
    console.log(number) // statement
    number++ // increment
}
console.log('Finished with number at ' + number)

// ------------------ for loop examples

for (let number = 0; number < 10; number++) { // start, condition, increment
    console.log(number)
}

let number = 0
for (; number < 10;) {
    console.log(number)
    number++
}
console.log('Finished with number at ' + number)


for (let number = 0; number < 10; number++) { // break example
    console.log(number) // statement
    if (number == 5) {
        break
    }
}
console.log('Finished with number at ' + number)

for (let number = 0; number < 10; number++) { // continue example
    console.log(number) // statement
    if (number == 5) {
        continue
    }
}
console.log('Finished with number at ' + number)

var number = 0
while (number < 10) { // continue example
    number++ // make sure to increment BEFORE continue statement
    if (number === 5) {
        continue
    }
    console.log(number)
}
console.log('Finished with number at ' + number)

// --------- loop examples end

// Switch statement examples
var value = 2
switch (value) {
    case 2:
        console.log('The value is 2')
        break
    case 3:
        console.log('The value is 3')
}

var a = 2
switch (a) {
    case 2:
        console.log('a is 2')
}

var value = 2
switch (value) {
    case 2:
        console.log('The value is 2')
        break // Used to exits out of the switch statement
    //Any code used after is skipped
    // must be used, as default case variable,
    // executes all code after the case.
    // even if its code that comes after other cases
    case 3:
        console.log('The value is 3')
}


var value = 4 // default clause example
switch (value) {
    case 2:
        console.log('The value is 2')
        break
    case 3:
        console.log('The value is 3')
        break
    default:
        console.log('The value is something else')
}

function displayShapeInfo(shape) {
    console.log(shape + ':')
    switch (shape) {
        case 'circle':
            console.log('The shape has no sides')
            break
        case 'triangle':
            console.log('The shape has three sides')
            break
        case 'square':
            console.log('The shape has four sides')
            break
        case 'rectangle':
            console.log('The shape is rectangular')
            break
        default:
            console.log('Shape must be a polygon of some kind')
    }
}
// ------------Switch end

// DOM Interaction section
var header = document.querySelector('.header')

function updateHeaderText (text) {
    header.innerText = text
}
updateHeaderText('custom header')



// DOM END