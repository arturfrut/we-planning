import styled from "styled-components";

export const MainContainer = styled.div`
    background-color: blue;
    margin: auto;
    max-width: 70%;
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 1rem;
`;

export const GridColumn = styled.div`
    display: flex;
    flex-direction: column;

`;
