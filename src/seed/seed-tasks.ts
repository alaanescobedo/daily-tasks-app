interface SeedData {
    tasks: SeedTask[]
}

interface SeedTask {
    title: string;
    status: string;
    scheduledFor: string;
}

export const seedTasks: SeedData = {
    tasks: [
        {
            title: "Learn Figma",
            status: "pending",
            scheduledFor: "2020-5-10T00:00:00.000Z"
        },
        {
            title: "Learn React",
            status: "pending",
            scheduledFor: "2020-02-04T00:00:00.000Z"
        },
        {
            title: "Continue with the Next project",
            status: "complete",
            scheduledFor: "2021-02-04T00:00:00.000Z"
        },
        {
            title: "Learn Vue",
            status: "pending",
            scheduledFor: "2022-06-06T00:00:00.000Z"
        },
        {
            title: "Continue learning Java",
            status: "in-progress",
            scheduledFor: "2022-02-08T00:00:00.000Z"
        },
        {
            title: "Learn Redis",
            status: "pending",
            scheduledFor: "2022-08-12T00:00:00.000Z"
        },
        {
            title: "Deploy the Next project",
            status: "pending",
            scheduledFor: "2022-01-01T00:00:00.000Z"
        },
        {
            title: "Add test to the daily-task app",
            status: "in-progress",
            scheduledFor: "2022-03-08T00:00:00.000Z"
        }
    ]
}