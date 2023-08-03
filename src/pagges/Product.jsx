import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { AiOutlinePlus } from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";
import { BsFillShareFill } from "react-icons/bs";
import { BiConversation } from "react-icons/bi";
import { TbCheck } from "react-icons/tb";
import MyCollaps from '../components/MyCollaps';
import { Colors, ProductIMG } from '../components/Colors';
import { selectedColor, selectedColor2 } from './events';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNavItems } from '../features/navreducer/navreducer';
import { fetchProducts, fetchProductsByCategory, fetchProductsByCategoryAndP_id } from '../features/productreducer/productSlice';
import { fetchBannerImages } from '../features/Banner/BannerReducer'
import { ScaleLoader } from 'react-spinners';
import { publicRequest } from '../axios/axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Product() {
    const [price, setPrice] = useState()
    const [image, setImage] = useState()
    const [quentity, setQuentity] = useState(1)
    const [color, setColor] = useState()
    const [size, setSize] = useState()
    const [action, setAction] = useState(false)
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();
    const [rerender, setreRender] = useState(0)
    const retrievedObject = localStorage.getItem("productData");
    const productData = JSON.parse(retrievedObject)
    const data = useSelector(state => state.products)
    const navdata = useSelector(state => state.navItems)
    const pathData = location.pathname.split('/')
    useEffect(() => {
        dispatch(fetchProductsByCategory())
        dispatch(fetchNavItems())
        dispatch(fetchProducts())
        dispatch(fetchBannerImages())
        dispatch(fetchProductsByCategoryAndP_id(pathData[3]))
    }, [dispatch, rerender])
    const quickVeiw = (C_id, P_id) => {
        setAction(true)
        dispatch(fetchNavItems())
        const re = dispatch(fetchProductsByCategoryAndP_id(P_id))
        Promise.all([re]).then((res) => {
            let productData = res[0].payload;
            localStorage.setItem("productData", JSON.stringify(productData[0]))
            navigate(`/product/${C_id}/${P_id}`)
            setreRender(rerender + 1)
            setAction(false)
        })
    }
    const addTocart = () => {
        if (size == undefined) {
            toast.warning('please choose a size', { theme: "colored", position: "top-center" })
        } else {
            const productData = JSON.parse(localStorage.getItem(`productData`))
            // console.log({
            //     'productData': productData.productId,
            //     'image': image,
            //     'quentity': quentity,
            //     'color': color,
            //     'size': size,
            //     'price': price * quentity
            // })
            const userInfo = JSON.parse(localStorage.getItem(`user_Data`))
            const cart_id = JSON.parse(localStorage.getItem(`ADD_Cart_ID`))
            // console.log(cart_id)
            if (userInfo) {
                const re = dispatch(fetchNavItems())
                Promise.all([re]).then((res) => {
                    const rd = localStorage.setItem(`addToCart`, JSON.stringify({ 'userId': userInfo.user.userId }))
                    Promise.all([rd]).then(() => {
                        // console.log(quentity)
                        console.log("size " + size)
                        publicRequest.post(`carts/addToCart`, {
                            'cartId': cart_id.cartId,
                            'productId': productData.productId,
                            'image': image,
                            'quantity': quentity,
                            'color': color,
                            'sizeCode': size,
                            'price': price * quentity
                        }).then((respon) => {
                            console.log(respon)
                            if (respon.data.status == 200) {
                                toast.success(respon.data.msg, { theme: "colored", position: "top-center" })
                                setreRender(rerender + 1)
                            }
                            if (respon.data.status == 400) {
                                toast.info(respon.data.msg, { theme: "colored", position: "top-center" })
                            }
                            Toggle('add')
                        })
                    })
                })
            } else {
                localStorage.setItem(`cartData`, JSON.stringify(
                    {
                        'productDataID': productData.productId,
                        'image': image,
                        'quentity': quentity,
                        'color': color,
                        'size': size,
                        'price': price * quentity
                    }
                ))
                const rd = localStorage.setItem(`addToCart`, JSON.stringify({ 'action': 'addToCart' }))
                Promise.all([rd]).then(() => {
                    navigate(`/login`)
                })
            }

        }
    }
    console.log(data)
    console.log('setSize : ' + setSize)

    return (

        <>
            {
                data.isLoding === false ? (
                    <Products
                        rerender={rerender}
                        setPrice={setPrice}
                        setImage={setImage}
                        quentity={quentity}
                        setQuentity={setQuentity}
                        setColor={setColor}
                        setSize={setSize}
                        addTocart={addTocart}
                        quickVeiw={quickVeiw}
                        data={navdata.items}
                        action={action}
                        productData={productData}
                        prod={data.items}
                    />
                ) : null
            }
        </>

    )
}

