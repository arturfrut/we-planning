import AdminPanel from "../../Components/AdminPanel";
import RoomTitle from "../../Components/RoomTitle";
import { MainContainer, GridColumn } from "../../Styles/mainStyles";
import Header from "../Header";

const Main = () => {
    return (
        <>
            <Header />
            <MainContainer>
                <RoomTitle />
                <GridColumn>
                    <h1>left column</h1>
                </GridColumn>
                <GridColumn>
                    <h1>rigth column</h1>
                </GridColumn>
            </MainContainer>
        </>
    );
};

export default Main;
