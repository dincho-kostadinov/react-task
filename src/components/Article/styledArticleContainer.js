import styled from 'styled-components';

export const ArticleContainer = styled.div`
   
    margin: 20px 0px;
    .ArticleImage {
        min-height: 500px;
        background-color: #f5e1da;
        transition: background-color 0.5s ease;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        color: #49beb7;
        padding: 20px;
        .article_image{
            width:40%;
            heigh:auto;
        }
        > h1 {
            color: #49beb7;
            margin: 0px auto;
            max-width: 780px;
            text-align: center;
            width: 100%;
        }
        .Article__Popularity {
            font-size: 48px;
        }
        > p {
            color: #49beb7;
            margin: 0px auto;
            max-width: 780px;
            text-align: center;
            width: 100%;
            font-size: 16px;
            padding: 20px 0;
        }
        > .Article__Meta {
            color: #49beb7;
            margin: 0px auto;
            max-width: 780px;
            text-align: center;
            width: 100%;
            font-size: 14px;
            > span.highlight {
                font-weight: bold;
                margin: 0px 5px;
            }
        }
        .Article__ReadMore {
            padding: 30px 10px;
            margin: 0px auto;
            max-width: 780px;
            text-align: center;
            width: 100%;
            color:#49beb7
        }
    }
`
