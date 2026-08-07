import React, { Fragment, useEffect, useState } from "react";
import Navbar from "./components/Header";
import MovieCard from "./components/MovieCards";
import { movies } from "./data/Movies";
function App() {
  const [count, setCount] = useState(0);

  const [isNestedShow, setIsNestedShow] = useState(false);

 

  function increaseCount() {
    setCount(count + 1);
  }

  function decreaseCount() {
    setCount(count - 1);
  }

  function MyButton() {
    return <button>I,m a Button</button>;
  }

  function Nested() {
    setIsNestedShow(!isNestedShow);

    console.log(isNestedShow);
  }


 




  return (
    <React.Fragment>
      <Navbar/>
      <h1>Count:{count}</h1>
      <button onClick={decreaseCount}>Decrease</button>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={Nested}>Nested</button>

      {isNestedShow && <h1>Hello world</h1>}
       <div className="movies-container">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} name="aman" />
        ))}
      </div>
    </React.Fragment>
  );
}

export default App;
