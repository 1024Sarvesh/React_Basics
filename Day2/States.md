# React State (useState)

## What is State?

**State** is a built-in React object that stores data or information about a component.

State allows a component to remember values and update the UI whenever those values change.

Unlike Props, **State can change** over time.

---

# Why Do We Need State?

Without State, React components display static data.

State makes applications:

- Interactive
- Dynamic
- Responsive
- User Friendly

Examples:

- Counter
- Dark Mode
- Like Button
- Form Input
- Shopping Cart

---

# Props vs State

| Props | State |
|--------|-------|
| Passed from Parent | Managed inside Component |
| Read-only | Can be Updated |
| Used for Communication | Used for Dynamic Data |
| External Data | Internal Data |

---

# What is useState?

`useState` is a **React Hook** used to create and manage state in Functional Components.

Syntax

```jsx
const [state, setState] = useState(initialValue);
```

---

# Importing useState

```jsx
import { useState } from "react";
```

---

# Understanding useState

```jsx
const [count, setCount] = useState(0);
```

### Breakdown

- `count` → Current State Value
- `setCount` → Function to Update State
- `0` → Initial Value

---

# First State Example

```jsx
import { useState } from "react";

function App() {

  const [count, setCount] = useState(0);

  return (
    <>
      <h1>{count}</h1>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </>
  );
}

export default App;
```

---

# Updating State

Increase Value

```jsx
setCount(count + 1);
```

Decrease Value

```jsx
setCount(count - 1);
```

Reset Value

```jsx
setCount(0);
```

---

# Counter Application

```jsx
import { useState } from "react";

function App() {

  const [count, setCount] = useState(0);

  return (

    <>
      <h1>{count}</h1>

      <button onClick={() => setCount(count + 1)}>
        +
      </button>

      <button onClick={() => setCount(count - 1)}>
        -
      </button>

      <button onClick={() => setCount(0)}>
        Reset
      </button>
    </>

  );

}

export default App;
```

---

# State with String

```jsx
import { useState } from "react";

function App(){

  const [name, setName] = useState("Rahul");

  return(

    <>
      <h2>{name}</h2>

      <button
        onClick={() => setName("Priya")}
      >
        Change Name
      </button>
    </>

  );

}
```

---

# State with Boolean

```jsx
import { useState } from "react";

function App(){

  const [isLogin, setIsLogin] = useState(false);

  return(

    <>
      <h2>{isLogin ? "Welcome" : "Please Login"}</h2>

      <button
        onClick={() => setIsLogin(!isLogin)}
      >
        Toggle
      </button>
    </>

  );

}
```

---

# Toggle Button

```jsx
const [show, setShow] = useState(false);

<button
onClick={() => setShow(!show)}
>
Toggle
</button>

{
show && <h2>React Course</h2>
}
```

---

# State with Object

```jsx
const [student, setStudent] = useState({
  name: "Rahul",
  age: 22
});
```

Updating Object

```jsx
setStudent({
  ...student,
  age: 23
});
```

---

# State with Array

```jsx
const [fruits, setFruits] = useState([
  "Apple",
  "Banana",
  "Orange"
]);
```

Adding Item

```jsx
setFruits([
  ...fruits,
  "Mango"
]);
```

---

# Updating Array State

```jsx
const [numbers, setNumbers] = useState([1,2,3]);

setNumbers([
  ...numbers,
  4
]);
```

---

# Why Spread Operator?

Incorrect

```jsx
setNumbers([4]);
```

Old data is lost.

Correct

```jsx
setNumbers([
  ...numbers,
  4
]);
```

Old data is preserved.

---

# Functional Update

Recommended when the next state depends on the previous state.

```jsx
setCount(previous => previous + 1);
```

---

# Multiple State Variables

```jsx
const [name, setName] = useState("Rahul");

const [age, setAge] = useState(22);

const [city, setCity] = useState("Delhi");
```

# Lazy Initial State

When the initial state requires expensive calculations, use a function.

```jsx
const [count, setCount] = useState(() => {
  return 100;
});
```

React executes this function only during the first render.

---

# Updating State Based on Previous State

Instead of

```jsx
setCount(count + 1);
```

Use

```jsx
setCount((prevCount) => prevCount + 1);
```

This is safer because React may batch multiple state updates.

---

# Multiple State Updates

Incorrect

```jsx
setCount(count + 1);
setCount(count + 1);
```

Expected

```
2
```

Actual

```
1
```

Correct

```jsx
setCount((prev) => prev + 1);
setCount((prev) => prev + 1);
```

Output

```
2
```

---

# State is Asynchronous

```jsx
const [count, setCount] = useState(0);

function handleClick() {
  setCount(count + 1);

  console.log(count);
}
```

Output

```
0
```

The updated value is available after React re-renders.

---

# State Triggers Re-render

Whenever state changes, React automatically updates the UI.

```jsx
const [message, setMessage] = useState("Hello");

<button onClick={() => setMessage("Welcome")}>
  Change
</button>
```

React automatically displays the new value.

---

# Immutability

Never change state directly.

Incorrect

```jsx
user.name = "John";
```

Correct

```jsx
setUser({
  ...user,
  name: "John"
});
```

---

# Updating Nested Objects

```jsx
const [user, setUser] = useState({
  name: "Rahul",
  address: {
    city: "Delhi"
  }
});
```

Update city

```jsx
setUser({
  ...user,
  address: {
    ...user.address,
    city: "Mumbai"
  }
});
```

---

# Removing Items from Array State

