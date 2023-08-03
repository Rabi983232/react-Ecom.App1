import React, { useState } from 'react'

export default function MyCollaps({ arrr, Pbutton }) {

    console.log('arrr');
    console.log(arrr);

    const [removeClass, setRemovableClass] = useState()
    const [isTrue, seIsTrue] = useState(false)
    const setOpen = (index) => {
        setRemovableClass(index)
        if (removeClass == index) {
            seIsTrue(!isTrue)
            if (isTrue === true) {
                const remoClass = document.getElementsByClassName(removeClass)
                remoClass[0].classList.remove('openCollapse')
            } else {
                const addClass = document.getElementsByClassName(index)
                addClass[0].classList.add('openCollapse')
            }
        } else {
            const remoClass = document.getElementsByClassName(removeClass)
            remoClass[0].classList.remove('openCollapse')

            const addClass = document.getElementsByClassName(index)
            addClass[0].classList.add('openCollapse')
        }
    }
    return (
        <>
            <div className='mx-auto w-[100%]'>
                <div className='w-[100%]'>
                    <div onClick={() => setOpen('features')} className='text-2xl bg-white border w-[100%] h-auto p-4'>
                        <div className='flex justify-between cursor-pointer'>
                            <div><button className='text-gray-800 font-bold text-xl'>Features</button></div>
                            <div className={`rotate-[180deg]`}>
                                <Pbutton />
                            </div>
                        </div>
                    </div>
                    <div className={`w-[100%] collaps h-0 ${'features'} overflow-hidden`}>
                        <div className='mx-6 text-gray-500'>
                            {arrr && Array.isArray(arrr[0]) ? (
                                <>
                                    <ul className='mx-4 list-disc'>
                                        {
                                            arrr[0].length > 0 ? (
                                                arrr[0]?.map((item, index) => {
                                                    return (
                                                        <li>
                                                            {item.feature}
                                                        </li>
                                                    )
                                                })
                                            ) : (
                                                <div className='p-2 text-[red]'>
                                                    No Features !
                                                </div>
                                            )

                                        }
                                    </ul>
                                </>
                            ) : (
                                <ul className='mx-4 list-disc'>
                                    <li>One type of service</li>
                                    <li>One type of service</li>
                                    <li>One type of service</li>
                                    <li>One type of service</li>
                                </ul>
                            )
                            }

                        </div>
                    </div>
                </div>
                <div className='w-[100%]'>
                    <div onClick={() => setOpen('reviews')} className='text-2xl bg-white border w-[100%] h-auto p-4'>
                        <div className='flex justify-between cursor-pointer'>
                            <div><button className='text-gray-800 font-bold text-xl'>Reviews</button></div>
                            <div className={`rotate-[180deg]`}>
                                <Pbutton />
                            </div>
                        </div>
                    </div>
                    <div className={`w-[100%] collaps h-0 ${'reviews'} overflow-hidden`}>
                        <div className='mx-6 text-gray-500'>
                            {arrr && Array.isArray(arrr[1]) ? (
                                <>
                                    <ul className='mx-4 list-disc'>
                                        {
                                            arrr[1].length > 0 ? arrr[1].map((item, index) => {
                                                return (
                                                    <li>
                                                        {item.review}
                                                    </li>
                                                )
                                            }) : (
                                                <div className='p-2 text-[red]'>
                                                    No Reviews Yet!
                                                </div>
                                            )
                                        }
                                    </ul>
                                </>
                            ) : (
                                <div className='p-2 text-[red]'>
                                    No Reviews Yet!
                                </div>
                            )
                            }
                        </div>
                    </div>
                </div>
                <div className='w-[100%]'>
                    <div onClick={() => setOpen('Shipping')} className='text-2xl bg-white border w-[100%] h-auto p-4'>
                        <div className='flex justify-between cursor-pointer'>
                            <div><button className='text-gray-800 font-bold text-xl'>Shipping & Returns</button></div>
                            <div className={`rotate-[180deg]`}>
                                <Pbutton />
                            </div>
                        </div>
                    </div>
                    <div className={`w-[100%] collaps h-0 ${'Shipping'} overflow-hidden`}>
                        <div className='mx-6 text-gray-500'>
                            {arrr && Array.isArray(arrr[1]) ? (
                                <>
                                    <ul className='mx-4 list-disc'>
                                        {
                                            arrr[2].length > 0 ? arrr[2].map((item, index) => {
                                                return (
                                                    <li>
                                                        {item.info}
                                                    </li>
                                                )
                                            }) : (
                                                <div className='p-2'>
                                                    For any shipping or rerun information please contact customer care -
                                                    <br />
                                                    <a
                                                        style={{ paddingLeft: "26px", fontWeight: "800" }}
                                                        className="mb-2" href="tel:+919686202046">
                                                        <i className="fa fa-phone-alt mr-2" />
                                                        +91 7406000938
                                                    </a>
                                                    <br />
                                                    <a
                                                        style={{ paddingLeft: "26px", fontWeight: "800" }}
                                                        className="mb-2" href="mailto:sales@a2rcreative.in">
                                                        <i className="fa fa-envelope mr-2" />
                                                        support@a2rcreative.in
                                                    </a>
                                                </div>
                                            )
                                        }
                                    </ul>
                                </>
                            ) : (
                                <ul className='mx-4 list-disc'>
                                    <li>One type of service</li>
                                    <li>One type of service</li>
                                    <li>One type of service</li>
                                    <li>One type of service</li>
                                </ul>
                            )
                            }

                        </div>
                    </div>
                </div>
                <div className='w-[100%]'>
                    <div onClick={() => setOpen('Warranty')} className='text-2xl bg-white border w-[100%] h-auto p-4'>
                        <div className='flex justify-between cursor-pointer'>
                            <div><button className='text-gray-800 font-bold text-xl'>Recycle Policy</button></div>
                            <div className={`rotate-[180deg]`}>
                                <Pbutton />
                            </div>
                        </div>
                    </div>
                    <div className={`w-[100%] collaps h-0 ${'Warranty'} overflow-hidden`}>
                        <div className='mx-6 text-gray-500'>
                            {arrr && Array.isArray(arrr[1]) ? (
                                <>
                                    <ul className='mx-4 list-disc'>
                                        {
                                            arrr[2].length > 0 ? arrr[2].map((item, index) => {
                                                return (
                                                    <li>
                                                        {item.info}
                                                    </li>
                                                )
                                            }) : (
                                                <div>
                                                    We will take back ÜMLAUT stocks at any point after 12 months post purchase.
                                                    And we shall depending on the condition recycle or upcycle the same. And the buyer will get a discount on their next purchase.
                                                </div>
                                            )
                                        }
                                    </ul>
                                </>
                            ) : (
                                <ul className='mx-4 list-disc'>
                                    <li>One type of service</li>
                                    <li>One type of service</li>
                                    <li>One type of service</li>
                                    <li>One type of service</li>
                                </ul>
                            )
                            }

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
