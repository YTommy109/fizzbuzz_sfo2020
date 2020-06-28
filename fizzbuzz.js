// TODO: fizzbuzz 判定を入れる
// TODO: Map にする

const fizzbuzz = v => {
    if (v%3===0) return 'Fizz'
}

const main = () => {
    return [
        '1', '2', fizzbuzz(3), '4', 'Buzz',
        fizzbuzz(6), '7', '8', fizzbuzz(9), 'Buzz',
        '11', fizzbuzz(12), '13', '14', 'FizzBuzz'
    ]
}


export default main
