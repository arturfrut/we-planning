import { useContext } from "react";
import { CONTEXT } from "../../App/context";
import { RoomNameContainer } from "../../Styles/roomTitleStyle";

const RoomTitle = () => {
    const { state }: any = useContext(CONTEXT);
    const roomTitle =
        state.roomConfig.roomTitle || `${state.serverName} room` ;
    return (
        <>
            <RoomNameContainer>
                {roomTitle}
            </RoomNameContainer>
        </>
    );
};

export default RoomTitle;
