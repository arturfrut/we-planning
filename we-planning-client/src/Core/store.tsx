import headerRowData from "../Constants/initialStates";

export const store = {
    storyDetails: null,
    activeStoryDetails: false,
    roomConfig: null,
    popUps: null,
    headerRowData: headerRowData,
    stories: [
        {
            title: "Historia de ejemplo 1",
            detail: "null",
            status: "active"
        },
        {
            title: "Historia de ejemplo 2",
            detail: "Descripción de la historia de ejemplo 2 \n esta es la linea 2",
            status: "complete"
        },
        {
            title: "Historia de ejemplo 3",
            detail: "null",
            status: "active"
        }
    ]
};
