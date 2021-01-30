const assert = require('assert');
const fizzbuzz = require('../index');

describe('fizzbuzz', () => {
  it('return FizzBuzz when value is divisible by 15', () => {
    assert(fizzbuzz(30) === 'FizzBuzz');
  })

  it('return Fizz when value is divisible by 5', () => {
    assert(fizzbuzz(10) === 'Fizz');
  })

  it('return FizzBuzz when value is divisible by 9', () => {
    assert(fizzbuzz(9) === 'Buzz');
  })

  it('return the value when value is not divisible by 3 or 5', () => {
    assert(fizzbuzz(8) === '8')
  })
})