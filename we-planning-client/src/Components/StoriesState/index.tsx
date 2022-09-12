import { useContext, useState } from "react";
import { CONTEXT } from "../../App/context";
import { StoriesStateContainer } from "../../Styles/storiesStateStyles";
import BadgeCRUD from "./BadgeCRUD";
import StoriesCounter from "./StoriesCounter";

const StoriesState = () => {
    const { state }: any = useContext(CONTEXT);
    const { stories } = state;

    const storiesCounters = {
        actives: stories.filter(story => story.status === "active").length,
        completed: stories.filter(story => story.status === "complete").length,
        all: stories.length
    };
    const sayClick =()=> console.log('click')

    return (
        <StoriesStateContainer>
            
            <div className="firstRowContainer">
                <div className="storyStatusHeaderRow">
                    <StoriesCounter title="Active Stories" number={storiesCounters.actives}/>
                    <StoriesCounter title="Active Completed" number={storiesCounters.completed}/>
                    <StoriesCounter title="All Stories" number={storiesCounters.all}/>
                </div>
                    <div className="storyCRUDHeaderRow">
                    <BadgeCRUD imgSrc={undefined} title={'New'} handleClick={sayClick} />
                    <BadgeCRUD imgSrc={undefined} title={'Edit'} handleClick={sayClick} />
                    </div>
            </div>
            <div className="table">
                {stories.map((story, i) => (
                    <h1 key={i}>{story.title}</h1>
                ))} 
            </div>
        </StoriesStateContainer>
    );
};

export default StoriesState;
