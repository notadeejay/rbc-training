---
uuid: 0c96917e-8cdc-49c4-96b9-dca4c9fd0b7a
archived: true
---
### Animations
Just like we can animate elements in CSS, we can animate elements in JQuery.
To these animation methods, the first argument will be how long the animation will take,
it serves the same purpose as the **duration** property in CSS animations.

JQuery has several built in animations that you can use, right out of the box. You can also
write custom animations with JQuery, and animate multiple CSS properties at once.

#### hide
```javascript
  $('.box').hide(500);
```
![](https://cl.ly/3C0a3G3h1c13/Screen%20Recording%202017-10-01%20at%2009.47%20PM.gif)

#### show
```javascript
  $('.box').show(500);
```
![](https://cl.ly/2R2D2R2K3N17/Screen%20Recording%202017-10-01%20at%2009.48%20PM.gif)

#### slideUp
```javascript
  $('.box').slideUp(500);
```

![](https://cl.ly/2Y2A1G043q01/Screen%20Recording%202017-10-01%20at%2009.49%20PM.gif)

#### slideDown
```javascript
  $('.box').slideDown(1000);
```

![](https://cl.ly/2B3n0H0n0W0m/Screen%20Recording%202017-10-01%20at%2009.50%20PM.gif)

#### fadeOut
```javascript
  $('.box').fadeOut(750);
```
![](https://cl.ly/3Q3Q1v3Z3b0E/Screen%20Recording%202017-10-01%20at%2009.51%20PM.gif)

#### fadeIn

#### fadeTo



#### delay
We can also chain JQuery methods together, like we've done here:

```javascript
  $('.box').delay(2000).fadeUp(1000)
```

## Custom Animations

We can also add custom animations and animate any property we want.

```javascript
  $('.box').animate({ "opacity": 0 }, 2000, "linear")
```
