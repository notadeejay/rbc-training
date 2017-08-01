---
name: "Sample Quiz"
uuid: 1f620a5e-76cf-11e7-b5a5-be2e44b06b34
duration: 20
questions:

  -
    question: "What does `console.log(...)` do in the Node.js environment?"
    uuid: 1f620c02-76cf-11e7-b5a5-be2e44b06b34
    outcome: 5f66ee62-ea91-4697-917e-4abb014554d9
    options_attributes:
      -
        answer: "Logs a string to a file on local disk"
        explanation: "Incorrect, interacting with the filesystem would require the `fs` module"
      -
        answer: "Prints the given argument to the standard output, or terminal"
        explanation: "Correct, it outputs to the stream known as STDOUT"
        correct: true
      -
        answer: "Keeps the parameters in memory for later use"
        explanation: "Incorrect, the console.log does not store anything in memory"
      -
        answer: "Ignores it unless it's configured to do something"
        explanation: "Incorrect, by default the console.log prints a statement somewhere"

  -
    question: |
      What will the following code output to the console?

      ```javascript
      console.log(friend);
      var friend = 'E.T.';
      console.log(friend);
      ```

    uuid: 1f620d74-76cf-11e7-b5a5-be2e44b06b34
    outcome: 15b1aee2-a15f-48e0-bc7c-ad92b2d61dd6
    options_attributes:
      -
        answer: |
          ```bash
          ReferenceError: friend is not defined
          ```
        explanation: "The declaration of `friend` will be hoisted to the top, before the first `console.log` – `friend` will therefore already be defined."
      -
        answer: |
          ```bash
          undefined
          E.T.
          ```
        explanation: "`friend` is hoisted to the top but given no value, therefore the first `console.log` will say `undefined`. Then, the value `\"E.T.\"` is set to `friend` before the second `console.log` which will output `\"E.T.\"`. "
        correct: true
      -
        answer: |
          ```bash
          friend
          E.T.
          ```
        explanation: "`friend` is a variable, and `console.log(friend)` will output the variable's value not the variable's name. When a variable is declared but not assigned a value, its value will be `undefined`."
---
