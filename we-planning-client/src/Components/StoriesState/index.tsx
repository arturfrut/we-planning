import { useContext, useState } from "react";
import { CONTEXT } from "../../App/context";

const StoriesState = () => {
    const { state }: any = useContext(CONTEXT);
    const { headerRowData, stories } = state;
    return (
        <div className="Container">
            <h1>Stories State</h1>
            <div className="firstRowContainer">
                <div className="storyStatusHeaderRow">
                    {/* {headerRowData.map((element, i) => (
                        <>
                            <h1>123123</h1>
                            <div></div>
                        </>
                    ))} */}
                    <div className="storyCRUDHeaderRow">
                        <div>
                            <p>+</p>
                            <p>New</p>
                        </div>
                        <div>
                            <p>*</p>
                            <p>Edit</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="table">
                {/* {stories.map((element, i) => (
                    <h1>Hola</h1>
                ))} */}
            </div>
        </div>
    );
};

export default StoriesState;
