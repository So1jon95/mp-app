import React from "react";
export default function TableIteam(props) {
  return (
        <tr>
          <td>{props.post.id}</td>
          <td>{props.post.title}</td>
          <td>{props.post.stack}</td>
          <td>
            <button className="btn btn-outline-danger">Delete</button>
          </td>
        </tr>
  );
}
