import { AiFillCaretRight } from "react-icons/ai";
import React from 'react'

export default function Blogs({ data }) {
    console.log(data)
    return (
        <>
            {
                data.map((img,index) => {
                    return (
                        <>
                            <div key={index} className='md:w-[50%] w-[100%] py-4'>
                                <div>
                                    <img src={img} alt="" />
                                </div>
                                <div>
                                    <div className='md:text-xl text-sm font-[400]'>Posted on December 31, 2021 Business</div>
                                    <div className='md:text-2xl py-4'>We speak to Aimer & Tatin Creative Fund Board Members</div>
                                    <div>
                                        <button >
                                            <div className='flex'>
                                                <div className='font-bold text-lg'>Read More</div>
                                                <div className='p-2'>
                                                    <AiFillCaretRight />
                                                </div>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })
            }

        </>
    )
}
