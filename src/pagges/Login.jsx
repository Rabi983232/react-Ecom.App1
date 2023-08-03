import React, { useState } from 'react'
import img1 from '../assets/iamges/log in image.jpg'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useSelector, useDispatch } from 'react-redux'
import { fetchNavItems } from '../features/navreducer/navreducer';
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { publicRequest } from '../axios/axios'

export default function Login() {
  const [userName, setUserName] = useState()
  const [password, setPassword] = useState()
  const navigate = useNavigate()
  const dispetch = useDispatch()
  const data = useSelector(state => state.navItems)
  const wTd = JSON.parse(localStorage.getItem(`addToCart`))
  const handleLogin = () => {
    if (!userName || !password) {
      toast.warning("Please enter both username and password ", { theme: "colored", position: "top-center" })
    } else {
      publicRequest.post(`users/login`, {
        emailId: userName,
        password: password
      }).then((res) => {
        if (res?.data?.status == '200') {
          publicRequest.post(`cartMaster`, { 'userId': res.data.user.userId })
            .then((respn) => {
              // ADD_Cart_ID
              // console.log(respn.data.cartId)
              // ADD_Cart_ID
              const atcid = localStorage.setItem(`ADD_Cart_ID`, JSON.stringify(respn?.data));

              Promise.all([atcid]).then(() => {
                console.log(respn?.data)
                const re = localStorage.setItem('user_Data', JSON.stringify(res?.data));
                Promise.all([re]).then((resp) => {
                  setTimeout(() => {
                    localStorage.clear()
                  }, 24 * (60 * 1000))
                  console.log(24 * (60 * 1000))
                  // console.log(resp)
                  if (wTd !== null) {
                    const remv = localStorage.removeItem(`addToCart`)
                    Promise.all([remv]).then(() => {
                      const rd = localStorage.setItem(`addToCart`, JSON.stringify({ "userId": res.data.user.userId }))
                      const cartData = JSON.parse(localStorage.getItem(`cartData`))
                      publicRequest.post(`carts/addToCart`, {
                        'cartId': respn.data.cartId,
                        'productId': cartData.productDataID,
                        'quantity': cartData.quentity,
                        'color': cartData.color,
                        'sizeCode': cartData.size,
                        'price': cartData.price * cartData.quentity,
                        'image': cartData.image
                      }).then((response) => {
                        // console.log(response)
                        if (response.status == 200) {
                          toast.success(response.msg, { theme: "colored", position: "top-left" })
                          navigate(`/`)
                        }
                      })
                    })
                  } else {
                    navigate(`/`)
                  }
                })
              })
            })
        }
      })
    }
  }

  const movetoSignUp = () => {
    const re = dispetch(fetchNavItems())
    Promise.all([re]).then((res) => {
      navigate(`/signUp`)
    })
  }
  // console.log(wTd)

  return (
    <>
      <div className='w-[100%]'>
        <Navbar />
        <div className='w-[100%] h-auto mb-5 '>
          <div className='w-[90%] md:w-[70%] mx-auto mt-[50px] h-auto md:h-[82vh] overflow-hidden rounded shadow-[4px_5px_80px_rgba(0,0,0,0.3)]'>
            <div className='w-[100%] h-[auto] flex flex-wrap '>
              <div className='w-[95%] pt-3 md:pt-0 mx-auto md:mx-0 md:w-[55%] h-auto md:h-[100%]'>
                <img className='w-[100%] h-[100%]' src={img1} alt="" />
              </div>
              <div className='w-[98%] md:w-[45%] h-auto md:h-[100%] p-0'>
                <div className='text-center p-4 text-2xl font-semibold md:font-[400]'>LOGIN TO YOUR ACCOUNT</div>
                <div className='m-4'>
                  <div className=' w-[100%] pb-[20px] md:pb-[10px]'>
                    <div className='text-sm md:text-xl font-semibold md:pt-4 pt-2 pb-2 text-gray-500'>
                      <label htmlFor="fname">User Name</label>
                    </div>
                    <div>
                      <input className='w-[95%] md:w-[90%] bg-[#eee] rounded px-2 h-[35px] md:h-[50px]'
                        name='userName'
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        type="text" />
                    </div>
                  </div>
                  <div className=' w-[100%] pb-[20px] md:pb-[10px]'>
                    <div className='text-sm md:text-xl font-semibold md:pt-4 pt-2 pb-2 text-gray-500'>
                      <label htmlFor="fname">Password</label>
                    </div>
                    <div>
                      <input className='w-[95%] md:w-[90%] bg-[#eee] rounded px-2 h-[35px] md:h-[50px]'
                        name='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password" />
                    </div>
                  </div>
                  <div className='py-2 md:py-[2px] relative'>
                    <button
                      onClick={handleLogin}
                      className='md:px-[60px] px-[20px] ml-[5px] md:ml-[7px] text-sm md:text-xl mt-[3px] md:mt-[4px] border-black absolute rounded-full py-1 md:py-2 border'>Login</button>
                    <button
                      onClick={handleLogin}
                      className='px-[20px] md:px-[60px] bg-[#032357] text-sm md:text-xl text-white absolute rounded-full py-1 md:py-2 border'>Login</button>
                  </div>
                  <div className='md:py-[50px] py-[20px]'>
                    <div className='md:pb-[15px] py-4 flex '>
                      <div className='w-[125px] relative text-end md:w-[200px] border mx-2 border-gray-400'>
                        <span className='absolute text-[12px] ml-[1px] font-bold mt-[-15px]'>OR</span>
                      </div>
                      <div className='w-[125px] relative text-start md:w-[200px] border mx-2 border-gray-400'></div>
                    </div>
                    <div >
                      <div className='flex place-content-center flex-wrap'>
                        <div className='mx-2'>
                          <button className='border hover:text-white rounded-full border-[#146dd9] md:px-4 hover:bg-[#146dd9]'>
                            <div className='flex '>
                              <div>
                                <img className='w-[20px] md:w-[15px] m-[2px] md:my-2' src="https://img.icons8.com/?size=1x&id=17949&format=png" alt="" />
                              </div>
                              <div className='md:py-2 p-[5px] text-xs md:text-[13px]'>Google</div>
                            </div>
                          </button>
                        </div>
                        <div className='mx-2'>
                          <button className='border hover:text-white border-[#146dd9] rounded-full md:px-4 hover:bg-[#146dd9]'>
                            <div className='flex hover:text-white'>
                              <div>
                                <img className='w-[20px] md:w-[15px] m-[2px] md:my-2' src="https://img.icons8.com/?size=1x&id=118497&format=png" alt="" />
                              </div>
                              <div className='md:py-[4px] p-[5px] text-xs md:text-sm'>Facebook</div>
                            </div>
                          </button>
                        </div>
                      </div>
                      <div>
                        <div className='text-[8px] md:text-sm text-gray-400 font-semibold text-center'>Have no account yet ?</div>
                        <div className='text-center hover:text-white'>
                          <b onClick={movetoSignUp}>
                            <button className='md:p-2 p-1 my-[2px] md:my-2 text-xs w-[110px] border border-gray-600 rounded-full hover:border-none hover:bg-blue-700 md:w-[350px]'>Registration</button>
                          </b>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer position="top-left" theme="colored" />
        <Footer />
      </div>
    </>
  )
}
