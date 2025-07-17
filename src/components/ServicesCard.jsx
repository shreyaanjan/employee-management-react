const ServicesCard = ({icon, title, desc}) => {
    return (
        <div className="w-full sm:w-1/2 md:w-1/3 p-4">
            <div className="h-full p-6 rounded-lg border hover:border-[#ff5d22] transition duration-300 shadow-sm text-center">
                <div className="mb-4 text-3xl flex justify-center">
                    <i class={icon}></i>
                </div>
                <div className="mb-2">
                    <h5 className="text-2xl font-bold tracking-tight text-[#221638] cursor-pointer hover:text-[#ff5d22]">{title}</h5>
                </div>
                <div className="mb-4 leading-relaxed">
                    <p className="font-normal text-[#6b6b84]">{desc}</p>
                </div>
            </div>
        </div>
    )
}

export default ServicesCard