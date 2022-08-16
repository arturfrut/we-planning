import { useContext } from "react";
import { CONTEXT } from "../App/context";

const { state }: any = useContext(CONTEXT);
const { stories } = state;
const headerRowData = [
    {
        title: "Active Stories",
        active: true,
        ammount: stories.filter(story => story.status === "active").length()
    },
    {
        title: "Completed Stories",
        active: false,
        ammount: stories.filter(story => story.status === "complete").length()
    },
    {
        title: "All Stories",
        active: false,
        ammount: stories.length()
    }
];

export default headerRowData;
