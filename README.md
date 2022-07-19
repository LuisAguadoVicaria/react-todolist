<h1 align="center">React Todolist</h1>

<p align="center" >
  Simple todo list made with pure css and React
</p>
<p align="center" >
  <a href="https://luisaguadovicaria.github.io/react-todolist/">
    <img height="44px"  src="https://github.com/LuisAguadoVicaria/LuisAguadoVicaria/raw/main/proyect-images/live-demo-button.png" alt="live-demo" align="center">
  </a>
</p>

<p align="center">
  <img width="360px" src="https://github.com/LuisAguadoVicaria/LuisAguadoVicaria/raw/main/proyect-images/react-todo.png" alt="demo-image" align="center">
</p>
<div align="center">

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://github.com/alexandresanlim/Badges4-README.md-Profile)[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://github.com/Ileriayo/markdown-badges)[![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)]()

</div>
<div align="center">

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
  
</div>
<br>

## Featured

<br>

>   <li>Todo list with delete button</li>
>   <li><code>useState</code> to store the list</li>
>   <li>Add task: <code>keyUp</code></li>
>   <li>Remove task: <code>onClick</code></li>
>   <li>Element count (Array datatype)</li>
>   <li>Reference: <a href="https://github.com/LuisAguadoVicaria/react-todolist-fetch">Todo with API</a></li>

<br>

```jsx
import "./App.css";
import { useState } from "react";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [list, setlist] = useState([
    "Clean bedroom",
    "Take the dog out",
    "Study Maths",
  ]);

  const handleRemoveItem = (index) => {
    setlist((e) => e.filter((_, i) => i !== index));
  };

  const keyHandle = (event) => {
    if (event.key === "Enter") {
      if (inputValue !== "") setlist([...list, inputValue]);
    }
  };

  const Items = ({ content }) => {
    const total = content.length;
    const items = content.map((item, k) => (
      <li key={k}>
        {item}
        <button onClick={() => handleRemoveItem(k)}>X</button>
      </li>
    ));

    return (
      <>
        <ul>{items}</ul>
        <aside>{total} item left</aside>
      </>
    );
  };

  return (
    <article className="paper">
      <input
        type="text"
        onKeyUp={keyHandle}
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
        placeholder="What needs to be done?"
      />
      <Items content={list} />
    </article>
  );
};

export default App;

```

<br>

> <h5>Good practices:</h5>
>   <li><sub>SEO semantic tags</sub></li>
>   <li><sub>Clean and readable code</sub></li>

<br>

## Deployment

- Assuming you have installed Node.js locally, run: `npm install`
- Run: `npm run start` to start development server and test the live web site.
- Run: `npm run build` to compile the site for production.
- Look for the `/build` folder.
- Make sure the HTML and JS paths are correct and install the site on your preferred web server.

<sub><sub>You can also open any GitHub repository in Gitpod</sub></sub> 
  
[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/LuisAguadoVicaria/react-todolist/)

## Contact

  <sub>Feel free to leave me a message, I'm friendly!</sub>
  
  [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/luis-aguado-vicar%C3%ADa-546b33241/)
