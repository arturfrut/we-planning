import { useContext, useState } from "react";
import { CONTEXT } from "../../App/context";
import { OPEN_CLOSE_POP_UPS, SET_STORIES } from "../../Core/Types";

const CreateNewStory = () => {
    const { state, dispatch }: any = useContext(CONTEXT);
    const [textArea, setTextArea] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        const splitLines = textArea.split("\n").filter(Boolean);
        console.log(state.stories)
        // dispatch({
        //     type:SET_STORIES,
        //     value: splitLines
        // })
    };

    const handleTextArea = e => setTextArea(e.target.value);

    const handleSaveAdd = () => {
        console.log(textArea);
        const splitLines = textArea.split("\n").filter(Boolean);
        console.log(splitLines);
        // dispatch({
        //     type:SET_STORIES,
        //     value:splitLines
        // })
        setTextArea("");
    };

    const closePopUp = () =>
        dispatch({
            type: OPEN_CLOSE_POP_UPS,
            action: { ...state.popUps, newStoryPopUp: false }
        });

    return (
        <div className="Container">
            <div className="HeaderContainer">Create New Story</div>
            <form onSubmit={handleSubmit}>
                <textarea
                    name="textArea"
                    value={textArea}
                    onChange={handleTextArea}
                    placeholder="Put your story here, each line is a new story"
                />
                <button type="submit">Save and Close</button>
                <button onClick={handleSaveAdd}>Save and Add New</button>
                <button onClick={closePopUp}>CLOSE</button>
            </form>
        </div>
    );
};

export default CreateNewStory;
