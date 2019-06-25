import React from 'react';
import enzyme from "enzyme";
import ConnectedArticle, { ArticleContainer } from '../containers/ArticleContainer.js';
import { Provider } from 'react-redux';

describe('Article', () => {
    const props = {
        fetchArticles: jest.fn(),
        match: {
            params: {
                views: 4
            }
        },

        allArticles: [
            {
                title: "Sample 1", byline: "by Dincho",
                published_date: "25-06-2019", section: "IT", abstract: "Abstact 1", views: 5,
                media: [{ 'media-metadata': [{ url: '/', format: "" }] }]
            },
            {
                title: "Sample 2", byline: "by Dincho",
                published_date: "25-06-2019", section: "IT", abstract: "Abstact 2", views: 0,
                media: [{ 'media-metadata': [{ url: '/', format: "" }] }]
            },
            {
                title: "Sample 3", byline: "by Dincho",
                published_date: "25-06-2019", section: "IT", abstract: "Abstact 3", views: 4,
                media: [{ 'media-metadata': [{ url: '/', format: "J" }] }]
            },
        ],
        article: {
            title: "Sample 2", byline: "by Dincho",
            published_date: "25-06-2019", section: "IT", abstract: "Abstact 2", views: 4,
            media: [{ 'media-metadata': [{ url: '/', format: "" }] }]
        }
    }

    it('should fetchArticles on render', () => {
        const container = enzyme.mount(
            <ArticleContainer
                allArticles={[]}
                article={null}
                match={props.match}
                fetchArticles={props.fetchArticles}
            />);
        expect(props.fetchArticles).toHaveBeenCalled();
    });
 });