import React from 'react'
import url2 from '../assets/iamges/manwomen-immage.jpg'
import url3 from '../assets/iamges/banner3-image.jpg'

export default function Category() {
    return (
        <>
            <div className='w-100 h-auto mb-3 mt-[30px]'>
                <div className='flex justify-between relative w-[98%] m-auto md:h-[200px] lg:h-[300px] xl:h-[400px] h-[120px] '>
                    <img className='w-[100%] h-[100%] absolute'
                        src={`https://s3.ap-south-1.amazonaws.com/cdn.umlautbrand.com/Banners/banner-2.jpg`}
                        alt="" srcset="" />
                </div>
            </div>
            <div className='w-[100%] h-auto mt-[30px] mb-[20px]' data-aos='fade-right'>
                <div className='m-auto w-[97%] md:h-[200px] lg:h-[300px] xl:h-[400px] relative h-[130px]'>
                    <img className='absolute w-[100%] h-[100%]' src={url3} alt="" />
                    <div className='w-[100%] h-[100%] flex justify-between'>
                        <div className='w-[24%] h-[100%] z-10'>
                            <div className={`w-[100%] md:w-[60%] flex justify-center
                            lg:mt-[240px] rounded
                             hover:bg-slate-500 m-auto mt-[100px] md:mt-[140px] xl:mt-[320px] 
                             md:h-[55px] bg-gray-500 
                             `}>
                                <div className='md:text-xl md:mt-[10px] cursor-pointer text-center text-[10px] py-1 text-white'>SHOP NOW</div>
                            </div>
                        </div>
                        <div className='w-[52%] z-10 h-[100%]'>
                            <div className='w-[100%] h-[100%] z-10'>
                                <div
                                    className={`w-[40%] md:w-[20%] flex justify-center 
                                    lg:mt-[240px] md:mt-[140px] rounded
                                hover:bg-slate-500 m-auto mt-[100px] xl:mt-[320px] md:h-[55px] bg-gray-500 
                                `}>
                                    <div className='md:text-xl md:mt-[10px] cursor-pointer text-center text-[10px] py-1 text-white'>2023</div>
                                </div>
                            </div>
                        </div>
                        <div className='w-[24%] h-[100%] z-10'>
                            <div
                                className={`w-[100%] md:w-[60%] flex justify-center 
                                lg:mt-[240px] md:mt-[140px] rounded
                            hover:bg-slate-500 m-auto mt-[100px] xl:mt-[320px]
                             md:h-[55px] bg-gray-500`}>
                                <div className='md:text-sm cursor-pointer md:mt-[10px] text-center py-1 text-[10px] text-white'>TSHIRT FOR HIM</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
