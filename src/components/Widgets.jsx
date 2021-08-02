import { FiberManualRecord, Info } from "@material-ui/icons";
import React from "react";
import "../css/Widgets.css";

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecord />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>Linkedin News</h2>
        <Info />
      </div>
      {newsArticle("React Update", "Top news - 900 readers")}
      {newsArticle("React Update", "Top news - 900 readers")}
      {newsArticle("React Update", "Top news - 900 readers")}
      {newsArticle("React Update", "Top news - 900 readers")}
      {newsArticle("React Update", "Top news - 900 readers")}
    </div>
  );
}

export default Widgets;
