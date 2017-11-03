---
uuid: 09bcd823-35f5-4283-a4f6-164bfd6a73b7
questions:
  -
    question: |
      Given the HTML and CSS below, what colour will the paragraph text be?

      ```html
      <header>
        <h1>My Awesome Webpage</h1>
        <p id="subtitle">I'm a paragraph</p>
      </header>
      ```

      ```css
      #subtitle {
        color: purple;
      }
      header p {
        color: green;
      }
      ```

    uuid: 313e0364-511b-4f66-ba94-639438f6d757
    options_attributes:
      -
        answer: "purple"
        explanation: "That's right, it will be purple. That's because `#subtitle` is a more specific selector than `header p`."
        correct: true
      -
        answer: "green"
        explanation: "No, it's not going to be purple. That's because `header p` is less specific a selector than `#subtitle`."

  -
    question: |
      Given the HTML and CSS below, what `font-size` will the `<h4>` element be?

      ```html
      <main class="news-articles">
        <h4>What font-size will I be?</h4>
        <p>Paragraph</p>
      </main>
      ```

      ```css
      main h4 {
        font-size: 40px;
      }

      .news-articles h4 {
        font-size: 30px;
      }
      ```

    uuid: 721b5d23-5f93-436b-a608-b1a2b21f2066
    options_attributes:
      -
        answer: "40px"
        explanation: "No, it's not going to be 40px. The `main h4` selector is less specific than `.news-articles h4`."
      -
        answer: "30px"
        explanation: "That's right, it's going to be 30px, because the `.news-articles h4` selector is more specific than `main h4`."
        correct: true
---
