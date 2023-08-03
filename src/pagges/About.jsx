import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import img1 from '../assets/iamges/about-image -1.jpg'
import img2 from '../assets/iamges/about-us/icon-1.png'
import img3 from '../assets/iamges/about-us/icon-2.png'
import img4 from '../assets/iamges/about-us/icon-3.png'
import { changeSecsion } from './events'

export default function About() {
    const [removeClass, setRemovableClass] = useState('sec-1')
    const handleChange = (classs) => {
        setRemovableClass(classs)
        changeSecsion(classs, removeClass)


    }
    return (
        <div className='w-[100%]'>
            <Navbar />
            {/* <div className='w-[100%] mb-[100px] h-auto flex place-content-center'>
                <div>
                    <div className='lg:mt-[60px] font-sans'>
                        <div className='text-center text-6xl '>
                            <div className='p-2 lg:p-[25px] font-bold'>About Us</div>
                        </div>
                        <div className='text-center '>
                            <div className='p-2 lg:p-[20px] md:text-3xl text-gray-400'>
                                ÜMLAUT is a fashion brand that creates smart, trendy, and fashionable clothing that is also sustainable and ethical. The brand's mission is to create clothing that is both stylish and responsible. The brand also partners with ethical factories that pay fair wages and provide safe working conditions for their employees.
                            </div>
                        </div>
                        <div className='text-center'>
                            <div className='p-2 lg:p-[20px] text-white'>
                                <button className='border bg-[rgba(21,39,66,1)] lg:px-8 hover:bg-gray-400 px-6 lg:py-4 py-3 rounded-full'>Join Our Team</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div> */}
            <div className='mb-[100px]'>
                <div className='md:flex md:flex-row justify-around'>
                    <div className='basis-2/5 p-4 '>
                        <div className='md:p-4 p-4'>
                            <div className='md:text-4xl md:py-4 font-semibold'>
                                Why ÜMLAUT
                            </div>
                            <div className='md:text-2xl font-sans font-400 '>
                                ÜMLAUT is a fashion brand that creates smart, trendy, and fashionable clothing that is also sustainable and ethical. The brand's mission is to create clothing that is both stylish and responsible. The brand also partners with ethical factories that pay fair wages and provide safe working conditions for their employees.
                            </div>
                        </div>
                        <div>
                            <img src={img1} alt="" />
                        </div>
                    </div>
                    <div className='basis-2/5 m-8  md:p-4'>
                        <div className='grid grid-col-1 grid-flow-row gap-[25px]'>
                            <div onClick={() => handleChange('sec-1')} className='border-[3px] sec-1 md:overflow-y-scroll lg:overflow-hidden w-[100%] h-[210px] p-4 rounded-2xl active-cecsion'>
                                <div className='md:text-2xl md:py-2 font-semibold'>
                                    Why ÜMLAUT
                                </div>
                                <div className='md:text-sm text-xs lg:text-xl font-sans font-400 '>
                                    ÜMLAUT's clothing is perfect for both work and play. The brand offers a wide range of styles, from classic work attire to casual weekend wear. ÜMLAUT's clothing is also perfect for any occasion, from a day at the office to a night out on the town.
                                </div>
                            </div>
                            <div onClick={() => handleChange('sec-2')} className='border-[3px] sec-2 w-[100%] h-[210px] rounded-2xl lg:overflow-hidden md:overflow-y-scroll p-4'>
                                <div className='md:text-2xl md:py-2 font-semibold'>
                                    Why ÜMLAUT
                                </div>
                                <div className='md:text-sm text-xs lg:text-xl font-sans font-400 '>
                                    ÜMLAUT is committed to making fashion more sustainable and ethical. The brand believes that everyone has the right to look and feel good.
                                </div>
                            </div>
                            <div onClick={() => handleChange('sec-3')} className='border-[3px] sec-3 w-[100%] rounded-2xl h-[210px] p-4 md:overflow-y-scroll lg:overflow-hidden'>
                                <div className='md:text-2xl md:py-2 font-semibold'>
                                    Why ÜMLAUT
                                </div>
                                <div className='md:text-sm text-xs lg:text-xl font-sans font-400 '>
                                    ÜMLAUT's clothing is affordable, so you can look good without breaking the bank.
                                    <br />
                                    If you are looking for stylish, sustainable, and ethical clothing, then ÜMLAUT is the brand for you.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className='mb-[100px]'>
                <div className='w-[80%] mx-auto flex justify-around flex-wrap'>
                    <div className='text-center'>
                        <div className='lg:text-8xl md:text-4xl text-2xl relative'>
                            <span className='font-bold text-[#eee] drop-shadow-[0_0px_2px_rgba(24,24,24,1)]'>13</span>
                            <span className='lg:text-5xl md:text-3xl text-xl mt-[-5px] font-semibold absolute'>+</span>
                        </div>
                        <div className='text-center py-2 text-sm md:text-2xl font-semibold'>Years in Market</div>
                    </div>
                    <div className='text-center'>
                        <div className='lg:text-8xl md:text-4xl'>
                            <span className='font-bold text-[#eee] drop-shadow-[0_0px_2px_rgba(24,24,24,1)]'>110</span>
                        </div>
                        <div className='text-center py-2 text-sm md:text-2xl font-semibold'>Project done</div>
                    </div>
                    <div className='text-center'>
                        <div className='lg:text-8xl md:text-4xl'>
                            <span className='font-bold text-[#eee] drop-shadow-[0_0px_2px_rgba(24,24,24,1)]'>99</span>
                            <span className='lg:text-5xl md:text-3xl text-sm mt-[-3px] font-bold absolute'>%</span>
                        </div>
                        <div className='text-center py-2 text-sm md:text-2xl font-semibold'>
                            Top Feedbak
                        </div>
                    </div>
                    <div className='text-center'>
                        <div className='lg:text-8xl md:text-4xl'>
                            <span className='font-bold text-[#eee] drop-shadow-[0_0px_2px_rgba(24,24,24,1)]'>100</span>
                            <span className='lg:text-5xl md:text-3xl text-xl mt-[-5px] font-semibold absolute'>+</span>
                        </div>
                        <div className='text-center py-2 text-sm md:text-2xl font-semibold'>Cup of Coffee</div>
                    </div>
                </div>
            </div> */}
            {/* <Servises /> */}
            <Footer />
        </div>
    )
}

