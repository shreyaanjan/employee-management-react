import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

const Login = ({ setIsLoggedIn }) => {
    const [input, setInput] = useState({
        email: "", password: "",
    })
    const navigate = useNavigate();

    const handleChange = (e) => {
        setInput({ ...input, [e.target.id]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (input.email == "admin@gmail.com" && input.password == "admin@123") {
            setIsLoggedIn(true);
            localStorage.setItem("isLoggedIn", JSON.stringify(true))
            toast.success("Admin Logged In Successfully !");
            navigate("/employees")
        } else {
            toast.error("Invalid Email Id or Password !")
            setIsLoggedIn(false)
        }
    }

    return (
        <section>
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="w-full bg-white rounded-md shadow-md sm:max-w-md p-8">
                    <h1 className="text-2xl font-bold text-gray-900 mb-6">Login</h1>
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label htmlFor="email" className="block mb-1 text-sm font-semibold text-gray-900">
                                Username or email
                            </label>
                            <input onChange={handleChange} type="email" name="email" id="email"
                                placeholder="Username or email" className="bg-gray-100 border border-gray-200 text-gray-900 text-sm rounded-sm block w-full p-3 focus:outline-none focus:ring-2 focus:ring-orange-500" />
                        </div>
                        <div>
                            <label htmlFor="password" className="block mb-1 text-sm font-semibold text-gray-900">
                                Password
                            </label>
                            <input onChange={handleChange}
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Password"
                                className="bg-gray-100 border border-gray-200 text-gray-900 text-sm rounded-sm block w-full p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-[#ff5d22] hover:bg-[#e24d14] text-white text-sm font-semibold py-3 rounded-sm transition-all duration-300">
                            Log In
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Login