const fizz3 = v => v%3?'':'Fizz'
const buzz5 = v => v%5?'':'Buzz'
const fizzbuzz = v => {
    if (v%15===0) return 'FizzBuzz'
    if (v%5===0) return buzz5(v)
    return fizz3(v) || `${v}`
}

const main = () => {
    return [...Array(15).keys()].map(it => fizzbuzz(it+1))
}


export default main
