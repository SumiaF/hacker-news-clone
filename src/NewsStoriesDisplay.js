import React from "react";

function NewsStoriesDisplay({ title, createdAt, author, surl }) {
  return (
    <>
      <li key={createdAt}>
        Title:{title} Created: {createdAt.slice(0, 10)} Author: {author} URL:
        <a href={surl}>{surl}</a>
      </li>
    </>
  );
}

export default NewsStoriesDisplay;
//slice does not change string
