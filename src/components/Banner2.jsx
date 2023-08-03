import React from 'react'
import ulr3 from '../assets/iamges/umlaut-man.jpg'
import ulr4 from '../assets/iamges/footerbackdiv-2.jpg'
import ulr5 from '../assets/iamges/trending-img.jpg'

export default function Banner2() {
    return (
        <>
            <div className='w-[100%] md:bg-[rgba(242,241,241,1)] h-auto mb-[50px] md:mb-[150px] flex place-content-center'>
                <div className='w-[100%] md:h-[250px] h-[200px] bg-black md:mt-[200px] mt-[100px]'>
                    <div className='md:w-[75%] w-[100%] md:h-[250px] h-[130px] mt-[-50px] md:mt-[-150px] md:ml-[100px] relative'>
                        <img className='w-[100%] h-[100%]' src={ulr3} alt="" />
                    </div>
                    <div className='w-[100%] md:h-[250px] md:w-[75%] h-[130px] border float-right mt-[30px] md:mt-[50px] md:mr-[100px] relative'>
                        {/* <div className='absolute borderR ml-[54%] md:ml-[51%] overflow-auto w-[45%] md:w-[48%] bg-[rgba(232,218,189,1)] h-[92%] mt-[5px] md:mt-[10px] '>
                            <div className='w-[95%] m-auto md:p-4 p-1'>
                                <div className='md:text-2xl font-bold'>ÜMLAUT WOMAN</div>
                            </div>
                            <div className='w-[95%] text-left m-auto md:p-3 p-1'>
                                <div>
                                    <p className='text-xs md:text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing, dolor sit amet, consectetur adipiscing</p>
                                </div>
                            </div>
                            <div className='w-[95%] m-auto md:text-lg text-xs md:p-2 p-1'>
                                <button className='p-2 lg:px-4 border hover:bg-slate-300 border-[#a68a6c] rounded-full'>SHOP NOW</button>
                            </div>
                        </div> */}
                        <img className='w-[100%] h-[100%]' src={ulr4} alt="" />
                    </div>
                </div>
            </div>
            <TrandingNow />
        </>
    )
}

export const TrandingNow = () => {
    return (
        <>
            <div className='relative'>
                <div className='w-[95%] mx-auto z-[20] h-auto'>
                    <div className='p-4 md:p-5 flex place-content-center'>
                        <div className='font-bold md:p-8 md:text-4xl text-2xl'>TRENDING NOW</div>
                    </div>
                    <div className='flex place-content-center'>
                        <img src={ulr5} alt="" srcset="" />
                    </div>
                </div>
                <div className='hidden md:block w-[100%] z-[-1] mt-[-800px] absolute h-[600px] bg-[rgba(242,241,241,1)] '></div>

            </div>
        </>
    )
}
