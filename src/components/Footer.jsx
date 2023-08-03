import React from 'react'
import { TfiFacebook } from "react-icons/tfi";
import { TfiTwitterAlt } from "react-icons/tfi";
import { TfiLinkedin } from "react-icons/tfi";
import { TfiInstagram } from "react-icons/tfi";
import { Link } from 'react-router-dom'

export default function Footer() {


    return (
        <>
            <div className='w-[100%] bg-[#f7f5f7] h-auto pb-5'>
                <div className='footer w-[90%] mx-auto h-auto flex flex-wrap'>
                    {/* <div className=' md:w-[] w-[300px] h-auto mt-5'>

                    </div> */}
                    <div className='md:w-[24%] w-[100%] h-auto mt-5'>
                        <div className='p-2 text-lg font-bold'>Company</div>
                        <div className='p-2'>
                            <ul>
                                <li className='p-[5px] text-base ' style={{ fontSize: 15, fontWeight: '800' }}><i class="fa fa-angle-right me-2" aria-hidden="true"></i>
                                    <Link to={`/about`}>About Us</Link>
                                </li>
                                <li className='p-[5px] text-base ' style={{ fontSize: 15, fontWeight: '800' }}><i class="fa fa-angle-right me-2" aria-hidden="true"></i>
                                    <Link to={`/contact`}>Contact</Link>
                                </li>
                                {/* <li className='p-[5px] text-base ' style={{ fontSize: 15, fontWeight: '800' }}><i class="fa fa-angle-right me-2" aria-hidden="true"></i>
                                    <Link to={`/about`}>Blog</Link>
                                </li> */}
                            </ul>
                        </div>
                    </div>
                    <div className='md:w-[24%] w-[100%] h-auto mt-5'>
                        <div className='p-2 text-lg font-bold'>Useful Links</div>
                        <div className='p-2'>
                            <ul>
                                <li className='p-[5px] text-base ' style={{ fontSize: 15, fontWeight: '800' }}><i class="fa fa-angle-right me-2" aria-hidden="true"></i>
                                    <Link to={`/refundpolicy`}>Return & Refund Policy</Link>
                                </li>
                                <li className='p-[5px] text-base ' style={{ fontSize: 15, fontWeight: '800' }}><i class="fa fa-angle-right me-2" aria-hidden="true"></i>
                                    <Link to={`/policy`}>Privacy Policy</Link>
                                </li>
                                <li className='p-[5px] text-base ' style={{ fontSize: 15, fontWeight: '800' }}><i class="fa fa-angle-right me-2" aria-hidden="true"></i>
                                    <Link to={`/terms`}>Terms & Conditions</Link>
                                </li>
                                <li className='p-[5px] text-base ' style={{ fontSize: 15, fontWeight: '800' }}><i class="fa fa-angle-right me-2" aria-hidden="true"></i>
                                    <Link to={`/shippingpolicy`}>Shipping Policy</Link>
                                </li>
                                {/* <li className='p-[5px] text-base ' style={{ fontSize: 15, fontWeight: '800' }}><i class="fa fa-angle-right me-2" aria-hidden="true"></i>
                                    <Link to={`/about`}>Blog</Link>
                                </li> */}
                                {/* <li className='p-[5px] text-base ' style={{ fontSize: 15, fontWeight: '800' }}><i class="fa fa-angle-right me-2" aria-hidden="true"></i>
                                    <Link to={`/about`}>Disclaimer</Link>
                                </li> */}

                                {/* <li className='p-[5px] text-base ' style={{ fontSize: 19, fontWeight: 'bold' }}>
                                    <Link to={`/product`}><i class="fa fa-angle-right me-2" aria-hidden="true"></i>Our Producers</Link>
                                </li>
                                <li className='p-[5px] text-base ' style={{ fontSize: 19, fontWeight: 'bold' }}><i class="fa fa-angle-right me-2" aria-hidden="true"></i>Sitemap</li>
                                <li className='p-[5px] text-base ' style={{ fontSize: 19, fontWeight: 'bold' }}><i class="fa fa-angle-right me-2" aria-hidden="true"></i>FAQ</li>
                                <li className='p-[5px] text-base ' style={{ fontSize: 19, fontWeight: 'bold' }}>
                                    <Link to={`/about`}><i class="fa fa-angle-right me-2" aria-hidden="true"></i>About Us</Link>
                                </li>
                                <li className='p-[5px] text-base ' style={{ fontSize: 19, fontWeight: 'bold' }}>
                                    <Link to={`/terms`}><i class="fa fa-angle-right me-2" aria-hidden="true"></i>Terms & Conditions</Link>
                                </li> */}
                            </ul>
                        </div>
                    </div>
                    <div className='md:w-[24%] w-[100%] h-auto mt-5'>
                        <div className='p-2 text-lg font-bold'>Contact</div>
                        <div className='p-2'>
                            <ul>
                                {/* <li className='p-[5px] md:text-xl ' style={{ fontSize: 19, fontWeight: 'bold' }}>
                                    <Link to={`/contact`}>Contact Us</Link>
                                </li> */}
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
                                {/* <li className='p-[5px] text-base '>Track Your Order</li>
                                <li className='p-[5px] text-base '>Product Care & Repair</li>
                                <li className='p-[5px] text-base '>Book an Appointment</li>
                                <li className='p-[5px] text-base '>Shipping & Returns</li> */}
                            </ul>
                        </div>
                    </div>
                    <div className='md:w-[24%] w-[100%] h-auto mt-5'>
                        <div className='p-2 text-lg font-bold'>Subscribe</div>
                        <div className='p-2'>
                            <ul>
                                {/* <li className='p-[5px] md:text-xl ' style={{ fontSize: 19, fontWeight: 'bold' }}>
                                    <Link to={`/contact`}>Contact Us</Link>
                                </li> */}
                                <div className="mb-2">
                                    <p className='text-gray-500' style={{ paddingLeft: "10px", fontWeight: '700' }}>
                                        Get updates on best reward catalogues and practices.
                                    </p>
                                </div>
                                <br /><br />
                                <input className='w-[90%] rounded p-3' type="text" placeholder='Your Email Address' />
                                <input className='w-[90%] cursor-pointer rounded p-2 bg-gray-800 text-white' type="button" value="SUBSCRIBE" />
                                {/* <li className='p-[5px] text-base '>Track Your Order</li>
                                <li className='p-[5px] text-base '>Product Care & Repair</li>
                                <li className='p-[5px] text-base '>Book an Appointment</li>
                                <li className='p-[5px] text-base '>Shipping & Returns</li> */}
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
