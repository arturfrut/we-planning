export const createStoryCounters = stories => {
    return [
        {
            title: "Active Stories",
            number: stories.filter(story => story.status === "active").length,
            storiesList: stories.filter(story => story.status === "active"),
            isActive: true
        },
        {
            title: "Completed Stories",
            number: stories.filter(story => story.status === "complete").length,
            storiesList: stories.filter(story => story.status === "complete"),
            isActive: false
        },
        {
            title: "All Stories",
            number: stories.length,
            storiesList: stories,
            isActive: false
        }
    ];
};
