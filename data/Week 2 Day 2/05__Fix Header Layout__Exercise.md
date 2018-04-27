---
uuid: 2bcda904-adcf-4fbf-ab2a-888edf5ca961
---

Now, let's move on to adjusting the layout of your webpage. Just like we've done so far, we'll go section by section.

Let's start with the **Header** of your webpage.

## Tasks

- Using flexbox, style the **Nav Bar** so your name and the anchor tags are on the same line

When you've added these styles, your **Header** should look something like this:

![](https://cl.ly/323u3M3B3U1a/Image%202017-10-01%20at%201.53.10%20PM.png)

Let's get started with the `<nav>`. Your code probably currently looks something like this:

```html
      <nav>
          <p>Gage Malone</p>
          <div>
            <a href="#about">about</a>
            <a href="#skills">skills</a>
            <a href="#experience">experience</a>
            <a href="#contact">contact</a>
          </div>
      </nav>
```
When you open your website in the browser it should look like the following:

![screenshot](https://cl.ly/1B21411t2Z2g/Image%202018-04-27%20at%2011.37.14%20AM.png)

So, how do we make this look like our design? We need to start by selecting the elements we want to apply Flexbox to. Start by applying the following property to the `<nav>` element:

```css

nav {
  display: flex
}

```

What happened? This should have automatically positioned your name and all of your `<a>` tags in line horizontally, like so:
![screenshot](https://cl.ly/3k0D0129160r/Image%202018-04-27%20at%2011.43.48%20AM.png)

This still doesn't look _quite_ like the design we've provided, so let's keep going! How do we make it so our name shows up on the left side of the nav and the links on the right?

### Justify-content and align-items

**Justify-content** and **align-items** are two CSS properties that help us distribute the items in a container. They control how the items are positioned along the main axis (horizontally) and cross axis (vertically).
#### justify-content

A property added to the flexbox container that defines how the flex items are laid out along the main axis.

Can be set to:

- `flex-start`
- `flex-end`
- `space-between`
- `space-around`
- `space-evenly`


![](https://cl.ly/2K1x2V2p1c1s/Image%202018-04-27%20at%2011.58.47%20AM.png)

Add the following code to your CSS file:

```css

nav {
  display: flex;
  justify-content: space-between;
}
```

Save, refresh your page and see what changed! Your nav bar should now look something like this:

![screenshot](https://cl.ly/1M3W3b1N0137/Image%202018-04-27%20at%2011.53.27%20AM.png)


Do you notice something a bit off? The name doesn't _align_ with our links. How can we fix this using `align-items`? 

#### align-items

A property added to the flexbox container (parent), that defines how the flex items are laid out along the cross axis.

Can be set to:

- `flex-start`
- `flex-end`
- `center`
- `stretch`
- `baseline`

Play around with the properties above until your nav bar looks something like this:

![](https://cl.ly/0u170c443R3h/Image%202018-04-27%20at%2012.07.10%20PM.png)

## Additional Tasks
- Play around with with margin to provide some space between your `<a>` tags
- Using Flexbox, add styles so your name and occupation sit next to your image

## Feeling Stuck?

<details>
  <summary><strong>Click here to see solution</strong></summary>
  Verify that your CSS looks similar to the following:

  ```css 
        nav {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
        } 

        .name-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
  ```
</details>