import { externalLink } from "../../lib/utils";

export interface WorkHistoryItem {
    id: string;
    icon: string;
    company: string;
    title: string;
    description?: string;
    preDescription?: string;
    date: string;
}

const workHistory: WorkHistoryItem[] = [
    {
        id: "ziprecruiter",
        icon: "ziprecruiter",
        company: "Zip Recruiter",
        title: "Senior Full-Stack Engineer",
        description: `
        
As a Senior Full-Stack Engineer, I delivered multiple high-impact initiatives that directly shaped ZipRecruiter’s core experience for both job seekers and employers.
<br><br>
I led end-to-end development across backend and frontend systems, working extensively with Go, Python, JavaScript, Node.js, and TypeScript to build scalable services and APIs. I also played a key role in modernizing legacy applications, driving the migration toward a Next.js 15 based architecture.
<br><br>
On the infrastructure and data side, I contributed to large-scale initiatives involving AWS, Spark, SQL/NoSQL databases (MongoDB, DynamoDB), and Databricks. I strengthened system reliability and observability by implementing monitoring solutions with Prometheus, Grafana, and Thanos, significantly improving alerting, logging, and deployment workflows.
<br><br>
I was actively involved in A/B testing and experimentation using Statsig and internal platforms, ensuring feature delivery was data-driven and aligned with measurable business outcomes.
<br><br>
Collaboration and organizational impact were core to my role. I partnered with infrastructure teams to develop reusable blueprints and infrastructure-as-code assets, worked closely with US-based product and engineering teams, and proactively reduced technical debt to support long-term platform scalability.
<br><br>
I also contributed to team growth and culture through mentorship, onboarding support, pair programming, and by leading the IL Frontend interest group to promote engineering excellence. I regularly lectured on web and AI technologies during the company’s Tech Weeks in the US.
<br><br>
Recognized for my initiative, energy, and positive team influence, I consistently balanced multiple priorities while maintaining delivery quality and momentum. My combination of technical depth, leadership, and cross-organizational collaboration positioned me as a key contributor and role model within the engineering organization.
<br><br>
Tech Stack:
Go, Python, Node.js, TypeScript, JavaScript, Next.js, React, AWS, Spark, SQL, NoSQL (MongoDB, DynamoDB), Databricks, Prometheus, Grafana, Thanos, Argo, Kubernetes, Git, Statsig, CI/CD pipelines.
<br><br>
`,
        date: "2024 - Present",
    },
    {
        id: "singular",
        icon: "s",
        company: "Singular",
        title: "Full-Stack Engineer",
        description: `
        I work on first-to-market products, building innovative solutions using modern, industry-leading technologies. I am responsible for the design, development, and maintenance of end-to-end features across both client and server environments.
<br><br>
I collaborate closely with product and design teams to translate business and UX requirements into scalable, intuitive, and high-performance user experiences.
<br><br>
Tech Stack: React, Python, Django, MySQL, PostgreSQL, AWS, Redis, Druid, Snowflake, and additional supporting technologies.
        <br><br>
        `,
        date: "2023 - 2024",
    },
    {
        id: "jolt",
        icon: "jolt",
        company: "Jolt.io",
        title: "CTO of Jolt.io",
        preDescription: `
<iframe width="100%" height="350" src="https://www.youtube-nocookie.com/embed/UD41T2l8ewE?modestbranding=1&autohide=1&showinfo=0&controls=0" title="YouTube video player"
 frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
        description: `
I lead software development across the full lifecycle — from architecture and design through implementation, delivery, and continuous improvement. I stay deeply hands-on across DevOps, backend, and frontend work, with strong experience building and operating systems on AWS and GCP.
<br><br>
My role centers on owning products end-to-end: defining the right architecture, guiding delivery, and ensuring systems are scalable, resilient, and maintainable. I develop clear technical roadmaps that take ideas from concept into production, while balancing innovation with execution discipline.
<br><br>
I focus heavily on building team capability and culture. I mentor engineers, encourage technical excellence, and enable teams to perform at a high level in hybrid environments. My leadership style is pragmatic, people-focused, and execution-oriented.
<br><br>
I continuously evaluate and introduce technologies that improve scale, performance, and reliability, grounding decisions in data and measurable results. Beyond engineering, I also help drive cross-functional initiatives and business processes, aligning technology strategy with company objectives.
<br><br>
        `,
        date: "2022 - 2023",
    },
    {
        id: "jolt",
        icon: "jolt",
        company: "Jolt.io",
        title: "VP of Jolt.io",
        preDescription: ``,
        description: `
Accountable for ensuring that design and functional requirements are fully met, while maintaining a consistent and high-quality user experience across all products. I manage and mentor engineering teams, providing leadership, guidance, and support to drive team performance and growth.
<br><br>
I contribute to recruitment efforts, help shape team structure, and define standards and procedures to ensure consistent delivery excellence. I am responsible for budget planning and optimization, and I proactively recommend technological improvements to increase efficiency, scalability, and product quality.
<br><br>
I focus on developing high-performing teams and establishing strong engineering practices that enable the organization to deliver reliable, user-centered, and high-impact solutions.
<br><br>
        `,
        date: "2022 - Present",
    },
    {
        id: "coderz",
        icon: "coderz",
        company: "Coderz by Jolt.io",
        title: "Head of Engineering Development & Full-Stack Education",
        description: `
        ${externalLink(
            "Coderz",
            "https://coderz.jolt.io",
        )} targets to help junior developers who seek to work in the High-tech industry as developers.
The project's main goal is to teach and reach their first job as Full-Stack / Backend / Frontend developers.
<br/><br/>
My responsibilities were to take care of 360 degrees solutions, From teaching juniors and recording Full-Stack development tutorials, 
Creating live code along sessions, Hand-On developing the ${externalLink(
            "mobile app",
            "https://coderz.jolt.io",
        )}, Product design and research and more. 
As the project leader I'm mentoring, teaching and guiding to show how it's like being a hand-on on teamwork, agile workflow, behaving in the recruiting process and technical interviews and more topics that every developer experiences on an everyday basis.
<br/><br/>
Products of Coderz:
Coderz the App - developed with React Native which can be downloaded
            through the ${externalLink(
                "App Store",
                "https://apps.apple.com/il/app/coderz/id1603698449",
            )} or ${externalLink(
            "Play Store",
            "https://play.google.com/store/apps/details?id=com.coderz.coderz&hl=en&gl=il",
        )}, 
            for level up  developers step by step in a personal roadmap to reach their knowledge first job.
<br/><br/>
 ${externalLink(
     "Coderz VOD",
     "https://coderz.jolt.us",
 )} - Teaching and mentoring Hub for developers who want to level-up their skills.
<br/><br/>
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
<br/><br/>
${externalLink(
    "Coderz Podcast",
    "https://www.youtube.com/watch?v=HzhVTS7pyas&list=PLFCVfoyaWM97dsWhPEg7NaFCtdxyMH3Jj",
)} - Technical talks about Full-Stack, Backend, Frontend and more topics for dev community.
<br/><br/>
${externalLink(
    "Coderz YouTube",
    "https://www.youtube.com/channel/UCDoCEPVz8DewTIxeRDLgyyQ/playlists",
)} - Showing live technical meetups with participants, Tech talks, OJT Class recorded sessions.
<br/><br/>
${externalLink(
    "Coderz Facebook Group",
    "https://www.facebook.com/groups/coderzcommunity",
)} - More than 1200 developers, we target to help junior developers level-up their skills and find a job in the high-tech industry.
        `,
        date: "2021 - Present",
    },
    {
        id: "jolt",
        icon: "jolt",
        company: "Jolt.io",
        title: "Hands-on R&D Director of Engineering",
        description: `
Managing the R&D roadmap and technical direction, guidance, delivery, features quality, technologies, DevOps and team members personal skills evolvement.
<br/><br/>
Working directly with the company's CPO, Proactive attitude of "Do what it takes to get the job done".
Hands-on coder and managing team of developers, responsible for scaling challenges of DevOps services and systems of the company's apps. 
<br/><br/>
Responsible for the quality and workload estimation / schedule of the company's roadmap, projects, features, native apps and web apps delivery.
<br/><br/>
Products I've led & developed:
- Jolt OS - 360 solution for education purposes including: smart teachers scheduler.
- Student's Portal which includes: student's smart course schedule, public profile.
- Jobs Board & Jobs Scraper.
- Smart automated Job seeker
- Scheduler Instructor Web App.
- Management system for students, teachers, class sessions.
        `,
        date: "2021 - 2022",
    },
    {
        id: "jolt",
        icon: "jolt",
        company: "Jolt.io",
        title: "R&D Team Leader / Senior Fullstack Developer ",
        description: `
I provide hands-on technical and people leadership, focusing on building high-performing engineering teams and establishing leadership as a behavioral standard rather than a role title.
<br><br>        
I define and maintain engineering standards, documentation, tools, and best practices within an Agile/Scrum environment. I design and develop backend, frontend, and core application components, ensuring scalable, maintainable, and high-quality solutions.
<br><br>
I collaborate closely with product managers, developers, QA engineers, designers, and data scientists to align technical execution with business goals. I place strong emphasis on quality engineering practices, including TDD and SOLID principles, to ensure reliability and long-term sustainability.
<br><br>
I am responsible for designing system architecture across products and features, creating solutions that support performance, scalability, and growth.
<br><br>

        `,
        date: "2020 - 2021",
    },
    {
        id: "pepper",
        icon: "pepper",
        company: "Pepper Bank",
        title: "Senior Full Stack Developer / Scrum Master ",
        description: `
Responsible for leading the team’s delivery and progress within agile methodologies, ensuring effective execution and continuous improvement. I manage and drive projects end to end, staying hands-on where it matters — including architecting core application and microservices components.
<br><br>
I work closely with the Chief Product Officer on roadmap planning and feature delivery, fostering strong collaboration across teams. I actively coach teams in Scrum practices, promote servant-leadership principles, and help embed an agile culture across the organization. I support teams in resolving conflicts, encourage knowledge-sharing, and align processes and expectations with management.
<br><br>
On the technical side, I design and develop server-side application logic in JavaScript and Node.js, build backend components, integrate external web services, and partner with frontend developers to ensure seamless integration and reliable end-to-end solutions.
<br><br>
        `,
        date: "2018 - 2020",
    },
    {
        id: "investing",
        icon: "investing",
        company: "Investing.com",
        title: "Tech Lead / Senior Full Stack Developer",
        description: `
I served as the project lead for the company’s mobile website, working directly with executive leadership while providing matrix management for a team of five engineers during planning, development, and delivery phases.
<br><br>
In parallel, I contributed to multiple additional initiatives, including web applications, RESTful APIs, back-office admin systems, and full-stack development across JavaScript, MVVM frameworks, HTML5, CSS3, and LAMP-based backend technologies.
<br><br>
I actively supported other developers through code reviews, knowledge-sharing, and structured task planning to improve efficiency, technical quality, and skill development. I worked closely with product, design, frontend, and QA teams to ensure seamless collaboration and execution.
<br><br>
My core responsibilities included designing scalable application architectures, developing reusable and testable code, and optimizing performance through database design and opcode caching strategies. I also developed CMS solutions across both frontend and backend environments.
<br><br>
       `,
        date: "2014 - 2018",
    },
    {
        id: "salesTech",
        icon: "",
        company: "SalesTech",
        title: "Senior Full Stack DeveloperSalesTech ",
        description: `
I worked as a Senior Full-Stack Web Developer as part of a cross-functional engineering team, contributing to both backend and frontend development. I built and maintained web application components using JavaScript and developed scalable backend services on a LAMP stack.
<br><br>
I was responsible for maintaining and enhancing MVC-based applications, writing clean and reliable code across JavaScript (Vanilla/ jQuery) and PHP environments. I collaborated within an Agile workflow and used Git for version control and continuous delivery.
<br><br>
       `,
        date: "2014 - 2015",
    },
    {
        id: "csmedia",
        icon: "",
        company: "CS Media",
        title: "Tech Lead and Senior Full Stack Web Developer ",
        description: `
Senior Full stack web developer, worked in a team of web developers on multiple sides of the site such as<br/>
Back-end and Front-end. Created web application components with JavaScript.<br/>
Creation and maintenance of Back End (LAMP) and Front End (JavaScript/jQuery/Vanilla) code in MVC<br/>
application. Working with GIT in Agile development.<br/>
       `,
        date: "2009 - 2013",
    },
    {
        id: "ynet",
        icon: "ynet",
        company: "ynet",
        title: "Web Developer ",
        description: `
Worked as a junior web developer, focusing on designing and implementing frontend interfaces and animations for online advertising campaigns. Collaborated with designers and marketing teams to deliver high-quality, visually engaging digital assets aligned with brand and campaign goals.
<br><br>
       `,
        date: "2008 - 2009",
    },
    {
        id: "aviadis",
        icon: "",
        company: "Aviadis",
        title: "Web Developer ",
        description: `
Main responsibility to develop frontend & backend systems for marketing and advertising campaign solutions for the web. Wrote Flash apps with ActionScript 2 and 3.<br/> 
Developed mini-sites, landing pages, CRM's and professional website for business owners.<br/>       `,
        date: "2006 - 2007",
    },
];

export default workHistory;
