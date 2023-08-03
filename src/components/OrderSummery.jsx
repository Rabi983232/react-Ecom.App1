import React from 'react'
import { Link } from 'react-router-dom'

export default function OrderSummery({ button }) {
    console.log(button)
    return (
        <div className='mx-2 w-[90%] md:w-[35%]'>
            <div className='p-2 text-sm'>
                Enter your coupon code Get 10% OFF on your first order down below</div>
            <div className='px-2 m-2 bg-gray-200 md:w-[90%]'>
                <input className='p-2 bg-transparent w-[85%]' type="text" readOnly value={`LA9LD1347AD4L`}></input><button className='mx-1'>copy</button>
            </div>
            <div className='m-2 p-3 bg-white md:w-[90%]'>
                <div>Have a coupon?</div>
                <div className='w-[100%] border'>
                    <input className='p-2 w-[80%]' type="text" placeholder='Add coupon code'></input><button className='mx-1'>Apply</button>
                </div>
            </div>
            <div className='mx-2 shadow-2xl bg-white md:w-[90%] p-5'>
                <div className='text-sm flex justify-between'>
                    <div>Sub total :</div>
                    <div> ₹ 4698.00</div>
                </div>
                <di className='text-sm flex justify-between' v>
                    <div>Discount amount :</div>
                    <div> ₹ -360</div>
                </di>
                <div className='text-sm flex justify-between'>
                    <div>Total Amount :</div>
                    <div> ₹ 4338.00</div>
                </div>
                <hr className='w-[100%] mx-auto my-4'></hr>
                <div className='text-lg flex justify-between'>
                    <div className='font-semibold'>Total Amount:</div>
                    <div className='font-semibold'>₹ 4338.00</div>
                </div>
                <Link to={`/conformation`}>
                    <div className='md:text-center md:p-4 mb-[30px] text-end text-white'>
                        <button className='py-2 mt-[40px] md:hidden px-8 bg-[rgba(21,39,66,1)] border rounded-full'>{button}</button>
                        <button className='py-4 md:block hidden md:text-sm md:px-[30px] xl:px-[90px] bg-[rgba(21,39,66,1)] border rounded-full'>{button}</button>
                    </div>
                </Link>
                <div className='w-[100%] flex h-auto justify-center'>
                    <img className='m-[2px] border h-[30px] w-[60px]' src="https://www.logo.wine/a/logo/Mastercard/Mastercard-Logo.wine.svg" alt="" />
                    <img className='m-[2px] border h-[30px] w-[60px]' src="https://www.logo.wine/a/logo/Visa_Inc./Visa_Inc.-Logo.wine.svg" alt="" />
                    <img className='m-[2px] border h-[30px] w-[60px]' src="https://www.logo.wine/a/logo/PayPal/PayPal-Logo.wine.svg" alt="" />
                    <img className='m-[2px] border h-[30px] w-[60px]' src="https://www.logo.wine/a/logo/Apple_Pay/Apple_Pay-Logo.wine.svg" alt="" />
                </div>
            </div>
        </div>
    )
}
