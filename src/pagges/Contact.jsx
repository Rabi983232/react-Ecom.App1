import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import { FiMail } from "react-icons/fi";
import { FiLock } from "react-icons/fi";
import { FiPhoneCall } from "react-icons/fi";
import { FiMapPin } from "react-icons/fi";
import { Link } from 'react-router-dom';
export default function Contact() {
    return (
        <div className='w-[100%]'>
            <Navbar />
            <div>
                <div className='w-[95%] mx-auto mb-[50px] p-4'>
                    <Link to={`/`}>Home</Link>
                    <span className='text-black p-3'>|</span>Contact Us
                </div>
            </div>
            <div className='mb-[50px]'>
                <div className='w-[100%] mx-auto h-auto flex flex-wrap justify-around'>
                    <div className='md:w-[40%] bg-[#eeeeee] w-[85%] h-auto mx-4 rounded-l-2xl'>
                        <div className='p-4 '>
                            <div className='md:py-8'>
                                <div className='p-4 text-3xl text-gray-500 font-bold'>Other ways to connect</div>
                                <div className='p-4 text-gray-500'>
                                    We' love to hear from you, Our friendly team is here to chat
                                </div>
                                <div className='py-[20px]'>
                                    <div className='flex'>
                                        <div className='px-4 py-2 font-bold'>
                                            <FiMail size={20} />
                                        </div>
                                        <div className='text-gray-500 font-bold p-1 text-xl'>Reach us on Email</div>
                                    </div>
                                    <div className='px-8'>
                                        <div className='px-4'>
                                            <div className='text-gray-500 py-2'>Our friendly team is here to help</div>
                                            <div className='font-bold underline'>support@a2rcreative.in</div>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className='py-[20px]'>
                                    <div className='flex'>
                                        <div className='px-4 py-2 font-bold'>
                                            <FiLock />
                                        </div>
                                        <div className='text-gray-500 font-bold p-1 text-xl'>For Careers</div>
                                    </div>
                                    <div className='px-8'>
                                        <div className='px-4'>
                                            <div className='text-gray-500 py-2'>Send Your resume on</div>
                                            <div className='font-bold underline'>Careers@yourmail.com</div>
                                        </div>
                                    </div>
                                </div> */}
                                <div className='py-[20px]'>
                                    <div className='flex'>
                                        <div className='px-4 py-2 font-bold'>
                                            <FiPhoneCall />
                                        </div>
                                        <div className='text-gray-500 font-bold p-1 text-xl'>Phone</div>
                                    </div>
                                    <div className='px-8'>
                                        <div className='px-4'>
                                            <div className='text-gray-500 py-2'>Mon-Sat from 8am to 9pm</div>
                                            <div className='font-bold underline'>+91 7406000938</div>
                                            {/* <div className='font-bold underline'>+91 9988373626</div> */}
                                        </div>
                                    </div>
                                </div>
                                <div className='py-[20px]'>
                                    <div className='flex'>
                                        <div className='px-4 py-2 font-bold'>
                                            <FiMapPin />
                                        </div>
                                        <div className='text-gray-500 font-bold p-1 text-xl'>Office</div>
                                    </div>
                                    <div className='px-8'>
                                        <div className='px-4'>
                                            <div className='text-gray-500 py-2'>Come say hello at our office</div>
                                            <div className='font-bold underline'>A2R Creative,<br /> 11, 3rd Floor, Astitva Building, <br />Railway Parallel Rd,<br /> Nehru Nagar, <br />Seshadripuram, <br />Bengaluru, <br />Karnataka - 560020</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='md:w-[55%] w-[90%] h-auto rounded-l'>
                        <div className='mb-[30px] md:ml-[50px] w-[75%] md:w-[55%]'>
                            <div>
                                <div className='md:text-4xl pt-[50px] text-[24px] font-bold'>
                                    <div>
                                        Love to hear from you, Getin touch <span className='px-2'>👋</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='relative'>
                            <div className='flex flex-wrap justify-between w-[90%] h-auto mx-auto'>
                                <div className='md:w-[50%] w-[100%]'>
                                    <div className='p-8 w-[100%]'>
                                        <div className='text-xl font-semibold text-gray-500'>
                                            <label htmlFor="name">Your Name</label>
                                        </div>
                                        <div >
                                            <input className='w-[90%] bg-[#eee] p-2 h-[50px]' type="text" />
                                        </div>
                                    </div>
                                    <div className='p-8 w-[100%]'>
                                        <div className='text-xl font-semibold text-gray-500'>
                                            <label htmlFor="name">Phone No.</label>
                                        </div>
                                        <div className='flex w-[90%]'>
                                            <div className='p-3 bg-[#eee]'>+91</div>
                                            <div className='w-[97%]'>
                                                <input className='w-[99%] bg-[#eee] p-2 h-[50px]' type="text" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='md:w-[50%] w-[100%]'>
                                    <div className='p-8 w-[100%]'>
                                        <div className='text-xl font-semibold text-gray-500'>
                                            <label htmlFor="name">Your Email</label>
                                        </div>
                                        <div >
                                            <input className='w-[90%] bg-[#eee] p-2 h-[50px]' type="text" />
                                        </div>
                                    </div>
                                    <div className='p-8 w-[100%]'>
                                        <div className='text-xl font-semibold text-gray-500'>
                                            <label htmlFor="name">What you are interested</label>
                                        </div>
                                        <div >
                                            <input className='w-[90%] bg-[#eee] p-2 h-[50px]' type="text" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='px-8 mb-[10px]'>
                                <div className='p-8'>
                                    <div className='text-xl font-semibold text-gray-500'>
                                        <label htmlFor="massage">Message</label>
                                    </div>
                                    <div>
                                        <textarea className='md:w-[80%] rounded w-[90%] p-4 bg-[#eee]'
                                            name="" id="" cols="30" rows="5"></textarea>
                                    </div>
                                </div>
                            </div>
                            <div className='p-8 mb-[30px]'>
                                <button className='mx-8 bg-[#02082f] text-white hover:bg-indigo-300 w-[200px] border p-4 rounded-full'>Send Massage</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
