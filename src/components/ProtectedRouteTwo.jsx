import { useNavigate } from "react-router-dom"

const ProtectedRouteTwo = ({isLoggedIn, children}) => {
    const navigate = useNavigate();
    return isLoggedIn ? navigate("/employees") : children;
}

export default ProtectedRouteTwo