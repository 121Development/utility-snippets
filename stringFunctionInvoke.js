//Instead of using Eval, use object key:value to call functions

function fn1() { console.log('fn1')}
function fn2() { console.log('fn2')}

let o = { 
    one: fn1(),
    two: fn2()
}

o.one
o.two