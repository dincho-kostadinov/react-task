import React from "react";
import { connect } from "react-redux";
import { FETCH_ARTICLES } from "../actions";
import { ArticleRow} from "../components";
import { Helmet } from "react-helmet";

export class HomeContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayArticlesCount: 7 
    };
  }

  componentDidMount() {
    this.props.fetchArticles();
  }


  openArticle = id => {
    this.props.history.push(`/article/${id}`);
  };

  render() {
    const { displayArticlesCount } = this.state;
    const { allArticles } = this.props;
    if (allArticles.length === 0) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <Helmet>
          <title>New York Times Articles</title>
        </Helmet>
        <div className="ArticleList">
          {allArticles.slice(0, displayArticlesCount).map(article => (
            <ArticleRow
              key={article.views}
              article={article}
              openArticle={this.openArticle}
            />
          ))}
        </div>
      </div>
    );
  }
}


const mapDispatchToProps = dispatch => {
  return {
    fetchArticles: () => dispatch({ type: FETCH_ARTICLES })
  };
};

const mapStateToProps = state => ({
  allArticles: state.allArticles
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer);