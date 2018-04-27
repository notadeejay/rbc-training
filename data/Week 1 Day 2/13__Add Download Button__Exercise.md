---
uuid: 872f1868-83fa-4e85-90ad-e9c2e67bec6c
stretch: true
---


You might have noticed in the design of the resume page that there is a button allowing you to download a resume. To add this button, we're going to use an anchor tag with a special attribute.

## Absolute vs. relative paths

When we use `href` or `src` attributes (for instance on anchor or image tags) we have to set them to a **path**. The path will tell the browser where to find the linked document. There are two main types of paths: an absolute path and a relative path.

### Absolute paths

Let's pretend for a second that you've asked me how to get to your office. If I told you the street address, city name, and province, chances are you could find your way there no matter where you started.

This is how absolute paths work. For example, we could add this image tag to any website in the world, and the browser would be able to find it (assuming the URL is correct, of course).

```html
<img src="http://placekitten.com/200/300">
```

### Relative paths

Let's say instead that you asked me how to get to Lighthouse Labs, but this time I responded by asking you where you are. In this case I can give you directions to Lighthouse Labs based on your starting location. I might tell you, for instance, to walk two blocks south then to turn left. Those directions work _relative to where you are_. But they won't work for everyone because not everyone is starting in the same place.

This is like a relative path.

In this example, the browser is going to look for a file called `image.jpg` in the same folder as the HTML file (inside which the `<img>` tag is defined).

```html
<img src="./image.jpg">
```

## Making a resource downloadable

When we want to make a resource downloadable, we add the `download` keyword to our opening anchor tag, like so:

```html
<a href="/path/to/CV/file" download>Download CV</a>
```

## Tasks

- Move/copy the file you would like your users to download into your project folder
- Add to your page an anchor tag with a relative path to the file
- Add the keyword `download` to the opening anchor tag
- Test your download link
