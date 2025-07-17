const Home = () => {
    return (
        <section className="home-section bg-gradient-to-b from-white to-[#eae4ff] min-h-screen flex items-center pt-32">
            <div className="container mx-auto px-6 flex flex-col-reverse lg:flex-row items-center gap-8">
                <div className="lg:w-[48%] space-y-6">
                    <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
                        Secure IT Solutions<br />
                    </h1>
                    <p className="text-gray-500 text-base leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br />
                        incididunt ut labore et dolore magna aliqua.
                    </p>
                    <button className="flex items-center gap-2 bg-[#ff5d22] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#e24d14] transition duration-300">
                        <span>➜</span> Get Started
                    </button>
                </div>
                <div className="lg:w-[52%] flex justify-center">
                    <img src="/images/home.png" alt="Technology Illustration" className="w-full max-w-[500px]" />
                </div>
            </div>
        </section>
    )
}

export default Home