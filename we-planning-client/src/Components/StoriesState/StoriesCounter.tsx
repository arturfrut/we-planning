import Text from "../../Common/Text/Text";
import { StoriesCounterCircle, StoryCounterContainer } from "../../Styles/storiesStateStyles";

const StoriesCounter = ({ title, number, handleClick }) => {

    return (
        <StoryCounterContainer onClick={handleClick}>
            <Text text={title} />
            <StoriesCounterCircle>{number}</StoriesCounterCircle>
        </StoryCounterContainer>
    );
};

export default StoriesCounter;