const Servises = () => {
    return (
        <>
            <div className='w-[100%] h-auto bg-[#030211] p-4'>
                <div className='flex place-content-center text-white p-4'>
                    <div className='text-center lg:text-4xl p-2'>
                        The Core Values that drive <br />
                        Everything we do
                    </div>
                </div>
                <div className='flex flex-wrap justify-around'>
                    <div className='text-white p-4 w-[350px]'>
                        <div className='py-4'>
                            <div>
                                <img className='w-[110px] bg-transparent rounded-full' src={img2} alt="" />
                            </div>
                        </div>
                        <div className='p-2 text-3xl'>Creativity</div>
                        <div className='px-2 py-4 text-left text-xl'>
                            High-end digital experiences.Created the heart Manhattan,we are a should human team driving force.
                        </div>
                    </div>
                    <div className='text-white p-4 w-[400px]'>
                        <div className='py-4'>
                            <div>
                                <img className='w-[110px] bg-transparent rounded-full' src={img3} alt="" />
                            </div>
                        </div>
                        <div className='p-2 text-3xl'>Creativity</div>
                        <div className='px-2 py-4 text-left text-xl'>
                            High-end digital experiences.Created the heart Manhattan,we are a should human team driving force.
                        </div>
                    </div>
                    <div className='text-white p-4 w-[400px]'>
                        <div className='py-4'>
                            <div>
                                <img className='w-[110px] bg-transparent rounded-full' src={img4} alt="" />
                            </div>
                        </div>
                        <div className='p-2 text-3xl'>Creativity</div>
                        <div className='px-2 py-4 text-left text-xl'>
                            High-end digital experiences.Created the heart Manhattan,we are a should human team driving force.
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
