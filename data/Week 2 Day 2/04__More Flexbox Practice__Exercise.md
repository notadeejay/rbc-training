---
uuid: 5cf63610-7c13-438c-9374-7e7efe446b67
---

Before we start adding flexbox to the layout of our resume page, here are a few exercises to help you fully understand the concepts.

We've written HTML for you and provided you with layout designs. Your job is to write CSS that matches the designs. You might find it easiest to copy and paste this HTML into CodePen (https://codepen.io/), and write your CSS there. Feel free to work with a partner through these exercises. You may find it helpful to talk through the code with a classmate, and complete these layouts together.

### Layout One

Given this HTML:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Layout One</title>
  </head>
  <body>
    <header>
      <h2>A</h2>
    </header>
    <div class="container">
      <aside>
        <h2>B</h2>
      </aside>
      <main>
        <h2>C</h2>
      </main>
    </div>
  </body>
</html>
```

Write CSS to create this layout:

![](https://cl.ly/223O0m0A2j2D/Image%202017-10-22%20at%2012.35.39%20PM.png)


### Layout Two

Given this HTML:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Layout 2</title>
  </head>
  <body>
    <header>
      <h2>A</h2>
    </header>
    <main>
      <div class="container">
        <article>
          <h2>B</h2>
        </article>
        <div class="section-container">
          <section>
            <h2>C</h2>
          </section>
          <section>
            <h2>D</h2>
          </section>
          <section>
            <h2>E</h2>
          </section>
        </div>
      </div>
      <aside>
        <h2>F</h2>
      </aside>
    </main>
    <footer>
      <h2>G</h2>
    </footer>
  </body>
</html>
```

Write CSS to create this layout:

![](https://cl.ly/1l123j041z0l/Image%202017-10-29%20at%203.55.39%20PM.png)

### Layout Three

Given this HTML:

```HTML
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Layout 3</title>
  </head>
  <body>
    <header>
      <h2>A</h2>
    </header>
    <main>
      <div class="container">
        <div>
          <section><h2>B</h2></section>
          <section><h2>C</h2></section>
          <section><h2>D</h2></section>
        </div>
        <div>
          <section><h2>E</h2></section>
          <section><h2>F</h2></section>
          <section><h2>G</h2></section>
        </div>
      </div>
      <aside>
        <h2>H</h2>
      </aside>
    </main>
  </body>
</html>
```

Write CSS to create this layout:

![](https://cl.ly/053X3l0D3z2M/Image%202017-10-22%20at%201.16.28%20PM.png)
