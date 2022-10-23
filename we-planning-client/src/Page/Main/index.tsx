import AdminPanel from "../../Components/AdminPanel";
import PopUps from "../../Components/PopUps";
import RoomTitle from "../../Components/RoomTitle";
import StoriesState from "../../Components/StoriesState";
import TokenBoard from "../../Components/TokenBoard";
import { GridColumn, MainContainer } from "../../Styles/mainStyles";
import Header from "../Header";

const Main = () => {
    return (
        <>
            <PopUps popUpSelector={'NewStoryOpen'} />
            <Header />
            <MainContainer>
                <RoomTitle />
                <GridColumn>
                    <TokenBoard />
                    <StoriesState/>
                </GridColumn>
                <GridColumn>
                    <AdminPanel/>
                </GridColumn>
            </MainContainer>
        </>
    );
};

export default Main;
