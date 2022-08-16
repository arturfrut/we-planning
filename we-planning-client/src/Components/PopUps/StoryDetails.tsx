import { useContext, useState } from "react";
import { CONTEXT } from "../../App/context";
import { STRINGS } from "../../Constants";
import { ACTIVE_STORY_DETAILS, SET_STORY_DETAILS } from "../../Core/Types";

const StoryDetails = ({ storyTitle, storydDetail }) => {
    const { state, dispatch }: any = useContext(CONTEXT);
    const [title, setTitle] = useState(storyTitle);
    const [detail, setDetail] = useState(storydDetail);

    const handleTitle = e => setTitle(e.value);
    const handleDetail = e => setDetail(e.value);
    const storyDetailsIsActive = !state.storyDetails;
    const saveDetail = () => {
        dispatch({
            type: SET_STORY_DETAILS,
            value: {
                title: title,
                detail: detail
            }
        });
        dispatch({
            type: ACTIVE_STORY_DETAILS,
            value: storyDetailsIsActive
        });
    };
    const closeWindow = () => {
        dispatch({
            type: ACTIVE_STORY_DETAILS,
            value: storyDetailsIsActive
        });
    };
    return (
        <div>
            <div className="popUpHeader">{STRINGS.STORY_DETAILS}</div>
            <div className="bottomContainer">
                <div className="FirstLine">
                    <label>{STRINGS.TITLE}</label>
                    <input onChange={handleTitle} value={title} />
                </div>
                <div className="SecondLine">
                    <input onChange={handleDetail} value={detail} />
                </div>
                <div className="buttons">
                    <button onClick={saveDetail}>{STRINGS.SAVE}</button>
                    <button onClick={closeWindow}>{STRINGS.CLOSE}</button>
                </div>
            </div>
        </div>
    );
};

export default StoryDetails;
