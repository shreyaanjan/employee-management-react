const Contact = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-10">
                    <div className="flex items-center justify-center gap-3">
                        <img src="/images/star-icon.png" alt="" />
                        <p className="text-sm text-[#ff5d22] font-semibold uppercase mb-2">Get In Touch</p>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold my-3">Ready to Get Started?</h2>
                    <p className="text-sm text-gray-500">Your email address will not be published. Required fields are marked <span className="text-red-500">*</span></p>
                </div>
                <div className="flex flex-col lg:flex-row items-center gap-10">
                    <div className="w-full lg:w-1/2 flex justify-center">
                        <img src="/images/contact.png" alt="Contact Illustration" className="w-full max-w-md" />
                    </div>
                    <div className="w-full lg:w-1/2 bg-white p-8 rounded-lg shadow-md">
                        <form className="space-y-4">
                            <input type="text" placeholder="Name" className="w-full p-3 bg-gray-100 border border-gray-200 rounded-md focus:outline-none" />
                            <input type="email" placeholder="Email" className="w-full p-3 bg-gray-100 border border-gray-200 rounded-md focus:outline-none" />
                            <input type="text" placeholder="Phone number" className="w-full p-3 bg-gray-100 border border-gray-200 rounded-md focus:outline-none" />
                            <input type="text" placeholder="Subject" className="w-full p-3 bg-gray-100 border border-gray-200 rounded-md focus:outline-none" />
                            <textarea placeholder="Write your message..." className="w-full h-32 p-3 bg-gray-100 border border-gray-200 rounded-md resize-none focus:outline-none"></textarea>
                            <button className="bg-[#ff5d22] text-white px-6 py-3 rounded-md font-semibold flex items-center gap-2 hover:bg-[#e24d14] transition-all">
                                <span>✔</span> Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact