const f = require('../functions')

test('phone number formatter', () => {
    expect(f.formatPhone(1234567890)).toBe('(123) 456-7890')
    expect(()=>{f.formatPhone(1)}).toThrow('Not 10 digits')
})