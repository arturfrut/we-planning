import Text from "../../Common/Text/Text";
import { StoryContainer } from "../../Styles/storiesStateStyles";

const Story = ( {text} ) => {
    return (
        <StoryContainer>
            <Text text={text}/>
        </StoryContainer>
    );
};

export default Story;
