---
uuid: 9031fe1a-118d-47e5-8110-499008b47b19
---
---
---

Strings are any collection of characters wrapped in quotes. They can be one word:

```javascript
'Hello'
```

or a whole sentence:

```javascript
"Welcome to Lighthouse Labs"
```

and be written within single quotes or double quotes.

Like numbers, we can manipulate strings using code. For example, we can "add" strings together (in programming, we don't add strings, we concatenate them):

```javascript
"Good " + "morning, " + "Maggie"
// "Good morning, Maggie"
```

If you look carefully, the first two strings (`"Good "` and `"morning, "`) have extra spaces added to the end of them. This is an example of needing to be very specific when we write code. Without these extra spaces, there would be no space between the words, and our output would be squished together.

Another thing to note, is that the following is a string, not a number:

```javascript
'3'
```

Computers need to keep track not just of values (like 3) but also their data types (like strings). This is important because the operations you can perform on a value (like addition or concatenation) depend on what kind of data type you're working with.


### Exercises

- Create a string containing your first name
- Log your string to the panel on the right
- Add some words together to make a sentence that greets your instructor
- What happens when you add a string and an integer together?
