import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import shopimg from '../assets/iamges/shop-header.jpg'
import { BsChevronDown } from "react-icons/bs";
import { TbAdjustmentsHorizontal } from "react-icons/tb";
import { showFilterF } from './events'
import { TbCheck } from "react-icons/tb";
import FilterSideBar from '../components/FilterSideBar';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchNavItems } from '../features/navreducer/navreducer';
import { fetchFilterData } from '../features/filter/filterReducer';
import { fetchProductsByCategory, fetchProducts, fetchProductsByCategoryAndP_id, fetchFilterProduct } from '../features/productreducer/productSlice';
import { ScaleLoader } from 'react-spinners';

export default function Categorypage() {
    const [colors, setColors] = useState([])
    const [action, setAction] = useState(false)
    const location = useLocation();
    const path = location.pathname.split('/')
    const dispetch = useDispatch()
    const [isOpen, setIsOpen] = useState(false)
    const showFilter = () => {
        setIsOpen(!isOpen)
        showFilterF(isOpen)
    }


    useEffect(() => {
        dispetch(fetchFilterData(path[2]))
        dispetch(fetchProductsByCategory(path[2]))
        dispetch(fetchNavItems())
        dispetch(fetchProducts())
    }, [dispetch, path[2]])
    const filterData = useSelector(state => state.filterData)
    const data = useSelector(state => state.navItems)
    var myCls = 'prdcl'

    const navigate = useNavigate()
    const quickVeiw = (C_id, P_id) => {
        setAction(true)
        dispetch(fetchNavItems())
        const re = dispetch(fetchProductsByCategoryAndP_id(P_id))
        Promise.all([re]).then((res) => {
            let productData = res[0].payload;
            localStorage.setItem("productData", JSON.stringify(productData[0]))
            setAction(false)
            navigate(`/product/${C_id}/${P_id}`)
        })
    }

    useEffect(() => {
        dispetch(fetchFilterProduct({
            mainCategoryId: path[2],
        }))
    }, [dispetch, path[2]])

    const returnToHom = () => {
        dispetch(fetchProducts())
        const re = dispetch(fetchNavItems())
        Promise.all([re]).then((res) => {
            navigate(`/`)
        })
    }
    useEffect(()=>{},[filterData])
    const p_by_c_data = useSelector(state => state.products.filteredProducts)
    console.log(filterData)
    return (
        <>
            <div className='w-[100%] relative'>
                <Navbar data={data.items} />
                <div className='w-[100%] h-auto mt-4 relative'>
                    <div className='w-[90%] mx-auto h-auto mb-9'>
                        <div className='w-[100%] mx-auto p-4'>
                            <b className='cursor-pointer' onClick={returnToHom}>Home</b>
                            <span className='text-black p-3'>|</span>JACKET
                        </div>
                        <div>
                            <img src={shopimg} alt="" />
                        </div>
                        <div className='flex justify-between p-4'>
                            <div>
                                <span className='md:block hidden'>Filter</span>
                                <div className='filterBtn md:hidden bg-white cursor-pointer z-20 fixed'>
                                    <TbAdjustmentsHorizontal fill='orange' color='orange' onClick={showFilter} size={55}
                                        className='px-2 pt-[-50px]' />
                                </div>
                            </div>
                            <div className='md:flex hidden text-sm'>
                                <div>
                                    Short By
                                </div>
                                <div className='p-[5px] font-bold'>
                                    <BsChevronDown />
                                </div>
                            </div>
                        </div>
                        <hr className='md:block hidden bg-gray-900 mb-8' />
                    </div>
                    <div className='w-[90%] mx-auto h-auto'>
                        <div className='w-[100%] md:w-[98%] mx-auto h-auto flex'>
                            {
                                filterData.isLoding == false ?
                                    <FilterSideBar
                                        cat_Id={path[2]}
                                        setColors={setColors}
                                        // filteredData={filteredData}
                                        filterData={filterData.items} />
                                    : null
                            }
                            <div className='w-[100%]'>
                                <div className='w-[93%] lg:w-[100%] categoryC md:w-[90%] mx-auto h-auto grid xl:grid-cols-4 grid-cols-2 lg:grid-cols-3 md:grid-cols-2 md:gap-2 gap-4 justify-start'>
                                    {
                                        p_by_c_data.length > 0 ? (
                                            p_by_c_data.map((p, index2) => {
                                                console.log(p.colors[0])
                                                if (p.colors[0]) {
                                                    var pColors = Object.values(p?.colors[0]?.colorCode)
                                                }
                                                return (
                                                    <>
                                                        <div key={p} className='md:w-[230px] category border h-[300px] md:h-[400px] mb-3 md:mx-[10px]'>
                                                            <div className='showBtn0 w-[100%] h-[100%] flex flex-col'>
                                                                <div className='w-[100%] md:h-[78%] h-[70%] relative overflow-hidden'>
                                                                    {

                                                                        p?.image[0] ? (
                                                                            <img className='absolute w-[100%] h-[100%] '
                                                                                src={p.image[0].image ? p.image[0].image : null} alt={p.productName} />
                                                                        ) : (
                                                                            <img className='absolute w-[100%] h-[100%] '
                                                                                src={null} alt={p.productName} />
                                                                        )
                                                                    }
                                                                    <div className='showBtn absolute mt-[227px] md:mt-[400px] z-10 w-[100%] h-[50px] '>
                                                                        <div className='flex flex-row h-[30px] md:h-[50px] text-white font-bold text-xs md:text-base w-[100%] justify-around '>
                                                                            {
                                                                                action ?
                                                                                    <button className='bg-black  rounded w-[50%]'>
                                                                                        <ScaleLoader color="#fff" />
                                                                                    </button> :
                                                                                    <button
                                                                                        onClick={() => quickVeiw(p.mainCategoryId, p.productId)}
                                                                                        className='bg-black hover:bg-blue-300 rounded w-[50%]'>
                                                                                        <b className='animate-spin'>Add to cart</b>
                                                                                    </button>
                                                                            }
                                                                            {
                                                                                action ?
                                                                                    <button className='bg-black  rounded w-[50%]'>
                                                                                        <ScaleLoader color="#fff" />
                                                                                    </button>
                                                                                    :
                                                                                    <button
                                                                                        onClick={() => quickVeiw(p.mainCategoryId, p.productId)}
                                                                                        className='bg-black hover:bg-blue-300 rounded w-[50%]'>
                                                                                        <b className='animate-spin'>Quick Veiw</b>
                                                                                    </button>
                                                                            }
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className='w-[100%] md:h-[22%] h-[30%] border bg-[rgba(242,241,241,0.5)] flex flex-col justify-around'>
                                                                    <div className='text-xs md:text-[10px]  w-[100%] flex place-content-center'>
                                                                        <div className='w-[90%] text-sm'>
                                                                            {p.productName}
                                                                        </div>
                                                                    </div>
                                                                    <div className='w-[100%] flex place-content-center'>
                                                                        <div className='w-[90%] '>
                                                                            <span className='md:text-[10px]'>₹ {p.productPrice}</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className='flex px-2'>
                                                                        {
                                                                            pColors ? (
                                                                                pColors.map((color, index) => {
                                                                                    return (
                                                                                        <>
                                                                                            <button
                                                                                                onClick={() => handleChange(`${`${index2}-${myCls}`}-${index}`)}
                                                                                                key={index}
                                                                                                style={{ backgroundColor: color }}
                                                                                                className={`w-[20px] m-1 h-[20px] border rounded-full`}>
                                                                                                <TbCheck className={`m-[1px] opacity-0 ${`${index2}-${myCls}`}-${index}`} color='white' fontWeight={900} size={18} />
                                                                                            </button>
                                                                                        </>
                                                                                    )
                                                                                })
                                                                            ) : (null)
                                                                        }
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </>
                                                )
                                            })
                                        ) : (
                                            <>
                                                <div className='w-[100%] text-center font-bold h-auto p-2'>
                                                    No Products Found!
                                                </div>
                                            </>
                                        )
                                    }

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}
