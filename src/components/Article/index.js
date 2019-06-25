import React from "react";
import { ArticleContainer } from "./styledArticleContainer";

export default ({ article }) => {
  const Image = article.media[0]["media-metadata"].find(
    media => media.format === "Jumbo"
  );
  return (
    <ArticleContainer>
      <div className="ArticleImage">
        <h1>{article.title}</h1>
        <img className='article_image' src={Image.url}></img>
        <p>{article.abstract}</p>
        <div className="Article__Meta">
          Published in
          <span className="highlight">{article.section}</span>
          on
          <span className="highlight">
            {article.published_date}
          </span>
        </div>
        <div className="Article__Meta">
          <span className="highlight">
            {article.byline}
          </span>
        </div>
        <h1 className="Article__Popularity"> Views: {article.views}</h1>
        <div className="Article__ReadMore">
          <a
            href={article.url}
            target="_blank"
            type="primary"
            block={true}
          >
            GO TO FULL ARTICLE
          </a>
        </div>
      </div>
    </ArticleContainer>
  );
};