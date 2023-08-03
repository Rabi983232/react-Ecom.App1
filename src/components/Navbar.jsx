import React, { useState, useEffect } from 'react'
import './nav.css'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { FaUserAlt } from "react-icons/fa";
import { BsCartFill } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux'
import { Toggle } from '../pagges/events';
import { fetchNavItems } from '../features/navreducer/navreducer';
import { fetchProductsByCategory, fetchProducts } from '../features/productreducer/productSlice';
import { fetchFilterData } from '../features/filter/filterReducer';
import { fetchCartItems } from '../features/cart/cartReducer';
import { fetchAddress } from '../features/address/address';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetchOrderedLists } from '../features/orderList/orderListReducer';
import { publicRequest } from '../axios/axios';


export default function Navbar() {
    // const location = useLocation();
    // const path = location.pathname.split('/')
    const [cartItems, setCallCart] = useState(0)
    const [isLogout, setisLogout] = useState(false)
    const data = useSelector(state => state.navItems.items)
    const dispetch = useDispatch()
    const navigate = useNavigate()
    const [catId, setcatId] = useState()
    const logout = () => {
        setisLogout(true)
        localStorage.removeItem("user_Data")
        localStorage.removeItem("ADD_Cart_ID")
        localStorage.removeItem("productData")
        localStorage.removeItem("addToCart")
        localStorage.removeItem("user_Data")
        localStorage.removeItem("cartData")
        navigate(`/`)
    }
    const ADD_Cart_ID = JSON.parse(localStorage.getItem(`ADD_Cart_ID`))
    const userInfo = JSON.parse(localStorage.getItem(`user_Data`))
    useEffect(() => {
        console.log(`Logout`)
    }, [isLogout])
    const navigetTo = (id, from) => {
        if (from == 'md') {
            setcatId(id)
            dispetch(fetchFilterData(id))
            dispetch(fetchProductsByCategory(id))
            const re = dispetch(fetchNavItems())
            Promise.all([re]).then((res) => {
                navigate(`/category/${id}`)
            })
        }
        if (from == 'hm') {
            dispetch(fetchProducts())
            const re = dispetch(fetchNavItems())
            Promise.all([re]).then((res) => {
                navigate(`/`)
            })
        }
        if (from == 'login') {
            const re = dispetch(fetchNavItems())
            Promise.all([re]).then((res) => {
                navigate(`/login`)
                Toggle('add')
            })
        }
        if (from == 'cart') {
            const userInfo = JSON.parse(localStorage.getItem(`user_Data`))
            const ADD_Cart_ID = JSON.parse(localStorage.getItem(`ADD_Cart_ID`))
            if (userInfo) {
                const re = dispetch(fetchNavItems())
                Promise.all([re]).then((res) => {
                    dispetch(fetchCartItems(ADD_Cart_ID.cartId)).then(
                        navigate(`/cart`)
                    )
                    //
                    Toggle('add')
                })
            } else {
                toast.warning('Login first then came to cart', { theme: "colored", position: "top-right" })
            }

        }
        if (from == 'sm') {
            setcatId(id)
            dispetch(fetchFilterData(id))
            dispetch(fetchProductsByCategory(id))
            const re = dispetch(fetchNavItems())
            Promise.all([re]).then((res) => {
                navigate(`/category/${id}`)
                Toggle('add')
            })
        }
    }
    useEffect(() => {
        if (ADD_Cart_ID) {
            dispetch(fetchCartItems(ADD_Cart_ID.cartId)).then((res)=>{
                console.log(res.payload.length)
            })
            // publicRequest.post(`carts/getCartItems`, {
            //     "cartId": ADD_Cart_ID.cartId
            // }).then((re) => {
            //     if (re.data.status == 200) {
            //         setCallCart(re.data.data.length)
            //     }
            // })

        }
    }, [dispetch])
    const openProfile = () => {
        dispetch(fetchAddress(userInfo.user.userId))
        dispetch(fetchOrderedLists(userInfo.user.userId))
        const re = dispetch(fetchNavItems())
        Promise.all([re]).then((res) => {
            navigate(`/userinfo`)
        })
    }
    const cartCount = useSelector(state => state.cartItems)
    useEffect(()=>{
        setCallCart(cartCount.items.length)
    },[cartCount])
    return (
        <>
            <div className="w-100 h-[10px] flex justify-between bg-black">
                <div className='w-[50%] h-[100%] text-right pt-[10px] text-xl pr-[8px] text-white'>

                </div>
                <span className='text-white my-2 font-semibold text-xl'>|</span>
                <div className='w-[50%] h-[100%] text-left pt-[10px] text-xl pl-[8px] text-white'>

                </div>
            </div>
            <div id='top' className='w-[100%] h-auto bg-[#f7f5f7]'>
                <nav className='w-[90%] mx-auto h-[auto] bg-[#f7f5f7] flex flex-wrap relative md:justify-evenly'>
                    <div className="logo text-3xl cursor-pointer p-3 font-[1000]">
                        <a
                            onClick={() => navigetTo('item.mainCategoryId', 'hm')}
                        >ÜMLAUT</a>
                    </div>
                    <div className='flex justify-between'>
                        <ul className='Mobile my-ul z-30 hidden absolute right-[0px]  h-[100vh] md:bg-transparent bg-[white] w-[100%] md:w-auto md:h-auto p-3 md:py-3 md:text-base md:relative md:flex space-x-5'>
                            <div className='md:hidden text-bold float-right'>
                                <button
                                    onClick={() => Toggle('add')}
                                    className='border p-2 rounded-full'>&#9932;</button>
                            </div>
                            {
                                data.map((item) => {
                                    return (
                                        <>
                                            <li
                                                onClick={() => navigetTo(item.mainCategoryId, 'md')}
                                                className='hidden md:block md:hover:text-[orange]'>
                                                {item.productCategoryName}
                                            </li>
                                            <li
                                                onClick={() => navigetTo(item.mainCategoryId, 'sm')}
                                                className='md:hidden block md:hover:text-[orange]'>{item.productCategoryName}</li>
                                        </>
                                    )
                                })
                            }
                            <li>
                                <div className='block md:hidden mt-5 left-[10px] '>
                                    <div className="flex">
                                        <b
                                            onClick={() => navigetTo('item.mainCategoryId', 'login')}
                                            className='text-sm px-1 flex cursor-pointer' >
                                            <FaUserAlt className='mx-1' />
                                            {
                                                userInfo ? (
                                                    <span className=''>{userInfo?.user?.firstName}</span>
                                                ) : (
                                                    <span className=''>Sign In</span>
                                                )
                                            }

                                        </b>
                                        <b
                                            onClick={() => navigetTo('item.mainCategoryId', 'cart')}
                                            className='text-sm px-1 flex cursor-pointer'>
                                            <BsCartFill className='mx-1' />
                                            <span>Cart</span>
                                        </b>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <div className='flex md:hidden place-content-center w-[170px]'>
                            <div className='md:hidden absolute right-1 py-3 cursor-pointer text-2xl'>
                                <button onClick={() => Toggle('remove')}>&#9776;</button>
                            </div>
                        </div>
                    </div>
                    <div className='hidden md:flex md:my-4 md:ml-0 ml-[40px] rounded-2xl bg-white w-[250px] border h-9 md:h-[30px] m-2'>
                        <div>
                            <input className='md:my-0 m-1 px-2 text-sm outline-none w-[200px]' type="text" placeholder='search......' />
                        </div>
                        <div className='p-2 md:p-1 md:pl-[10px]'>
                            <AiOutlineSearch className='cursor-pointer' size={25} />
                        </div>
                    </div>
                    <div className='hidden md:block my-3 p-2'>
                        <div className="flex">

                            {
                                userInfo ? (
                                    <b
                                        className='logout text-sm px-2 relative' >
                                        <div className='flex cursor-pointer'>
                                            <FaUserAlt className='mx-2' />
                                            <span className=''>{userInfo?.user?.firstName}</span>
                                        </div>
                                        <div className='logoutbtn w-[300px] border'>
                                            <div className='w-[100%] p-3'>
                                                <button
                                                    onClick={openProfile}
                                                    className='px-6 py-2 text-lg block'>Profile</button>
                                                <button
                                                    onClick={logout}
                                                    className='px-6 py-2 text-red-500 text-lg block'>logout</button>
                                            </div>
                                        </div>
                                    </b>
                                ) : (
                                    <b onClick={() => navigetTo('item.mainCategoryId', 'login')}
                                        className='text-sm px-2 flex cursor-pointer' >
                                        <FaUserAlt className='mx-2' />
                                        <span className=''>Sign In</span>
                                    </b>
                                )
                            }

                            <b
                                onClick={() => navigetTo('item.mainCategoryId', 'cart')}
                                className='text-sm px-2 flex cursor-pointer relative'>
                                <BsCartFill size={25} className='mx-2' />
                                <span className='countCartItem'>{cartItems}</span>
                                <span>Cart</span>
                            </b>
                        </div>
                    </div>
                </nav>
                <ToastContainer position="top-left" theme="colored" />
            </div>
        </>
    )
}
