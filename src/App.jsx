import { ToastContainer } from 'react-toastify';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Home from "./pages/Home"
import Services from './pages/Services';
import Contact from "./pages/Contact"
import Login from "./pages/Login"
import { useEffect, useState } from 'react';
import Employees from './pages/Employees';
import AddEmployee from './pages/AddEmployee';
import EditEmployee from './pages/EditEmployee';
import ProtectedRoutes from './components/ProtectedRoutes';
import ProtectedRouteTwo from './components/ProtectedRouteTwo';

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        let loginStatus = JSON.parse(localStorage.getItem("isLoggedIn"))
        setIsLoggedIn(loginStatus)
    }, [])

    return (
        <BrowserRouter>
            <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={
                    <ProtectedRouteTwo isLoggedIn={isLoggedIn}>
                        <Login setIsLoggedIn={setIsLoggedIn} />
                    </ProtectedRouteTwo>
                }/>
                <Route path="/employees" element={<ProtectedRoutes Component={Employees} />} />
                <Route path="/add-employee" element={<ProtectedRoutes Component={AddEmployee} />} />
                <Route path="/edit-employee/:id" element={<ProtectedRoutes Component={EditEmployee} />} />
            </Routes>
            <ToastContainer />
        </BrowserRouter>
    )
}

export default App