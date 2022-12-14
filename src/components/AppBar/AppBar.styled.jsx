import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content:space-between;
  min-height: 30px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 10px;
  padding-bottom: 10px;
  color: #fff;
  border-bottom: 2px solid #2196f3;; 
`
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
