import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from 'swiper';
import "swiper/swiper.css";
import { BsArrowLeft } from 'react-icons/bs'
import { fetchBannerImages } from '../features/Banner/BannerReducer'
import { useDispatch, useSelector } from 'react-redux'

export default function Banner() {
    const dispatch = useDispatch()
    const banners = useSelector((state) => state.banners)
    return (
        <>
            {banners.isLoding == false ? (<BannerM />) : (<div className='w-[100%] text-center h-auto p-2'>Loding...</div>)}
        </>
        // 
    )
}

const BannerM = () => {
    const banners = useSelector((state) => state.banners)
    const CarouselBanner = banners.items.filter((cb) => cb.bannerStatus == false)
    const BiglBanner = banners.items.filter((cb) => cb.bannerStatus == true)
    return (
        <>
            {
                banners.isLoding == false ? (
                    <div className='w-[100%] h-auto'>
                        <div className={` w-[100%] h-[200px] md:h-[50vh] lg:h-[70vh] xl:h-[90vh] relative flex justify-around`}>
                            <div className='absolute z-10 w-[90%] md:mt-[90px] mt-[10px] borde'>
                                <div className='w-[100%] m-0 flex md:text-[20px] lg:text-[30px] text-sm text-white font-semibold font-[sans-serif]'>
                                    <span className=' p-2'>
                                        EVERYTHING IN ONE PLACE.
                                    </span>
                                </div>
                            </div>
                            <img className='absolute w-[100%] h-[100%]'
                                src={BiglBanner[0].bigimage}
                                alt="Banner.png" srcset="" />
                        </div>
                        <div className='w-[80%] h-auto md:h-[400px] m-auto md:mt-[-150px] mt-[-50px] md:mb-[50px] relative'>
                            <Swiper
                                spaceBetween={0}
                                slidesPerView={1}
                                autoplay={{
                                    delay: 5000,
                                    disableOnInteraction: false,
                                }}
                                loop={true}
                                speed={1000}
                                modules={[Autoplay, Navigation]}
                                navigation={{
                                    prevEl: '.prev',
                                    nextEl: '.next',
                                }}
                            >
                                {
                                    CarouselBanner.map((i) => {
                                        return (
                                            <>
                                                <SwiperSlide key={i}>
                                                    <div className='w-[100%] h-[130px] md:h-[400px] flex justify-between'>
                                                        <div className='w-[5%] h-[100%] bg-white'>
                                                            <div className='w-[100%] h-[100%]'>
                                                                <BsArrowLeft className='text-xl md:text-2xl md:m-4 md:mt-[160px] mt-[50px]' />
                                                            </div>
                                                        </div>
                                                        <div className='w-[95%] h-[100%] flex justify-between'>
                                                            <div className='w-[100%] md:w-[100%] h-[100%]'>
                                                                <img className='w-[100%] h-[100%]'
                                                                    src={i.bigimage}
                                                                    alt="png" srcset="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                            </>
                                        )
                                    })
                                }
                            </Swiper>
                        </div>
                    </div>
                ) : (null)
            }
        </>
    )
}
