# Introduction to Props

## What are Props?

**Props** stands for **Properties**.

Props are used to pass data from a **Parent Component** to a **Child Component**.

Think of Props like function arguments.

### JavaScript Example

```javascript
function add(a, b) {
  return a + b;
}

add(10, 20);
```

Just like `10` and `20` are arguments,

```jsx
<Student name="Rahul" age={22} />
```

`name` and `age` are Props.

---

# Why Props?

Without Props:

```jsx
function Student() {
  return <h1>Rahul</h1>;
}
```

Only Rahul can be displayed.

With Props:

```jsx
<Student name="Rahul" />
<Student name="Priya" />
<Student name="John" />
```

One component can display unlimited data.

---

# Parent Component

```jsx
import Student from "./Student";

function App() {
  return (
    <>
      <Student name="Rahul" age={22} />
    </>
  );
}

export default App;
```

---

# Child Component

```jsx
function Student(props) {
  return (
    <>
      <h2>Name : {props.name}</h2>
      <p>Age : {props.age}</p>
    </>
  );
}

export default Student;
```

### Output

```
Name : Rahul
Age : 22
```

---

# Understanding the Flow

```
Parent Component
        │
        │ Props
        ▼
Child Component
```

Data always flows **Parent ➜ Child**.

Props are **Read Only**.

---

# Passing Multiple Props

```jsx
<Student name="Rahul" age={22} city="Delhi" course="React" />
```

Student Component

```jsx
function Student(props) {
  return (
    <>
      <h2>{props.name}</h2>
      <p>{props.age}</p>
      <p>{props.city}</p>
      <p>{props.course}</p>
    </>
  );
}
```

---

# Passing Different Data Types

## String

```jsx
<Product name="Laptop" />
```

## Number

```jsx
<Product price={55000} />
```

## Boolean

```jsx
<Product available={true} />
```

## Array

```jsx
<Product colors={["Red", "Blue", "Black"]} />
```

## Object

```jsx
<Product
  product={{
    name: "Laptop",
    price: 55000,
  }}
/>
```

## Function

```jsx
<Product greet={() => alert("Hello")} />
```

---

# Receiving Object Props

```jsx
function Product({ product }) {
  return (
    <>
      <h2>{product.name}</h2>
      <p>₹{product.price}</p>
    </>
  );
}
```

---

# Props Destructuring

Instead of writing

```jsx
props.name;
props.age;
props.city;
```

Use

```jsx
function Student({ name, age, city }) {
  return (
    <>
      <h2>{name}</h2>
      <p>{age}</p>
      <p>{city}</p>
    </>
  );
}
```

Advantages

- Cleaner code
- Easy to read
- Less typing

---

# Default Props

Sometimes Parent doesn't send Props.

Example

```jsx
<Student />
```

Output

```
undefined
```

Solution

```jsx
function Student({ name = "Guest", age = 18 }) {
  return (
    <>
      <h2>{name}</h2>
      <p>{age}</p>
    </>
  );
}
```

Output

```
Guest
18
```

---

# Children Props

Example

```jsx
<Card>
  <h2>React Course</h2>
  <p>Learn React from Scratch</p>
</Card>
```

Card Component

```jsx
function Card({ children }) {
  return <div className="card">{children}</div>;
}

export default Card;
```

Output

```
----------------------
React Course
Learn React...
----------------------
```

Everything inside

```jsx
<Card></Card>
```

becomes `children`.

---

# Practical Example 1

## Student Card

### App.jsx

```jsx
<Student
  name="Rahul"
  age={22}
  city="Delhi"
/>

<Student
  name="Priya"
  age={21}
  city="Mumbai"
/>
```

### Student.jsx

```jsx
function Student({ name, age, city }) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>{age}</p>
      <p>{city}</p>
    </div>
  );
}

export default Student;
```

---

# Practical Example 2

## Employee Card

```jsx
<Employee
  name="John"
  designation="Developer"
  salary={60000}
/>

<Employee
  name="Alice"
  designation="Designer"
  salary={50000}
/>

<Employee
  name="David"
  designation="Manager"
  salary={80000}
/>
```

Employee Component

```jsx
function Employee({ name, designation, salary }) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>{designation}</p>
      <h3>₹{salary}</h3>
    </div>
  );
}

export default Employee;
```

---

# Practical Example 3

## Product Card

Props

- Image
- Product Name
- Price
- Rating
- Category

---

# Practical Example 4

## Movie Card

Props

- Poster
- Movie Name
- Rating
- Year
- Language

---

# Mini Project

## Netflix Movie Cards

Create a reusable MovieCard Component.

Example

```jsx
<MovieCard
  title="Stranger Things"
  year={2022}
  rating={9.1}
  image="image-url"
/>

<MovieCard
  title="Money Heist"
  year={2021}
  rating={8.8}
  image="image-url"
/>

<MovieCard
  title="Wednesday"
  year={2023}
  rating={8.5}
  image="image-url"
/>
```

Expected Output

```
+---------------------+
|     Movie Poster    |
|                     |
| Stranger Things     |
| Rating : 9.1 ⭐      |
| Year : 2022         |
+---------------------+
```

---

# Common Mistakes

## Incorrect

```jsx
age = "22";
```

## Correct

```jsx
age={22}
```

---

## Incorrect

```jsx
function Student({ name }) {
  return <h1>{props.name}</h1>;
}
```

## Correct

```jsx
function Student({ name }) {
  return <h1>{name}</h1>;
}
```

---

## Incorrect

```jsx
props.name = "Rahul";
```

Props are Read Only.

---

# Props vs State

| Props            | State                    |
| ---------------- | ------------------------ |
| Read Only        | Can Change               |
| Parent to Child  | Managed Inside Component |
| External Data    | Internal Data            |
| Passed by Parent | Updated using useState   |

---

# Best Practices

- Use meaningful prop names.
- Use destructuring.
- Keep props read-only.
- Build reusable components.
- Pass only required props.

---

# Assignment

Build a **Product Catalog** using reusable ProductCard components.

Each card should display:

- Product Image
- Product Name
- Price
- Category
- Rating
- Stock Status

Create at least **8 products**.

---

# Interview Questions

1. What are Props?
2. Why do we use Props?
3. What is the difference between Props and State?
4. Can a child component modify Props?
5. What are default Props?
6. What is Props destructuring?
7. What is the `children` prop?
8. What types of data can be passed through Props?
9. How do Props make components reusable?
10. Explain Parent-to-Child communication in React.

---

# Summary

Today you learned:

- What Props are
- Parent to Child communication
- Passing multiple Props
- Different data types as Props
- Props Destructuring
- Default Props
- Children Props
- Building reusable components

---

# Next Class

## Day 5: React Events

Topics:

- onClick
- onChange
- onSubmit
- Mouse Events
- Keyboard Events
- Event Object
- Event Handling Project