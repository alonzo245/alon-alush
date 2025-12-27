import React from "react";
import {
    FaAppStore,
    FaAws,
    FaChrome,
    FaCogs,
    FaCss3Alt,
    FaDocker,
    FaHtml5,
    FaJenkins,
    FaJira,
    FaMobileAlt,
    FaNodeJs,
    FaNpm,
    FaReact,
    FaSass,
} from "react-icons/fa";
import {
    Si1Password,
    SiAdobe,
    SiAirtable,
    SiAnsible,
    SiApachecassandra,
    SiApollographql,
    SiAuth0,
    SiBuddy,
    SiCircleci,
    SiCypress,
    SiDatadog,
    SiDjango,
    SiElasticsearch,
    SiExpo,
    SiExpressvpn,
    SiFirebase,
    SiGithubactions,
    SiGnubash,
    SiGraphql,
    SiHelm,
    SiHotjar,
    SiHubspot,
    SiIntegromat,
    SiIntellijidea,
    SiJavascript,
    SiJest,
    SiKibana,
    SiKubernetes,
    SiLoom,
    SiMetabase,
    SiMiro,
    SiMongodb,
    SiMysql,
    SiNestjs,
    SiNextdotjs,
    SiNginx,
    SiPayoneer,
    SiPostgresql,
    SiPrettier,
    SiPrometheus,
    SiPython,
    SiRabbitmq,
    SiRedis,
    SiSentry,
    SiTerraform,
    SiTwilio,
    SiWebflow,
    SiYarn,
    SiZapier,
    SiZoom,
    SiLens,
    SiMailgun,
    SiTypeform,
} from "react-icons/si";
import {
    AiFillAndroid,
    AiFillGitlab,
    AiOutlineAntDesign,
    AiOutlineDropbox,
    AiOutlineWhatsApp,
} from "react-icons/ai";

import { CgCloud, CgDigitalocean, CgInfinity, CgMonday } from "react-icons/cg";
import { GrGatsbyjs, GrStripe } from "react-icons/gr";
import { VscTerminalLinux } from "react-icons/vsc";
import { ImTrello } from "react-icons/im";
import { BsApple, BsGithub, BsVimeo } from "react-icons/bs";
import { MdOutlineHttp } from "react-icons/md";
import { IoLogoBitbucket } from "react-icons/io";
import { RiSendToBack } from "react-icons/ri";
import { TbBrandGooglePlay, TbBrandMixpanel } from "react-icons/tb";

import { BsGoogle } from "react-icons/bs";
import { DiScrum } from "react-icons/di";

export interface TechIcon {
    icon: React.JSX.Element | false;
    title: string;
}

