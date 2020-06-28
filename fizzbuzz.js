// TODO: fizzbuzz 判定を入れる
// TODO: Map にする

const fizzbuzz = v => {
    if (v%3===0) return 'Fizz'
    if (v%5===0) return 'Buzz'
}

const main = () => {
    return [
        '1', '2', fizzbuzz(3), '4', fizzbuzz(5),
        fizzbuzz(6), '7', '8', fizzbuzz(9), fizzbuzz(10),
        '11', fizzbuzz(12), '13', '14', 'FizzBuzz'
    ]
}


export default main
