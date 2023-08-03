import { TbCheck } from "react-icons/tb";
import React, { useEffect, useState } from 'react'

export function Colors({ setColor, colors, selectColor, from }) {
    const [removeClass, setRemovableClass] = useState()
    const handleChange = (classs, color) => {
        setColor(color)
        setRemovableClass(classs)
        selectColor(classs, removeClass)
    }
    setColor(colors[0])
    var myCls = 'cls'

    return (
        <>
            <div className='mx-2 w-[90%] h-auto flex'>
                {
                    colors.map((color, index) => {
                        return (
                            <>
                                <button
                                    onClick={() => handleChange(`${myCls}-${index}`, color)}
                                    key={index}
                                    style={{ backgroundColor: color }}
                                    className={`w-[30px] m-1 h-[30px] border rounded-full`}>
                                    <TbCheck className={`m-[2px] opacity-0 ${myCls}-${index}`} color='white' fontWeight={900} size={25} />
                                </button>
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}

export const ProductIMG = ({ imgArr }) => {
    if (imgArr[0]) {
        var [bigImage, setBigImage] = useState(imgArr[0]?.image)
    }
    useEffect(() => {
        if (imgArr[0]) {
            setBigImage(imgArr[0].image);
        }
    }, [imgArr])
    return (
        <>
            <div className='flex w-[100%] md:h-auto h-[300px] md:w-[50%] overflow-auto'>
                <div className='w-[100px] md:h-auto h-[300px] md:ml-[20px] h-auto overflow-auto'>
                    {
                        imgArr.map((img) => (
                            <div className='m-1'>
                                <img
                                    onClick={() => setBigImage(img.image)}
                                    src={img.image} alt="product Image" />
                            </div>
                        ))
                    }
                </div>
                <div className='w-[300px] md:w-[500px] md:h-auto h-[300px]'>
                    <img className="md:h-auto h-[300px]" src={bigImage ? bigImage : null} alt="product Image" />
                </div>
            </div>
        </>
    )
}


