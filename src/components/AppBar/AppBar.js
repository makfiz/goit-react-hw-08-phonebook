import { Header} from "./AppBar.styled"
import { Outlet } from "react-router-dom";
import {  useSelector  } from "react-redux";

import Navigation from "components/AppBar/Nav/Nav";
import UserAuthNav from "components/AppBar/UserAuthNav/UserAuthNav";
import UserNav from "components/AppBar/UserNav/UserNav";

import { selectIsLoggedIn } from "redux/auth/selectors";


const AppBar = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn)

    return (
        <>
            <Header>
                    <nav>
                        <Navigation />
                    </nav>
                {isLoggedIn ?  <UserNav/> : <UserAuthNav/>}
            </Header>
            <Outlet />
        </>
    )
}

export default AppBar