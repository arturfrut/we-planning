import { useContext, useState } from "react";
import { CONTEXT } from "../../App/context";
import { STRINGS } from "../../Constants";
import { OPEN_CLOSE_POP_UPS, SET_ROOM_CONFIG } from "../../Core/Types";

const CreateNewRoom = () => {
    const newRoomInitialState = {
        roomName: "NewRoom",
        tokenType: "cards",
        optionCheck: false
    };

    const { state, dispatch }: any = useContext(CONTEXT);
    const [roomConfig, setroomConfig] = useState(newRoomInitialState);

    const handleRoomName = e =>
        setroomConfig({ ...roomConfig, roomName: e.target.value });
    const handleTokenType = e =>
        setroomConfig({ ...roomConfig, tokenType: e.target.value });
    const handleOptionCheck = () =>
        setroomConfig({ ...roomConfig, optionCheck: !roomConfig.optionCheck });

    const handleSubmit = e => {
        e.preventDefault();
        console.log({ roomConfig });
        dispatch({
            type: SET_ROOM_CONFIG,
            value: roomConfig
        });
        dispatch({
            type: OPEN_CLOSE_POP_UPS,
            action: { ...state.popUps, roomConfig: false, newStoryPopUp: true }
        });
    };

    return (
        <div className="Container">
            <div className="HeaderContainer">{STRINGS.CREATE_NEW_ROOM}</div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="roomName"
                    placeholder="Enter room name"
                    value={roomConfig.roomName}
                    onChange={handleRoomName}
                />
                <select
                    onChange={handleTokenType}
                    value={roomConfig.tokenType}
                    name="tokenType"
                >
                    <option value="cards">Cards</option>
                    <option value="tShirts">T-shirts</option>
                </select>
                <label>
                    <input
                        type="checkbox"
                        onChange={handleOptionCheck}
                        checked={roomConfig.optionCheck}
                    />
                    First checkbox option
                </label>
                <button type="submit">SUBMIT</button>
                <button>CANCEL</button>
            </form>
        </div>
    );
};

export default CreateNewRoom;
