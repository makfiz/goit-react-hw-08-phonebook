import { Box } from "components/utils/Box";
import {  useSelector } from "react-redux";
import {selectIsLoggedIn} from 'redux/auth/selectors';

const Home = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    return (
        <Box
            textAlign="center"
            alignItems="center"
            
        >
            
            <h1>Welcome 👋</h1>
            <p>Now you will exactly not forget your contacts!</p>
            {!isLoggedIn && <p>Please, <b>Sign up</b> or <b>Sign in</b> to have access to the
            Phonebook!</p>}
            
        </Box>
    )
}

export default Home