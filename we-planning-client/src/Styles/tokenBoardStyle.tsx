import styled from "styled-components";

export const TokenBoardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content:space-between;
`;

export interface TokenInterface {
    bgColor: "string";
}

export const TokenCard = styled("div")<TokenInterface>`
display: flex;
justify-content: center;
align-items: center;
    width: 19%;
    height: 4rem;
    border: 1px solid blue;
    background-color:${props => props.bgColor}
`;
