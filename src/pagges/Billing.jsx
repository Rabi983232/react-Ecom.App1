import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CartProducts from '../components/CartProducts'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCartItems } from '../features/cart/cartReducer'
import { fetchNavItems } from '../features/navreducer/navreducer';
import { RingLoader } from 'react-spinners';
import emtyCartImage from '../assets/iamges/cart1.png'

export default function Billing() {
    const [reRender, setReRender] = useState(false)
    const dispatch = useDispatch()
    // 
    const cart_id = JSON.parse(localStorage.getItem(`ADD_Cart_ID`))
    useEffect(() => {
        dispatch(fetchNavItems())
        dispatch(fetchCartItems(cart_id.cartId))
    }, [reRender])
    const arr = [1, 2]
    const cartItens = useSelector(state => state.cartItems)
    if (cartItens.isLoding == false) {
        var ggg = cartItens.items.map((prize) => Number(prize.price))
        var ggg2 = cartItens.items.map((prize) => Number(prize.price))
        var QNTTs = cartItens.items.map((QNTT) => Number(QNTT.quantity))
    }

    useEffect(() => {
        console.log(QNTTs)
    }, [])
    return (
        <div className='w-[100%]'>
            <Navbar />
            <div className='w-[100%] h-auto mb-[50px]'>
                <div className='w-[100%] mt-4'>
                    <div className='w-[70%] mx-auto mb-[50px] p-0'>
                        <Link to={`/`}>Home</Link>
                        <span className='text-black p-3'>|</span>
                        <button>Cart</button>
                    </div>
                </div>
                <div className='m-4 w-[100%] md:w-[80%] p-2 md:p-8 mx-auto bg-[rgba(247,245,247,1)]'>
                    <div className='md:w-[70%] w-[100%] mb-9'>
                        <div className='w-[80%] text-base mt-3 flex mx-auto relative'>
                            <div className='cursor-pointer w-[10px] h-[10px] bg-black mt-[-4px] rounded-full border border-black'>
                                <span className='absolute text-gray-400 mt-[5px] ml-[-50px]'>Shipping address</span>
                            </div>
                            <div className='md:w-[200px] w-[100px] border-[2px] border-b-[#f7f5f7] border-t-black'></div>
                            <div className='cursor-pointer w-[10px] bg-black mt-[-4px] h-[10px] rounded-full border border-black'>
                                <span className='absolute ml-[-16px] mt-[5px]'>Biling</span>
                            </div>
                            <div className='md:w-[200px] w-[120px] border-[2px] border-b-[#f7f5f7] border-t-black'></div>
                            <div className='w-[10px] cursor-pointer h-[10px] mt-[-4px] rounded-full border border-black'>
                                <span className='absolute mt-[5px] ml-[-37px]'>Conformation</span>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-wrap'>
                        {
                            cartItens.isLoding == false ? (
                                ggg.length > 0 ? (
                                    <CartProducts from='biling'
                                        reRender={reRender}
                                        setReRender={setReRender}
                                        ggg2={ggg2}
                                        ggg={ggg}
                                        QNTTs={QNTTs}
                                        arr={cartItens.items} />
                                ) : (
                                    <img className='mx-auto' src={emtyCartImage} alt='emty cart' />
                                )
                            ) : (
                                <RingLoader className='mx-auto' color="#36d7b7" />
                            )
                        }
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
