import { useEffect, useState } from 'react';
import EmployeeTable from '../components/EmployeeTable'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

const Employees = () => {
    const [employees, setEmployees] = useState([]);
    const [searchEmp, setSearchEmp] = useState([]);
    const [search, setSearch] = useState({ name: "", department: "" });

    const navigate = useNavigate();

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("employees")) || [];
        setEmployees(data);
        setSearchEmp(data);
    }, []);

    const handleChange = (e) => {
        const value = e.target.value;

        setSearch({ ...search, [e.target.id]: e.target.value })
        let searchArr = value.trim() == "" ? searchEmp : searchEmp.filter((item) => {
            return item.department == value;
        })
        setEmployees(searchArr)
    }

    const handleSearch = (e) => {
        const value = e.target.value;
        setSearch({ ...search, [e.target.id]: e.target.value })

        let searchArr = value.trim() == "" ? searchEmp : searchEmp.filter((item) => {
            return item.name.toLowerCase().includes(value.toLowerCase())
        })
        setEmployees(searchArr)
    }

    const employeeDelete = (id) => {
        const updatedEmployee = employees.filter((emp) => {
            return emp.id !== id;
        })
        setEmployees(updatedEmployee);
        localStorage.setItem("employees", JSON.stringify(updatedEmployee));
        toast.success("Employee Deleted Successfully !");
    }
    
    return (
        <section className="pt-[93px] bg-[#f9fafb] min-h-screen">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                    <h2 className="text-3xl font-semibold">Employees Details</h2>
                    <div className="flex flex-col md:flex-row items-center gap-3 w-full md:w-auto">
                        <select onChange={handleChange} value={search.department} id="department"
                            className="bg-white border border-gray-300 text-gray-800 text-sm rounded-md focus:ring-orange-500 focus:border-orange-500 px-4 py-2">
                            <option value="">All Departments</option>
                            <option value="1">Designing</option>
                            <option value="2">Development</option>
                            <option value="3">Finance</option>
                            <option value="4">Sales & Marketing</option>
                        </select>
                        <input type="text" placeholder="Search Name" value={search.name}
                            id="name" onChange={handleSearch} className="bg-white border border-gray-300 text-gray-800 text-sm rounded-md focus:ring-orange-500 focus:border-orange-500 px-4 py-2 w-full md:w-[200px]" />
                        <button type="button" onClick={() => navigate("/add-employee")}
                            className="text-white bg-[#ff5d22] hover:bg-[#e24d14] font-medium rounded-md text-sm px-4 py-2 flex items-center gap-2 transition">
                            <i className="ri-add-line"></i>Add Employee
                        </button>
                    </div>
                </div>
                {
                    (employees.length !== 0 ? <EmployeeTable employees={employees} setEmployees={setEmployees} employeeDelete={employeeDelete} /> :
                        <div>
                            <div className='items-center flex justify-center'>
                                <img src="/images/no-data.png" alt="no-data" className="w-[700px]" />
                            </div>
                        </div>
                    )
                }
            </div>
        </section>
    )
}

export default Employees