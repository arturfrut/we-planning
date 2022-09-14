import { FunctionComponent } from "react";
import styled from "styled-components";

interface ContainerInterface {
    styleString?: any;
}
export const Container: FunctionComponent<ContainerInterface> = styled("div")<{
    styleString?: any;
}>`
    font-family: "OpenSans-SemiBold", "Open Sans SemiBold", "Open Sans";
    display: flex;
    flex-wrap: wrap;
    ${props => props.styleString}
`;
interface ColInterface {
    size: number;
    colSize?: number;
    styleString?: any;
    align?: string;
    active?: any;
    bgColor?: string;
}

export const Col: FunctionComponent<ColInterface> = styled("div")<{
    size: number;
    colSize?: number;
    styleString?: any;
    align?: string;
    active?: any;
    bgColor?: string;
}>`
    width: ${props => props.size * (100 / (props?.colSize || 12))}%;
    text-align: ${props => props.align};
    background-color: ${props => props.bgColor};
    ${props => props.styleString};
    ${props => props.active};
`;

interface ImageInterface {
    styleString?: string;
    height?: string;
    width?: string;
    margin?: string;
    padding?: string;
}

export const Image = styled.img<ImageInterface>`
    height: ${props => props.height};
    width: ${props => props.height};
    margin: ${props => props.margin};
    padding: ${props => props.padding};
    ${props => props.styleString}
`;

interface PositionContainerInterface {
    styleString?: string;
    height?: string;
    width?: string;
    margin?: string;
    padding?: string;
    justifyContent?: string;
    maxWidth?: string;
}

export const PositionContainer = styled.div<PositionContainerInterface>`
    background-color: green;
    display: flex;
    justify-content: ${props => props.justifyContent};
    height: ${props => props.height};
    width: ${props => props.height};
    max-width: ${props => props.maxWidth};
    margin: ${props => props.margin};
    padding: ${props => props.padding};
    ${props => props.styleString};
`;

export interface TextInterface {
    styleString?: string;
    fontSize?: string;
    color?: string;
    bgColor?: string;
    margin?: string;
    padding?: string;
    fontWeight?: string;
    text?: string;
    onClick?: () => void;
}

export const TextStyled = styled.p<TextInterface>`
    font-weight: ${props => props.fontWeight};
    color: ${props => props.color};
    background-color: ${props => props.bgColor};
    margin: ${props => props.margin};
    padding: ${props => props.padding};
    ${props => props.styleString};
`;

export interface FlexDivInterface {
    styleString?: string;
    margin?: string;
    padding?: string;
    flexDirection?:string;
    justifyContent?:string;
    alignItems?:string;
}

export const FlexDiv = styled.div<FlexDivInterface>`
    display: flex;
    align-items: ${props => props.alignItems};
    flex-direction: ${props => props.flexDirection};
    justify-content: ${props => props.justifyContent};
    margin: ${props => props.margin};
    padding: ${props => props.padding};
    ${props => props.styleString};
`;


