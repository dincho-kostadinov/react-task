import React from "react";
import { StyledArticleRow } from "./styledArticleRow";

const ArticleRow = ({ article, openArticle }) => {
  const headerImage = article.media[0]["media-metadata"].find(
    media => media.format == "Jumbo"
  );
  return (
    <React.Fragment>
      <StyledArticleRow
        headerImage={headerImage.url}
        onClick={() => openArticle(article.views)}
      >
        <div className="RowArticle">
          <div className="RowArticle__Overlay">
            <div className="ContentWrapper">
              <h1 className="RowArticle__Title">{article.title}</h1>
              <img alt ='header image' className='image' src={headerImage.url}/>
              <p className="RowArticle__Abstract">{article.abstract}</p>
            </div>
          </div>
        </div>
      </StyledArticleRow>
    </React.Fragment>
  );
};



export default ArticleRow;