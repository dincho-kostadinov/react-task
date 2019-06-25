import styled from 'styled-components';
export const StyledArticleRow = styled.div`
    display: flex;
    flex-direction: column;
    margin: 150px 0 35px 0;
    cursor: pointer;
   
    .RowArticle {
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;
        &:hover {
            .RowArticle__Overlay {
                background-color: #c8dad3;
                transition: background-color 0.5s ease;
            }
            .RowArticle__Title, .RowArticle__Abstract {
                background-color: #c8dad3;
                transition: background-color 0.5s ease;
            }
        }
        &__Overlay {
            min-height: 200px;
            background-color: #f5e1da;
            transition: background-color 0.5s ease;
        }
        .image{
            height:auto;
            width:50%
        }
        .ContentWrapper {
           
            display: flex;
            padding: 20px;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            .RowArticle__Title {
                text-align: center;
                width: 100%;
                font-size: 28px;
                max-width: 770px;
                margin: 0px auto;
                color: #49beb7;
                padding: 15px;
                border-top-right-radius: 5px;
                border-top-left-radius: 5px;
            }
            .RowArticle__Abstract {
                text-align: center;
                width: 100%;
                font-size: 14px;
                max-width: 770px;
                margin: 0px auto;
                color: #49beb7;
                margin-bottom: 10px;
                padding: 15px;
                border-bottom-right-radius: 5px;
                border-bottom-left-radius: 5px;
            }
        }
    }
`