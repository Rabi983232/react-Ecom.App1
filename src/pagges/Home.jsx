import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Category from '../components/Category'
import TopCategory from '../components/TopCategory'
import Banner2 from '../components/Banner2'
import New_in from '../components/New_in'
import { useDispatch, useSelector } from 'react-redux'
import { fetchNavItems } from '../features/navreducer/navreducer';
import { fetchProducts, fetchProductsByCategoryAndP_id } from '../features/productreducer/productSlice';
import { fetchBannerImages } from '../features/Banner/BannerReducer'
import { RingLoader } from 'react-spinners';
import Footer from '../components/Footer'

export default function Home() {
  const dispetch = useDispatch()
  useEffect(() => {
    dispetch(fetchNavItems())
    dispetch(fetchBannerImages())
    dispetch(fetchProducts())
  }, [dispetch])
  const data = useSelector(state => state.navItems)

  return (
    <>
      {
        data.isLoding == false ? (
          <>
            <div className='md:bg-[rgba(242,241,241,1)]'>
              <Navbar data={data.items} />
              <Banner />
              <Category />
              <TopCategory />
              <Banner2 />
            </div>
              <New_in />
              <Footer />
          </>
        ) : (
          <>
          {/* // <div className='w-[100%] h-[100vh] relative'>
          //   <div className='centered-element'>
          //     <RingLoader color="#36d7b7" />
          //   </div>
          // </div> */}
          </>
        )
      }
    </>
  )
}
