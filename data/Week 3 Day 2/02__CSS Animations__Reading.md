---
uuid: b5e880a8-848d-4465-85ea-5073f1869f91
---

<!-- This is mainly just rough notes, need to rewrite to have more have a gentle learning curve  -->

CSS Animations allow you to add a little bit more interactivity to your pages.


Let's start with a page with three circles on it:


```
<div class="circle small"></div>
<div class="circle medium"></div>
<div class="circle large"></div>
```

Some CSS:

```css
  .circle {
    border-radius: 50%;
    background-color: green;
  }

  .small {
    height: 50px;
    width: 50px;
  }

  .medium {
    height: 100px;
    width: 100px;
  }

  .large {
    height: 150px;
    width: 150px;
  }  
```

### Keyframes
- controls the intermediate steps in a CSS animation sequence by defining styles for keyframes (or waypoints)
along the animation sequence.


Examples

```css
@keyframes slidein {
  from {
    margin-left: 100%;
    width: 300%;
  }

  to {
    margin-left: 0%;
    width: 100%;
  }
}
```
