let arr1 = [2, 45, 25, 44, 234, 76, 5656 ,1 ,34234]

function bubbleSort(array) {

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if(array[j +1] < [array[j]]) {
                let tmp = array[j]
                array[j] = array[j+1]
                array[j+1] = tmp
            }
            
        }
    }
    return array
}

console.log(bubbleSort(arr1));