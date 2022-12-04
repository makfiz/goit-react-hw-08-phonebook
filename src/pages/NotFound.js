import { Box } from "components/utils/Box";
import { useEffect, useRef  } from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate();
    const timerIdRef = useRef(null)
    useEffect(() => {
        timerIdRef.current = window.setTimeout(redirect, 6000)

        function redirect() {
            navigate("/", { replace: true });
        }

        return () => {
            window.clearTimeout(timerIdRef.current)
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