---
uuid: c227e89a-8a15-4704-93d4-42b4bb24b1d2
---

<!-- Start by finding pain points in the site when you resize -->


### Tasks

- [ ] Add a media query and styles to when you view your resume page on a smaller screen, all of the link tags in your nav bar are still visible
- [ ] Add styles so on a smaller screen size your picture sits below your name and occupation
- [ ] Add styles to make sure the content in your **Experience** section is not squished on smaller screen sizes
- [ ] Add styles to make sure the content in your **Skills** section looks great on smaller screen sizes
- [ ] Add styles to make sure the content in your **Footer** section looks great on smaller screen sizes

### Tips and Tricks

To fix these resposive issues, you might find these properties helpful

### order
Property applied to flex items

### @media
  Allows specific styles to only be applied on specific screen types, and screen widths.

```css
  @media (min-width: 600px) {
    p {
      color: blue;
    }
  }
```
This will make all paragraph tags blue on screen sizes larger than 600px.
