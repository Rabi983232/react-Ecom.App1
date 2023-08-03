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

export default function Cart() {
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
        console.log(cartItens)
    }, [])

    // cartItens.items[0].quantity = cartItens.items[0].quantity + 1;
    return (
        <div className='w-[100%]'>
            <Navbar />
            <div className='w-[100%] mx-auto mb-[50px]'>
                {/* <div className='w-[100%] mt-4'>
                    <div className='w-[70%] mx-auto mb-[50px] p-0'>
                        <Link to={`/`}>Home</Link>
                        <span className='text-black p-3'>|</span>
                        <button>Cart</button>
                    </div>


                    <div className='w-[100%] mx-auto p-4'>
                        <b className='cursor-pointer' >Home</b>
                        <span className='text-black p-3'>|</span>JACKET
                    </div>
                </div> */}
                <div className='m-4 w-[100%] md:w-[80%] p-2 md:p-8 mx-auto bg-[rgba(247,245,247,1)]'>
                    <div className='pb-4 font-bold text-xl'>Shoping Cart</div>
                    <div className='flex flex-wrap'>
                        {
                            cartItens.isLoding == false ? (
                                ggg.length > 0 ? (
                                    <CartProducts from='card'
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

