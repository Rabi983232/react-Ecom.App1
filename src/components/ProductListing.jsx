import React, { useState, useEffect } from 'react'
import { TbCheck } from "react-icons/tb";
import { selectedColor2 } from '../pagges/events'
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { ScaleLoader } from 'react-spinners';
import { fetchProductsByCategory, fetchProductsByCategoryAndP_id } from '../features/productreducer/productSlice';

export default function ProductListing({ from, p_by_c_data }) {
    const [action, setAction] = useState(false)
    const [tr, setTr] = useState(0)
    const dispetch = useDispatch()
    const location = useLocation();
    const path = location.pathname.split('/')
    useEffect(() => {
        from == 'productPage' ? setTr(1) : null
    }, [])
    useEffect(() => {
        dispetch(fetchProductsByCategory(path[2]))
    }, [dispetch, path[2]])
    // const p_by_c_data = useSelector(state => state.products)
    const colors = ['rgba(2,181,155,1)', '#a7adad', '#b5025c63']
    const [removeClass, setRemovableClass] = useState()
    const handleChange = (classs) => {
        setRemovableClass(classs)
        selectedColor2(classs, removeClass)
    }
    const navigate = useNavigate()
    // const quickVeiw = (C_id, P_id) => {
    //     dispetch(fetchNavItems())
    //     const re = dispetch(fetchProductsByCategoryAndP_id(P_id))
    //     Promise.all([re]).then((res)=>navigate(`/product/${C_id}/${P_id}`))
    // }
    const quickVeiw = (C_id, P_id) => {
        setAction(true)
        dispetch(fetchNavItems())
        const re = dispetch(fetchProductsByCategoryAndP_id(P_id))
        Promise.all([re]).then((res) => {
            let productData = res[0].payload;
            localStorage.setItem("productData", JSON.stringify(productData[0]))
            navigate(`/product/${C_id}/${P_id}`)
        })
    }
    var myCls = 'prdcl'
    return (
        <div className='w-[93%] md:w-[98%] mx-auto h-auto flex flex-wrap md:gap-2 gap-4 justify-start'>
            {
                p_by_c_data.isLoding == false ? (
                    p_by_c_data.selectedCategry.map((p, index2) => {
                        return (
                            <>
                                <div key={p} className='md:w-[300px] w-[160px] shadow-[3px_0_10px_5px_rgba(0,0,0,0.1)] h-[300px] md:h-[500px] mb-3 md:mx-[10px]'>
                                    <div className='showBtn0 w-[100%] h-[100%] flex flex-col'>
                                        <div className='w-[100%] md:h-[80%] h-[70%] relative overflow-hidden'>
                                            <img className='absolute w-[100%] h-[100%] '
                                                src={p.image[0].image ? p.image[0].image : null}
                                                alt={p.productName}
                                            />
                                            <div className='showBtn absolute mt-[227px] md:mt-[400px] z-10 w-[100%] h-[50px] '>
                                                <div className='flex flex-row h-[30px] md:h-[50px] text-white font-bold text-xs md:text-base w-[100%] justify-around '>
                                                    <button className='bg-black hover:bg-blue-300 rounded border-r border-white w-[50%]'>Add To Cart</button>
                                                    {
                                                        action ?
                                                            <button className='bg-black  rounded w-[50%]'>
                                                                <ScaleLoader color="#fff" />
                                                            </button> :
                                                            <button
                                                                onClick={() => quickVeiw(p.mainCategoryId, p.productId)}
                                                                className='bg-black hover:bg-blue-300 rounded w-[50%]'>
                                                                <b className='animate-spin'>Quick Veiw</b>
                                                            </button>
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                        <div className='w-[100%] md:h-[20%] h-[30%] border bg-[rgba(242,241,241,0.5)] flex flex-col justify-around'>
                                            <div className='text-xs md:text-[15px]  w-[100%] flex place-content-center'>
                                                <div className='w-[90%] text-sm'>
                                                    {p.productName}
                                                </div>
                                            </div>
                                            <div className='w-[100%] flex place-content-center'>
                                                <div className='w-[90%] '>
                                                    <span className='md:text-xl'>₹ {p.productPrice}</span>
                                                </div>
                                            </div>
                                            <div className='flex px-2'>
                                                {
                                                    colors.map((color, index) => {
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
                        <div className='w-[100%] text-center h-auto p-2'>Loding...</div>
                    </>
                )
            }

        </div>
    )
}

