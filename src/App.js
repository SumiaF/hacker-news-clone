import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import React from "react";
import NewsStories from "./NewsStories.js";
import SearchStories from "./SearchStories";
import { trackPromise } from "react-promise-tracker";

function App() {
  const [newsData, setNewsData] = useState(null);
  const [topic, setTopic] = useState("react"); //initial search topic
  const [searchNotFound, setSearchNotFound] = useState(false);
  const [totalPages, setTotalPages] = useState(10);
  const [activePageIndex, setActivePageIndex] = useState(0);

  let url =
    "https://hn.algolia.com/api/v1/search?query=" +
    topic +
    "&tags=story&page=" +
    activePageIndex;
  // &hitsPerPage=1050 to get more items per page nbPages define total no of pages, &page=2 to get second page result, nbHits: 30579 (total items)
  useEffect(() => {
    trackPromise(
      axios.get(url).then((response) => {
        setNewsData(response.data.hits);
        setTotalPages(response.data.nbPages);
        response.data.nbHits === 0
          ? setSearchNotFound(true)
          : setSearchNotFound(false);
      })
    );
  }, [url]);

  //to get all the pages
  const getUserQuery = (userQ) => setTopic(userQ);

  // This should act as a new component
  function Pagination({ activePageIndex, setActivePageIndex }) {
    return (
      <div className="pagination-container">
        {/* 
      TODO:Nummber the pages here
        */}
        {activePageIndex < totalPages - 1 ? (
          <button
            className="primary"
            onClick={() => setActivePageIndex((pre) => pre + 1)}
          >
            Next >>
          </button>
        ) : (
          <button className="primary" disabled={true}>
            {" "}
            Next >>{" "}
          </button>
        )}
        {activePageIndex === 0 ? (
          <button className="primary" disabled={true}>
            {" "}
            >> Back{" "}
          </button>
        ) : (
          <button
            className="primary"
            onClick={() => setActivePageIndex((pre) => pre - 1)}
          >
            >> Back
          </button>
        )}
      </div>
    );
  }

  // To get the actual topic newsData.data.hits (prop : created-at, url: author)
  return (
    <div className="App">
      <header>
        <h1> Welcome to the news stories</h1>
        <hr />
      </header>
      <>
        <section className="search-section">
          <h3>
            Showing results on "{topic}"  ( page: {activePageIndex + 1} )
          </h3>
          {/* //Form to get user search option */}
          <SearchStories getUserQuery={getUserQuery} />
        </section>
        {/* send all the new stories data */}
        {searchNotFound && <h2>Sorry, no matching results found.</h2>}
        <NewsStories stories={newsData} />
        <hr />
        {
          <Pagination
            activePageIndex={activePageIndex}
            setActivePageIndex={setActivePageIndex}
          />
        }
      </>
    </div>
  );
}
export default App;
//TODO:Apply styling
