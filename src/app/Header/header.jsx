'use client';
import { useEffect, useState } from 'react';
import { FaFacebookF, FaInstagram, FaXTwitter, FaEnvelope, FaPhone, FaUser } from 'react-icons/fa6';
import { Dialog } from 'primereact/dialog';
import { FaEye } from "react-icons/fa";
import { IoMdEyeOff } from "react-icons/io";

export default function Header() {
    const [visible, setVisible] = useState(false);
    const [formData, setformData] = useState({ email: '', password: '' });
    const [showPassword, setShowPassword] = useState(false);
    const [authMode, setAuthMode] = useState("login");
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleChange = (e) => {
        setformData({ ...formData, [e.target.name]: e.target.value });
    };

    const passwordToggle = () => setShowPassword(!showPassword);
    const showSignup = () => setAuthMode("signup");
    const showLoginPage = () => setAuthMode("login");

    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [mobileMenuOpen]);

    return (
        <section className="overflow-x-hidden">
            <div className="justify-between lg:flex items-center gap-4 bg-[#2c3e50] p-3 lg:px-16">
                <div className='flex gap-3 menuBar' style={{ width: "33.3%" }}>
                    {[FaFacebookF, FaInstagram, FaXTwitter].map((Icon, i) => (
                        <div key={i} className="rounded-full bg-[#34495e] p-2 hover:bg-[#3d566e] transition">
                            <Icon className="text-white text-sm" />
                        </div>
                    ))}
                </div>

                <div className="hidden lg:flex" style={{ width: "33.3%" }}>
                    <span className="text-white text-sm">
                        Empower Your Wealth With Acme Group
                    </span>
                </div>

                <div className="block lg:hidden text-center">
                    <span className="text-white text-sm">
                        Empower Your Wealth With Acme Group
                    </span>
                </div>

                <div className='flex lg:flex hidden gap-4 justify-end' style={{ width: "33.3%" }}>
                    <span className='flex gap-2 items-center text-white text-sm'><FaEnvelope className='text-yellow-500' />info@acmegroup.co.in</span>
                    <span className='flex gap-2 items-center text-white text-sm'><FaPhone className='text-yellow-500' />+91-9077755500</span>
                </div>
            </div>

            <div className="lg:hidden flex justify-between items-center px-4 py-3 bg-white shadow" style={{ borderBottom: "1px solid #ddd" }}>
                <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-gray-600">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
                <img src="/Images/logo.png" alt="Logo" className="h-8" />
                <div className="flex gap-3 items-center">
                    <button className="text-gray-600">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
                        </svg>
                    </button>
                    <button onClick={() => setVisible(true)} className="bg-red-600 p-2 rounded-full text-white">
                        <FaUser size={16} />
                    </button>
                </div>
            </div>

            <header className="w-full menuBar sticky top-0 bg-white shadow z-50 lg:flex justify-between items-center p-4 lg:px-16 hidden">
                <div className="flex items-center gap-4" style={{ width: "180px" }}>
                    <img src="/Images/logo.png" alt="Logo" className='w-full' />
                </div>

                <nav className="flex gap-12">
                    <ul className='flex gap-8 items-center text-black-600 font-medium'>
                        {["Home", "About Us", "What We Do", "Latest", "FAQs", "Reach Us"].map((item, i) => (
                            <li key={i}>
                                <a href="#" className="hover:text-black-500 font-bold">{item}</a>
                            </li>
                        ))}
                    </ul>
                </nav>

                 <div className="flex gap-6 items-center">
                        <button className="text-gray-600">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
                            </svg>
                        </button>
                        <div onClick={() => setVisible(true)}>
                            <button className='bg-red-600 px-6 hover:bg-red-700 text-white font-medium py-3 rounded-full flex items-center btnHover'>
                                <FaUser className='text-md' />
                                <span className='mx-2'>Login</span>    
                            </button>
                        </div>
                    </div>
                    
            </header>

            {mobileMenuOpen && (
                <div className="lg:hidden bg-white text-black p-6 absolute top-28 left-0 w-full h-screen z-40">
                    <ul className="flex flex-col gap-6 text-md font-medium">
                        {["Home", "About Us", "What We Do", "Latest", "FAQs", "Reach Us"].map((item, i) => (
                            <li key={i}><a href="#">{item}</a></li>
                        ))}
                    </ul>
                </div>
            )}

            <Dialog className="custom-dialog bg-white rounded-md" visible={visible} onHide={() => setVisible(false)}>
                {authMode === "login" ? (
                    <div className="flex items-center justify-center pb-04 px-2 shadow-lg">
                        <div className="bg-white rounded-lg lg:p-8 p-4 pt-0 w-full max-w-md card">
                            <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
                            <div>
                                <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-700">
                                    Email<span className='text-red-600 text-lg'>*</span>
                                </label>
                                <input type="email" name="email" placeholder='Enter email' className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" value={formData.email} onChange={handleChange} required />
                            </div>
                            <div className='mt-4'>
                                <label htmlFor="password" className="block mb-1 text-sm font-medium text-gray-700">
                                    Password<span className='text-red-600 text-lg'>*</span>
                                </label>
                                <div className='relative'>
                                    <input type={showPassword ? "text" : "password"} placeholder='Enter password' name="password" className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" value={formData.password} onChange={handleChange} required />
                                    <span className='absolute -translate-y-1/2 btnHover' onClick={passwordToggle} style={{ top: "50%", right: "10px" }}>{showPassword ? <FaEye /> : <IoMdEyeOff />}</span>
                                </div>
                            </div>
                            <button className="bg-red-600 btnHover hover:bg-red-700 w-full mt-6 text-white font-medium py-3 px-4 rounded-full">
                                Sign In
                            </button>
                            <p className="mt-4 text-sm text-center text-gray-600 flex justify-center gap-1">
                                Don't have an account? <span className="text-blue-600 hover:underline cursor-pointer" onClick={showSignup}>Sign up</span>
                            </p>
                        </div>
                    </div>
                ) : (
                    <div className="flex items-center justify-center pb-04 px-2 shadow-lg">
                        <div className="bg-white rounded-lg lg:p-8 p-4 pt-0 w-full max-w-md card">
                            <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
                            <div>
                                <label className="block mb-1 text-sm font-medium text-gray-700">Enter Name<span className='text-red-600 text-lg'>*</span></label>
                                <input type="text" placeholder='Enter name' className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                            </div>
                            <div className='mt-2'>
                                <label className="block mb-1 text-sm font-medium text-gray-700">Enter Email<span className='text-red-600 text-lg'>*</span></label>
                                <input type="email" placeholder='Enter email' className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                            </div>
                            <div className='mt-2'>
                                <label className="block mb-1 text-sm font-medium text-gray-700">Enter Phone<span className='text-red-600 text-lg'>*</span></label>
                                <input type="text" placeholder='Enter phone' className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                            </div>
                            <div className='mt-2'>
                                <label className="block mb-1 text-sm font-medium text-gray-700">Password<span className='text-red-600 text-lg'>*</span></label>
                                <div className='relative'>
                                    <input type={showPassword ? "text" : "password"} placeholder='Enter password' className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                                    <span className='absolute -translate-y-1/2 btnHover' onClick={passwordToggle} style={{ top: "50%", right: "10px" }}>{showPassword ? <FaEye /> : <IoMdEyeOff />}</span>
                                </div>
                            </div>
                            <div className='mt-2'>
                                <label className="block mb-1 text-sm font-medium text-gray-700">Confirm Password<span className='text-red-600 text-lg'>*</span></label>
                                <div className='relative'>
                                    <input type={showPassword ? "text" : "password"} placeholder='Confirm password' className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                                    <span className='absolute -translate-y-1/2 btnHover' onClick={passwordToggle} style={{ top: "50%", right: "10px" }}>{showPassword ? <FaEye /> : <IoMdEyeOff />}</span>
                                </div>
                            </div>
                            <button className="bg-red-600 btnHover hover:bg-red-700 w-full mt-4 text-white font-medium py-3 px-4 rounded-full">
                                Sign Up
                            </button>
                            <p className="mt-4 text-sm text-center text-gray-600 flex gap-1 justify-center">
                                Already have an account? <span className="text-blue-600 hover:underline cursor-pointer" onClick={showLoginPage}>Sign In</span>
                            </p>
                        </div>
                    </div>
                )}
            </Dialog>

            {/* Banner Section */}
            <div className="bannerSection relative w-full">
                <div className="bannerImage hidden lg:block w-full h-full">
                    <img src="/Images/banner.png" alt="banner" className="w-full h-full object-cover" />
                </div>
                <div className="bannerImageMob block lg:hidden w-full">
                    <img src="/Images/mobImage.png" alt="banner" className="w-full" />
                </div>
                <div className="contentWrapper absolute top-1/2 left-[20px] md:left-[80px] -translate-y-1/2 max-w-md lg:text-black">
                    <h2 className="md:text-4xl font-semibold leading-tight">Achieve</h2>
                    <h2 className="md:text-4xl font-semibold leading-tight">Financial Goal</h2>
                    <h2 className="md:text-4xl font-semibold leading-tight">
                        is <span className="text-yellow-500 font-bold">Efficiently</span>
                    </h2>
                    <p className="mt-4 text-gray-700 hidden md:block">
                        Lorem ipsum is placeholder text commonly used in the graphic.
                    </p>
                    <div className="mt-6 flex gap-4">
                        <button className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-5 rounded-full">
                            Let's talk with us
                        </button>
                        <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2 px-5 rounded-full">
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
