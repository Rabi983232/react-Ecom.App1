import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchNavItems } from '../features/navreducer/navreducer'
import { fetchCartItems } from '../features/cart/cartReducer'
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemPanel, AccordionItemHeading } from 'react-accessible-accordion'
import { publicRequest } from '../axios/axios'
import { fetchAddress } from '../features/address/address'

export default function Shiping() {
    const [addressId, setAddressId] = useState()
    const [reRenderPage, setreRenderPage] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const userData = JSON.parse(localStorage.getItem('user_Data'))
    const [shipingAddress, setShipingAddres] = useState({
        firstName: '',
        address: '',
        lastName: '',
        mobileNumber: '',
        email: '',
        locality: '',
        landMark: '',
        city: '',
        state: '',
        pinCode: '',
        country: '',
        addressTypeId: 1,
        userId: userData.user.userId

    })

    const cart_id = JSON.parse(localStorage.getItem(`ADD_Cart_ID`))
    const doNextTask = async (addrId) => {
        localStorage.setItem(`addressId`, JSON.stringify({ 'addressId': addrId }))
        dispatch(fetchNavItems())
        dispatch(fetchCartItems(cart_id.cartId))
        await navigate(`/biling`)
    }
    const handleChange = (e) => {

        setShipingAddres((prev) => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            }
        })
    }
    let tsm = 0;

    const handleSave = () => {
        publicRequest.post(`address`, shipingAddress).then((response) => {
            if (response.data.status == 200) {
                dispatch(fetchAddress(userData.user.userId))
                setreRenderPage(!reRenderPage)
            }
        })
        console.log(userData.user.userId)
        console.log(shipingAddress)
    }
    useEffect(() => {
        dispatch(fetchAddress(userData.user.userId))
    }, [reRenderPage])
    const addressLists = useSelector(state => state.addressList)
    console.log(addressLists)
    const cartItens = useSelector(state => state.cartItems)
    console.log(cartItens)
    if (cartItens.isLoding == false) {
        var ggg = cartItens.items.map((prize) => Number(prize.price))
        var ggg2 = cartItens.items.map((prize) => Number(prize.price))
        var QNTTs = cartItens.items.map((QNTT) => Number(QNTT.quantity))

    }
    console.log(ggg)
    return (
        <div className='w-[100%]'>
            <Navbar />
            <div className='bg-[#f7f5f7] shiping mx-auto w-[100%] md:w-[90%] h-auto mb-5 mt-[100px]'>
                <div className='flex flex-wrap w-[100%]'>
                    <div className='md:w-[70%] w-[100%] mt-4'>
                        <div className='w-[80%] text-base mt-3 flex mx-auto relative mb-[50px]'>
                            <div className='cursor-pointer w-[10px] h-[10px] bg-black mt-[-4px] rounded-full border border-black'>
                                <span className='absolute text-gray-400 mt-[5px] ml-[-50px]'>Shipping address</span>
                            </div>
                            <div className='md:w-[200px] w-[100px] border-[2px] border-b-[#f7f5f7] border-t-black'></div>
                            <div className='cursor-pointer w-[10px] mt-[-4px] h-[10px] rounded-full border border-black'>
                                <span className='absolute ml-[-16px] mt-[5px]'>Biling</span>
                            </div>
                            <div className='md:w-[200px] w-[120px] border-[2px] border-b-[#f7f5f7] border-t-black'></div>
                            <div className='w-[10px] cursor-pointer h-[10px] mt-[-4px] rounded-full border border-black'>
                                <span className='absolute mt-[5px] ml-[-37px]'>Conformation</span>
                            </div>
                        </div>
                        <div>
                            <div className='w-[95%] bg-[rgba(21,39,66,1)] flex border mx-auto md:float-right'>
                                {
                                    addressLists?.isLoding == false ? (
                                        <>
                                            <div className='m-3 py-1 px-2 bg-white rounded border'>{addressLists?.items.length}</div>
                                            <div className='m-3 py-2 px-2 text-white'>DELIVERY ADDRESS</div>
                                        </>
                                    ) : (null)
                                }
                            </div>
                            {
                                addressLists?.isLoding == false ? (
                                    addressLists?.items.length > 0 ? (
                                        addressLists?.items?.map((item, index) => {
                                            console.log(item)
                                            return (
                                                <div key={index} className='w-[95%] bg-white border p-3 my-2 mx-auto md:float-right'>
                                                    <div className='w-[100%] flex justify-between flex-wrap'>
                                                        <div className='flex'>
                                                            <div className='p-2'>
                                                                <input type="radio"
                                                                    onChange={() => setAddressId(item.addressId)}
                                                                    name="ADDRESS" id="" />
                                                            </div>
                                                            <div className='flex py-2'>
                                                                <div className='font-semibold px-3'>{item.firstName} {item.lastName}</div>
                                                                <div className='mx-2 border text-gray-500 bg-gray-300 px-2'>HOME</div>
                                                                <div className='px-2 font-semibold'>{item.mobileNumber}</div>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <button className='px-2 mx-1 border border-red-400 bg-red-100'>Remove</button>
                                                            {
                                                                item?.addressId == addressId ? (
                                                                    <button className='px-2 mx-1 border border-blue-400 bg-blue-100'>Edit</button>
                                                                ) : (null)
                                                            }
                                                            {/*  */}
                                                        </div>
                                                    </div>
                                                    <div className='w-[100%]'>
                                                        <div className='w-[95%] mx-auto font-500 text-lg'>
                                                            {`${item.address} ${item.locality} ${item.city} ${item.state} ${item.pinCode} (${item.country})`}
                                                        </div>
                                                        {
                                                            item?.addressId == addressId ? (
                                                                <button
                                                                    onClick={() => doNextTask(addressId)}
                                                                    className='m-2 mx-5 rounded text-white p-3 bg-orange-400 hover:bg-orange-300'>DELIVERY HERE</button>
                                                            ) : (null)
                                                        }

                                                    </div>
                                                </div>
                                            )
                                        })
                                    ) : (
                                        <div>You have not added any address</div>
                                    )
                                ) : (
                                    <div>Loding...</div>
                                )
                            }
                        </div>
                        <Accordion>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        <div className='w-[95%] bg-white mx-auto border border-black border-dashed my-4 py-3 md:float-right'>
                                            <button className='ml-[20px] font-medium'>
                                                + ADD ADDRESS
                                            </button>
                                        </div>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <div className='w-[95%] bg-white mb-4 py-8 mx-auto md:float-right mt-[50px]'>
                                        <div className='w-[95%] mb-8 mx-auto flex flex-wrap justify-around'>
                                            <div className='mr-1 w-[100%] mb-8 md:mb-0 md:w-[49%]'>
                                                <div className='px-2'>
                                                    <label htmlFor="fristName">Frist Name :</label>
                                                </div>
                                                <div>
                                                    <input
                                                        name='firstName'
                                                        value={shipingAddress.firstName}
                                                        className='w-[100%] p-3 bg-[#f7f5f7] fo h-[50px]' type="text"
                                                        placeholder='Enter frist name'
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>
                                            <div className='mr-1 w-[100%] md:w-[49%]'>
                                                <div className='px-2'>
                                                    <label htmlFor="fristName">Last Name :</label>
                                                </div>
                                                <div>
                                                    <input
                                                        name='lastName'
                                                        value={shipingAddress.lastName}
                                                        className='w-[100%] p-3 bg-[#f7f5f7] h-[50px]'
                                                        placeholder='Enter last name'
                                                        onChange={handleChange}
                                                        type="text" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='w-[100%] my-8 '>
                                            <div className='w-[95%] m-2 mx-auto'>
                                                <div className='px-2'>
                                                    <label htmlFor="fristName">Address :</label>
                                                </div>
                                                <div>
                                                    <input
                                                        name='address'
                                                        value={shipingAddress.address}
                                                        className='w-[100%] p-3 bg-[#f7f5f7] h-[50px]'
                                                        placeholder='Enter address'
                                                        onChange={handleChange}
                                                        type="text" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='w-[100%] my-8 '>
                                            <div className='w-[95%] m-2 mx-auto'>
                                                <div className='px-2'>
                                                    <label htmlFor="fristName">Email-ID :</label>
                                                </div>
                                                <div>
                                                    <input
                                                        name='email'
                                                        value={shipingAddress.email}
                                                        className='w-[100%] p-3 bg-[#f7f5f7] h-[50px]'
                                                        placeholder='Enter email address'
                                                        onChange={handleChange}
                                                        type="email" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='w-[100%] my-8'>
                                            <div className='w-[95%] m-2 mx-auto'>
                                                <div className='px-2'>
                                                    <label htmlFor="fristName">Locality :</label>
                                                </div>
                                                <div>
                                                    <input
                                                        name='locality'
                                                        value={shipingAddress.locality}
                                                        className='w-[100%] p-3 bg-[#f7f5f7] h-[50px]'
                                                        placeholder='Enter street name , etc'
                                                        onChange={handleChange}
                                                        type="text" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='w-[95%] my-8 mx-auto flex flex-wrap justify-around'>
                                            <div className='mr-1 w-[100%] mb-8 md:mb-0 md:w-[49%]'>
                                                <div className='px-2'>
                                                    <label htmlFor="fristName">Land Mark :</label>
                                                </div>
                                                <div>
                                                    <input
                                                        name='landMark'
                                                        value={shipingAddress.landMark}
                                                        className='w-[100%] p-3 bg-[#f7f5f7] h-[50px]'
                                                        placeholder='Enter city name'
                                                        onChange={handleChange}
                                                        type="text" />
                                                </div>
                                            </div>
                                            <div className='mr-1 w-[100%] md:w-[49%]'>
                                                <div className='px-2'>
                                                    <label htmlFor="fristName">Mobile Number :</label>
                                                </div>
                                                <div>
                                                    <input
                                                        name='mobileNumber'
                                                        value={shipingAddress.mobileNumber}
                                                        className='w-[100%] p-3 bg-[#f7f5f7] h-[50px]'
                                                        placeholder='Select State'
                                                        onChange={handleChange}
                                                        type="number" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='w-[95%] my-8 mx-auto flex flex-wrap justify-around'>
                                            <div className='mr-1 w-[100%] mb-8 md:mb-0 md:w-[49%]'>
                                                <div className='px-2'>
                                                    <label htmlFor="fristName">City :</label>
                                                </div>
                                                <div>
                                                    <input
                                                        name='city'
                                                        value={shipingAddress.city}
                                                        className='w-[100%] p-3 bg-[#f7f5f7] h-[50px]'
                                                        placeholder='Enter city name'
                                                        onChange={handleChange}
                                                        type="text" />
                                                </div>
                                            </div>
                                            <div className='mr-1 w-[100%] md:w-[49%]'>
                                                <div className='px-2'>
                                                    <label htmlFor="fristName">State :</label>
                                                </div>
                                                <div>
                                                    <input
                                                        name='state'
                                                        value={shipingAddress.state}
                                                        className='w-[100%] p-3 bg-[#f7f5f7] h-[50px]'
                                                        placeholder='Select State'
                                                        onChange={handleChange}
                                                        type="text" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='w-[95%] m-2 mx-auto flex flex-wrap justify-around'>
                                            <div className='mr-1 w-[100%] mb-8 md:mb-0 md:w-[49%]'>
                                                <div className='px-2'>
                                                    <label htmlFor="fristName">PIN Code :</label>
                                                </div>
                                                <div>
                                                    <input
                                                        name='pinCode'
                                                        value={shipingAddress.pinCode}
                                                        className='w-[100%] p-3 bg-[#f7f5f7] h-[50px]'
                                                        placeholder='Enter PIN code'
                                                        onChange={handleChange}
                                                        type="text" />
                                                </div>
                                            </div>
                                            <div className='mr-1 w-[100%] md:w-[49%]'>
                                                <div className='px-2'>
                                                    <label htmlFor="fristName">Country :</label>
                                                </div>
                                                <div>
                                                    <input
                                                        name='country'
                                                        value={shipingAddress.country}
                                                        className='w-[100%] p-3 bg-[#f7f5f7] h-[50px]'
                                                        placeholder='India'
                                                        onChange={handleChange}
                                                        type="text" />
                                                </div>
                                            </div>
                                        </div>
                                        <button
                                            onClick={handleSave}
                                            className=' mx-10 p-2 mx-auto bg-blue-500 rounded text-white'
                                        >Save Address</button>
                                    </div>
                                </AccordionItemPanel>
                            </AccordionItem>
                        </Accordion>
                        {/* //////////////   From   ///////////// */}

                        {/* //////////////   From   ///////////// */}
                    </div>
                    <div className='md:w-[30%] w-[100%] my-4'>
                        <div className='w-[100%] mt-[72px]'>
                            <div className='text-lg w-[90%] mx-4 my-4 bg-white px-4 py-2 '>Estimate Delivery by 9 June 2023</div>
                            <div className='mx-4 bg-white w-[90%] p-5'>
                                <div className='text-sm flex justify-between'>
                                    {
                                        ggg.forEach(num => {
                                            tsm += num
                                        })
                                    }
                                    <div>Sub total :</div>
                                    <div> ₹ {tsm}</div>
                                </div>
                                <di className='text-sm flex justify-between' v>
                                    <div>Discount amount :</div>
                                    <div> ₹ -0</div>
                                </di>
                                <div className='text-sm flex justify-between'>
                                    <div>Total Amount :</div>
                                    <div> ₹ {tsm}</div>
                                </div>
                                <hr className='w-[100%] mx-auto my-4'></hr>
                                <div className='text-lg flex justify-between'>
                                    <div className='font-semibold'>Total :</div>
                                    <div className='font-semibold'>₹ {tsm}</div>
                                </div>
                                <div className='w-[100%] flex h-auto justify-center'>
                                    <img className='m-[2px] border h-[30px] w-[60px]' src="https://www.logo.wine/a/logo/Mastercard/Mastercard-Logo.wine.svg" alt="" />
                                    <img className='m-[2px] border h-[30px] w-[60px]' src="https://www.logo.wine/a/logo/Visa_Inc./Visa_Inc.-Logo.wine.svg" alt="" />
                                    <img className='m-[2px] border h-[30px] w-[60px]' src="https://www.logo.wine/a/logo/PayPal/PayPal-Logo.wine.svg" alt="" />
                                    <img className='m-[2px] border h-[30px] w-[60px]' src="https://www.logo.wine/a/logo/Apple_Pay/Apple_Pay-Logo.wine.svg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
