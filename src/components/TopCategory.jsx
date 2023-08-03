import React, { useState, useEffect } from 'react'
import { TbCheck } from "react-icons/tb";
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { selectedColor2 } from '../pagges/events'
import { fetchNavItems } from '../features/navreducer/navreducer';
import { fetchProducts, fetchProductsByCategory, fetchProductsByCategoryAndP_id } from '../features/productreducer/productSlice';
import { ScaleLoader } from 'react-spinners';
import { ColorRing } from 'react-loader-spinner';


export default function TopCategory() {
    const [showColorRing, setshowColorRing] = useState('hidden')
    const navigate = useNavigate()
    const [catId, setCatId] = useState('')
    const location = useLocation();
    const path = location.pathname.split('/')
    const dispetch = useDispatch()
    useEffect(() => {
        dispetch(fetchProductsByCategory(catId))
        // dispetch(fetchProducts())
    }, ['', dispetch, catId])
    const products1 = useSelector(state => state.products)
    // alert('gfgfgfg')

    const data = useSelector(state => state.navItems)
    const Shopnow = (catId) => {
        setshowColorRing('block')
        dispetch(fetchProductsByCategory(catId)).then(() => {
            navigate(`/category/${catId}`)
        })
    }
    return (
        <>
            <div className={`w-[100%] ${showColorRing} z-[2000] absolute h-[100%] fixed`}>
                <div className='w-[100%] h-[100%] relative'>
                    <div className='centered-element bg-[rgba(0,0,0,0.3)] rounded-full p-2'>
                        <ColorRing
                            colors={['#fff', '#fff', '#fff', '#fff', '#fff']}
                        />
                    </div>
                </div>
            </div>
            {/* rgba(238,238,238,0.66) */}
            <div className='w-[100%] h-auto'>
                <div className='w-[100%] h-auto flex place-content-center mb-9'>
                    <div className='text-[white] toptex text-[40px] lg:text-[96px] md:text-[85px]'>TOP CATEGORIES</div>
                </div>
                <div className='w-[100%] h-auto'>
                    <div className='w-[100%] md:w-[96%] topcartbox mx-auto h-auto grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 justify-around'>
                        {
                            data.isLoding == false ? (
                                data.items.filter(item => item.isPromotional == true).map((p) => {
                                    console.log(p)
                                    return (
                                        <>
                                            <div key={p} className='w-[160px] md:w-[230px] lg:w-[300px] xl:w-[340px] transition-all relative tpoCat md:h-[250px] lg:h-[400px] mb-10 md:mx-[10px]'>
                                                <div className='px-2 font-semibold md:text-xl absolute'>{p.productCategoryName}</div>
                                                <div className='w-[100%] h-[100%] flex flex-col'>
                                                    <div className='w-[100%] h-[90%] '>
                                                        <img className='w-[100%] h-[100%] '
                                                            src={p.image}
                                                            alt="" />
                                                    </div>
                                                    <div className='w-[100%] bg-white h-[15%] text-sm flex justify-center'>
                                                        <button
                                                            onClick={() => Shopnow(p.mainCategoryId)}
                                                            className='w-[100px] h-[30px] hover:border-transparent hover:text-white hover:bg-slate-300 border border-black rounded-full my-4'>
                                                            SHOP NOW
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })
                            ) : (null)

                        }

                    </div>
                </div>
            </div>
            {
                products1.isLoding == false ?
                    <BestSeller
                        setCatId={setCatId}
                        catId={catId}
                        products1={products1}
                        data={data}
                    />
                    : null
            }

        </>
    )
}


const BestSeller = ({ products1, data, setCatId, catId }) => {
    const [action, setAction] = useState(false)
    const dispetch = useDispatch()
    const [prods, setProds] = useState(null)
    const [removeClass, setRemovableClass] = useState()
    const handleChange = (classs) => {
        setRemovableClass(classs)
        selectedColor2(classs, removeClass)
    }
    const navigate = useNavigate()
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
    // const products = [1, 2, 3, 4]
    var myCls = 'prdcl'
    // const data = useSelector(state => state.navItems)
    const products = useSelector(state => state.products)
    useEffect(() => {
    }, ['', products1])
    console.log(products1.selectedCategry)
    var prlist = ''

    return (
        <>
            <div className='w-[100%] h-auto mt-[20px]'>
                <div className='w-[100%] h-auto flex place-content-center mb-1'>
                    <div className='text-[rgb(6,1,1)] text-[40px]'>BEST SELLER</div>
                </div>
                <div className='w-[100%] h-auto flex place-content-center'>
                    <div className='md:w-[90%] w-[100%] flex-wrap h-auto p-2 flex justify-between'>
                        <div className='BEST p-4'>
                            <ul className='flex '>
                                {
                                    data.isLoding == false ? (
                                        data.items.map((ct, index) => {
                                            return (
                                                <li
                                                    key={index}
                                                    onClick={() => setCatId(ct.mainCategoryId)}
                                                    className='md:px-[30px] besulli p-2 text-base md:text-lg cursor-pointer'>{ct.productCategoryName}</li>
                                            )
                                        })
                                    ) : (null)
                                }
                            </ul>
                        </div>
                        {/* rgba(21, 39, 66, 1) */}
                        <div className='p-4'>
                            <button
                                onClick={() => setCatId('')}
                                className='w-[60px] md:px-[30px] md:w-auto  h-[30px] hover:bg-slate-500 rounded md:h-[50px] text-xs md:text-xl text-white bg-[rgba(21,39,66,1)]'>Show All</button>
                        </div>
                    </div>
                </div>
                <div className='w-[98%] mx-auto h-auto'>
                    <div className='w-[95%] md:w-[100%] mx-auto h-auto grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-2'>
                        {

                            products1.isLoding == false ? (
                                products1.selectedCategry !== undefined ? (
                                    products1?.selectedCategry?.map((p, index2) => {
                                        if (p.colors[0]) {
                                            var pColors1 = Object.values(p?.colors[0]?.colorCode)
                                        }
                                        return (
                                            <>
                                                <div key={p} className='md:w-[230px] bstcart lg:w-[300px] xl:w-[340px] w-[160px] h-[300px] lg:h-[500px] md:h-[400px] mb-3 md:mx-[10px]'>
                                                    <div className='showBtn0 w-[100%] h-[100%] flex flex-col'>
                                                        <div className='w-[100%] md:h-[80%] h-[70%] relative overflow-hidden'>
                                                            {

                                                                p?.image[0] ? (
                                                                    <img className='absolute w-[100%] h-[100%] '
                                                                        src={p.image[0].image ? p.image[0].image : null} alt={p.productName} />
                                                                ) : (
                                                                    <img className='absolute w-[100%] h-[100%] '
                                                                        src={null} alt={p.productName} />
                                                                )
                                                            }
                                                            <div className='showBtn absolute mt-[227px] md:mt-[350px] lg:mt-[400px] z-10 w-[100%] h-[50px] '>
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
                                                            <div className='text-xs md:text-[20px]  w-[100%] flex place-content-center'>
                                                                <div className='w-[90%] text-sm'>
                                                                    {p.productName}
                                                                </div>
                                                            </div>
                                                            <div className='w-[100%] flex place-content-center'>
                                                                <div className='w-[90%] '>
                                                                    <span className='md:text-xl'>₹{p.productPrice}</span>
                                                                </div>
                                                            </div>
                                                            <div className='flex px-2'>
                                                                {
                                                                    pColors1 ? (
                                                                        pColors1.map((color, index) => {
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
                                ) : (null)

                            ) : (null)
                        }

                    </div>
                </div>
            </div>
        </>
    )
}