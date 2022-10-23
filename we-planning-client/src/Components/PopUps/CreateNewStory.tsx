import { useContext, useState } from "react";
import { CONTEXT } from "../../App/context";
import { ButtonStyled, FormStyled } from "../../Common/Grid";
import { OPEN_CLOSE_POP_UPS, SET_STORIES } from "../../Core/Types";
import { TextArea } from "../../Styles/PopUps";

const CreateNewStory = () => {
    const { state, dispatch }: any = useContext(CONTEXT);
    const [textArea, setTextArea] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        const splitLines = textArea.split("\n").filter(Boolean);
        console.log(state.stories);
        dispatch({
            type: SET_STORIES,
            value: {
                title: splitLines,
                detail: "null",
                status: "active"
            }
        });
    };

    const handleTextArea = e => setTextArea(e.target.value);

    const handleSaveAdd = () => {
        console.log(textArea);
        const splitLines = textArea.split("\n").filter(Boolean);
        console.log(splitLines);
        dispatch({
            type: SET_STORIES,
            value: {
                title: splitLines,
                detail: "null",
                status: "active"
            }
        });
        setTextArea("");
    };

    const closePopUp = () =>
        dispatch({
            type: OPEN_CLOSE_POP_UPS,
            action: { ...state.popUps, newStoryPopUp: false }
        });

    return (
            <FormStyled onSubmit={handleSubmit}>
                <TextArea
                    name="textArea"
                    value={textArea}
                    onChange={handleTextArea}
                    placeholder="Put your story here, each line is a new story"
                />
                <ButtonStyled type="submit">Save and Close</ButtonStyled>
                <ButtonStyled onClick={handleSaveAdd}>Save and Add New</ButtonStyled>
                <ButtonStyled onClick={closePopUp}>CLOSE</ButtonStyled>
            </FormStyled>
    );
};

export default CreateNewStory;
