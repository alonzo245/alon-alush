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

export default function () {
    const [open, setOpen] = useState(false);
    const node = useRef();
    const { width } = useScreenSize();
    const { state } = useGlobalState();
    useClickOutside(node, () => setOpen(false));

    if (state?.modal) return null;

    const onClick = (section) => {
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
            <StyledMenu open={open} setOpen={setOpen}>
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
                {width < mobileThreshold && (
                    <Row>
                        <A
                            href="https://il.linkedin.com/in/alonalush"
                            target={"_blank"}
                            onClick={() => onClick("")}
                        >
                            <FaLinkedin size={50} color={"#999"} />
                        </A>
                        <A
                            href="https://github.com/alonzo245"
                            target={"_blank"}
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

const Burger = ({ open, setOpen }) => {
    return (
        <BurgerContainer open={open}>
            <StyledBurger open={open} onClick={() => setOpen(!open)}>
                <div />
                <div />
                <div />
            </StyledBurger>
        </BurgerContainer>
    );
};