const Products = ({
    rerender,
    setPrice,
    setImage,
    quentity,
    setQuentity,
    setSize,
    setColor,
    productData,
    data, prod,
    addTocart,
    action,
    quickVeiw }) => {
    console.log(prod)
    // const colours = Object.values(productData.colors[0].colorCode)
    if (productData.image[0]) {
        setImage(productData.image[0].image)
    }
    if (productData.productPrice) {
        setPrice(productData.productPrice)
    }
    if (productData.colors[0]) {
        var colours = Object.values(productData.colors[0].colorCode)
        var Sizes = productData.colors[0].sizes
        // setColor(productData.colors[0].productColorMasterId)
    }
    console.log("productData")
    console.log(productData)
    const collapsData = [productData.features, productData.reviewRatings, productData.shippingReturnsInfo, productData.warrentyInfo]
    var myCls = 'prdcl'
    const handleChange = (classs) => {
        setRemovableClass(classs)
        selectedColor2(classs, removeClass)
    }
    useEffect(() => {

    }, [rerender])
    return (
        <div className='w-[100%]'>
            <Navbar data={data} />
            <div className='my-[50px]'>
                {/* <button className='mb-5 px-5 bg-[#f7f5f7]'>
                    <Link to="/">Home</Link><span className='p-2'>|</span>
                    <Link to="#">Man</Link><span className='p-2'>|</span>
                    <Link to="#">Jackets</Link>
                </button> */}
                {
                    productData ? (
                        <>
                            <div className='flex flex-wrap mb-[50px]'>
                                <ProductIMG imgArr={productData.image} />
                                <div className='w-[100%] md:w-[50%]'>
                                    <div className='flex justify-between p-2 w-[95%] mt-4'>
                                        <div className=''>
                                            <div className='text-3xl font-bold'>{productData.productName}</div>
                                            <div className='text-gray-400 text-lg'>{productData.shortDescription}</div>
                                            <div>
                                                <b className='p-1 text-3xl'>₹ {productData.productPrice}</b>
                                            </div>
                                        </div>
                                        <div>
                                            <div>
                                                <button className='p-2 m-1 bg-[#f7f5f7]'>
                                                    <BsBookmark />
                                                </button>
                                                <button className='p-2 m-1 bg-[#f7f5f7]'>
                                                    <BsFillShareFill />
                                                </button>
                                            </div>
                                            <div>
                                                <button className='flex p-2 m-1 bg-[#f7f5f7]'>
                                                    <BiConversation size={25} /><b>{productData.reviewRatings.length} Review</b>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className='bg-gray-400 mx-auto w-[97%]' />
                                    <div className='w-[100%] p-2'>
                                        <div className='px-2'>Colors</div>
                                        {
                                            colours ? (
                                                <Colors setColor={setColor} colors={colours} selectColor={selectedColor} />
                                            ) : (null)
                                        }
                                        <hr className='bg-gray-400 my-2 mx-auto w-[97%]' />
                                    </div>
                                    <div className='w-[100%] p-2'>
                                        <div className='px-2'>Sizes</div>
                                        <div className='flex flex-wrap'>
                                            {
                                                Sizes ? (
                                                    Sizes.map((size, index) => {
                                                        return (
                                                            <button key={index} className='bg-[#f7f5f7] p-2 m-1'>
                                                                <input
                                                                    onChange={() => setSize(size.sizeCode.sizeCode)}
                                                                    className='mx-2' type="radio" name="size" id="" />
                                                                <span>{size.sizeCode.sizeCode}</span>
                                                            </button>
                                                        )
                                                    })
                                                ) : (
                                                    <div>no sizes !!</div>
                                                )
                                            }
                                        </div>
                                        <hr className='bg-gray-400 my-2 mx-auto w-[97%]' />
                                    </div>
                                    <div>
                                        <div className='flex'>
                                            <div className='increament mx-5 md:mx-10 px-4'>
                                                {
                                                    quentity > 1 ? (
                                                        <button onClick={() => setQuentity(quentity - 1)}>−</button>
                                                    ) : (
                                                        <button>−</button>
                                                    )
                                                }

                                                <button>{quentity}</button>
                                                <button onClick={() => setQuentity(quentity + 1)}>+</button>
                                            </div>
                                            <div>
                                                <button
                                                    onClick={addTocart}
                                                    className='w-[200px] p-2 rounded-full text-white bg-[rgba(21,39,66,1)]'>Add To Cart</button>
                                            </div>
                                        </div>
                                        <div className='m-6 font-bold underline'>ENQUIRY FOR BULK ORDER </div>
                                        <hr className='bg-gray-400 my-2 mx-auto w-[97%]' />
                                    </div>
                                    <div className='w-[100%]'>
                                        <MyCollaps arrr={collapsData} Pbutton={AiOutlinePlus} />
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : (null)
                }
                <div className='w-[100%]'>
                    <div className='m-4 md:px-10 md:text-4xl font-bold'>Product you may like</div>
                    <div className='w-[93%] md:w-[90%] mx-auto h-auto flex flex-wrap md:gap-2 gap-4 justify-start'></div>
                    <div className='w-[90%] lg:w-[96%] md:w-[98%] mx-auto h-auto flex flex-wrap md:gap-2 gap-4 justify-start'>
                        {
                            prod.length > 0 ? (
                                prod.map((p, index2) => {
                                    if (p.colors[0]?.colorCode) {
                                        var pColors = Object.values(p?.colors[0]?.colorCode)
                                    }
                                    return (
                                        <>
                                            <div key={p} className='md:w-[300px] lg:w-[265px] w-[160px] PymLike h-[300px] md:h-[500px] mb-3 md:mx-[10px]'>
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
                                                                <span className='md:text-xl'>₹ {p.productPrice}</span>
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
                            ) : (null)
                        }
                    </div>
                </div>
            </div>
            <ToastContainer position="top-left" theme="colored" />
            <Footer />
        </div>
    )
}
