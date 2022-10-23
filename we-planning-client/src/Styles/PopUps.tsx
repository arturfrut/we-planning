import styled from "styled-components";

export const Overlay = styled.div`
    position: absolute;
    z-index: 10;
    background-color: rgba(255, 255, 255, 0.5);
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
`;

export const PopUpContainer = styled.div`
    z-index: 11;
    background-color: blue;
    margin-top: 5rem;
    width: 50%;
    display: flex;
    flex-direction: column;
    flex-grow:0;
    height:fit-content;
`;

export const PopUpTitle = styled.h1`
    text-align: center;
    width: 100%;
    background-color: white;
    border-bottom: 1px solid black;
    padding: 1rem 0;
    margin: 0;
`;

export const PopUpContent = styled.h1`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const TextArea = styled.textarea`
    width: 90%;
    border: none;
    margin: auto;
    resize: none;
`;
