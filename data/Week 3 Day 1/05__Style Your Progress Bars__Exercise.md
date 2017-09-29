---
uuid: d2b0d0d1-b982-4654-878b-c6804d128fd9
---

<!-- Reference: http://www.hongkiat.com/blog/html5-progress-bar/ -->

Back in our **Skills** section, we have our `progress` elements. In our mockup,
they are styled to look like this:

![](https://cl.ly/2d3l2w270r3g/Image%202017-09-26%20at%208.19.54%20AM.png)

In our webpage, however, they look a little bit rough.

![](https://cl.ly/1p2K2G0o2M2X/Image%202017-09-28%20at%208.31.47%20PM.png)

<!-- Add explanation here -->

We can break down our `progress` elements into two main pieces, which we will refer to as **pseudo-element**.

The two **pseudo-elements** we will be styling are:
- The progress bar
- The progress value

To style our `progress` element, we have to follow a few rules. To start, we'll need to add this code to our progress element:

```css
  progress {
    -webkit-appearance: none;
  }
```

Then, we will select the bar and the value using a psuedo selector:

```css
progress::-webkit-progress-bar {
  /* Add styles here */
}
progress::-webkit-progress-value {
  /* style rules */
}
```

- [ ] Style your progress bar to match the mockup (`background-color` will come in handy here)

Remember that although we've given you a design to work from, you are free to add and change styles as you please.
It's YOUR webpage afterall.

## A note about webkit

We've mentioned before how your browser applies default styles to all of the elements on your page.
What we might not have discussed too much, is that each browser applies these default styles in slightly
different ways. This means that although your site might look great in chrome, once you open it up in firefox,
it might look a little bit different.

As well, just like the languages we speak are constantly evolving, so are our programming languages.
Sometimes, CSS or HTML get a new feature that isn't yet supported by **all** of the browsers. This is where the  `webkit`
keyword is important.

<!--
Note for Horatiu:

- I'm not 100% sold that a progress element is the best choice for this page
my logic in choosing it was that it was different than the divs, spans, and other tags
we'd seen, and also an excuse to introduce the idea that you might need to style some
elements using webkit - if you have arguments against it, I'd love to hear them.
 -->
