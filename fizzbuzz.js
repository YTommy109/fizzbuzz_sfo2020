const fizz3 = v => v%3?'':'Fizz'
const buzz5 = v => v%5?'':'Buzz'
const fizzbuzz = v => fizz3(v)+buzz5(v) || `${v}`

const main = (max) => {
    return [...Array(max).keys()].map(it => fizzbuzz(it+1))
}


export default main
