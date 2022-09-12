import { FC } from "react";
import { TextInterface, TextStyled } from "../Grid";

const Text: FC<TextInterface> = (props) => (
    <TextStyled
        {...props}
    >
        {props.text}
    </TextStyled>
);

export default Text