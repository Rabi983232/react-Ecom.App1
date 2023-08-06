import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { publicRequest } from '../axios/axios'
import { useDispatch, useSelector } from 'react-redux'
import { fetchNavItems } from '../features/navreducer/navreducer'
import { fetchCartItems } from '../features/cart/cartReducer'
import swal from 'sweetalert'
import { Link } from 'react-router-dom';
import { fetchCouponList } from '../features/coupon/counpon'


const CartProducts = ({ reRender, setReRender, ggg, ggg2, QNTTs, arr, from }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    console.log(arr)
    console.log(ggg)
    const [couponCode, setCouponCode] = useState()
    const [reLoad, setReload] = useState(false)
    console.log(QNTTs)
    // console.log(artObj)
    const [btnName, setBtnName] = useState()
    const [url, setUrl] = useState()
    useEffect(() => {
        if (from == 'card') {
            setBtnName('Place order')
            setUrl('shiping')
        } else if (from == 'biling') {
            setBtnName('PAYMENT')
            setUrl('conformation')
        }
        // console.log(QNTTs)
    }, [reLoad])
    let tsm = 0;
    const cart_id = JSON.parse(localStorage.getItem(`ADD_Cart_ID`))
    const reSetPrice = (index1, index2, action, cartProductId) => {
        // alert(cartProductId)
        if (action == 'add') {
            console.log(arr[index1].product.productPrice)
            ggg[index1] = ggg[index1] + arr[index1].product.productPrice
            publicRequest.post(`carts/updateCartItem`, {
                cartProductId: cartProductId,
                quantity: QNTTs[index1],
                price: ggg[index1]
            }).then((response) => {
                console.log(response)
            })
            // console.log()
        }
        if (action == 'sub') {
            console.log(arr[index1].product)
            ggg[index1] = ggg[index1] - arr[index1].product.productPrice
            publicRequest.post(`carts/updateCartItem`, {
                cartProductId: cartProductId,
                quantity: QNTTs[index1],
                price: ggg[index1]
            }).then((response) => {
                console.log(response)
            })
            // console.log({
            //     cartProductId: cartProductId,
            //     quantity: QNTTs[index1],
            //     price: ggg[index1]
            // })
        }
    }
    const addToQUENT = async (index, action, cartProductId) => {
        if (action == 'add') {
            setReload(!reLoad)
            // console.log(QNTTs)
            // console.log(Number(QNTTs[index]))
            QNTTs[index] += 1;
            await reSetPrice(index, QNTTs[index], 'add', cartProductId)
        }
        if (action == 'sub') {
            setReload(!reLoad)
            QNTTs[index] -= 1;
            await reSetPrice(index, QNTTs[index], 'sub', cartProductId)
        }
        if (action == 'remove') {
            setReRender(!reRender)
            await publicRequest.post(`carts/deleteCartItem`, { cartProductId: cartProductId }).then(res => console.log(res))
        }
        // alert(index)

    }

    const doNextTask = async (nextTask, amount) => {
        if (nextTask == 'Place order') {
            // alert(nextTask)
            localStorage.setItem('cartProducts', JSON.stringify(ggg))
            dispatch(fetchNavItems())
            dispatch(fetchCartItems(cart_id.cartId))
            await navigate(`/${url}`)
        }
        if (nextTask == 'PAYMENT') {
            localStorage.setItem('payableAmount', JSON.stringify({ 'payableAmount': amount }))
            // alert(amount)
            dispatch(fetchNavItems())
            dispatch(fetchCartItems(cart_id.cartId))
            await navigate(`/${url}`)
        }
    }
    const applyCouponCode = () => {
        // dispatch(fetchCouponList(couponCode))
        publicRequest.post(`coupon/getCouponList`, {
            couponCode: couponCode
        }).then((res)=>{
            if (res.data.data.length > 0) {
                dispatch(fetchCouponList(couponCode))
            } else {
                // alert('   ')
                swal("Oops!", "Coupon Code is invalid!", "error");
            }
        })
    }
    const couponData = useSelector(state => state.couponData)
    console.log(couponData)
    useEffect(() => {
        console.log(couponData)
    }, [couponData])
    // arr[0].quantity = 3;
    return (
        <>
            <div className='md:w-[60%] w-[100%]'>
                {
                    arr.map((p, index) => {
                        return (
                            <>
                                <div key={p} className='flex shadow-2xl mb-1 flex-wrap justify-between bg-white p-2'>
                                    <div className='flex'>
                                        <div className=''>
                                            <img className='md:w-[100px] w-[60px] h-auto' src={p?.image} alt="prodactImage" />
                                        </div>
                                        <div className='pl-2'>
                                            <div className='text-sm font-semibold'>{p?.product?.productName}</div>
                                            <div className='text-xs text-gray-500'>Size: {p?.sizeCode} Color: {p?.color}</div>
                                            <div className='mt-2 text-xs md:text-sm'>
                                                {
                                                    from == 'biling' ? (null) : (
                                                        <>
                                                            <button
                                                                onClick={() => addToQUENT(index, 'remove', p.cartProductId)}
                                                                className='px-2 py-1 m-1 bg-white border text-red-600 rounded-full'>Remove</button>
                                                            <button className='px-2 py-1 m-1 bg-white border rounded-full'>Save for later</button>
                                                        </>
                                                    )
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    <div className='md:mt-4 md:w-auto w-[90%] md:block flex justify-between'>
                                        <div className='font-bold text-center'>₹ {ggg[index]}</div>
                                        {
                                            from == 'biling' ? (null) : (
                                                <div className='flex md:m-2'>
                                                    <div className='md:px-2 py-0 px-1 cursor-pointer border rounded border-black text-sm md:text-lg'>
                                                        {
                                                            QNTTs[index] > 1 ? (
                                                                <button
                                                                    onClick={() => addToQUENT(index, 'sub', p.cartProductId)}
                                                                    className='w-[100%] h-[100%]'>−</button>
                                                            ) : (
                                                                <button
                                                                    // onClick={() => addToQUENT(index, 'sub', p.cartProductId)}
                                                                    className='w-[100%] h-[100%]'>−</button>
                                                            )
                                                        }

                                                    </div>
                                                    <div className='md:px-2 font-bold px-1'>{QNTTs[index]}</div>
                                                    <button
                                                        onClick={() => addToQUENT(index, 'add', p.cartProductId)}
                                                        className='md:px-2 px-1 py-0 cursor-pointer rounded border border-black text-sm md:text-lg'>+</button>

                                                </div>
                                            )
                                        }

                                    </div>
                                </div>
                            </>
                        )
                    })
                }
                <div>
                    <button className='py-2 px-4 rounded shadow-2xl border border-black relative bg-white'>
                        <Link to="/"><span className='font-bold'>←</span> Back to Shop</Link></button>
                </div>
            </div>
            <div className='mx-2 w-[90%] md:w-[35%]'>
                {
                    from == 'biling' ? (
                        <>
                            {/* <div className='p-2 text-sm'>
                                Enter your coupon code Get 10% OFF on your first order down below</div>
                            <div className='px-2 m-2 bg-gray-200 md:w-[90%]'>
                                <input className='p-2 bg-transparent w-[85%]' type="text" readOnly value={`LA9LD1347AD4L`}></input><button className='mx-1'>copy</button>
                            </div> */}
                            <div className='m-2 p-3 bg-white md:w-[90%]'>
                                <div>Have a coupon?</div>
                                <div className='w-[100%] border'>
                                    <input
                                        id='couponCode'
                                        value={couponCode}
                                        onChange={(e) => setCouponCode(e.target.value)}
                                        className='p-2 w-[80%]' type="text" placeholder='Add coupon code' />
                                    <button
                                        onClick={applyCouponCode}
                                        className='mx-1'>Apply</button>
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className='mx-2 p-2 text-sm'>ORDER SUMMARY</div>
                    )
                }
                <div className='mx-2 shadow-2xl bg-white md:w-[90%] p-5'>
                    <div className='text-sm flex justify-between'>
                        {
                            ggg.forEach(num => {
                                tsm += num
                            })
                        }
                        <div>Sub total :</div>
                        <div> ₹ {tsm}</div>
                    </div>
                    <div className='text-sm flex justify-between' >
                        <div>Discount amount :</div>
                        {
                            couponData?.coupon?.data?.data.length > 0 ? (
                                couponData?.coupon?.data?.data[0].isActive == true ? (
                                    <>
                                        <div> ₹ {tsm - couponData?.coupon?.data?.data[0].discountAmount}</div>
                                        {/* discountAmount */}
                                    </>
                                ) : (<div> ₹ {tsm - 0}</div>)
                            ) : (<div> ₹ {tsm - 0}</div>)
                        }
                    </div>
                    <div className='text-sm flex justify-between'>
                        <div>Total Amount :</div>
                        {
                            couponData?.coupon?.data?.data.length > 0 ? (
                                couponData?.coupon?.data?.data[0].isActive == true ? (
                                    <>
                                        <div> ₹ {tsm - couponData?.coupon?.data?.data[0].discountAmount}</div>
                                        {/* discountAmount */}
                                    </>
                                ) : (<div> ₹ {tsm - 0}</div>)
                            ) : (<div>
                                 ₹ {tsm - 0}
                                 </div>)
                        }
                    </div>
                    <hr className='w-[100%] mx-auto my-4'></hr>
                    <div className='text-lg flex justify-between'>
                        <div className='font-semibold'>Total Amount:</div>
                        {
                            couponData?.coupon?.data?.data.length > 0 ? (
                                couponData?.coupon?.data?.data[0].isActive == true ? (
                                    <>
                                        <div> ₹ {tsm - couponData?.coupon?.data?.data[0].discountAmount}</div>
                                        {/* discountAmount */}
                                    </>
                                ) : (<div> ₹ {tsm - 0}</div>)
                            ) : (<div> ₹ {tsm - 0}</div>)
                        }
                    </div>
                    <div className='md:text-center md:p-4 mb-[30px] text-end text-white'>
                        <button
                            onClick={() => doNextTask(btnName, tsm)}
                            className='py-2 mt-[40px] md:hidden px-8 bg-[rgba(21,39,66,1)] border rounded-full'>{btnName}</button>
                        <button
                            onClick={() => doNextTask(btnName, tsm)}
                            className='py-4 md:block hidden md:text-sm md:px-[30px] xl:px-[90px] bg-[rgba(21,39,66,1)] border rounded-full'>{btnName}</button>
                    </div>
                    <div className='w-[100%] flex h-auto justify-center'>
                        <img className='m-[2px] border h-[30px] w-[60px]' src="https://www.logo.wine/a/logo/Mastercard/Mastercard-Logo.wine.svg" alt="" />
                        <img className='m-[2px] border h-[30px] w-[60px]' src="https://www.logo.wine/a/logo/Visa_Inc./Visa_Inc.-Logo.wine.svg" alt="" />
                        <img className='m-[2px] border h-[30px] w-[60px]' src="https://www.logo.wine/a/logo/PayPal/PayPal-Logo.wine.svg" alt="" />
                        <img className='m-[2px] border h-[30px] w-[60px]' src="https://www.logo.wine/a/logo/Apple_Pay/Apple_Pay-Logo.wine.svg" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}
export default CartProducts;
