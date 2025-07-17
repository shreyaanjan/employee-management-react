import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify';

const EditEmployee = () => {
    const navigate = useNavigate();
    const { id } = useParams()
    console.log(id);

    const [input, setInput] = useState({
        name: "", salary: "", department: "",
    })

    useEffect(() => {
        const employees = JSON.parse(localStorage.getItem("employees")) || [];
        const editEmp = employees.find((emp) => {
            return emp.id == id;
        })

        if (editEmp) {
            setInput(editEmp);
            console.log(editEmp);
        } else {
            toast.error("User Not Found !");
            navigate("/employee");
        }
    }, [id])

    const handleChange = (e) => {
        setInput({ ...input, [e.target.id]: e.target.value })
    }

    const handleUpdate = (e) => {
        e.preventDefault();

        const employees = JSON.parse(localStorage.getItem("employees")) || [];
        const updatedEmp = employees.map((emp) => {
            return emp.id == id ? {
                ...emp, ...input
            } : emp 
        })

        localStorage.setItem("employees", JSON.stringify(updatedEmp));
        toast.success("Data Updated Successfully !");
        setInput({name: "", salary: "", department: ""});
        navigate("/employees");
    }

    return (
        <div className="container mx-auto pt-[100px]">
            <h2 className="text-3xl font-semibold mb-5">Edit Employee</h2>
            <form onSubmit={handleUpdate}>
                <div className="grid gap-6 mb-6 md:grid-cols-2 items-center">
                    <div>
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Employee Name</label>
                        <input onChange={handleChange} value={input.name} type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="John" required />
                    </div>
                    <div>
                        <label htmlFor="salary" className="block mb-2 text-sm font-medium text-gray-900">Salary</label>
                        <input onChange={handleChange} value={input.salary} type="number" id="salary" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="₹5000" required />
                    </div>
                    <div>
                        <label htmlFor="department" className="block mb-2 text-sm font-medium text-gray-900">Department</label>
                        <select onChange={handleChange} value={input.department} id="department" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                            <option value="">Choose a Department</option>
                            <option value="1">Designing</option>
                            <option value="2">Development</option>
                            <option value="3">Finance</option>
                            <option value="4">Sales And Marketing</option>
                        </select>
                    </div>
                    <div>
                        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center mt-5">Update</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default EditEmployee