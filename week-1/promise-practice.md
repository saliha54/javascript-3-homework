complete these exercises from javascript.info and paste your solutions in to this file:

- [promise basics](https://javascript.info/promise-basics#tasks)
- [promise chaining](https://javascript.info/promise-chaining#tasks)
- [promise api](https://javascript.info/promise-api)

and here's another [helpful resources](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)

#1

```js
let promise = new Promise(function(resolve, reject) {
  resolve(1);

  setTimeout(() => resolve(2), 1000);
});

promise.then(alert);


1 will be alerted since only one resolve or reject can be executed per Promise

```

#2

```js
function delay(ms) {
  return new Promise(function(resolve, reject) {
    setTimeout(resolve, ms);
  });
}

delay(3000).then(() => alert('runs after 3 seconds'));
```

#3

```js
 return new Promise(resolve){
   resolve(div);
  }

//did not understand this example
```
