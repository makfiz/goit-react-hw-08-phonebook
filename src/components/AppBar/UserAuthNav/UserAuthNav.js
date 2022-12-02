import {StyledNavLink } from "../Nav/Nav.styled"



const userAuthItems = [
    { "href": "/register", "text": "SignUp" },
    {"href":"/login", "text":"SignIn"}
]
const UserAuthNav = () => {
    return (
        <div>
        {userAuthItems.map(item => {
            return <StyledNavLink to={item.href} key={item.href}>{item.text}</StyledNavLink>
        })}
       
        </div>
    )
}

export default UserAuthNav