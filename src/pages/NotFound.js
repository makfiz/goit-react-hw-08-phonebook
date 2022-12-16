import { Box } from "components/utils/Box";
import { useEffect, useRef  } from "react";
import { useNavigate } from "react-router-dom";
import img404 from "img/pageNotFound.png";

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
            textAlign="center"
            alignItems="center"
            
        >
            
            <h2>Page not found</h2>
            <img alt="404" src={img404} style={{margin:"0 auto"}}></img>
            <h4>The requested URL /badpage was not foun on this server. You will be redirected to the home page</h4>
            
        </Box>
    )
}

export default NotFound