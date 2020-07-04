const print = console.log;

print('Start');

Promise.resolve().then(() => print('promise 1'));
Promise.resolve().then(() => print('promise 2'));

(async () => await print('Async 1'))();

setTimeout(() => print('setTimeout 1 callback'), 0);
setTimeout(() => print('setTimeout 2 callback'), 0);

(async () => await print('Async 2'))();

Promise.resolve().then(() => print('promise 3'));
Promise.resolve().then(() => print('promise 4'));

(async () => await print('Async 3'))();

setTimeout(() => print('setTimeout 3 callback'), 0);
setTimeout(() => print('setTimeout 4 callback'), 0);

(async () => await print('Async 4'))();

setTimeout(() => print('setTimeout 5 callback'), 0);
setTimeout(() => print('setTimeout 6 callback'), 0);

(async () => await print('Async 5'))();

Promise.resolve().then(() => print('promise 5'));
Promise.resolve().then(() => print('promise 6'));

(async () => await print('Async 6'))();

print('End');

const myArgs = process.argv.slice(2);
print('Passed CLI arguments: ', myArgs);
