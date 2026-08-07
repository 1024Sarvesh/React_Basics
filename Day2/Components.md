# React Components

## What is a Component?

A **Component** is a reusable piece of UI in React.

Components allow us to divide a large application into small, manageable, and reusable pieces.

Think of a component like a LEGO block. By combining multiple blocks, we can build a complete application.

---

## Why Do We Need Components?

Without components, we write all HTML inside a single file.

Problems:

- Difficult to manage
- Difficult to read
- Difficult to reuse
- Difficult to maintain

With components:

- Code becomes reusable.
- Code becomes organized.
- Easy to maintain.
- Easy to debug.

---

## Real-Life Example

Imagine building a website.

Every page contains:

- Navbar
- Header
- Footer

Instead of writing them repeatedly, we create one component and reuse it everywhere.

```
Website

├── Navbar
├── Header
├── Hero
├── Services
├── Footer
```

---

# Types of Components

React has two types of components.

## 1. Functional Components

These are JavaScript functions that return JSX.

Example

```jsx
function Welcome() {
  return <h1>Welcome to React</h1>;
}

export default Welcome;
```

---

## 2. Class Components

These are JavaScript classes that extend `React.Component`.

Example

```jsx
import React, { Component } from "react";

class Welcome extends Component {
  render() {
    return <h1>Welcome to React</h1>;
  }
}

export default Welcome;
```

> **Note:** Modern React applications mainly use **Functional Components** with Hooks.

---

# Creating Your First Component

Create a new file.

```
Header.jsx
```

```jsx
function Header() {
  return <h1>My Website</h1>;
}

export default Header;
```

---

# Using a Component

Import the component into `App.jsx`.

```jsx
import Header from "./Header";

function App() {
  return (
    <>
      <Header />
    </>
  );
}

export default App;
```

Output

```
My Website
```

---

# Component Naming Rules

✅ Start with a Capital Letter.

```jsx
function Header() {}
```

❌ Incorrect

```jsx
function header() {}
```

React treats lowercase names as HTML elements.

---

# File Naming Convention

Use PascalCase.

```
Navbar.jsx
Header.jsx
Footer.jsx
ProductCard.jsx
StudentCard.jsx
```

Avoid

```
navbar.jsx
header.jsx
productcard.jsx
```

---

# Returning JSX

A component must return JSX.

```jsx
function Header() {
  return <h1>Hello</h1>;
}
```

A component can return only **one root element**.

Incorrect

```jsx
return (
  <h1>Hello</h1>
  <p>React</p>
);
```

Correct

```jsx
return (
  <>
    <h1>Hello</h1>
    <p>React</p>
  </>
);
```

---

# Importing Components

```jsx
import Header from "./Header";
```

Using Component

```jsx
<Header />
```

---

# Exporting Components

Default Export

```jsx
export default Header;
```

Import

```jsx
import Header from "./Header";
```

---

# Nested Components

A component can contain another component.

Example

```
App
│
├── Navbar
├── Hero
├── Footer
```

App.jsx

```jsx
import Navbar from "./Navbar";
import Hero from "./Hero";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Footer />
    </>
  );
}

export default App;
```

---

# Reusable Components

One component can be used multiple times.

```jsx
<Card />
<Card />
<Card />
<Card />
```

Instead of writing the same HTML repeatedly.

---

# Component Composition

Combining multiple small components to build a larger UI is called **Component Composition**.

Example

```
Website

Header
Navbar
Hero
Services
Testimonials
Footer
```

---

# Folder Structure

```
src

│── components
│      │── Header.jsx
│      │── Navbar.jsx
│      │── Footer.jsx
│      │── Card.jsx
│
│── App.jsx
│── main.jsx
```

---

# Practical Example 1

## Header Component

```jsx
function Header() {
  return (
    <header>
      <h1>React Course</h1>
    </header>
  );
}

export default Header;
```

---

# Practical Example 2

## Navbar Component

```jsx
function Navbar() {
  return (
    <nav>
      <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">Contact</a>
    </nav>
  );
}

export default Navbar;
```

---

# Practical Example 3

## Footer Component

```jsx
function Footer() {
  return <footer>Copyright © 2026</footer>;
}

export default Footer;
```

---

# Combining Components

```jsx
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Footer />
    </>
  );
}

export default App;
```

---

# Mini Project

## Blog Layout

Create the following components:

- Header
- Navbar
- Sidebar
- Blog
- Footer

Combine all components inside `App.jsx`.

Expected Layout

```
----------------------------
Header
----------------------------
Navbar
----------------------------
Sidebar | Blog Content
----------------------------
Footer
----------------------------
```

---

# Best Practices

- Use PascalCase for component names.
- Keep components small and focused.
- Create reusable components.
- Organize components inside the `components` folder.
- Export one component per file.

---

# Common Mistakes

## Incorrect Component Name

```jsx
function header() {}
```

Correct

```jsx
function Header() {}
```

---

## Forgetting to Export

Incorrect

```jsx
function Header() {}
```

Correct

```jsx
function Header() {}

export default Header;
```

---

## Incorrect Import Path

Incorrect

```jsx
import Header from "Header";
```

Correct

```jsx
import Header from "./Header";
```

---

## Returning Multiple Elements

Incorrect

```jsx
return (
  <h1>Hello</h1>
  <p>World</p>
);
```

Correct

```jsx
return (
  <>
    <h1>Hello</h1>
    <p>World</p>
  </>
);
```

---

# Assignment

Create a **Portfolio Website Layout** using reusable components.

Components:

- Header
- Navbar
- Hero
- About
- Services
- Contact
- Footer

---

# Interview Questions

1. What is a React Component?
2. Why do we use Components?
3. What are the types of Components?
4. What is the difference between Functional and Class Components?
5. Why should component names start with a capital letter?
6. What is Component Composition?
7. What is a Reusable Component?
8. How do you import and export Components?
9. Can one component use another component?
10. What are the best practices for creating React Components?

---

# Summary

Today you learned:

- What Components are
- Types of Components
- Creating Components
- Importing and Exporting Components
- Nested Components
- Reusable Components
- Component Composition
- Best Practices
- Folder Structure

---

# Next Class

## Day 4: React Props

Topics:

- What are Props?
- Parent to Child Communication
- Passing Data
- Props Destructuring
- Default Props
- Children Props
- Building Reusable Components with Props