import React from "react";
import techIcons from "../data/techIcons";
import { Container, H3, Row, RowIcons, P, TechItem, H4 } from "./Summary.style";
export default function () {
    return (
        <Container id="summary">
            <H3 style={{ alignSelf: "center", marginBottom: "30px", marginTop: "40px" }}>
                Tech I Work with
            </H3>
            <RowIcons>
                {techIcons.map((i, k) => {
                    return (
                        <TechItem>
                            {i.icon}
                            <p style={{ fontSize: "11px", marginTop: "5px", textAlign: "center" }}>
                                {i.title}
                            </p>
                        </TechItem>
                    );
                })}
            </RowIcons>

            <Row>
                <P>
                    <H4>Summary</H4>
                    <ul>
                        <li>
                            In charge of the R&D roadmap and technical direction, guidance and
                            quality.
                        </li>
                        <li>
                            Leading and managing infrastructure of technological plans, strategies,
                            methodologies and budgeting.
                        </li>
                        <li>Hands on developer for more than 15 years.</li>
                        <li>
                            Passionate on code and mentoring junior developers in the tech industry.
                        </li>
                        <li>Agile in learning new ranges of technologies.</li>
                        <li>Experience with public cloud environments</li>
                        <li>
                            Strive for product’s goals as defined and documented, in the scheduled
                            commitments.
                        </li>
                        <li>
                            Researching ways to improve new and existing technologies of the
                            company.
                        </li>
                        <li>Recruit groom and mentor junior and senior talented developers.</li>
                        <li>Experience in Microservices architecture and SaaS environments.</li>
                        <li>Excellent communication and problem-solving skills.</li>
                    </ul>
                </P>

                <P>
                    <H4>Hands On Coding Experience</H4>
                    <ul>
                        <li>
                            Backend: NodeJS, Typescript, NestJS, ExpressJS, GraphQL, Apollo Server,
                            Apollo Federation, Apollo Engine, Microservices Architecture, HTTP
                            Protocols, Experienced with BASH/ZSH.
                        </li>
                        <li>
                            Frontend: React, Apollo Client GraphQL, Emotion Styled for CSS, Gatsby ,
                            Deep understanding of DOM and Shadow DOM.
                        </li>
                        <li>
                            Databases: MongoDB, Mysql, Cassandra, Mongo Atlas, ElasticSearch,
                            FireStore, SQLite, Redis, memcache.
                        </li>
                        <li>Build Tools: NPM Packaging and publishing, Webpack.</li>
                        <li>React Native: Expo Framework.</li>
                        <li>Frontend UI: Ant Design, Material UI.</li>
                        <li>
                            Dev Methodologies: SOLID and Clean Code Architecture TDD writing tests
                            first.
                        </li>
                        <li>
                            Testing Frameworks: Jest, Mocha / Jasmine, Puppeteer, SuperTest, Spy,
                            SuperMock
                        </li>
                        <li>
                            Cloud / Devops: AWS, EKS, Helm, Buddy, RDS, Route 53, EC2, Kebernates,
                            pods, services and deployments, NGINX, Kibana, also experienced with
                            Firebase and GCloud.
                        </li>
                        <li>
                            Agile practices: Experienced as a Scrum Master, Agile Scrum, Kanban.
                        </li>
                        <li>Version Control: Git, Github, GitLab, BitBucket, Azure VSTS, TFS.</li>
                        <li>IC/CD: CircleCi, Jenkins, Buddy Works, Nolio, Zabbix.</li>
                    </ul>
                </P>
            </Row>
        </Container>
    );
}
