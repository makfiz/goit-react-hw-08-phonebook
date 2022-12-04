import { Navigate } from 'react-router-dom';
import {  useSelector  } from "react-redux";
import {selectIsLoggedIn  } from 'redux/auth/selectors';

export const Redirector = ({ifAuthRedirectTo , ifUnauthRedirectTo}) => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    return isLoggedIn ? <Navigate to={ifAuthRedirectTo}/> : <Navigate to={ifUnauthRedirectTo}/>
}  