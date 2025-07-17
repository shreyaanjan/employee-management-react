import { useEffect } from "react"
import { useNavigate } from "react-router-dom";

const ProtectedRoutes = ({Component}) => {
    const navigate = useNavigate()

    useEffect(()=>{
        let loginStatus = JSON.parse(localStorage.getItem("isLoggedIn")) || false;
        if(!loginStatus){
            navigate("/login")        
        }
    }, [])
    
    return (
        <>
            <Component/>
        </>
    )
}

export default ProtectedRoutes