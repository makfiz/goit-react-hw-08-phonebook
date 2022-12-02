import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledNavLink = styled(NavLink)`
    margin-right:15px;
    color:${p => p.theme.colors.black};
    text-decoration:none;
    font-size:${p => p.theme.fontSizes.m};
    padding: 0 3px;
    &.active {
        background-color:${p => p.theme.colors.navAccent};
        color:${p => p.theme.colors.white};
        border-radius:10px;
    }
    :hover:not(.active),
    :focus-visible:not(.active) {
        color:${p => p.theme.colors.navAccent};
    }
`
