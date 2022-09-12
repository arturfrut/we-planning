import Text from "../../Common/Text/Text";
import { StoriesCounterCircle } from "../../Styles/storiesStateStyles";

const StoriesCounter = ({ title, number }) => {
    return (
        <div className="storyCounterContainer">
            <Text text={title} />{" "}
            <StoriesCounterCircle>{number}</StoriesCounterCircle>
        </div>
    );
};

export default StoriesCounter;
