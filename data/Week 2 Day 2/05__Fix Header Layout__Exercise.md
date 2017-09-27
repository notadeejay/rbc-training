---
uuid: 2bcda904-adcf-4fbf-ab2a-888edf5ca961
---


Let's move through your page so far, and add flex box to start to fix the layout.

We'll start, as usual with the header of the page. After adjusting the styles last class, you
should have something that looks like this:

![](https://cl.ly/2J3Q41372Y1Y/Image%202017-09-26%20at%208.31.18%20PM.png)

In our header, we want to adjust the layout of two main pieces.

First, we'll focus on the nav bar.

Our `nav` element should have two children, a `p` and a `ul`.

### Tasks

- [ ] Start by setting the display property to `flex` for our `nav` element
- [ ] Use the `justify-content` property to adjust the position of the `p` and the `ul`
  - Tip: The `justify-content` property can be set to:
    - flex-start
    - flex-end
    - center
    - space-between
    - space-around
    - space-evenly

Once you've added those styles, your header should look something like:

![](https://cl.ly/1V2K3J150H11/Image%202017-09-26%20at%208.34.33%20PM.png)

Next, we'll want to get the `li` in our ordered list to be displayed horizontally.
To do this, we can change the display property of our `ul` to flex.

- [ ] Style the `ul` in the `nav` to have  a display property of flex

Once you've done that, you'll notice all of your list items are squishedreallyclosetogether.
What property adjusts the amount of space between an element and the one next to it?

- [ ] Adjust the styles on the list items so they have some space between them.

Once you've added those styles, your nav should look something like this:

![](https://cl.ly/3O0I1i2q2g1k/Image%202017-09-26%20at%208.37.32%20PM.png)

Let's move on to the `div` containing your name and occupation, and your profile photo.

- [ ] Style the `div` containing the name, occupation and profile photo to have a display property of flex
  - **Tip:** To do this, you might need to add a class to the `div`
- [ ] Use the `justify-content` property to adjust how the children are positioned
- [ ] Use the `align-items` property to adjust how the children are positioned vertically in the div
  - The `align-items` property can be set to
    - flex-start
    - flex-end
    - center
    - baseline
    - stretch
- [ ] Adjust the margin and padding on the elements containing the name and occupation, until you're happy with
how they look

Once you have added those styles, your `header` should look something like:

![](https://cl.ly/0f123p1T1a2B/Image%202017-09-26%20at%208.48.18%20PM.png)
