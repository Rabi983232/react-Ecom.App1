import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { fetchNavItems } from '../features/navreducer/navreducer';
import { useEffect } from 'react';


export default function ShippingPolicy() {
    const dispetch = useDispatch()
    useEffect(() => {
        dispetch(fetchNavItems())
    }, [])
    return (
        <div className='w-[100%]'>
            <Navbar />
            <div className='w-[100%] h-auto'>
                <div className='md:m-4 w-[100%] md:p-8 mx-auto p-3 bg-[rgba(247,245,247,1)]'>
                    <div className='text-center pt-8 md:text-2xl'>
                        <div className=''>Shipping Policy</div>
                    </div>
                    <div className='mx-auto text-left h-auto mx-auto line-height: 1.6;'>
                        <br />
                        <p>Items in stock between 10 -15 working days depending upon your PIN code.</p>

                        <p className='pt-8 md:text-2xl'>On order</p>
                        <p>Will be discussed and finalized during order placement.</p>
                        <br />


                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

