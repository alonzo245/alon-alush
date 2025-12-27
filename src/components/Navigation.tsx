import React, { useRef, useState } from "react";
import { StyledBurger, StyledMenu } from "./Navigation.style";
import useClickOutside from "../hooks/useClickOutside";
import { StyledLink, Container, BurgerContainer } from "./Navigation.style";
import { animateScroll as scroll } from "react-scroll";
import { CENTER_ITEMS_FLEX, COLORS, mobileThreshold } from "../config/utils";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import useScreenSize from "../hooks/useScreenSize";
import styled from "@emotion/styled";
import { useGlobalState } from "../hooks/useGlobalState";

export default function Navigation(): React.JSX.Element | null {
    const [open, setOpen] = useState<boolean>(false);
    const node = useRef<HTMLDivElement>(null);
    const { width } = useScreenSize();
    const { state } = useGlobalState();
    useClickOutside(node, () => setOpen(false));

    if (state?.modal) return null;

    const onClick = (section?: string): boolean => {
        setOpen(!open);

        if (!open) {
            document.body.style.overflowY = "hidden";
        } else {
            document.body.style.overflowY = "auto";
            if (section)
                scroll.scrollTo(section, {
                    // duration: 1500,
                    delay: 100,
                    smooth: true,
                    containerId: section,
                    offset: 700,
                });
        }

        return open;
    };

    return (
        <Container ref={node}>
            <Burger open={open} setOpen={onClick} />
            <StyledMenu open={open}>
                <StyledLink to="hero" onClick={() => onClick("hero")}>
                    TOP
                </StyledLink>

                <StyledLink to="resume" onClick={() => onClick("resume")}>
                    WORK TIMELINE
                </StyledLink>
                <StyledLink to="summary" onClick={() => onClick("summary")}>
                    SUMMARY & EXPERIENCE
                </StyledLink>
                <StyledLink to="projects" onClick={() => onClick("projects")}>
                    GitHub Projects
                </StyledLink>
                <StyledLink to="videos" onClick={() => onClick("videos")}>
                    Videos & Tutorials
                </StyledLink>
                {width < mobileThreshold && (
                    <Row>
                        <A
                            href="https://il.linkedin.com/in/alonalush"
                            target={"_blank"}
                            rel="noopener noreferrer"
                            onClick={() => onClick("")}
                        >
                            <FaLinkedin size={50} color={"#999"} />
                        </A>
                        <A
                            href="https://github.com/alonzo245"
                            target={"_blank"}
                            rel="noopener noreferrer"
                            onClick={() => onClick("")}
                        >
                            <FaGithubSquare size={50} color={"#999"} />
                        </A>
                    </Row>
                )}
            </StyledMenu>
        </Container>
    );
}

const Row = styled.div`
    ${CENTER_ITEMS_FLEX}
`;
const A = styled.a`
    display: inline-block;

    margin: 10px 20px;
`;

interface BurgerProps {
    open: boolean;
    setOpen: (section?: string) => boolean;
}

const Burger = ({ open, setOpen }: BurgerProps): React.JSX.Element => {
    return (
        <BurgerContainer open={open}>
            <StyledBurger open={open} onClick={() => setOpen()}>
                <div />
                <div />
                <div />
            </StyledBurger>
        </BurgerContainer>
    );
};
