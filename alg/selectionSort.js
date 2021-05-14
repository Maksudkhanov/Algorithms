let arr1 = [2, 45, 25, 44, 234, 76, 5656 ,1 ,34234]


function selectionSort(arr) {

    for (let i = 0; i < arr.length; i++) {
       let indexMin = i
       for (let j = i + 1; j < arr.length; j++) {

          if(arr[j] < arr[indexMin]) {
              indexMin = j
          }
           
       }
        let tmp = arr[i]
        arr[i] = arr[indexMin]
        arr[indexMin] = tmp
    }
    return arr
}


console.log(selectionSort(arr1));