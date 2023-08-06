import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { change } from './events'
import { publicRequest } from '../axios/axios'
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { fetchNavItems } from '../features/navreducer/navreducer';
import { fetchProducts } from '../features/productreducer/productSlice';
// import 'react-confirm-alert/src/ReactConfirmAlert.css'
import swal from 'sweetalert'

export default function Conformation() {
    const [removeClass, setRemovableClass] = useState('info')
    const [removeClass2, setRemovableClass2] = useState('u_info')
    const handleChange = (classs, clss2) => {
        setRemovableClass(classs)
        setRemovableClass2(clss2)
        change(classs, clss2, removeClass, removeClass2)

    }
    const dispetch = useDispatch()
    const navigate = useNavigate()
    const paymentAmount = JSON.parse(localStorage.getItem('payableAmount'))
    const cartId = JSON.parse(localStorage.getItem('ADD_Cart_ID'))
    const userId = JSON.parse(localStorage.getItem('user_Data'))
    const addressId = JSON.parse(localStorage.getItem('addressId'))
    console.log(addressId.addressId)
    const placeOrder = () => {
        publicRequest.post(`orders`, {
            "userId": userId.user.userId,
            "cartId": cartId.cartId,
            "addressId": addressId.addressId,
            "orderStatusId": 1,
            "payableAmount": paymentAmount.payableAmount,
            "totalPrice": paymentAmount.payableAmount - 0,
            "transactionId": "ABCD1234",
            "discount": 0,
        }).then((res) => {
            if (res.data.status == 200) {
                localStorage.removeItem('payableAmount')
                localStorage.removeItem('ADD_Cart_ID')
                localStorage.removeItem('addressId')
                swal('Order placed success').then((val)=>{
                    dispetch(fetchProducts())
                    const re = dispetch(fetchNavItems())
                    Promise.all([re]).then((res) => {
                        publicRequest.post(`cartMaster`, { 'userId': userId.user.userId }).then((response) => {
                            const atcid = localStorage.setItem(`ADD_Cart_ID`, JSON.stringify(response?.data));
                            Promise.all([atcid]).then(() => {
                                navigate(`/`)
                            })
                        })
                    })
                })
                // confirmAlert({
                //     title: 'Order placed success',
                //     message: 'Press `ok` to return to home page.',
                //     buttons: [
                //         {
                //             label: 'ok',
                //             onClick: () => {
                //                 dispetch(fetchProducts())
                //                 const re = dispetch(fetchNavItems())
                //                 Promise.all([re]).then((res) => {
                //                     publicRequest.post(`cartMaster`, { 'userId': userId.user.userId }).then((response) => {
                //                         const atcid = localStorage.setItem(`ADD_Cart_ID`, JSON.stringify(response?.data));
                //                         Promise.all([atcid]).then(() => {
                //                             navigate(`/`)
                //                         })
                //                     })
                //                 })
                //             }
                //         }
                //     ]
                // });
            }
        })

    }
    // useEffect(() => {

    // }, [])
    return (
        <div className='w-[100%]'>
            <Navbar />
            <div className='bg-[#f7f5f7] shiping mx-auto w-[100%] md:w-[90%] h-auto mb-[50px] pb-[50px] mt-[100px]'>
                <div className='flex mx-auto flex-wrap w-[100%]'>
                    <div className='md:w-[70%] w-[100%] mt-4'>
                        <div className='w-[80%] text-base mt-3 flex mx-auto relative'>
                            <div className='cursor-pointer w-[10px] h-[10px] bg-black mt-[-4px] rounded-full border border-black'>
                                <span className='absolute mt-[5px] ml-[-50px]'>Shipping address</span>
                            </div>
                            <div className='md:w-[200px] w-[100px] border-[2px] border-b-[#f7f5f7] border-t-black'></div>
                            <div className='cursor-pointer w-[10px] bg-black h-[10px] mt-[-4px] rounded-full border border-black'>
                                <span className='absolute ml-[-16px] mt-[5px]'>Biling</span>
                            </div>
                            <div className='md:w-[200px] w-[120px] border-[2px] border-b-[#f7f5f7] border-t-black'></div>
                            <div className='w-[10px] cursor-pointer h-[10px] mt-[-4px] bg-black rounded-full border border-black'>
                                <span className='absolute text-gray-400 mt-[5px] ml-[-37px]'>Conformation</span>
                            </div>
                        </div>
                    </div>
                    <div className='md:w-[70%] w-[100%] h-auto mt-[50px]'>
                        <div className='w-[100%] h-[650px] md:h-[500px]'>
                            <div className='flex flex-wrap w-[100%] h-auto md:h-[100%]'>
                                <div className='md:w-[25%] w-[100%] h-auto md:h-[100%]'>
                                    <div className='px-4 userinfo'>
                                        <div onClick={() => handleChange('info', 'u_info')} className='u_info border md:text-[16px] active_u'>CARD PAYMENT</div>
                                        <div onClick={() => handleChange('history', 'o_history')} className='o_history border md:text-[16px]'>ÜMLAUT WALLET</div>
                                        <div onClick={() => handleChange('wallet', 'u_wallet')} className='u_wallet border md:text-[16px]'>UPI PAYMENT</div>
                                    </div>
                                </div>
                                <div className='md:w-[75%] w-[100%] relative bg-white h-auto md:h-[100%] border'>
                                    <div className='info bg-white w-[100%]  p-4 absolute activeuser'>
                                        <div className='pb-4 font-semibold text-sm md:text-lg'>
                                            <div className='text-[#212529]'>Credit / Debit card</div>
                                        </div>
                                        <div className='w-[95%] mx-auto p-2'>
                                            <div>
                                                <label htmlFor="">Card Number :</label>
                                            </div>
                                            <div className='w-[100%]'>
                                                <input type="text"
                                                    placeholder='1225 3262 1144 0359'
                                                    className='w-[100%] p-2 bg-[rgba(238,238,238,1)] h-[40px]' />
                                            </div>
                                        </div>
                                        <div className='w-[95%] mx-auto p-2'>
                                            <div>
                                                <label htmlFor="">Name as on Card :</label>
                                            </div>
                                            <div className='w-[100%]'>
                                                <input type="text"
                                                    placeholder='Rabilal Murmu'
                                                    className='w-[100%] p-2 bg-[rgba(238,238,238,1)] h-[40px]' />
                                            </div>
                                        </div>
                                        <div className='w-[95%] mx-auto p-2 flex justify-around'>
                                            <div className='w-[60%]'>
                                                <div>
                                                    <label htmlFor="">Expiration Date :</label>
                                                </div>
                                                <div className='w-[100%]'>
                                                    <input type="text"
                                                        placeholder='07/2023'
                                                        className='w-[100%] p-2 bg-[rgba(238,238,238,1)] h-[40px]' />
                                                </div>
                                            </div>
                                            <div className='w-[35%]'>
                                                <div>
                                                    <label htmlFor="">CVC Code :</label>
                                                </div>
                                                <div className='w-[100%]'>
                                                    <input type="text"
                                                        placeholder='****'
                                                        className='w-[100%] p-2 bg-[rgba(238,238,238,1)] h-[40px]' />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='w-[95%] mx-auto p-3 text-white'>
                                            <button
                                                onClick={placeOrder}
                                                className='py-3 px-4 bg-[rgb(2,189,168,1)] rounded-full'>MAKE PAYMENT</button>
                                        </div>
                                    </div>
                                    <div className='history w-[100%] bg-white p-4 absolute'>
                                        <div className='pb-4 font-semibold text-2xl md:text-4xl'>
                                            <div>ÜMLAUT WALLET</div>
                                        </div>


                                    </div>
                                    <div className='wallet bg-white  p-4 absolute'>
                                        <div className='pb-4 font-semibold text-2xl md:text-4xl'>
                                            <div>UPI PAYMENT</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className='w-[80%] mx-auto md:w-[100%] bg-white border border-black border-dashed my-4 py-3'>
                            <button className='ml-[20px] font-medium'>
                                + ADD PAYMENT METHOD
                            </button>
                        </div> */}
                    </div>
                    <div className='md:w-[30%] w-[100%] my-4'>
                        <div className='w-[100%] mt-[72px]'>
                            <div className='text-lg w-[90%] mx-4 my-4 bg-white px-4 py-2 '>Estimate Delivery by 9 June 2023</div>
                            <div className='mx-4 bg-white w-[90%] p-5'>
                                <div className='text-sm flex justify-between'>
                                    <div>Sub total :</div>
                                    <div> ₹ {paymentAmount.payableAmount}</div>
                                </div>
                                <di className='text-sm flex justify-between' v>
                                    <div>Discount amount :</div>
                                    <div> ₹ -0</div>
                                </di>
                                <div className='text-sm flex justify-between'>
                                    <div>Total Amount :</div>
                                    <div> ₹ {paymentAmount.payableAmount}</div>
                                </div>
                                <hr className='w-[100%] mx-auto my-4'></hr>
                                <div className='text-lg flex justify-between'>
                                    <div className='font-semibold'>Total Amount :</div>
                                    <div className='font-semibold'>₹ {paymentAmount.payableAmount}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
