# React Events

## What are Events?

An **Event** is an action performed by the user or browser.

Examples of events:

- Clicking a button
- Typing in an input field
- Submitting a form
- Hovering over an element
- Pressing a keyboard key
- Double-clicking an element

React uses **Event Handling** to respond to these user actions.

---

# Why Do We Need Events?

Without events, a React application would only display static content.

Events make applications:

- Interactive
- Dynamic
- User Friendly
- Responsive

---

# React Events vs HTML Events

### HTML

```html
<button onclick="showMessage()">Click Me</button>
```

### React

```jsx
<button onClick={showMessage}>Click Me</button>
```

### Differences

| HTML           | React                    |
| -------------- | ------------------------ |
| onclick        | onClick                  |
| Uses lowercase | Uses camelCase           |
| Uses string    | Uses JavaScript function |

---

# Event Naming Convention

React uses **camelCase**.

Examples

```jsx
onClick;
onChange;
onSubmit;
onMouseEnter;
onMouseLeave;
onKeyDown;
onKeyUp;
onFocus;
onBlur;
```

---

# onClick Event

Triggered when the user clicks an element.

```jsx
function App() {
  function handleClick() {
    alert("Button Clicked");
  }

  return <button onClick={handleClick}>Click Me</button>;
}

export default App;
```

---

# Calling Function with Parameters

```jsx
function App() {
  function greet(name) {
    alert(`Welcome ${name}`);
  }

  return <button onClick={() => greet("Rahul")}>Click</button>;
}
```

---

# Anonymous Function

```jsx
<button
  onClick={() => {
    alert("Hello");
  }}
>
  Click
</button>
```

---

# Multiple Statements

```jsx
<button
  onClick={() => {
    alert("Hello");
    console.log("Button Clicked");
  }}
>
  Click
</button>
```

---

# onDoubleClick Event

Triggered when the user double-clicks an element.

```jsx
<button onDoubleClick={() => alert("Double Click")}>Double Click</button>
```

---

# onMouseEnter Event

Triggered when the mouse enters an element.

```jsx
<div onMouseEnter={() => console.log("Mouse Enter")}>Hover Here</div>
```

---

# onMouseLeave Event

Triggered when the mouse leaves an element.

```jsx
<div onMouseLeave={() => console.log("Mouse Leave")}>Hover Here</div>
```

---

# onMouseMove Event

Triggered whenever the mouse moves over an element.

```jsx
<div onMouseMove={() => console.log("Moving")}>Move Mouse</div>
```

---

# onChange Event

Triggered whenever the value of an input changes.

```jsx
function App() {
  return <input type="text" onChange={(e) => console.log(e.target.value)} />;
}
```

---

# onInput Event

Runs while the user types.

```jsx
<input onInput={(e) => console.log(e.target.value)} />
```

---

# onFocus Event

Triggered when an input gains focus.

```jsx
<input onFocus={() => console.log("Focused")} />
```

---

# onBlur Event

Triggered when an input loses focus.

```jsx
<input onBlur={() => console.log("Blur")} />
```

---

# Keyboard Events

## onKeyDown

Runs when a key is pressed.

```jsx
<input onKeyDown={() => console.log("Key Down")} />
```

---

## onKeyUp

Runs when the key is released.

```jsx
<input onKeyUp={() => console.log("Key Up")} />
```

---

# Form Events

## onSubmit

Triggered when a form is submitted.

```jsx
function App() {
  function submitHandler(e) {
    e.preventDefault();
    alert("Form Submitted");
  }

  return (
    <form onSubmit={submitHandler}>
      <button>Submit</button>
    </form>
  );
}
```

---

# Prevent Default

Normally a form refreshes the page after submission.

Use

```jsx
e.preventDefault();
```

to stop the default browser behaviour.

---

# Event Object

React automatically passes an **Event Object**.

Example

```jsx
function clickHandler(event) {
  console.log(event);
}
```

---

# Event Target

```jsx
<input onChange={(e) => console.log(e.target.value)} />
```

`e.target.value` returns the value entered by the user.

---

# Event Object Properties

Common properties:

- e.target
- e.target.value
- e.target.name
- e.type
- e.preventDefault()

---

# Practical Example 1

## Button Click Counter

```jsx
function App() {
  function handleClick() {
    alert("Button Clicked");
  }

  return <button onClick={handleClick}>Click</button>;
}

export default App;
```

---

# Practical Example 2

## Input Value

```jsx
function App() {
  return (
    <input
      placeholder="Enter Name"
      onChange={(e) => console.log(e.target.value)}
    />
  );
}
```

---

# Practical Example 3

## Login Form

```jsx
function App() {
  function login(e) {
    e.preventDefault();
    alert("Login Successful");
  }

  return (
    <form onSubmit={login}>
      <input type="email" />

      <input type="password" />

      <button>Login</button>
    </form>
  );
}
```

---

# Practical Example 4

## Hover Box

```jsx
function App() {
  return (
    <div
      onMouseEnter={() => alert("Mouse Enter")}
      onMouseLeave={() => alert("Mouse Leave")}
      style={{
        width: "200px",
        height: "100px",
        background: "skyblue",
      }}
    >
      Hover Here
    </div>
  );
}
```

---

# Mini Project

## Interactive Button Panel

Create buttons for:

- Click
- Double Click
- Hover
- Focus
- Blur

Each button should display a different message.

---

# Best Practices

- Use meaningful function names.
- Avoid calling functions directly inside JSX.
- Use arrow functions only when necessary.
- Keep event handlers simple.
- Prevent default form submission when needed.

---

# Common Mistakes

## Incorrect

```jsx
<button onClick={handleClick()}>Click</button>
```

This executes immediately.

Correct

```jsx
<button onClick={handleClick}>Click</button>
```

---

## Incorrect

```jsx
<button onclick={handleClick}>
```

Correct

```jsx
<button onClick={handleClick}>
```

---

## Forgetting preventDefault()

```jsx
<form onSubmit={submit}>
```

The page refreshes.

Correct

```jsx
function submit(e) {
  e.preventDefault();
}
```

---

# Assignment

Build an **Interactive Registration Form**.

Features:

- Name Input
- Email Input
- Password Input
- Submit Button
- Display entered values in the console
- Prevent page refresh
- Show alert after successful submission

---

# Interview Questions

1. What are Events in React?
2. What is Event Handling?
3. What is the difference between HTML and React events?
4. Why does React use camelCase event names?
5. What is the purpose of the Event Object?
6. What is `e.target.value`?
7. What does `preventDefault()` do?
8. Difference between `onChange` and `onInput`?
9. Difference between `onKeyDown` and `onKeyUp`?
10. Why should we write `onClick={handleClick}` instead of `onClick={handleClick()}`?

---

# Summary

Today you learned:

- React Events
- Event Handling
- onClick
- onChange
- onSubmit
- Mouse Events
- Keyboard Events
- Event Object
- preventDefault()
- Form Handling

---

# Next Class

## Day 6: React State (`useState`)

Topics:

- What is State?
- useState Hook
- Updating State
- Counter App
- Toggle Button
- Dynamic UI with State