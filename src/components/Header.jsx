import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { toast } from "react-toastify"

const Header = ({ isLoggedIn, setIsLoggedIn }) => {
    const [menu, setMenu] = useState(false)
    const navigate = useNavigate();

    const { pathname } = useLocation();

    const handleClick = () => {
        setIsLoggedIn(false);
        localStorage.setItem("isLoggedIn", JSON.stringify(false))
        toast.success("Logged Out Successfully")
        navigate("/login")
    }

    return (
        <header className="absolute w-full">
            <div className="container mx-auto">
                <nav>
                    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                        <Link to={"/"} className="flex items-center space-x-3 rtl:space-x-reverse w-24 sm:w-32 md:w-40">
                            <img src="/images/logo.png" alt="logo" />
                        </Link>
                        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                            <ul className="font-bold flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
                                <li>
                                    <Link to={"/"} className={`${pathname == "/" ? "text-[#ff5d22]" : "text-[#221638]"}`}>Home</Link>
                                </li>
                                <li>
                                    <Link to={"/services"} className={`${pathname == "/services" ? "text-[#ff5d22]" : "text-[#221638]"}`}>Services</Link>
                                </li>
                                <li>
                                    <Link to={"/contact"} className={`${pathname == "/contact" ? "text-[#ff5d22]" : "text-[#221638]"}`}>Contact</Link>
                                </li>
                                {isLoggedIn && (<Link to={"/employees"} className={`${pathname == "/employees" || pathname == "/add-employee" || pathname.includes("/edit-employee") ? "text-[#ff5d22]" : "text-[#221638]"}`}>Employees</Link>)}
                            </ul>
                        </div>
                        <div className="flex items-center gap-5">
                            <div className="md:hidden">
                                <button onClick={() => setMenu(!menu)} className="text-black text-2xl">
                                    {menu ? '✕' : '☰'}
                                </button>
                            </div>
                            {
                                isLoggedIn ? <button onClick={handleClick} type="button" className="text-white bg-[#f16470] hover:bg-[#e64855] ring-slate-200 focus:ring-1 font-medium rounded-sm text-sm px-9 py-2 text-center transition-all duration-300">Logout</button>
                                    : <button onClick={() => {
                                        navigate("/login")
                                    }} type="button" className="text-white bg-[#ff5d22] hover:bg-[#e24d14] ring-slate-200 focus:ring-1 font-medium rounded-sm text-sm px-9 py-2 text-center transition-all duration-300">Login</button>
                            }
                        </div>
                    </div>
                </nav>
            </div>

            {menu && (
                <div className="md:hidden fixed top-[72px] left-0 right-0 bottom-0 bg-white z-50 p-6 overflow-y-auto">
                    <ul className="flex flex-col space-y-4 p-2 font-semibold">
                        <li>
                            <Link to={"/"} onClick={() => setMenu(false)} className={`${pathname == "/" ? "text-[#ff5d22]" : "text-[#221638]"}`}>Home</Link>
                        </li>
                        <li>
                            <Link to={"/services"} onClick={() => setMenu(false)} className={`${pathname == "/services" ? "text-[#ff5d22]" : "text-[#221638]"}`}>Services</Link>
                        </li>
                        <li>
                            <Link to={"/contact"} onClick={() => setMenu(false)} className={`${pathname == "/contact" ? "text-[#ff5d22]" : "text-[#221638]"}`}>Contact</Link>
                        </li>
                        {isLoggedIn && (<Link to={"/employees"} onClick={() => setMenu(false)} className={`${pathname == "/employees" || pathname == "/add-employee" || pathname.includes("/edit-employee") ? "text-[#ff5d22]" : "text-[#221638]"}`}>Employees</Link>)}
                    </ul>
                </div>
            )}
        </header>
    )
}

export default Header