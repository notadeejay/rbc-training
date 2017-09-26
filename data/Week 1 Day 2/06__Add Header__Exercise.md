---
uuid: 825b44c6-aa66-41b8-8b17-1209c442da45
---

We're going to start by planning out how we're going to build the `<header>` of our profile page. Let's take a look at our mockup
and outline the elements we'll need to add.


![Marked up mock up](https://d3vv6lp55qjaqc.cloudfront.net/items/0X201f1m0L1i0W152s0Y/%5Bb3c8029b685fc4c5208dd46fa5cbde6e%5D_Image+2017-08-26+at+1.23.31+PM.png)


If we break down the header section of our mockup, we see this `<header>` contains
3 main pieces
- A nav bar
- A section for your name, and occupation
- A photo



### Tasks:

Each one of these 3 main pieces will be it's own HTML element:

- [ ] In your `index.html` file add a `<header>` tag
- [ ] Add a nav bar to your header (the `nav` tag is a great choice for this). Inside of your nav:
  - A `p` tag containing your name
  - add an `ul` with four list items (`li`)
    - about
    - skills
    - experience
    - contact
- [ ] Below your closing `nav` tag, add an element (A `div` is a great choice for this) to contain
  - Another `div` containing:
    - An `h1` element with your name
    - An `h5` element with your occupation
  - [ ] Below your closing `div` tag add an `img` tag with a picture (remember `img` tags are self closing)

**Tip**: If you don't have one ready, try one of these sites for a placeholder image
    - [place kitten](https://placekitten.com/)
    - [place cage](http://www.placecage.com/)
    - [Fill Murray](https://www.fillmurray.com/)

Note that we will be using CSS later to adjust our layout and the style of these elements. Don't worry
if your page looks far from the finished project.

In the live preview from Brackets, your page should look something like this:

![sample with header](https://d3vv6lp55qjaqc.cloudfront.net/items/0l1v1S0b2N3z242C1S14/Image%202017-08-26%20at%201.54.41%20PM.png)
