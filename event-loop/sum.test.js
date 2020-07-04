const math = require('./math');

test('adds 1 + 2 to equal 3', () => {
    expect(math.sum(1, 2)).toBe(3);
});

test('curry call one', () => {
    const curryBase = math.curry(5);
    const curryNext = curryBase(10);
    const actual = curryNext(15);

    expect(actual).toBe(30);
});

test('curry call two', () => {
    const actual = math.curry(5)(25)(30);

    expect(actual).toBe(60);
});
