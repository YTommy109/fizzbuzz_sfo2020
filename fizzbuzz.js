// TODO: Map にする

const fizzbuzz = v => {
    if (v%15===0) return 'FizzBuzz'
    if (v%3===0) return 'Fizz'
    if (v%5===0) return 'Buzz'
    return `${v}`
}

const main = () => {
    return [
        fizzbuzz(1), fizzbuzz(2), fizzbuzz(3), fizzbuzz(4), fizzbuzz(5),
        fizzbuzz(6), fizzbuzz(7), fizzbuzz(8), fizzbuzz(9), fizzbuzz(10),
        fizzbuzz(11), fizzbuzz(12), fizzbuzz(13), fizzbuzz(14), fizzbuzz(15)
    ]
}


export default main
