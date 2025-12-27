import { externalLink } from "../utils";

export interface Thumbnail {
    type?: string;
    url?: string;
    name?: string;
}

export interface WorkFeatureItem {
    type?: string;
    url?: string;
    name?: string;
}

export interface WorkFeature {
    title: string;
    thumbnails: (Thumbnail | string)[];
    items: (WorkFeatureItem | string)[];
    technologies: string[];
    description: string;
}

export interface WorkFeatures {
    coderz: {
        ojtClass: WorkFeature;
        coderzVod: WorkFeature;
        coderzMobileApp: WorkFeature;
    };
}

const workFeatures: WorkFeatures = {
    coderz: {
        ojtClass: {
            title: "OJT Class",
            thumbnails: [
                {
                    type: "youtube",
                    url: `https://www.youtube.com/embed/vwEWb11Ggdg`,
                    name: "featureImage12",
                },
            ],
            items: [
                {
                    type: "youtube",
                    url: `https://www.youtube.com/embed/vwEWb11Ggdg`,
                },
            ],
            technologies: [],
            description: `
 ${externalLink(
     "OJT (On Job Training) Class",
     "https://www.youtube.com/watch?v=vwEWb11Ggdg&list=PLFCVfoyaWM96jWOjz_QW0asuP_0YEkywS",
 )} - Teaching and mentoring developers without real experience by dividing them into Dev teams to work on a project that include all of the real pains and information they are not aware of such as Scrum, Pair programming, Git PRs, dealing and resolving conflicts with teammates, The goal is to understand how does development team really works, and gain a real experience and use it to overcome others in hiring process.
<br/><br/>
${externalLink(
    "Coderz Challenges",
    "https://www.youtube.com/watch?v=9ZHkkVkpJ-8",
)} - Learn how to create a portfolio of personal projects, Build hybrid applications using cloud services, mobile apps and web apps.
The goal is to have fully documented the project with Scrum board tasks, time estimations, well organized git project, full documentation and more to present yourself in the most professional way to companies.
            `,
        },
        coderzVod: {
            title: "Coderz VOD",
            thumbnails: [
                { type: "wide", name: "featureImage8" },
                { type: "wide", name: "featureImage9" },
                "featureImage10",
                "featureImage11",
            ],
            items: [
                // { type: "youtube", url: `https://www.youtube.com/embed/BFuWc2Hwhdc` },
                { type: "wide", name: "featureImage8" },
                { type: "wide", name: "featureImage9" },
                "featureImage10",
                "featureImage11",
            ],
            technologies: [
                "aws",
                "eks",
                "helm",
                "buddy",
                "nodejs",
                "nestjs",
                "mongodb",
                "redis",
                "react",
                "antd",
                "graphql",
                "react-native",
                "circleci",
            ],
            description: `
        ${externalLink(
            "Coderz VOD",
            "https://coderz.jolt.us",
        )} - Teaching and mentoring Hub for developers who want to level-up their skills.
<br/><br/>
            `,
        },
        coderzMobileApp: {
            title: "Coderz Mobile App",
            thumbnails: [
                "featureImage6",
                "featureImage7",
                "featureImage5",
                "featureImage0",
                "featureImage1",
                "featureImage2",
                "featureImage3",
            ],
            items: [
                // { type: "youtube", url: `https://www.youtube.com/embed/BFuWc2Hwhdc` },
                "featureImage6",
                "featureImage7",
                "featureImage5",
                "featureImage0",
                "featureImage1",
                "featureImage2",
                "featureImage3",
            ],
            technologies: [
                "aws",
                "eks",
                "helm",
                "buddy",
                "nodejs",
                "nestjs",
                "mongodb",
                "redis",
                "react",
                "antd",
                "graphql",
                "react-native",
                "circleci",
            ],
            description: `
            Coderz the App - developed with React Native which can be downloaded
            <br/> 
            through the ${externalLink(
                "App Store",
                "https://apps.apple.com/il/app/coderz/id1603698449",
            )} or ${externalLink(
                "Play Store",
                "https://play.google.com/store/apps/details?id=com.coderz.coderz&hl=en&gl=il",
            )}, <br/>
            for level up  developers step by step in a personal roadmap to reach their knowledge first job.
            `,
        },
    },
};

export default workFeatures;
