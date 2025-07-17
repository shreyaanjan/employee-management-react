import { useEffect, useState } from 'react';
import EmployeeTable from '../components/EmployeeTable'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

const Employees = () => {
    const navigate = useNavigate();
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("employees")) || [];
        setEmployees(data);
    }, []);
    
    const employeeDelete = (id) => {
        const updatedEmployee = employees.filter((emp) => {
            return emp.id !== id ;
        })
        setEmployees(updatedEmployee);
        localStorage.setItem("employees", JSON.stringify(updatedEmployee));
        toast.success("Employee Deleted Successfully !");
    }  

    return (
        <section className='pt-[93px] bg-[#f9fafb]'>
            <div className="container mx-auto">
                <div className="flex items-center justify-between">
                    <h2 className="text-3xl font-semibold mt-5">Employees Details</h2>
                    <button type="button" onClick={()=>navigate("/add-employee")} className="text-white bg-[#ff5d22] hover:bg-[#e24d14] font-medium rounded-lg text-sm px-4 py-2 text-center flex gap-2 mt-4"><i className="ri-add-line"></i>Add Employees</button>
                </div>
                <EmployeeTable employees={employees} employeeDelete={employeeDelete} />
            </div>
        </section>
    )
}

export default Employees