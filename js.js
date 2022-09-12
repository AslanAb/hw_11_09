let a = {
    one: 1,
    two: 2, 
    three: '3',
}


function A(item){
    let b = Object.keys(item)
    let c = Object.values(item)
    let d = b.concat(c)
    console.log(d.join(', '))
}

A(a)

let b = [
    {
        number: 3,
        age: 27,
    },
    {
        number: 2,
        age: 26,
    },
    {
        number: 1,
        age: 25,
    },
]

function B(item){
    item.sort(function(a, b){
        if(a.age > b.age){
            return 1
        }else if(a.age < b.age){
            return -1
        }else{
            return 0
        }
    })
}
B(b)
console.log(b)
