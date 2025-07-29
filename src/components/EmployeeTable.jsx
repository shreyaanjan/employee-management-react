import { Link } from "react-router-dom"

const EmployeeTable = ({ employees, employeeDelete, setEmployees }) => {

    const handleDelete = (id) =>{
        employeeDelete(id);
    }

    const handleSort = () => {
        let sortArr = [...employees].sort((a, b) => {
            return a.salary - b.salary;
        })
        setEmployees(sortArr);
    }

    return (
        <div className="relative overflow-x-auto mt-5">
            <table className="w-full text-sm text-left  text-gray-500">
                <thead className="text-xs text-white uppercase bg-[#fb923c]">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Number
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Employee Name
                        </th>
                        <th scope="col" className="px-6 py-3 cursor-pointer" onClick={handleSort}>
                            Salary
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Department
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employees.map((emp, idx) => {
                            return <tr key={emp.id} className="border-b border-l border-r border-gray-300">
                                <td scope="row" className="px-6 py-4 text-gray-900 whitespace-nowrap ">{idx + 1}</td>
                                <td className="px-6 py-4 text-gray-900">{emp.name}</td>
                                <td className="px-6 py-4 text-gray-900">₹{Number(emp.salary).toLocaleString()}</td>
                                <td className="px-6 py-4 text-gray-900">{emp.department == 1 ? "Designing" : emp.department == 2 ? "Development" : emp.department == 3 ? "Finance" : "Sales and Marketing"}</td>
                                <td className="px-6 py-4 flex items-center gap-5">
                                    <Link to={`/edit-employee/${emp.id}`} className="text-base text-green-600"><i className="fa-solid fa-pen-to-square"></i></Link>
                                    <button onClick={()=> handleDelete(emp.id)} className="text-base text-red-600"><i className="fa-solid fa-trash"></i></button>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default EmployeeTable