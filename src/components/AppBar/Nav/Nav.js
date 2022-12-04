import { useSelector  } from "react-redux";

import {StyledNavLink } from "./Nav.styled"
import { selectIsLoggedIn } from "redux/auth/selectors";

const navItemsSet = [
    {"href":"/home", "text":"Home"},
    {"href":"/contacts", "text":"Contacts"},
]

const Navigation = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    let navItems = isLoggedIn ? navItemsSet : [navItemsSet[0]]
    return (
        <>
        {navItems.map(item => {
            return <StyledNavLink to={item.href} key={item.href}>{item.text}</StyledNavLink>
        })}
       
        </>
    )
}

export default Navigation