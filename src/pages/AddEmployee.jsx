import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddEmployee = () => {
    const navigate = useNavigate();

    const [input, setInput] = useState({
        name: "", salary: "", department: "",
    })

    const handleChange = (e) => {
        setInput({ ...input, [e.target.id]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const employeeDetail = { id: Date.now(), ...input };
        const employees = JSON.parse(localStorage.getItem("employees")) || [];
        employees.push(employeeDetail);

        localStorage.setItem("employees", JSON.stringify(employees));
        setInput({ name: "", salary: "", department: "" })
        navigate("/employees");
        console.log(employees);
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#fff7f1] px-4 pt-[60px]">
            <div className="max-w-4xl w-full flex flex-col md:flex-row bg-white rounded-lg overflow-hidden shadow-lg">
                <div className="md:w-1/2 w-full bg-[#fff7f1] flex items-center justify-center p-10">
                    <img src="/images/employee.png" alt="Illustration" className="max-w-full h-auto" />
                </div>
                <div className="md:w-1/2 w-full bg-[#ff725e] p-10 text-white">
                    <h2 className="text-2xl md:text-3xl font-bold mb-2">Add Employee</h2>
                    <p className="text-sm mb-6">Fill out the form to add a new employee to the system</p>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <div className="mb-5">
                                <label htmlFor="name" className="block mb-1 text-sm font-medium">Employee Name</label>
                                <input onChange={handleChange} value={input.name} type="text"
                                    id="name" placeholder="John"
                                    className="bg-white border border-gray-300 text-gray-800 text-sm rounded-md focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5" required />
                            </div>
                            <div className="mb-5">
                                <label htmlFor="salary" className="block mb-1 text-sm font-medium">Salary</label>
                                <input onChange={handleChange} value={input.salary}
                                    type="number" id="salary" placeholder="₹5000"
                                    className="bg-white border border-gray-300 text-gray-800 text-sm rounded-md focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5" required />
                            </div>
                            <div className="mb-8">
                                <label htmlFor="department" className="block mb-1 text-sm font-medium">Department</label>
                                <select onChange={handleChange} value={input.department}
                                    id="department" className="bg-white border border-gray-300 text-gray-800 text-sm rounded-md focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5" required>
                                    <option value="">Choose a Department</option>
                                    <option value="1">Designing</option>
                                    <option value="2">Development</option>
                                    <option value="3">Finance</option>
                                    <option value="4">Sales And Marketing</option>
                                </select>
                            </div>
                            <div>
                                <button type="submit"
                                    className="w-full bg-white text-[#ff5d22] font-semibold py-2.5 rounded-md hover:bg-gray-100 transition-all">
                                    Submit
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddEmployee