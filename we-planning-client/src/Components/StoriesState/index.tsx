import { useContext, useState } from "react";
import { CONTEXT } from "../../App/context";

const { state }: any = useContext(CONTEXT);
const { headerRowData, stories } = state;
const state

const StoriesState = () =>{

    return (
        <div className="Container">
            <div className="firstRowContainer">
                <div className='storyStatusHeaderRow'>
                    {
                        headerRowData.map((element,i) =>(
                            <>
                            <h1></h1>
                            <div></div>
                            </>
                        ))
                    }
                    <div className='storyCRUDHeaderRow'>
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
            <div className='table'>
                {
                    stories.map(map)
                }
            </div>

            <h1>Stories State</h1>
        </div>
    )
}

export default StoriesState