const techIcons: TechIcon[] = [
    {
        icon: <SiIntegromat size={35} color={"#9c9a9a"} />,
        title: "Integromat",
    },

    {
        icon: <SiLoom size={35} color={"#9c9a9a"} />,
        title: "Loom",
    },

    {
        icon: <SiWebflow size={35} color={"#9c9a9a"} />,
        title: "Webflow",
    },

    {
        icon: <SiMiro size={35} color={"#9c9a9a"} />,
        title: "Miro",
    },

    {
        icon: <SiAdobe size={35} color={"#9c9a9a"} />,
        title: "Adobe",
    },

    {
        icon: <SiExpressvpn size={35} color={"#9c9a9a"} />,
        title: "Express VPN",
    },

    {
        icon: <CgMonday size={35} color={"#9c9a9a"} />,
        title: "WhatsApp Api",
    },

    {
        icon: <SiHotjar size={35} color={"#9c9a9a"} />,
        title: "Hotjar",
    },
    {
        icon: <SiAirtable size={35} color={"#9c9a9a"} />,
        title: "Airtable",
    },
    {
        icon: <SiTwilio size={35} color={"#9c9a9a"} />,
        title: "Twilio",
    },
    {
        icon: <SiApollographql size={35} color={"#9c9a9a"} />,
        title: "Apollo GraphQL",
    },
    {
        icon: <FaAppStore size={35} color={"#9c9a9a"} />,
        title: "Apple Developer",
    },
    {
        icon: <TbBrandGooglePlay size={35} color={"#9c9a9a"} />,
        title: "Android Developer",
    },
    {
        icon: <BsGoogle size={35} color={"#9c9a9a"} />,
        title: "GCP",
    },
    {
        icon: <Si1Password size={35} color={"#9c9a9a"} />,
        title: "1Password",
    },
    {
        icon: <SiSentry size={35} color={"#9c9a9a"} />,
        title: "Sentry",
    },
    {
        icon: <AiOutlineDropbox size={35} color={"#9c9a9a"} />,
        title: "Dropbox",
    },

    {
        icon: <SiLens size={35} color={"#9c9a9a"} />,
        title: "Lens",
    },

    {
        icon: <SiTypeform size={35} color={"#9c9a9a"} />,
        title: "Typeform",
    },

    {
        icon: false,
        title: "Bright Data",
    },

    {
        icon: false,
        title: "Cloudinary",
    },

    {
        icon: false,
        title: "Logz.io",
    },

    {
        icon: false,
        title: "PayEm",
    },
    {
        icon: <SiMailgun size={35} color={"#9c9a9a"} />,
        title: "Mailgun",
    },
    {
        icon: <TbBrandMixpanel size={35} color={"#9c9a9a"} />,
        title: "Mixpanel",
    },

    {
        icon: <AiOutlineWhatsApp size={35} color={"#9c9a9a"} />,
        title: "WhatsApp Api",
    },

    {
        icon: <RiSendToBack size={35} color={"#9c9a9a"} />,
        title: "SendGrid",
    },
    {
        icon: <SiZoom size={35} color={"#9c9a9a"} />,
        title: "Zoom",
    },

    {
        icon: <SiExpo size={35} color={"#9c9a9a"} />,
        title: "Expo",
    },
    {
        icon: <SiApollographql size={35} color={"#9c9a9a"} />,
        title: "Apollo GraphQL",
    },
    {
        icon: <BsVimeo size={35} color={"#9c9a9a"} />,
        title: "Vimeo API",
    },
    {
        icon: <SiAirtable size={35} color={"#9c9a9a"} />,
        title: "Airtable",
    },
    {
        icon: <SiMetabase size={35} color={"#9c9a9a"} />,
        title: "Metabase",
    },
    {
        icon: <BsApple size={35} color={"#9c9a9a"} />,
        title: "Apple Developer",
    },
    {
        icon: <AiFillAndroid size={35} color={"#9c9a9a"} />,
        title: "Android Console",
    },
    {
        icon: <SiPayoneer size={35} color={"#9c9a9a"} />,
        title: "Payoneer",
    },
    {
        icon: <SiSentry size={35} color={"#9c9a9a"} />,
        title: "Sentry",
    },
    {
        icon: <SiRabbitmq size={35} color={"#9c9a9a"} />,
        title: "RabbitMQ",
    },
    {
        icon: <SiHubspot size={35} color={"#9c9a9a"} />,
        title: "HubSpot",
    },

    {
        icon: <FaChrome size={35} color={"#9c9a9a"} />,
        title: "Dev Tools",
    },
    {
        icon: <SiPostgresql size={35} color={"#9c9a9a"} />,
        title: "Postgres SQL",
    },
    {
        icon: <GrGatsbyjs size={35} color={"#9c9a9a"} />,
        title: "Gatsby",
    },
    {
        icon: <DiScrum size={35} color={"#9c9a9a"} />,
        title: "Scrum",
    },
    {
        icon: <SiNextdotjs size={35} color={"#9c9a9a"} />,
        title: "NextJS",
    },
    {
        icon: <SiCypress size={35} color={"#9c9a9a"} />,
        title: "Cypress",
    },
    {
        icon: <SiAuth0 size={35} color={"#9c9a9a"} />,
        title: "Auth0",
    },

    {
        icon: <SiPrettier size={35} color={"#9c9a9a"} />,
        title: "Prettier",
    },
    {
        icon: <SiYarn size={35} color={"#9c9a9a"} />,
        title: "Yarn",
    },

    {
        icon: <SiDjango size={35} color={"#9c9a9a"} />,
        title: "Django",
    },

    {
        icon: <IoLogoBitbucket size={35} color={"#9c9a9a"} />,
        title: "Bitbucket",
    },

    {
        icon: <MdOutlineHttp size={35} color={"#9c9a9a"} />,
        title: "Http Protocols",
    },
    {
        icon: <BsGithub size={35} color={"#9c9a9a"} />,
        title: "Github",
    },
    {
        icon: <SiGithubactions size={35} color={"#9c9a9a"} />,
        title: "Github Actions",
    },
    {
        icon: <ImTrello size={35} color={"#9c9a9a"} />,
        title: "Trello",
    },
    {
        icon: <CgDigitalocean size={35} color={"#9c9a9a"} />,
        title: "DigitalOcean",
    },

    {
        icon: <AiFillGitlab size={35} color={"#9c9a9a"} />,
        title: "GitLab",
    },

    {
        icon: <SiPrometheus size={35} color={"#9c9a9a"} />,
        title: "Prometheus",
    },

    {
        icon: <VscTerminalLinux size={35} color={"#9c9a9a"} />,
        title: "Linux",
    },

    {
        icon: <SiPython size={35} color={"#9c9a9a"} />,
        title: "Python",
    },

    {
        icon: <SiAnsible size={35} color={"#9c9a9a"} />,
        title: "Ansible",
    },

    {
        icon: <SiKubernetes size={35} color={"#9c9a9a"} />,
        title: "Kubernetes",
    },

    {
        icon: <SiTerraform size={35} color={"#9c9a9a"} />,
        title: "Terraform",
    },
    {
        icon: <FaNpm size={35} color={"#9c9a9a"} />,
        title: "Npm",
    },
    {
        icon: <SiNestjs size={35} color={"#9c9a9a"} />,
        title: "Nestjs",
    },
    {
        icon: <FaCogs size={35} color={"#9c9a9a"} />,
        title: "MicroServices",
    },
    {
        icon: <SiGraphql size={35} color={"#9c9a9a"} />,
        title: "Graphql",
    },
    {
        icon: <SiElasticsearch size={35} color={"#9c9a9a"} />,
        title: "Elastic Search",
    },
    {
        icon: <SiKibana size={35} color={"#9c9a9a"} />,
        title: "Kibana",
    },
    {
        icon: <FaNodeJs size={35} color={"#9c9a9a"} />,
        title: "NodeJS",
    },
    {
        icon: <CgInfinity size={35} color={"#9c9a9a"} />,
        title: "CD / CD",
    },
    {
        icon: <FaJenkins size={35} color={"#9c9a9a"} />,
        title: "Jenkins",
    },
    {
        icon: <SiCircleci size={35} color={"#9c9a9a"} />,
        title: "Circle Ci",
    },
    {
        icon: <SiBuddy size={35} color={"#9c9a9a"} />,
        title: "Buddy",
    },
    {
        icon: <SiNginx size={35} color={"#9c9a9a"} />,
        title: "Nginx",
    },
    {
        icon: <FaReact size={35} color={"#9c9a9a"} />,
        title: "React",
    },
    {
        icon: <FaMobileAlt size={35} color={"#9c9a9a"} />,
        title: "React Native",
    },
    {
        icon: <AiOutlineAntDesign size={35} color={"#9c9a9a"} />,
        title: "Ant Design",
    },
    {
        icon: <SiJest size={35} color={"#9c9a9a"} />,
        title: "Jest",
    },
    {
        icon: <FaHtml5 size={35} color={"#9c9a9a"} />,
        title: "HTML5",
    },
    {
        icon: <FaCss3Alt size={35} color={"#9c9a9a"} />,
        title: "CSS",
    },
    {
        icon: <SiJavascript size={35} color={"#9c9a9a"} />,
        title: "Js Vanilla",
    },

    {
        icon: <FaSass size={35} color={"#9c9a9a"} />,
        title: "Sass",
    },
    {
        icon: <SiFirebase size={35} color={"#9c9a9a"} />,
        title: "Firebase",
    },
    {
        icon: <FaAws size={35} color={"#9c9a9a"} />,
        title: "AWS",
    },
    {
        icon: <CgCloud size={35} color={"#9c9a9a"} />,
        title: "GCloud",
    },
    {
        icon: <SiDatadog size={35} color={"#9c9a9a"} />,
        title: "Datadog",
    },
    {
        icon: <SiZapier size={35} color={"#9c9a9a"} />,
        title: "Zapier",
    },

    {
        icon: <FaDocker size={35} color={"#9c9a9a"} />,
        title: "Docker",
    },
    {
        icon: <SiMysql size={35} color={"#9c9a9a"} />,
        title: "Mysql",
    },
    {
        icon: <SiMongodb size={35} color={"#9c9a9a"} />,
        title: "MongoDB",
    },
    {
        icon: <SiApachecassandra size={35} color={"#9c9a9a"} />,
        title: "Cassandra",
    },
    {
        icon: <SiRedis size={35} color={"#9c9a9a"} />,
        title: "Redis",
    },
    {
        icon: <SiGnubash size={35} color={"#9c9a9a"} />,
        title: "Bash",
    },

    {
        icon: <SiHelm size={35} color={"#9c9a9a"} />,
        title: "Helm",
    },
    {
        icon: <GrStripe size={35} color={"#9c9a9a"} />,
        title: "Stripe",
    },
    {
        icon: <SiIntellijidea size={35} color={"#9c9a9a"} />,
        title: "JetBrains",
    },
    {
        icon: <FaJira size={35} color={"#9c9a9a"} />,
        title: "Jira",
    },

    {
        icon: <CgMonday size={35} color={"#9c9a9a"} />,
        title: "Monday",
    },
];

export default techIcons;
