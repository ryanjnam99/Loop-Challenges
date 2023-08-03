/* 
  Recreate the built in .slice method

  Given an array, a start index, and an end index,
  return a NEW array that has only the elements from
  the start index (inclusive) to the end index (exclusive)

  What should you do if the provided end index is out of bounds?
*/

const arr1 = ["a", "b", "c", "d", "e"];
const startIdx1 = 0;
const endIdx1 = 5;
const expected1 = ["a", "b", "c", "d", "e"];
const result = arr1.slice(0,1,2,3,4,5);


function sliceArray(arr, startIdx1, endIdx1) {
    var arr2 = [];
    for (var i=startIdx1; i<endIdx1; i++) {
        arr2.push(arr[i]);
    }
    return arr;
}

console.log(sliceArray(["a", "b", "c", "d", "e"], startIdx1, endIdx1));


const arr = ["a", "b", "c", "d", "e"];
const startIdx2 = 0;
const endIdx2 = 1;
const expected2 = ["a"];

function sliceArray(arr, startIdx2, endIdx2) {
    var newSlice = [];
    for (var i=startIdx2; i<endIdx2; i++) {
        newSlice.push(arr[i]);
    }
    return newSlice;
}

console.log(sliceArray(["a", "b", "c", "d", "e"], startIdx2, endIdx2));


const arr3 = ["a", "b", "c", "d", "e"];
const startIdx3 = 1;
const endIdx3 = 2;
const expected3 = ["b"];

function sliceArray(arr, startIdx3, endIdx3) {
    var newSlice = [];
    for (var i=startIdx3; i<endIdx3; i++) {
        newSlice.push(arr[i]);
    }
    return newSlice;
}

console.log(sliceArray(["a", "b", "c", "d", "e"], startIdx3, endIdx3));

const arr4 = ["a", "b", "c", "d", "e"];
const startIdx4 = -100;
const endIdx4 = 100;
const expected4 = ["a", "b", "c", "d", "e"];

function sliceArray(arr, startIdx4, endIdx4) {
    var newSlice = [];
    for(var i=startIdx4; i<endIdx4; i++) {
        newSlice.push(arr[i]);
        if (startIdx4 < 0) {
            newSlice = 0;
        }
        if (endIdx4 > arr.length) {
            newSlice = arr.length-1;
        }
    }
    return newSlice;
}

console.log(sliceArray(["a", "b", "c", "d", "e"], startIdx4, endIdx4));

const arr5 = ["a", "b", "c", "d", "e"];
const startIdx5 = 0;
const endIdx5 = 0;
const expected5 = [];

function sliceArray(arr, startIdx5, endIdx5) {
    var newSlice = [];
    for (var i=startIdx5; i<endIdx5; i++) {
        newSlice.push(arr[i]);
    }
    return newSlice;
}

console.log(sliceArray(["a", "b", "c", "d", "e"], startIdx5, endIdx5));

const arr6 = ["a", "b", "c", "d", "e"];
const startIdx6 = 1;
const endIdx6 = 1;
const expected6 = [];

function sliceArray(arr, startIdx6, endIdx6) {
    var newSlice = [];
    for (var i=startIdx6; i<endIdx6; i++) {
        newSlice.push(arr[i]);
    }
    return newSlice;
}

console.log(sliceArray(["a", "b", "c", "d", "e"], startIdx6, endIdx6));


/**
 * Returns a slice of given arr.
 * @param {Array<any>} items
 * @param {number} startIdx
 * @param {number} endIdx
 * @returns {Array<any>} The slice of the given arr from startIdx inclusive
 *    to endIdx.
 */
function slice(items, startIdx, endIdx) {
    for(var i=)// code here
}

// Tests
const result1 = slice(arr1, startIdx1, endIdx1);
console.log(result1, "should be", expected1);

const result2 = slice(arr2, startIdx2, endIdx2);
console.log(result2, "should be", expected2);

const result3 = slice(arr3, startIdx3, endIdx3);
console.log(result3, "should be", expected3);

const result4 = slice(arr4, startIdx4, endIdx4);
console.log(result4, "should be", expected4);

const result5 = slice(arr5, startIdx5, endIdx5);
console.log(result5, "should be", expected5);

const result6 = slice(arr6, startIdx6, endIdx6);
console.log(result6, "should be", expected6);


*/

```js
/**
 * Concatenates the given arrays together into order that they are passed in.
 * @param {Array<any>} items1
 * @param {Array<any>} items2
 * @returns {Array<any>} The new arr that is a concatenation of the given arrays.
 */
function concat(items1, items2) {
  // code here
}

// Tests
const result1 = concat(arrA1, arrB1);
console.log(result1, "should be", expected1);

const result2 = concat(arrA2, arrB2);
console.log(result2, "should be", expected2);
```