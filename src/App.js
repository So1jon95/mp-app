import React, { useState } from "react";

import "./style/style.css";
import TableList from "./components/TableList";

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'JavaScript', stack: 'MERN Stack'},
    {id: 2, title: 'Python', stack: 'Full-Stack'},
    {id: 3, title: 'C#', stack: 'Cyber'},
    {id: 4, title: 'Goo', stack: 'Back End'}
  ])
  return (
    <>
    <div className="app w-50 mx-auto mt-5">
      <form>
        <h4 className="text-center">Create your first post</h4>
        <input type="text"
         className="form-control mb-2"
          placeholder="Programming language"
          />
          <input
          type="text"
          className="form-control"
          placeholder="Enter your favourite stack"
          />
      </form>
      <TableList posts={posts} title="Programming Language"/>
    </div>
    </>
  );
}

export default App;
