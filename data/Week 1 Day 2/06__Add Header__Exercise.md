---
uuid: 825b44c6-aa66-41b8-8b17-1209c442da45
---

We're going to start by planning out how we're going to build the `<header>` of our profile page. Let's take a look at our design
and outline the elements we'll need to add.


![Marked up mock up](https://d3vv6lp55qjaqc.cloudfront.net/items/0X201f1m0L1i0W152s0Y/%5Bb3c8029b685fc4c5208dd46fa5cbde6e%5D_Image+2017-08-26+at+1.23.31+PM.png)


If we break down the `<header>` section of our design, we see that it contains 3 main pieces:
- A nav bar
- Your name and occupation
- A photo

### Tasks
- [ ] Add a `<header>` element to your webpage
- [ ] Add a nav bar
- [ ] Add your name
- [ ] Add your occupation
- [ ] Add a photo

When you're finished, your page should look something like this:

![](https://cl.ly/2f2j2h0m2Y3M/Image%202017-09-30%20at%2010.27.17%20AM.png)

## HTML Tags Reference

The following HTML elements might come in handy as you're building this section.

#### nav

Used to contain links that allow a user to navigate around the webpage.

```html
  <nav>
    <!-- Add links or navigation -->
  </nav>
```


#### img
Used to add images to webpages.

```html
  <img alt="Nicolas Cage" src="https://www.placecage.com/c/460/300">
```

#### div
A div is a generic container element. You can use it to group elements together, or
for styling purposes (once we get to CSS).

```html
  <div>
    <h2>Things you find at Lighthouse</h2>
    <ul>
      <li>Office Dogs</li>
      <li>Pizza</li>
      <li>Rubber Ducks</li>
    </ul>
  </div>
```

#### a

Creates a link that can be used to navigate around the internet, or specific site.
Requires an `href` attribute.

```html
  <a href="/about">About</a>
```


### Headings

Heading tags (`h1` -> `h6`) are used to add titles and sub headings to your web page.

```html
<h1>I'm the page title</h1>
<h3> I'm a subtitle </h3>
```


## Tips and Tricks

As you build out this section of your resume page, here are a few things to watch out for.

### Missing Quotes

It's easy to leave out your closing quotes on a web page, if you notice that suddenly all of your code is the same colour,
go through and see if you can spot the error:

![](https://cl.ly/3C1A2A0v1B28/Screen%20Recording%202017-10-25%20at%2007.23%20PM.gif)

Remember that your editor is there to help you write better code.

### Closing Tags

It's easy to make a typo, and add two opening tags instead of a closing tag. Go through your code and make sure your opening tags have a closing tag to match them.

### Indentation

Look at your code so far, is it easy to see which elements are parents and which are children? Ask a class mate or a mentor to review your code.
