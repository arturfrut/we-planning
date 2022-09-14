import AdminPanel from "../../Components/AdminPanel";
import RoomTitle from "../../Components/RoomTitle";
import StoriesState from "../../Components/StoriesState";
import TokenBoard from "../../Components/TokenBoard";
import { MainContainer, GridColumn } from "../../Styles/mainStyles";
import Header from "../Header";

const Main = () => {
    return (
        <>
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
