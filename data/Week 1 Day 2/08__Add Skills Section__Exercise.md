---
uuid: ad778b5d-4dc0-47f4-b304-6e0b8055def8
---

Let's use the same approach to build our **Skills** section:

![skills breakdown](https://cl.ly/3L2r1I3r1e40/[adb764b3e2a6afff76be3f011a9361ea]_Image%202017-10-25%20at%207.33.49%20PM.png)

The main components for our **Skills** section are:

- A Title
- A list of skills
- We can break down the list of skills further, each one contains
  - The name of the skill
  - A visual indicator of skill level
  - A percentage that matches skill level


## Tasks

- Add an element to contain your entire **Skills** section
- A section title
- A list of your skills with each entry including a name, progress bar, and a percentage


## HTML tags reference

The following HTML elements might come in handy as you're building this section.

#### meter

The meter element is used to display a measurement on a known scale.


```html
<meter min="0" max="10" value="6"></meter>
```

The `meter` element takes several attributes:

- `max`: The maximum value on the scale
- `min`: The minimum value on the scale
- `value`: The measured value

#### Headings

Heading tags (`h1` -> `h6`) are used to add titles, headings and subheadings to your web page.

```html
<h1>Webpage Title</h1>
```

#### section

Semantic tag, used when grouping a collection of elements together when they have a title.

```html
<section>
  <h2>I'm a section title</h2>
  <!-- More HTML goes here -->
</section>
```

#### article
`<article>` tags are used to wrap pieces of content that can be read independently from the rest of the website. Common examples are blog posts, magazine articles, and news reports.

```html
<article>
  <h3>Article Title</h3>
  <p>Once up on a time ...</p>
</article>
```

#### p

A common HTML element, used for, well, paragraphs or text that is not a heading.

```html
<p>
  <!-- Paragraph Text here -->
</p>
```

#### div

A `<div>` is a generic container element. You can use it to group elements together, or for styling purposes (once we get to CSS).

```html
<div>
  <h2>A div is often used to group elements together</h2>
  <p>Like this</p>
</div>
```
