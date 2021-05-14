// interface IUser {
//     id: number
//     name: string
//     getFullName(surname: string): string
// }
// class User implements IUser {
//     id: number;
//     name: string;
//     age: number;
//     constructor(userId: number, userName: string, userAge: number) {
//         this.id = userId;
//         this.name = userName;
//         this.age = userAge;
//     }
//     getFullName(surname: string): string {
//         return this.name + ' ' + surname
//     }
// }
// let tom :User = new User(1, "tom", 23)
// console.log(tom);
// interface FullNameBuilder {
//     (name: string, surname: string): string
// }
// let simpleBuilder: FullNameBuilder = function (name: string, surname: string): string {
//     return "Mr. " + name + " " + surname
// }
// let fullname = simpleBuilder("Azizkhon", "Maksdukhanov")
// console.log(fullname);
// interface stringArray {
//     [index: number] : string
// }
// let phones: stringArray = ['iphone', 'samsung', 'htc']
// function getId<T>(id: T):T {
//     return id
// }
// console.log(getId<number>(5));
// function getString(arg) {
//     let result = "";
//     for (let i = 0; i < arg.length; i++) {
//         result += ", " + arg[i].toString();
//     }
//     return result;
// }
// console.log(getString([1, 3, 5, 7]));

let arr1 = [1 , 2 , 3, 4 , 5, 6, 7 , 8 , 9]
let arr2 = [4 , 5 , 8 , 90]



function simple(array1, array2) {
    let array3 = []
    for (let i = 0; i < array1.length; i++) {
        if(array2.includes(array1[i])) {
            array3.push(array1[i])
        }
        
    }
    return array3
}

console.log(simple(arr1, arr2));


// console.log(arr1.length);

// function reverseArray(arr) {
//     let lastIndex = arr.length - 1
//     for(let i = 0; i < lastIndex/2; i++ ){
//         let tmp = arr[i]
//         arr[i] = arr[lastIndex - i]
//         arr[lastIndex - i] = tmp
//     }
//     return arr
// }

// console.log(reverseArray(arr1));


