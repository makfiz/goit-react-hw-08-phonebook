import {  useSelector  } from "react-redux";
import { useDispatch } from "react-redux";

import { selectUser } from "redux/auth/selectors";
import { logOut } from "redux/auth/operations";
const UserNav = () => {
    const dispatch = useDispatch();
    const user = useSelector(selectUser)
    console.log(user)
    return (
        <>
            <div>
            <p>{user?.name}</p>
            <button onClick={() => dispatch(logOut())}>Logout</button>
            </div>
        </>
    )
}

export default UserNav