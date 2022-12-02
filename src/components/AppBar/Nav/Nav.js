import {StyledNavLink } from "./Nav.styled"


const navItems = [
   {"href":"/contacts", "text":"Contacts"},
]
const Navigation = () => {
    return (
        <>
        {navItems.map(item => {
            return <StyledNavLink to={item.href} key={item.href}>{item.text}</StyledNavLink>
        })}
       
        </>
    )
}

export default Navigation