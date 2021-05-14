let std1= {
    name: 'Azizkhon',
    math: 5,
    eng: 5,
    prog: 5,
    fizika:5
}

let std2= {
    name: 'Rasul',
    math: 4,
    eng: 5,
    prog: 4,
    fizika:5
}

let std3= {
    name: 'Askar',
    math: 4,
    eng: 4,
    prog: 4,
    fizika: 4
}

let std4= {
    name: 'Umrbek',
    math: 5,
    eng: 3,
    prog: 3,
    fizika:4
}

function count(obj) {
    let middle =Math.floor((obj.math+obj.eng+obj.fizika+obj.prog)/4)
    return middle
}
console.log(count(std4) )

