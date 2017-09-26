---
uuid: c8aa73e8-0135-4992-b388-4c65eadf4e20
---

<!-- Explain about the typographic scale, and style all h2 and h4 elements the same -->
<!-- Get Tsang to review this -- the design advice could be ALL wrong -->
<!-- https://designforhackers.com/blog/font-sizes/ -->

Now that we've chosen a font, we're going to adjust the font sizes we have displayed on our page.
Our `h1`, `h2` and `p` tags have some default styling on them already, but we can fix them up as we go.

Let's go back to our mockup:

![](https://cl.ly/3y3B3m1a3z1f/[8db0796c513e867fb46ea8321abfc163]_Image%202017-09-26%20at%207.08.35%20AM.png)

All of the section titles match in font size and font weight. Since these are all `h2` elements. We can style them
using the tag name.

### Tasks
- [ ] Style your `h1` and `h2` elements to have a font size of `37px`
- [ ] Style your `h4` to a font size of `21px`
- [ ] Add CSS to make your `p` tags have a font-size of `16px`


### Experience Section

![](https://cl.ly/0x0P0s1P1T0C/Image%202017-09-26%20at%207.55.44%20AM.png)

When we look at the mockup, our Experience Section has font styled several different ways.
Not only can we adjust the `font-size` of our text, but we can also adjust the `font-weight`, or how bold our text is.
The font-weight property can be set to:
- normal
- bold
- lighter
or any number between 100 - 900.

Since we want all of our previous employment list items to **share** styles, we can use a **class** to style them.

### Tasks
- [ ] Add a class `date` to each element that contains the dates of employment
- [ ] Style the date class to have
  - [ ] A font size of `21px`
  - [ ] A font color that matches the background of your header and skills section
  - [ ] A light font weight
- [ ] Add a class `job-title` to each element that contains a job title
  - [ ] Style the `job-title` class to have
  - [ ] A font size of `16px`
- [ ] Add a class `company-name` to each element containing the company name
