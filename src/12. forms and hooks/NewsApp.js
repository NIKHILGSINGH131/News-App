import React, { useEffect, useRef, useState } from "react";
import News from "./News";
import "./NewsApp.css";

function NewsApp() {
  const apiKey = "e0e74ed7ee9b4923bd03e9109fbf8fb2";
  const [key, setKey] = useState("tesla");
  const apiUrl = `
https://newsapi.org/v2/everything?q=tesla&from=2023-10-09&sortBy=publishedAt&apiKey=e0e74ed7ee9b4923bd03e9109fbf8fb2`;
  const [newsList, setNewsList] = useState([]);
  const keyInputref = useRef(null);
  
  useEffect(() => {
    fetchApi();
  }, [key]);

  async function fetchApi() {
    try {
      const response = await fetch(apiUrl);
      const jsonData = await response.json();
      setNewsList(jsonData.articles);
    } catch (e) {
      console.log(e, "error occured");
    }
  }

 

  function handleSubmit(e) {
    e.preventDefault();
    const keyInputvalue = keyInputref.current.value;
    setKey(keyInputvalue);
  }
  return (
    <div className="news-app">
      <h1
        style={{
          fontFamily: "monospace",
          fontSize: "3rem",
          textAlign: "left",
          marginBottom: "20px",
          
        }}
      >
        News Daily By Nikhil
      </h1>
      <form onSubmit={handleSubmit}>
        <input className="quary-input" type="text" ref={keyInputref} />
        <input className="btn-submit" type="submit" value="submit" />
      </form>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,30%)",
          justifyContent: "space-between",
          rowGap: "20px",
        }}
      >
        {newsList.map((news) => {
          return <News key={news.url} news={news} />;
        })}
        
      </div>
    </div>
  );
}

export default NewsApp;
