import styled from "styled-components";

export const HeaderContainer = styled.div`
  height: 150px;
  background-color: #f5e1da;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  > h1 {
    display: block;
    font-size: 48px;
    color: #085f63;
    margin: 0px;
    text-transform: uppercase;
    @media (max-width: 500px) {
      font-size: 32px;
    }
  }
  > p {
    display: block;
    font-size: 28px;
    color: #49beb7;
    margin: 0px;
    text-transform: uppercase;
    @media (max-width: 500px) {
      font-size: 24px;
    }
  }
`;