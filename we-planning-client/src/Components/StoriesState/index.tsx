import { useContext, useState } from "react";
import { CONTEXT } from "../../App/context";
import { FlexDiv } from "../../Common/Grid";
import {
    FirstRowContainer,
    StoriesStateContainer
} from "../../Styles/storiesStateStyles";
import { createStoryCounters } from "../../utils/storiesStateUtils";
import BadgeCRUD from "./BadgeCRUD";
import StoriesCounter from "./StoriesCounter";
import Story from "./Story";

const StoriesState = () => {
    const { state }: any = useContext(CONTEXT);
    const { stories } = state;

    const [storiesList, setStoriesList] = useState(stories);
    const [listStatusActive, setListStatusActive] = useState();

    const storiesCounters = createStoryCounters(storiesList);

    const sayClick = () => console.log("click");

    const selectStatus = (story) => {
        setStoriesList(story.storiesList);
    }

    return (
        <StoriesStateContainer>
            <FirstRowContainer>
                <FlexDiv>
                    {storiesCounters.map((story, i) => (
                        <StoriesCounter {...story} key={i} handleClick={console.log(story.storiesList)} />
                    ))}
                </FlexDiv>
                <FlexDiv>
                    <BadgeCRUD
                        imgSrc={undefined}
                        title={"New"}
                        handleClick={sayClick}
                    />
                    <BadgeCRUD
                        imgSrc={undefined}
                        title={"Edit"}
                        handleClick={sayClick}
                    />
                </FlexDiv>
            </FirstRowContainer>
            <div className="table">
                {storiesList.map((story, i) => (
                    <Story text={story.title} key={i} />
                ))}
            </div>
        </StoriesStateContainer>
    );
};

export default StoriesState;
