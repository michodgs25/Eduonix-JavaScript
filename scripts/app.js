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
// If statements example end