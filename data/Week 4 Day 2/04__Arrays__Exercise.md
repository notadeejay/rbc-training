---
uuid: 98f55240-9fe3-4871-9c90-8a463768df62
---


## Arrays


Arrays are a data type that lets you store a list or collection of items. In JavaScript,
your array can be any length, and contain any data type.

To declare an array we use square brackets:

```javascript
var exampleArray = [1, 2, 3]
```


For example, if we wanted to store a list of foods in an array, we could do something like this:

```javascript
  var foods = ['pizza', 'celery', 'cupcakes', 'oranges']
```

When we are using arrays, and in general in computer science, we start counting at 0.
Each element in an array, can be accessed by it's **index**, or, by it's position in the array.

If I wanted to access the element `cupcakes` in the previous array:

```javascript
  var foods = ['pizza', 'celery', 'cupcakes', 'oranges']
  // console log out cupcakes

  console.log(foods[2])
```

`oranges` is at index 2, because we start at 0. So, pizza is at index 0, celery is at index 1, and cupcakes is at index 2.

![array example](https://d3vv6lp55qjaqc.cloudfront.net/items/1l2d3C0a1k2X3R17300d/Image%202017-09-04%20at%201.11.26%20PM.png?X-CloudApp-Visitor-Id=2818368&v=0ac70e76)


#### Adding elements to an array

If we want to add an element to an array, we use the `.push` function

```javascript
  var fruits = ["apples", "oranges", "bananas"]

  // add graps to fruits array
  fruits.push('grapes')
```


## Tasks

- [ ] Make a list of your top five favourite foods, and put them into an array
- [ ] Log out each food by accessing it by its index
- [ ] Add another food to your favourite foods array using the `.push` function
- [ ] Write a function that takes an array of elements, and returns an integer with the length of the array
