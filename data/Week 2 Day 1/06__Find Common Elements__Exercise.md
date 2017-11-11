---
uuid: a4ecc06d-f77d-4e20-8efc-07857d578062
---

A well known fact about developers is that we're *lazy*. We don't want to write more code than we have to.
Just like we created a plan to write our HTML, let's go through the styles on out page, and find shared styles.

We know that when we use **classes** our elements can easily share styles. We also know that if we use a comma between
two selectors, the same styles will be applied to both:

```css
  div p, section h1 {
    color: blue;
  }
```

In this example **both** the paragraphs inside of divs (div p) and the h1 inside of section tags (section h1) will be styled
blue.



Let's look at our mockup and find elements with common styles:

At first glance, our **skills** and our **header** share the same blue background, and white text. We can create a **class** that will alter the style of both.


#### Tasks
<!-- TODO: Think of a better class name here -->
- [ ] Add a class **emphasized-section** to your `header` tag and the skills `section`
- [ ] Style the `.emphasized-section` class to have a blue background color and a white font

You're welcome to use the styles we chose for your in the mockup, but feel free to chose your own colors, fonts, and styles as you go along. It is YOUR project after all. [Coolors.io](https://coolors.co/) gives you great color pallettes, along with their hexidecimal colors. Go check it out, and see if you can find some awesome colors for your site.

After adding these styles, your header should look something like this:

![](https://cl.ly/2P2l27213r1W/Image%202017-09-25%20at%209.33.42%20PM.png)

You'll notice the text for the links in the nav bar haven't changed color. This is because the anchor tags by default, reflect
whether or not they have been visited. (Purple means they've been clicked on, while blue means they haven't). To override this, we'll need to get a little bit more specific.

Looking at our design, we're going to want to restyle **all** of our anchor tags. Let's add a CSS declaration to let our anchor tags **inherit** the font color from it's parent. We can do this by setting the  **color** property to **inherit** for all of the anchor tags on our page:

```css
  a {
    color: inherit;
  }
```
Now, when we refresh our page, our anchor tags in the nav bar will be white. This is because they have **inherited** their color from the parent `header` element.

![](https://cl.ly/1Y3t3J021636/Image%202017-09-25%20at%209.39.01%20PM.png)


Our **Skills** section should look something like this:


![](https://cl.ly/3Z1u1m402G0E/Image%202017-09-25%20at%209.39.42%20PM.png)
