import React from "react";

function NewsStoriesDisplay({ title, createdAt, author, surl }) {
  return (
    <>
      <li className="item" key={createdAt}>
        <span className="title">Title: {title}</span>
        <span>By: {author}</span>
        <span>Created: {createdAt.slice(0, 10)}</span>
        <p>
          Full story: <a href={surl}>{surl}</a>
        </p>
      </li>
    </>
  );
}

export default NewsStoriesDisplay;
//slice does not change string
