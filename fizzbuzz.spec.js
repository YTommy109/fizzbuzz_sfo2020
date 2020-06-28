import main from './fizzbuzz'

describe('FizzBuzz について', () => {
    it('1-15までがFizzBuzzになること', () => {
        const exp = [
            '1', '2', 'Fizz', '4', 'Buzz',
            'Fizz', '7', '8', 'Fizz', 'Buzz',
            '11', 'Fizz', '13', '14', 'FizzBuzz'
        ]
        const target = main()

        expect(target).toEqual(exp)
    })
})
