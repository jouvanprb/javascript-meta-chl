const timesTwo = require('./timesTwo');

describe('timesTwo', () => {
    test('multiples by 2 when no second parameter', () => {
        expect(timesTwo(10)).toBe(20);
        expect(timesTwo(7)).toBe(14);
    });

    test('multiples by custom factor when provided', () => {
        expect(timesTwo(10,3)).toBe(30);
        expect(timesTwo(20,4)).toBe(80);
    });
});


