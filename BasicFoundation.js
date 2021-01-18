//Write a function that returns an array with all the numbers from 1 to 255.
function createArray(num) {
    var newArray = []
    for (var i = 1; i <= num; i++) {
        newArray.push(i)
    }
    return newArray
}
console.log(createArray(255))

//Write a function that would get the sum of all the even numbers from 1 to 1000.  You may use a modulus operator for this exercise.
console.log(problem2)

function sum(num) {
    var sum = 0
    for (i = 1; i <= num; i++) {+        
        if (i % 2 == 0)
            sum = sum + i
    }
    return sum
}
console.log(sum(10))

//Write a function that returns the sum of all the odd numbers from 1 to 5000. (e.g. 1+3+5+...+4997+4999).

function sumOdd() {
    sum = 0
    for (i = 1; i <= 5000; i++) {
        if (i % 2 != 0)
            sum = sum + i;
    }
    return sum
}
console.log(sumOdd())

//Write a function that returns the sum of all the values within an array. (e.g. [1,2,5] returns 8. [-5,2,5,12] returns 14).

function sumArray() {
    var myArray = [3, 5, 6, 3, 9, -3]
    sum = 0
    for (i = 0; i < myArray.length; i++) {
        sum = sum + myArray[i]
    }
    return sum;
}
console.log(sumArray())

//Given an array with multiple values, write a function that returns the maximum number in the array. (e.g. for [-3,3,5,7] max is 7)

function findMax(numArray) {
    for (i = 0; i < numArray.length; i++) {
        var y = Math.max(...numArray)
    }
    return y
}
console.log(findMax([1, 2, 4, 6, 7]))

//Given an array with multiple values, write a function that returns the average of the values in the array. (e.g. for [1,3,5,7,20] average is 7.2
function average(numArray) {
    var sum = 0
    for (i = 0; i < numArray.length; i++) {
        sum = sum + numArray[i]
    }
    return sum / numArray.length

}
console.log(average([1, 3, 5, 7, 20]))

//Write a function that would return an array of all the odd numbers between 1 to 50. (ex. [1,3,5, .... , 47,49]). Hint: Use 'push' method

function arrayOdd(num) {
    var newOddArray = []
    for (i = 1; i <= num; i += 2) {
        newOddArray.push(i)
    }
    return newOddArray;
}
console.log(arrayOdd(50))

//Given value of Y, write a function that takes an array and returns the number of values that are greater than Y. For example if arr = [1, 3, 5, 7] and Y = 3, your function will return 2. (There are two values in the array greater than 3, which are 5, 7).

function greaterY(numArray) {
    var y = 4
    var count = 0
    for (i = 0; i < numArray.length; i++) {
        if (numArray[i] > y) {
            count++
        }
    }
    return count
}
console.log(greaterY([1, 2, 4, 6, 8]))

//Given an array with multiple values, write a function that replaces each value in the array with the value squared by itself. (e.g. [1,5,10,-2] will become [1,25,100,4])

function square(numArray) {
    var newSquareArray = []
    for (i = 0; i < numArray.length; i++) {
        newSquareArray.push(numArray[i] * numArray[i])
    }

    return newSquareArray
}
console.log(square([1, 3, 5, 7]))

// Given an array with multiple values, write a function that replaces any negative numbers within the array with the value of 0. When the program is done the array should contain no negative values. (e.g. [1,5,10,-2] will become [1,5,10,0])

function negatives(numArray) {
    for (i = 0; i < numArray.length; i++) {
        if (numArray[i] <= -1)
            numArray[i] = 0
    }
    return numArray
}
console.log(negatives([1, 2, 2, 4, -7, -8]))

//Given an array with multiple values, write a function that returns a new array that only contains the maximum, minimum, and average values of the original array. (e.g. [1,5,10,-2] will return [10,-2,3.5])

function minMaxAvg(numArray) {
    var minMaxAvgArray = []
    var max = numArray[0]
    var avg = 0
    var min = numArray[0]
    for (i = 0; i < numArray.length; i++) {
        if (numArray[i] > max) {
            max = numArray[i]
        }
        if (numArray[i] < min) {
            min = numArray[i]
        }
        avg = avg + numArray[i]
    }
    avg = avg / numArray.length
    minMaxAvgArray.push(max)
    minMaxAvgArray.push(avg)
    minMaxAvgArray.push(min)
    return minMaxAvgArray
}
console.log(minMaxAvg([2, 4, 6, 8]))

//Write a function that will swap the first and last values of any given array. The default minimum length of the array is 2. (e.g. [1,5,10,-2] will become [-2,5,10,1]).

function swap(numArray) {
    var firstPosition = numArray[0]
    numArray[0] = numArray[numArray.length - 1]
    numArray[numArray.length - 1] = firstPosition

    return numArray
}
console.log(swap([1, 2, 3, 4, 5, 6]))
