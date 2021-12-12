const map = fn => array => array.map()

const multiply = x => y => x * y

const pluck = key => object => object[key]

const discount = multiply(0.95)
const tax = multiply(1.25)