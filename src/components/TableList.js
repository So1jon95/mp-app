import React from "react";
import TableIteam from "../components/TableIteam";
import TableHeader from "../components/TableHeader";

export default function TableList({posts, title}) {
  return (
    <>
      <h5 className="text-center">{title}</h5>
      <table className="table table-striped">
        <TableHeader />
        <tbody>
          {posts.map((post) => (
            <TableIteam post={post} key={post.id} />
          ))}
        </tbody>
      </table>
    </>
  );
}
