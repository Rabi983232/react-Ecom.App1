import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { AiFillCaretRight } from "react-icons/ai";
import img1 from '../assets/iamges/our-blog-image1.jpg'
import img2 from '../assets/iamges/our-blog-image2.jpg'
import img3 from '../assets/iamges/our-blog-image3.jpg'
import img4 from '../assets/iamges/our-blog-image4.jpg'
import img5 from '../assets/iamges/our-blog-image5.jpg'
import Blogs from '../components/Blogs';

export default function OurBlog() {
    const imgs =[img2,img3,img4,img5]
    return (
        <div className='w-[100%]'>
            <Navbar />
            <div className=''>
                <div className='text-center'>
                    <div className='text-3xl font-bold p-4'>Our Blog</div>
                </div>
                <div className='flex flex-wrap w-[80%] h-auto mx-auto py-8'>
                    <div className='md:w-[50%] w-[100%] p-4 h-auto'>
                        <div className='md:text-xl'>Posted on December 31, 2021 Business</div>
                        <div className='md:text-2xl md:py-8 '>
                            How To Keep The Motivation Up
                            When There Is No Client Work
                        </div>
                        <div className='text-lg py-6 text-gray-500'>
                            Whereby is the super simple way to connect over video,
                            No downloads or long having into meeting links.
                        </div>
                        <div>
                            <button >
                                <div className='flex'>
                                    <div className='font-bold text-lg'>Read More</div>
                                    <div className='p-2'>
                                        <AiFillCaretRight />
                                    </div>
                                </div>
                            </button>
                        </div>
                    </div>
                    <div className='md:w-[50%] w-[100%] p-4 h-auto'>
                        <img className='w-[100%] h-auto' src={img1} alt="" />
                    </div>
                </div>
                <div>
                    <div className='w-[70%] border border-gray-500 mx-auto my-2'></div>
                    <div className='flex w-[80%] mx-auto flex-wrap justify-between'>
                        <div className='lg:text-4xl text-lg md:text-3xl font-semibold p-3 md:p-4'>Latest News & Blogs</div>
                        <div className='OurBtn flex flex-wrap py-3'>
                            <div><button className='py-2 m-2 px-4 border border-black rounded-full'>All</button></div>
                            <div> <button className='py-2 m-2 px-4 border border-black rounded-full'>Design</button></div>
                            <div><button className='py-2 m-2 px-4 border border-black rounded-full'>Street Fashion</button></div>
                            <div><button className='py-2 m-2 px-4 border border-black rounded-full'>Man's Fashion</button></div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='w-[75%] h-auto mx-auto'>
                        <div className='flex flex-wrap p-2'>
                            <Blogs data={imgs} />
                        </div>
                    </div>
                </div>
                <div className='bg-black mb-[20px] md:h-[350px]'>
                    <div className='text-white'>
                        <div className='text-center p-4 text-2xl md:text-4xl font-bold'> Never Miss a Single News</div>
                        <div className='md:w-[48%] mx-auto w-[70%]'>
                            <div className='text-sm md:text-xl text-center p-4'>
                                Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut
                                labore et uis nostrud exercitation ullamco laboris nisi.
                            </div>
                        </div>
                        <div className='text-center'>
                            <div className='flex flex-wrap place-content-center'>
                                <div className='m-2'>
                                    <input className='py-2 text-black rounded-full px-5 m-1' type="text" placeholder='Enter your E-mail' />
                                </div>
                                <div className='m-2'>
                                    <button className='border rounded-full p-2'>
                                        <div className='flex'>
                                            <div className='font-bold text-lg'>Subscribe</div>
                                            <div className='p-2'>
                                                <AiFillCaretRight />
                                            </div>
                                        </div>
                                    </button>
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
