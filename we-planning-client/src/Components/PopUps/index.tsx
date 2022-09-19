import {
    Overlay,
    PopUpContainer,
    PopUpContent,
    PopUpTitle
} from "../../Styles/PopUps";

const PopUps = ({ popUpSelector }) => {
    return (
        <Overlay>
            <PopUpContainer>
                <PopUpTitle>
                    {popUpSelector === "NewStoryOpen"
                        ? "Create New Story"
                        : popUpSelector === "StoryDetailsOpen"
                        ? "Story Details Open"
                        : "Create New Room"}
                </PopUpTitle>
                <PopUpContent>
                    {popUpSelector === "NewStoryOpen"
                        ? "Create New Story"
                        : popUpSelector === "StoryDetailsOpen"
                        ? "Story Details Open"
                        : "Create New Room"}
                </PopUpContent>
            </PopUpContainer>
        </Overlay>
    );
};

export default PopUps;
