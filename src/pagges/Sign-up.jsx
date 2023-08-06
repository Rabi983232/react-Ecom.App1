import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import img1 from '../assets/iamges/signup-img.jpg'
import { Link, useNavigate } from 'react-router-dom'
import { checkUserData } from './events'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { publicRequest } from '../axios/axios'
import swal from 'sweetalert';


export default function Sign_up() {
    const navigate = useNavigate()
    const [userData, setUserData] = useState({
        firstName: '',
        lastName: '',
        emailId: '',
        password: '',
        confirmPassword: '',
        phoneNumber: '',
        subscribe: true
    })
    const handleSignup = () => {
        const res = checkUserData(userData)
        Promise.all([res]).then((res) => {
            if (res[0].status == '417') {
                toast.error(res[0].massage, { theme: "colored" })
            }
            if (res[0].status == '200') {
                publicRequest.post(`users`, userData)
                    .then((res) => {
                        if (res.data.status == '200') {
                            swal("Good job!",'your registered successfully', "success");
                            // toast.success(res.data.msg, { theme: "colored", position: "top-left" })
                        }
                        if (res.data.status == '400') {
                            swal("Opps!",res.data.msg, "info").then(()=>{
                                navigate('/login');
                            })
                        }
                    })
            }
        })
    }
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUserData((prev) => {
            return {
                ...prev, [name]: value
            }
        })
    }
    return (
        <div className='w-[100%]'>
            <Navbar />
            <div className='w-[100%] h-auto flex my-[50px] place-content-center'>
                <div className='w-[90%] h-auto '>
                    <div className=' w-[100%] shadow-[5px_5px_35px_35px_rgb(0,0,0,0.15)] h-auto flex flex-wrap-reverse justify-around'>
                        <div className='w-[90%] mx-auto md:w-[60%] h-auto'>
                            <div className='p-4 text-4xl font-semibold'>
                                <div className='text-center'>
                                    Sign Up
                                </div>
                            </div>
                            <div className='flex w-[100%] justify-around flex-wrap'>
                                <div className='md:w-[49%] w-[100%] px-2'>
                                    <div className='text-xl font-semibold pt-4 pb-2 text-gray-500'>
                                        <label htmlFor="firstName">First Name</label>
                                    </div>
                                    <div>
                                        <input
                                            name='firstName'
                                            onChange={handleChange}
                                            value={userData.firstName}
                                            className='w-[100%] bg-[#eee] p-2 h-[50px]' type="text" placeholder=' Joshi' />
                                    </div>
                                </div>
                                <div className='md:w-[49%] w-[100%] px-2'>
                                    <div className='text-xl font-semibold pb-2 pt-4 text-gray-500'>
                                        <label htmlFor="lasttName">Last Name</label>
                                    </div>
                                    <div>
                                        <input
                                            name='lastName'
                                            onChange={handleChange}
                                            value={userData.lastName}
                                            className='w-[100%] bg-[#eee] p-2 h-[50px]'
                                            type="text" placeholder='Joshi' />
                                    </div>
                                </div>
                            </div>
                            <div className='flex w-[100%] justify-around flex-wrap'>
                                <div className='md:w-[49%] w-[100%] px-2'>
                                    <div className='text-xl font-semibold pt-4 pb-2 text-gray-500'>
                                        <label htmlFor="emailId">E-mail ID</label>
                                    </div>
                                    <div>
                                        <input
                                            name='emailId'
                                            onChange={handleChange}
                                            value={userData.emailId}
                                            className='w-[100%] bg-[#eee] p-2 h-[50px]' type="text" placeholder='example@gmail.com' />
                                    </div>
                                </div>
                                <div className='md:w-[49%] w-[100%] px-2'>
                                    <div className='text-xl font-semibold pt-4 pb-2 text-gray-500'>
                                        <label htmlFor="phoneNumber">Mobile No.</label>
                                    </div>
                                    <div className='flex w-[100%]'>
                                        <div className='py-3 bg-[#eee]'>
                                            <select className='bg-transparent' >
                                                <option value="">+91</option>
                                            </select>
                                        </div>
                                        <div className='w-[98%]'>
                                            <input
                                                name='phoneNumber'
                                                onChange={handleChange}
                                                value={userData.phoneNumber}
                                                className='w-[100%] bg-[#eee] p-2 h-[50px]' type="text" placeholder='1234569870' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex w-[100%] justify-around flex-wrap'>
                                <div className='md:w-[49%] w-[100%] px-2'>
                                    <div className='text-xl font-semibold pt-8 pb-2 text-gray-500'>
                                        <label htmlFor="password">Password </label>
                                    </div>
                                    <div>
                                        <input
                                            name='password'
                                            onChange={handleChange}
                                            value={userData.password}
                                            className='w-[100%] bg-[#eee] p-2 h-[50px]' type="password" placeholder='##########' />
                                    </div>
                                </div>
                                <div className='md:w-[49%] w-[100%] px-2'>
                                    <div className='text-xl font-semibold pt-8 pb-2 text-gray-500'>
                                        <label htmlFor="confirmPassword">Confirm Password</label>
                                    </div>
                                    <div>
                                        <input
                                            name='confirmPassword'
                                            onChange={handleChange}
                                            value={userData.confirmPassword}
                                            className='w-[100%] bg-[#eee] p-2 h-[50px]' type="text" placeholder='##########' />
                                    </div>
                                </div>
                            </div>
                            <div className='py-8 text-center text-white'>
                                <button
                                    onClick={handleSignup}
                                    className='md:w-[250px] w-[200px] border rounded-full p-4 text-xl bg-[rgba(21,39,66,1)] font-semibold'>Sign Up</button>
                            </div>
                            <div>
                                <div className='text-center mt-[-25px] font-semibold p-[1px]'>Or Register Using</div>
                            </div>
                            <div className='text-center w-[100%]'>
                                <div className='flex flex-wrap place-content-center'>
                                    <div className='m-2'>
                                        <button className='border rounded-full border-[#146dd9] hover:text-white px-12 hover:bg-[#146dd9]'>
                                            <div className='flex'>
                                                <div>
                                                    <img className='w-[30px] m-2' src="https://img.icons8.com/?size=1x&id=17949&format=png" alt="" />
                                                </div>
                                                <div className='p-2 text-lg'>Google</div>
                                            </div>
                                        </button>
                                    </div>
                                    <div className='m-2'>
                                        <button className='border hover:text-white border-[#146dd9] rounded-full px-10 hover:bg-[#146dd9]'>
                                            <div className='flex'>
                                                <div>
                                                    <img className='w-[30px] m-2' src="https://img.icons8.com/?size=1x&id=118497&format=png" alt="" />
                                                </div>
                                                <div className='p-2 text-lg'>Facebook</div>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                                <div>
                                    <div className='p-4'>Already have an account?</div>
                                </div>
                                <div className='mb-4'>
                                    <Link to={`/login`}>
                                        <button className='border rounded-full px-20 hover:bg-white hover:text-black hover:border-[#146dd9] text-white bg-[#146dd9]'>
                                            <div className='flex'>
                                                <div className='p-2 text-lg'>Login</div>
                                            </div>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className='md:w-[40%] p-2 w-[100%] mx-auto h-[100%]'>
                            <img className='w-[100%] h-auto' src={img1} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            <ToastContainer position="top-left" theme="colored" />
        </div>
    )
}