```jsx
const [fruits, setFruits] = useState([
  "Apple",
  "Banana",
  "Orange"
]);
```

Remove Banana

```jsx
setFruits(
  fruits.filter((fruit) => fruit !== "Banana")
);
```

---

# Updating Array Item

```jsx
const [students, setStudents] = useState([
  "Rahul",
  "Priya",
  "John"
]);
```

Update Rahul

```jsx
setStudents(
  students.map((student) =>
    student === "Rahul" ? "Amit" : student
  )
);
```

---

# State with Form Inputs

```jsx
const [name, setName] = useState("");
```

```jsx
<input
  value={name}
  onChange={(e) => setName(e.target.value)}
/>
```

This is called a **Controlled Component**.

---

# State with Checkbox

```jsx
const [checked, setChecked] = useState(false);
```

```jsx
<input
  type="checkbox"
  checked={checked}
  onChange={() => setChecked(!checked)}
/>
```

---

# State with Radio Button

```jsx
const [gender, setGender] = useState("");
```

```jsx
<input
  type="radio"
  value="Male"
  onChange={(e) => setGender(e.target.value)}
/>
```

---

# State with Select

```jsx
const [city, setCity] = useState("");
```

```jsx
<select
  value={city}
  onChange={(e) => setCity(e.target.value)}
>
  <option>Delhi</option>
  <option>Mumbai</option>
</select>
```

---

# Derived State

Avoid storing values that can be calculated.

Incorrect

```jsx
const [firstName] = useState("Rahul");
const [lastName] = useState("Sharma");
const [fullName] = useState("Rahul Sharma");
```

Correct

```jsx
const fullName = `${firstName} ${lastName}`;
```

---

# State Lifting (Introduction)

Sometimes multiple components need the same data.

Move the state to the nearest common parent component.

```
Parent
│
├── Child A
└── Child B
```

The parent manages the state and passes it as props.

---

# When to Use State

Use State when:

- Data changes over time
- UI depends on user interaction
- API data changes
- Form values change
- Toggle UI
- Counter
- Shopping Cart

---

# When NOT to Use State

Don't use State for:

- Static text
- Constant values
- Imported data
- Values received through Props (unless you need a local copy)

---

# Rules of useState

- Call `useState` only at the top level.
- Do not call Hooks inside loops.
- Do not call Hooks inside conditions.
- Do not call Hooks inside nested functions.

Correct

```jsx
function App() {
  const [count, setCount] = useState(0);
}
```

Incorrect

```jsx
if (true) {
  const [count, setCount] = useState(0);
}
```
---
# Practical Example 1

## Counter App

Features

- Increment
- Decrement
- Reset

---

# Practical Example 2

## Dark Mode Toggle

```jsx
const [darkMode, setDarkMode] = useState(false);

<button
onClick={() => setDarkMode(!darkMode)}
>
Toggle Theme
</button>
```

---

# Practical Example 3

## Like Button

```jsx
const [like, setLike] = useState(0);

<button
onClick={() => setLike(like + 1)}
>
❤️ {like}
</button>
```

---

# Practical Example 4

## Show/Hide Password

```jsx
const [showPassword, setShowPassword] = useState(false);

<input
type={showPassword ? "text" : "password"}
/>

<button
onClick={() => setShowPassword(!showPassword)}
>
Show Password
</button>
```

---

# Mini Project

## Counter Dashboard

Features

- Increment
- Decrement
- Reset
- Disable Negative Values
- Display Current Count

---

# Best Practices

- Keep state minimal.
- Never modify state directly.
- Always use setter functions.
- Use meaningful state names.
- Use functional updates when needed.

---

# Common Mistakes

## Incorrect

```jsx
count = count + 1;
```

Correct

```jsx
setCount(count + 1);
```

---

## Incorrect

```jsx
student.age = 25;
```

Correct

```jsx
setStudent({
  ...student,
  age: 25
});
```

---

## Incorrect

```jsx
numbers.push(4);
```

Correct

```jsx
setNumbers([
  ...numbers,
  4
]);
```

---

# Assignment

Build a **Student Dashboard**.

Features:

- Student Name
- Student Age
- Increase Age
- Change Name
- Reset Data
- Dark Mode Toggle

---

# Real-world Examples

- Shopping Cart Quantity
- Login Status
- Theme Toggle
- Notification Counter
- Wishlist
- Search Box
- Calculator
- Quiz Score
- Timer
- Todo List

---

# Interview Questions

1. What is State in React?
2. What is the difference between Props and State?
3. What is the `useState` Hook?
4. Why do we use `useState`?
5. How do you update State?
6. Why should State never be modified directly?
7. What is the Spread Operator used for in State updates?
8. What is a Functional Update?
9. Can a component have multiple State variables?
10. When should you use State instead of Props?
11. What happens when state changes?
12. Why is state immutable?
13. What is a controlled component?
14. What is lazy initialization in `useState`?
15. What is the functional update form of `setState`?
16. Why is React state asynchronous?
17. How do you update nested objects?
18. How do you remove an item from array state?
19. What is derived state?
20. What is state lifting?

---

# Summary

Today you learned:

- What is State
- Props vs State
- useState Hook
- Updating State
- String State
- Boolean State
- Object State
- Array State
- Functional Updates
- Building Interactive Applications

---

# Next Class

## Day 7: Conditional Rendering

Topics:

- if Statement
- Ternary Operator
- Logical AND (&&)
- Rendering Based on Conditions
- Login/Logout UI
- Loading Spinner