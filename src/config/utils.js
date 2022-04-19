export const mobileThreshold = 950;
export const MOBILE_MQ = `@media (max-width: 950px)`;
export const DESKTOP_MQ = `@media (min-width: 950px) and (max-width:1440px)`;
export const WIDE_MQ = `@media (min-width: 1440px)`;
export const MOBILE = "MOBILE";
export const DESKTOP = "DESKTOP";
export const CENTER_ITEMS_FLEX = `
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const isEmailValid = (email) => {
    const re =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

export const COLORS = {
    brightPurple: "#a955ff",
    purple: "#7d00f1",
    blueish: "#5600ff",
};
