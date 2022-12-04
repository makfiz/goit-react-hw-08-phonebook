import { Box } from "components/utils/Box";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const timeoutID = window.setTimeout(redirect, 6000)

        function redirect() {
            navigate("/", { replace: true });
        }

        return () => {
            console.log(timeoutID)
            window.clearTimeout(timeoutID)
            console.log(timeoutID)
        };
        
    },[navigate])



    return (
        <Box
            display="flex"
            alignItems="center"
            flexDirection="column"
        >
            <h1>404</h1>  
            <h2>Page not found</h2>
            <h4>The requested URL /badpage was not foun on this server. You will be redirected to the home page</h4>
            
        </Box>
    )
}

export default NotFound