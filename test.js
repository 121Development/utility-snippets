let a = 3
let b = 2

//This will give same answer as line below
if (a<b) console.log(a)
else if (b<a) console.log(b)

//(a<b) evaluates as true/false or 1/0
console.log(a * (a<b) + b * (b<a))

console.log(+(a<b))
console.log(+(b<a))

array = ['1', '2', '3']

const filteredArray = array.filter(function(elem, i, array){
    return array.indexOf(elem) === i
})

const f = filteredArray(array, '29808980787870+')
console.log(f)




