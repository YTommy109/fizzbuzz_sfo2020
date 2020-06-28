import main from './fizzbuzz'

describe('FizzBuzz について', () => {
    it('1-15までがFizzBuzzになること', () => {
        const exp = [
            '1', '2', 'Fizz', '4', 'Buzz',
            'Fizz', '7', '8', 'Fizz', 'Buzz',
            '11', 'Fizz', '13', '14', 'FizzBuzz'
        ]
        const target = main(15)

        expect(target).toEqual(exp)
    })

    it('指定したところまで FizzBuzz を作ること', () => {
        const target = main(20)
        expect(target).toHaveLength(20)
        expect(target[20-1]).toEqual('Buzz')
        expect(target[21-1]).toBeUndefined()
    })
})
