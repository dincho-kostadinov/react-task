import React from 'react';
import enzyme from "enzyme";
import  {HomeContainer} from '../containers/HomeContainer.js';

describe('Home', () => {
    const props = {
        allArticles: [
            { title: "Sample 1", abstract: "Abstact 1", views: 0, media: [{'media-metadata': [{url: '/', format: "Jumbo"}]}],Image:{url:'/'}},
            { title: "Sample 2", abstract: "Abstact 2", views: 3, media: [{'media-metadata': [{url: '/', format: "Jumbo"}]}],Image:{url:'/'}},
            { title: "Sample 3", abstract: "Abstact 3", views: 5, media: [{'media-metadata': [{url: '/', format: "Jumbo"}]}],Image:{url:'/'}},
            { title: "Sample 4", abstract: "Abstact 4", views: 6, media: [{'media-metadata': [{url: '/', format: "Jumbo"}]}],Image:{url:'/'}},
            { title: "Sample 5", abstract: "Abstact 5", views: 7, media: [{'media-metadata': [{url: '/', format: "Jumbo"}]}],Image:{url:'/'}},
            { title: "Sample 6", abstract: "Abstact 6", views: 8, media: [{'media-metadata': [{url: '/', format: "Jumbo"}]}],Image:{url:'/'}},
            { title: "Sample 7", abstract: "Abstact 6", views: 9, media: [{'media-metadata': [{url: '/', format: "Jumbo"}]}],Image:{url:'/'}}
        ],
        fetchArticles: jest.fn(),
        history: {
            push: jest.fn()
        }
    }

    it('should call fetchArticles', () => {
        const container = enzyme.mount(
            <HomeContainer {...props} />
            );
        expect(props.fetchArticles).toHaveBeenCalled();
    })

    it('should render 7 articles', () => {
        const container = enzyme.mount(<HomeContainer {...props} />);
        const renderedArticles = container.find('div.ArticleList').children();
        expect(renderedArticles.length).toEqual(7);
    })

  
});