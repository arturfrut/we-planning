import {
    ACTIVE_STORY_DETAILS,
    ADD_INITIAL_VALUE,
    OPEN_CLOSE_POP_UPS,
    SET_ROOM_CONFIG,
    SET_STORIES,
    SET_STORY_DETAILS
} from "../Types";

export const wdcReducer = (state: any, action: any): any => {
    switch (action.type) {
        case ADD_INITIAL_VALUE:
            return {
                ...state,
                ...action.value
            };

        case SET_STORY_DETAILS:
            return {
                ...state,
                storyDetails: [...state.storyDetails, action.value]
            };

        case ACTIVE_STORY_DETAILS:
            return {
                ...state,
                activeStoryDetails: action.value
            };

        case SET_ROOM_CONFIG:
            return {
                ...state,
                roomConfig: action.value
            };

        case SET_STORIES:
            return {
                ...state,
                stories: [...state.stories, ...action.value]
            };

        case OPEN_CLOSE_POP_UPS:
            return {
                ...state,
                popUps: {
                    ...state.popUps,
                    popUps: action.value
                }
            };

        default:
            return {
                ...state
            };
    }
};
