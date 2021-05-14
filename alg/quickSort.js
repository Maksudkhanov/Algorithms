let arr1 = [2, 45, 25, 44, 234, 76, 5656 ,1 ,34234]

function quickSort(array) {
    if(array.length <= 1) {
        return array
    } else {
        let pivotIndex = Math.floor(array.length/2)
        let pivot = array[pivotIndex]
        let less = []
        let great = []

        for (let i = 0; i < array.length; i++) {
            if(i == pivotIndex) {
                continue
            } 

            if(pivot > array[i]) {
                less.push(array[i])
            } else {
                great.push(array[i])
            }
            
        }
        return [...quickSort(less), pivot, ...quickSort(great)]
    
    }
}

console.log(quickSort(arr1));