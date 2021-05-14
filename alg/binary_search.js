// function binarySearch(arr, item) {
//     let start = 0
//     let end = arr.length
//     let found = false
//     let position = -1
//     let middle

//     while(found == false && start <= end) {
//         middle = Math.floor((start+end)/2)

//         if(arr[middle]==item) {
//             found = true
//             position = middle
//             return position
//         }

//         if(arr[middle] > item) {
//             end = middle - 1
//         } else {
//             start = middle + 1
//         }
//     }
//     return position
// }

// const arr1 = [1, 2, 3, 4 ,5]

// console.log(binarySearch(arr1, 6));


function recursion(array, item, start, end) {

    let middle = Math.floor((start + end)/2)
   
        if(array[middle] == item) {
            return middle
        }

        if (array[middle] > item) {
            return recursion(array, item, 0 , middle - 1)
        } else {
            return recursion(array, item, middle + 1, end)
        }
        
}
let arr1 = [1, 2, 4, 5, 6, 7]
console.log(recursion(arr1, 6, 0, arr1.length ));