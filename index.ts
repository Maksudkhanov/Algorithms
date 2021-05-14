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


// function getString<T>(arg: T[]): string {
//     let result = ""
//     for(let i=0; i<arg.length;i++){
//         result+= ", " + arg[i].toString() 
//     }
//     return result
// }

// console.log(getString<number>([1, 3, 5, 7]));


function paddingLeft(padding: number | string, input: string): string {
    throw new Error('Not implemented yet!')
} 