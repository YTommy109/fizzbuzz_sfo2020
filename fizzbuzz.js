const fizzbuzz = v => {
    if (v%15===0) return 'FizzBuzz'
    if (v%3===0) return 'Fizz'
    if (v%5===0) return 'Buzz'
    return `${v}`
}

const main = () => {
    return [...Array(15).keys()].map(it => fizzbuzz(it+1))
}


export default main
