import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import proIMG from '../assets/iamges/orderHistory.jpg'
import Footer from '../components/Footer'
import { change } from './events'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchNavItems } from '../features/navreducer/navreducer'
import { fetchOrderedLists } from '../features/orderList/orderListReducer';
// import { ProgressBar } from 'react-toastify/dist/components'


export default function Userinfo() {
    const [show, setShow] = useState('hidden')
    const dispetch = useDispatch()
    const [removeClass, setRemovableClass] = useState('info')
    const [removeClass2, setRemovableClass2] = useState('u_info')
    const userInfo = JSON.parse(localStorage.getItem(`user_Data`))
    const handleChange = (classs, clss2) => {
        setRemovableClass(classs)
        setRemovableClass2(clss2)
        change(classs, clss2, removeClass, removeClass2)

    }
    useEffect(() => {
        dispetch(fetchOrderedLists(userInfo.user.userId))
        dispetch(fetchNavItems())
    }, [dispetch])
    const data = useSelector(state => state.navItems)
    const orderedList = useSelector(state => state.orderedLists)
    if (orderedList.isLoding == false) {
        var carT = orderedList.items.map((i) => {
            return i.orderId
        })
        console.log(orderedList.items)
        console.log(data)
    }

    return (
        <>
            <div onClick={() => setShow('hidden')} className={`w-[100vw] ${show} h-[100%] fixed bg-[rgba(0,0,0,0.5)] z-[1000]`}>
                <div className='w-[100%] h-[100%] relative'>
                    <div className='centered-element2 trackOrder flex justify-around'>
                        <div className='w-[50%] block h-auto py-10'>
                            <div className='w-[15px] h-[15px] rounded-full bg-[rgb(30,239,110)] border relative mx-5'>
                                <div className='absolute ml-[15px] w-[500px] mt-[-10px] h-[130px] '>
                                    <div className='px-2 py-1 text-xl font-[530]'>Order Confirmed</div>
                                    <div className='px-2 text-lg'>Your Order has been placed.</div>
                                    <div className='px-4 text-sm text-gray-500'>Mon  28Jul 23 10:45am</div>
                                </div>
                            </div>
                            <div className='h-[200px] mx-6 w-[5px]'>
                                <div className='pograss-bar'></div>
                            </div>
                            <div className='w-[15px] h-[15px] rounded-full bg-[rgb(30,239,110)] border relative mx-5'>
                                <div className='absolute ml-[15px] w-[500px] mt-[-10px] h-[130px] '>
                                    <div className='px-2 py-1 text-xl font-[530]'>Order Confirmed</div>
                                    <div className='px-2 text-lg'>Your Order has been placed.</div>
                                    <div className='px-4 text-sm text-gray-500'>Mon  28Jul 23 10:45am</div>
                                </div>
                            </div>
                            <div className='h-[200px] mx-6 w-[5px]'>
                                <div className='pogras-bar'></div>
                            </div>
                            <div className='w-[15px] h-[15px] rounded-full bg-[rgb(30,239,110)] border relative mx-5'>
                                <div className='absolute ml-[15px] w-[500px] mt-[-10px] h-[130px] '>
                                    <div className='px-2 py-1 text-xl font-[530]'>Order Confirmed</div>
                                    <div className='px-2 text-lg'>Your Order has been placed.</div>
                                    <div className='px-4 text-sm text-gray-500'>Mon  28Jul 23 10:45am</div>
                                </div>
                            </div>
                        </div>
                        <div className='w-[45%] h-[100%]'>
                            <div className='w-[70%] h-[70%] mt-[40px]'>
                                <img className='w-[100%] h-[100%]' src={`https://s3.ap-south-1.amazonaws.com/cdn.creativeswag.in/Product+Images/Essentials/Raincoat/ESNTL_RC_MFLRC_SLD_BLK.jpg`} alt="" srcset="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {
                orderedList.isLoding == false ? (
                    <div>
                        {
                            data.isLoding == false ? (<Navbar />) : (null)
                        }
                        <div className='w-[100%] py-[50px] bg-[#f7f5f7]'>
                            {/* <div className='w-[100%]'> */}
                            {/* <div className='w-[70%] mx-auto mb-[50px] p-0'>
                                    <Link to={`/`}>Home</Link> <span className='text-black p-3'>|</span><button>User Informations</button>
                                </div> */}

                            {/* 
                                <div className='w-[100%] mx-auto p-4'>
                                    <b Link to={`/`} className='cursor-pointer'>Home</b>
                                    <span className='text-black p-3'>|</span>User Informations
                                </div> */}
                            {/* </div> */}
                            <div className='w-[100%] h-auto'>
                                <div className='w-[90%] md:w-[90%] mx-auto h-[650px] overflow-auto md:h-[500px] border'>
                                    <div className='flex flex-wrap w-[100%] h-auto md:h-[100%]'>
                                        <div className='md:w-[25%] drop-shadow-xl w-[100%] h-auto md:h-[100%]'>
                                            <div className='p-4 userinfo'>
                                                <div onClick={() => handleChange('info', 'u_info')} className='u_info border md:text-[16px] active_u'>User Information</div>
                                                <div onClick={() => handleChange('history', 'o_history')} className='o_history border md:text-[16px]'>Order History</div>
                                                <div onClick={() => handleChange('wallet', 'u_wallet')} className='u_wallet border md:text-[16px]'>ÜMLAUT Wallet</div>
                                            </div>
                                        </div>
                                        <div className='md:w-[75%] w-[100%] relative bg-white h-auto md:h-[100%] border'>
                                            <div className='info w-[100%] bg-white  p-4 absolute activeuser'>
                                                <div className='pb-4 font-semibold text-2xl md:text-2xl'>
                                                    <div>User Information</div>
                                                </div>
                                                <div className='p-4 border-[3px] rounded border-gray-700'>
                                                    <div className='p-2 text-sm md:text-xl'>
                                                        <div>Name : {userInfo.user.firstName} {userInfo.user.lastName}</div>
                                                    </div>
                                                    <div className='p-2 text-sm md:text-2xl'>
                                                        <div>Phone Number : {userInfo.user.phoneNumber}</div>
                                                    </div>
                                                    <div className='flex'>
                                                        <div className='p-2 text-sm md:text-xl'>Address:</div>
                                                        <div className='p-2 text-sm md:text-xl'>
                                                            { }
                                                        </div>
                                                    </div>
                                                    <div className='flex flex-wrap justify-between'>
                                                        <div className='flex p-2'>
                                                            <div className='p-2 text-sm md:text-xl'>
                                                                Password :
                                                            </div>
                                                            <div className='p-2 text-sm md:text-xl'>*************</div>
                                                        </div>
                                                        <div>
                                                            <div className='md:p-8 p-2 text-sm md:text-xl'>
                                                                <button className='cusor-pointer underline font-semibold'>Change Pasword</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='p-4 text-white'>
                                                        <button className='p-4 border bg-black rounded-full text-xs md:text-xl px-6'>EDIT PROFILE</button>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className='history w-[100%] bg-white p-4 absolute'>
                                                <div className='w-[100%] '>
                                                    <div className='pb-4 font-semibold text-2xl md:text-2xl'>
                                                        <div>Order History</div>
                                                    </div>
                                                    <div className='w-[100%] md:w-[95%] mx-auto'>
                                                        <div>
                                                            {
                                                                orderedList.items.length > 0 ? (
                                                                    orderedList.items.map((i) => {

                                                                        let date = new Date(i.createdAt);

                                                                        return (
                                                                            <>
                                                                                <div key={i} className='mb-[30px]'>
                                                                                    <div className='rounded grid grid-cols-4 gap-2 border px-2'>
                                                                                        <div>
                                                                                            <div className='text-gray-500 md:text-base text-xs'>Order Id</div>
                                                                                            <div className='font-bold md:text-lg text-sm'>{i.orderId}</div>
                                                                                        </div>
                                                                                        <div>
                                                                                            <div className='text-gray-500 md:text-base text-xs'>Date of placement</div>
                                                                                            {/* <div className='font-bold md:text-lg text-sm'>{i.createdAt}</div> */}
                                                                                            <div className='font-bold md:text-lg text-sm'>{date.toLocaleDateString()}</div>
                                                                                        </div>
                                                                                        <div>
                                                                                            <div className='text-gray-500 md:text-base text-xs'>Total Amount</div>
                                                                                            <div className='font-bold md:text-lg text-sm'>₹ {i.payableAmount}</div>
                                                                                        </div>
                                                                                        <div>
                                                                                            <div className='text-gray-500 md:text-base text-xs'>Order Status</div>
                                                                                            <button
                                                                                                className='text-green-500 border border-green-400 rounded px-2 h-[32px] md:h-[25px] bg-green-100 md:mr-2'>
                                                                                                {i.orderStatus.orderStatus}
                                                                                            </button>
                                                                                        </div>
                                                                                        {/* <div className='mx-auto text-xs md:text-[15px] text-white'>
                                                                                            <button className='md:py-3 mt-3 mb-3 md:px-8 px-5 rounded-full bg-blue-500'>View Invoice</button>
                                                                                        </div> */}
                                                                                    </div>
                                                                                    <div className='grid md:grid-cols-6 grid-cols-5 border gap-[0px] md:text-base text-xs pt-2'>
                                                                                        <div className='md:col-span-2 text-center'>
                                                                                            <div className=' text-center'>Product</div>
                                                                                        </div>
                                                                                        <div className=' text-center'>
                                                                                            <div className=''>Size</div>
                                                                                        </div>
                                                                                        <div className=' text-center'>
                                                                                            <div className=''>Quantity</div>
                                                                                        </div>
                                                                                        <div className=' text-center'>
                                                                                            <div className=''>Amount</div>
                                                                                        </div>
                                                                                        {/* <div className=' text-start'>
                                                                                            <div className=''>Status</div>
                                                                                        </div> */}
                                                                                        {/* <div className='col-span-2 text-center'>
                                                                                            <div className=''>Info</div>
                                                                                        </div> */}
                                                                                    </div>

                                                                                    <div className='grid border border-t-transparent md:grid-cols-6 grid-cols-5 gap-[0px] md:text-base text-xs p-1 mt-0'>
                                                                                        {
                                                                                            i.cartMaster.carts.map((product, index) => {
                                                                                                const rowSpan = i.cartMaster.carts.length
                                                                                                return (
                                                                                                    <>

                                                                                                        <div className='md:col-span-2 text-center'>
                                                                                                            <div className='flex flex-wrap'>
                                                                                                                <div className='p-2 rounded'>
                                                                                                                    <img className='md:w-[60px] rounded w-[50px]' src={product.image} alt="" />
                                                                                                                </div>
                                                                                                                <div className='text-xs md:text-base p-2'>{product.product.productName}</div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                        <div className=' text-center'>
                                                                                                            <div className='font-bold'>{product.sizeCode}</div>
                                                                                                        </div>
                                                                                                        <div className=' text-center'>
                                                                                                            <div className='font-bold'>{product.quantity}</div>
                                                                                                        </div>
                                                                                                        <div className=' text-center'>
                                                                                                            <div className='font-bold'>₹ {product.price}</div>
                                                                                                        </div>
                                                                                                        {/* <div className='flex text-left'>
                                                                                                            <button
                                                                                                                className='text-green-500 border border-green-400 rounded px-2 h-[32px] md:h-[25px] bg-green-100 md:mr-2'>
                                                                                                                {i.statusLogs[0].notes}
                                                                                                            </button> */}
                                                                                                        {/* <div>Apr 30-2023</div> */}
                                                                                                        {/* </div> */}

                                                                                                    </>
                                                                                                )
                                                                                            })
                                                                                        }
                                                                                        <div className='float-center'>
                                                                                            <div className='mt-[55px]'>
                                                                                                <button
                                                                                                    onClick={() => setShow('block')}
                                                                                                    className='border p-2 rounded'>
                                                                                                    See All Updates
                                                                                                </button>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>

                                                                                </div>
                                                                            </>
                                                                        )
                                                                    })
                                                                ) : (
                                                                    <div>You have not Ordered anything yeat!!</div>
                                                                )

                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='wallet bg-white  p-4 absolute'>
                                                <div className='pb-4 font-semibold text-2xl md:text-2xl'>
                                                    <div>Coming Soon!</div>
                                                </div>
                                                {/* <div className='p-4 border-[3px] rounded border-gray-700'>
                                                    <div className='p-2 text-sm md:text-xl'>
                                                        <div>Name : Manish Chawla</div>
                                                    </div>
                                                    <div className='p-2 text-sm md:text-2xl'>
                                                        <div>Name : Manish Chawla</div>
                                                    </div>
                                                    <div className='flex'>
                                                        <div className='p-2 text-sm md:text-xl'>Address:</div>
                                                        <div className='p-2 text-sm md:text-xl'>
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua
                                                        </div>
                                                    </div>
                                                    <div className='flex flex-wrap justify-between'>
                                                        <div className='flex p-2'>
                                                            <div className='p-2 text-sm md:text-xl'>
                                                                Password :
                                                            </div>
                                                            <div className='p-2 text-sm md:text-xl'>*************</div>
                                                        </div>
                                                        <div>
                                                            <div className='md:p-8 p-2 text-sm md:text-xl '>
                                                                <button className='cusor-pointer underline font-semibold'>Change Pasword</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='p-4 text-white'>
                                                        <button className='p-4 border bg-black rounded-full  text-xs md:text-xl px-6'>EDIT PROFILE</button>
                                                    </div>
                                                </div> */}

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Footer />
                    </div>
                ) : (null)
            }

        </>

    )
}
