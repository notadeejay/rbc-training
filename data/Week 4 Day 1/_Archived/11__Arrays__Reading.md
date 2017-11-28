---
uuid: 98f55240-9fe3-4871-9c90-8a463768df62
archived: true
---

Arrays are a data type that let you store a list or collection of items. In JavaScript, an array can be of any length, and contain any data type.

Both arrays and objects can be used to store related pieces of data. Both data types have their own use cases. With experience it will become second nature which one is better suited for the problem you are trying to solve.

To declare an array we use square brackets:

```javascript
var numbers = [1, 2, 3]
```

For example, if we wanted to store a list of foods in an array, we could do something like this:

```javascript
var foods = ['pizza', 'celery', 'cupcakes', 'oranges']
```

Each element in an array can be accessed by its **index**, that is, by its position in the array. However, unlike in real life, when we're using arrays (and in general in computer science), we don't start counting at 1 but at 0.

In other words, if I wanted to access the element `'cupcakes'` in the previous array, I would need to look up the element at index 2 in the array:

```javascript
var foods = ['pizza', 'celery', 'cupcakes', 'oranges']

console.log(foods[2])
// would log "cupcakes" to the console
```

`'cupcakes'` is at index 2, because we start counting from 0. So, `'pizza'` is at index 0, `'celery'` is at index 1, `'cupcakes'` is at index 2, and `'oranges'` is at index 3.


## Adding elements to an array

If we want to add an element to the end of an array, we can use the `.push` function.

```javascript
var fruits = ["apples", "oranges", "bananas"]

fruits.push("grapes")
// now the fruits array would be ["apples", "oranges", "bananas", "grapes"]
```

## Updating an array

We can also change the elements in an array using their indexes:

```javascript
var fruits = ["apples", "oranges", "bananas"]

fruits[0] = "mangoes"
// now the fruits array would be ["mangoes", "oranges", "bananas"]
```


## Exercises

- Make a list of your top five favourite foods, and put them into an array
- Log each of your five favourite foods by their index values
- Add another food to your favourite foods array using the `.push` function
