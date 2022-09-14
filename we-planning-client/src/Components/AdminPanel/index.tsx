import { FlexDiv } from "../../Common/Grid";
import Text from "../../Common/Text/Text";
import { AdminPanelContainer, NormalButton, WideButton } from "../../Styles/adminPanelStyle";

const AdminPanel = () => {
    const playersMock = [
        {
            name: "User1",
            roll: "votter",
            status: "isVoting",
            avatar: "myavatar"
        },
        {
            name: "User2",
            roll: "votter",
            status: "isVoting",
            avatar: "myavatar"
        },
        {
            name: "User3",
            roll: "votter",
            status: "isVoting",
            avatar: "myavatar"
        }
    ];

    const clickTester = () => console.log("Clicked");

    return (
        <>
            <AdminPanelContainer>
                <WideButton onClick={clickTester}>
                    Click "Start" to begin voting
                </WideButton>
                <FlexDiv justifyContent="space-between" alignItems="center">
                    <Text text="Players:" />
                    <FlexDiv alignItems="center" >contador</FlexDiv>
                </FlexDiv>
                {playersMock.map((user, i) => (
                    <h1 key={i}>{user.name}</h1>
                ))}
                <NormalButton>Start</NormalButton>
                <Text text="Invite a teammate" />
                <Text text="dirección" />
                <Text text="invitación por email" />
                <NormalButton>Send Invitation</NormalButton>
            </AdminPanelContainer>
        </>
    );
};

export default AdminPanel;
