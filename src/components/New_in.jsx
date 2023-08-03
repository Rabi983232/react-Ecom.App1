import React from 'react'

export default function New_in() {
    return (
        <>
            <div className='w-[100%] h-auto mt-[30px] md:mt-[70px] mb-[75px] md:mb-[150px] relative'>
                <div className='w-[100%] h-[600px] opacity-[-1] bg-white absolute'>

                </div>
                <div className='w-[80%] mb-[40px] m-auto h-auto flex place-content-center'>
                    <div className='md:text-4xl text-xl font-semibold'>NEW IN</div>
                </div>
                <div className='w-[80%] m-auto h-auto flex place-content-center'>
                    <div className='w-[27%] h-auto'>
                        <div>
                            <img className='rotate-[-15deg] md:mt-[-20px]  border-4 md:border-8 border-r-[10px] md:border-r-[20px] border-black mt-[-10px]'
                                src={`https://s3.ap-south-1.amazonaws.com/cdn.umlautbrand.com/Images/transform-image.jpg`} alt="" srcset="" />
                        </div>
                    </div>
                    <div className='w-[27%] h-auto'>
                        <div>
                            <img className='border-2 md:border-4 border-l-[5px] md:border-l-[10px] border-r-[3px] md:border-r-[5px] border-black rotate-[8deg]'
                                src={`https://s3.ap-south-1.amazonaws.com/cdn.umlautbrand.com/Images/banner8img-2.jpg`} alt="" srcset="" />
                        </div>
                    </div>
                    <div className='w-[27%] h-auto'>
                        <div>
                            <img className='rotate-[1deg] md:ml-[-40px] ml-[-20px] mt-[-20px]  border-2 md:border-8 border-r-[5px] md:border-r-[15px] border-l-[3px] md:border-l-[10px] border-black md:mt-[-50px]'
                                src={`https://s3.ap-south-1.amazonaws.com/cdn.umlautbrand.com/Images/transform-image.jpg`} alt="" srcset="" />
                        </div>
                    </div>
                </div>
                {/* <div className='p-4 md:mt-[100px] w-[100%] flex place-content-center'> */}
                {/* <div className='relative '> */}
                {/* <button className='md:p-4 p-2 text-sm hover:bg-slate-500 bg-[rgba(21,39,66,1)] text-white w-[100px] border absolute rounded-full z-10 md:w-[150px]'>SHOP NOW</button> */}
                {/* <button className='md:p-4 p-2 text-sm border bg-[#eeeeee] border-black absolute w-[100px] rounded-full text-transparent ml-[3px] md:ml-[6px] mt-[3px] md:mt-[5px] md:w-[150px]'>SHOP NOW</button> */}
                {/* </div> */}
                {/* </div> */}
            </div>
        </>
    )
}
