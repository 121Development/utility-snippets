// vanilla js
let t1 = "2018-01-01T18:00:00Z".replace(/^[^:]*([0-2]\d:[0-5]\d).*$/, "$1")
console.log(t1)


let t2 = "2018-01-01T18:00:00Z".match(/\d\d:\d\d/)
console.log(t2[0])

// moment library https://momentjs.com/docs/
//let t3 = moment.utc("2018-01-01T18:00:00Z").format("HH:mm")
//console.log(t3)

let rawIsoDate = Date.parse("2018-01-01T18:00:00Z")
console.log(rawIsoDate)

let isoDateString = new Date('2018-01-01T18:00:00Z')
console.log(isoDateString.toISOString().replace(/^[^:]*([0-2]\d:[0-5]\d).*$/, "$1"))
console.log(typeof isoDateString)