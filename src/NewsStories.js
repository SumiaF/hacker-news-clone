import NewsStoriesDisplay from "./NewsStoriesDisplay";
import React, { useState, useEffect } from "react";

function NewsStories({ stories }) {
  //ask chris if its neccessary or even right thing to do
  const [newsStories, setNewsStories] = useState([
    {
      title: "",
      createdAt: "",
      author: "",
      url: "",
    },
  ]);
  //run first time whenever stories data change
  useEffect(() => {
    if (stories) {
      const newsArray = stories.map((story) => {
        return {
          title: story.title,
          createdAt: story.created_at,
          author: story.author,
          url: story.url,
        };
      });
      setNewsStories(newsArray);
    }
  }, [stories]);

  return (
    <div>
      {newsStories.map((s) => (
        <NewsStoriesDisplay
          title={s.title}
          createdAt={s.createdAt}
          author={s.author}
          surl={s.url}
        />
      ))}
    </div>
  );
}

export default NewsStories;
//rfce shortcut
