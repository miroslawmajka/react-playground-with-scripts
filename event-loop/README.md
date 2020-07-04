# Event Loop Sandbox

Watch the event loop manifest itself with main thread, tasks and microtasks (promises):

```bash
npm  start -- arg1 arg2
```

The `arg1` and `arg2` should be printed at the beginning of the script.

## Currying

```javascript
function addBase(base) {
    return function (num) {
        return base + num;
    };
}

var addTen = addBase(10);
addTen(5); //15
addTen(80); //90
addTen(-5); //5
```
