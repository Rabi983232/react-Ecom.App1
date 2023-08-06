import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchNavItems } from '../features/navreducer/navreducer';
import { useEffect } from 'react';

export default function Footer() {
    const dispetch = useDispatch()
    useEffect(() => {
        dispetch(fetchNavItems())
    }, [])

    return (
        <>
            <div className='w-[100%] bg-[#f7f5f7] h-auto pb-5 -[200]'>
                <div className='footer w-[90%] mx-auto h-auto flex flex-wrap'>
                    <div className='md:w-[24%] w-[100%] h-auto mt-5'>
                        <div className='p-2 text-lg font-bold'>Company</div>
                        <div className='p-2'>
                            <ul>
                                <li className='p-[5px] text-base ' style={{ fontSize: 15, fontWeight: '800' }}>
                                    <i class="fa fa-angle-right me-2" aria-hidden="true"></i>
                                    <Link to={'/about'}>About Us</Link>
                                </li>
                                <li className='p-[5px] text-base ' style={{ fontSize: 15, fontWeight: '800' }}>
                                    <i class="fa fa-angle-right me-2" aria-hidden="true"></i>
                                    <Link to={'/contact'}>Contact Us</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='md:w-[24%] w-[100%] h-auto mt-5'>
                        <div className='p-2 text-lg font-bold'>Useful Links</div>
                        <div className='p-2'>
                            <ul>
                                <li className='p-[5px] text-base ' style={{ fontSize: 15, fontWeight: '800' }}>
                                    <i class="fa fa-angle-right me-2" aria-hidden="true"></i>
                                    <Link to={`/refundpolicy`}>Return & Refund Policy</Link>
                                </li>
                                <li className='p-[5px] text-base ' style={{ fontSize: 15, fontWeight: '800' }}>
                                    <i class="fa fa-angle-right me-2" aria-hidden="true"></i>
                                    <Link to={`/policy`}>Privacy Policy</Link>
                                </li>
                                <li className='p-[5px] text-base ' style={{ fontSize: 15, fontWeight: '800' }}>
                                    <i class="fa fa-angle-right me-2" aria-hidden="true"></i>
                                    <Link to={`/terms`}>Terms & Conditions</Link>
                                </li>
                                <li className='p-[5px] text-base ' style={{ fontSize: 15, fontWeight: '800' }}>
                                    <i class="fa fa-angle-right me-2" aria-hidden="true"></i>
                                    <Link to={`/shippingpolicy`}>Shipping Policy</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='md:w-[24%] w-[100%] h-auto mt-5'>
                        <div className='p-2 text-lg font-bold'>Contact</div>
                        <div className='p-2'>
                            <ul>
                                <div className="mb-2 font-800" style={{ fontWeight: "800" }}>
                                    <i className="fa fa-map-marker-alt mr-3" />
                                    INDIA<br />
                                    <p className='text-gray-700' style={{ paddingLeft: "26px", fontWeight: "600" }}>
                                        A2R Creative, Bengalore
                                    </p>
                                </div>
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
                                </a><br />
                                <a
                                    style={{ paddingLeft: "26px", fontWeight: "800" }}
                                    className="mb-2" href="mailto:sales@a2rcreative.in">
                                    <i className="fa fa-globe mr-2" />
                                    www.umlautbrand.com
                                </a>
                            </ul>
                        </div>
                    </div>
                    <div className='md:w-[24%] w-[100%] h-auto mt-5'>
                        <div className='p-2 text-lg font-bold'>Subscribe</div>
                        <div className='p-2'>
                            <ul>
                                <div className="mb-2">
                                    <p className='text-gray-500' style={{ paddingLeft: "10px", fontWeight: '700' }}>
                                        Get updates on best reward catalogues and practices.
                                    </p>
                                </div>
                                <br /><br />
                                <input className='w-[90%] rounded p-3' type="text" placeholder='Your Email Address' />
                                <input className='w-[90%] cursor-pointer rounded p-2 bg-gray-800 text-white' type="button" value="SUBSCRIBE" />
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
