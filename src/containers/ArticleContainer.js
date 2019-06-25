import React from "react";
import { connect } from "react-redux";
import { FETCH_ARTICLES } from "../actions";
import { Article } from "../components";
import { Helmet } from "react-helmet";

export class ArticleContainer extends React.Component {
  componentDidMount() {
    if (this.props.allArticles.length === 0) {
      this.props.fetchArticles();
    }
  }


  render() {
    const articlesLength = this.props.allArticles.length;
    const { article} = this.props;

    if (!article && articlesLength === 0) {
      return <div>Loading...</div>;
    }

    if (articlesLength > 0 && !article) {
      return (
        <div className="ContainerWithPadding">
          <Helmet>
            <title>The article could not be found!</title>
          </Helmet>
        </div>
      );
    }

    return (
      <div>
        <Helmet>
          <title>{article.title}</title>
        </Helmet>
        <Article article={article} />
      </div>
    );
  }
}


const mapStateToProps = (state, ownProps) => ({
  allArticles: state.allArticles,
  article: state.allArticles.find(
    article => article.views === parseInt(ownProps.match.params.views)
  )
});

const mapDispatchToProps = dispatch => {
  return {
    fetchArticles: () => dispatch({ type: FETCH_ARTICLES })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticleContainer);