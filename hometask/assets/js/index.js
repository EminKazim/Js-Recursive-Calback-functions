// let n = 2;
// let m = 3;
// let arr = [1, 2, 3, 4, 5, 6, 7]


// // function power(n,m) {

// //     for (let i = 1; i < m ; i++) {

// //         n *= n
// //     }
// //     console.log(n);
// // }
// // power(n,m)


// // function getSum(n) {
// //     let sum = 0;
// //     for (let i = 0; i <n; i++) {
// //         sum += i; 

// //     }
// //     return sum;

// // }
// // console.log(getSum(4));


// // function getSum(n) {
// //     if (n==1) {
// //         return n;

// //     }else{
// //         return n + getSum(n-1)
// //     }

// // }

// // function getArrayItems(...arr) {

// //     for (const item of arr) {

// //     console.log(item);
// // }

// // }

// // getArrayItems(3,4,5,6)


// // function getArrayItemsSum(arr) {
// //     let sum = 0 ;

// //     for (const item of arr) {

// //    sum += item
// // }
// // return sum;
// // }

// // function getArrayEvenItemSum(arr) {
// //     let sum = 0;

// //     for (const item of arr) {
// //         if (n % 2 == 0) {

// //             sum += item
// //         }

// //     }
// //     return sum;
// // }

// function isEven(n) {
//     n % 2 == 0;
// }

// function isOdd(n) {
//     n % 2 != 0;
//  }

// // let isEven = function (n) {
// //     n % 2 == 0;

// // }
// // let isOdd = function (n) {
// //     n % 2 != 0;

// // }

// // let isEven = n => n % 2 == 0;

// // let isOdd = n => n % 2 != 0;


// // function getSumByCondition(arr, callback) {
// //     let sum = 0;

// //     for (const item of arr) {

// //         if (callback(item)) {

// //             sum += item;
// //         }
// //     }
// //     return sum;
// // }

// // console.log(getSumByCondition(arr, isOdd));

// // // getArrayItems(arr)


// function parse(num) {
//     num.parseInt()
// }

// // function createMap(arr) {
// //     let array = [];

// //     for (const item of arr) {
// //         result.push(item)
// //     }

// //     return array;
// // }



// // function mapByCondition(arr, callback) {
// //     let array = [];

// //     for (const item of arr) {
// //         result.push(callback(item))
// //     }

// //     return array;
// // }
// // console.log(mapByCondition(arr, parse));

// function mapByCondition(arr, callback){

//    result = arr.map(m=> callback(m))
//    return result;
// }

