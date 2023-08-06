import React, { useEffect, useState } from 'react'
import { hideFilter } from '../pagges/events'
import { useDispatch } from 'react-redux'
import { fetchFilterProduct } from '../features/productreducer/productSlice';

export default function FilterSideBar({ filterData, cat_Id, sizesss }) {
    // const [fcolors, setFcolors] = useState()
    const [sizeR, setSizesR] = useState()
    const dispetch = useDispatch()
    const [removeClass, setRemovableClass] = useState()
    const [price, setPrice] = useState(filterData.price.maxPrice)
    const [selectedSize, setselectedSize] = useState([]);
    const handleSize = (index, data) => {
        setRemovableClass(index)
        if (selectedSize.length > 0) {
            const dfg = selectedSize.find(res => res == data)
            if (dfg !== undefined) {
                setselectedSize((current) =>
                    current.filter((size) => size !== data)
                );
                const addClass = document.getElementsByClassName(index);
                addClass[0].classList.remove(`selectedSize`);
                setRemovableClass('')
            } else {
                const addClass = document.getElementsByClassName(index);
                addClass[0].classList.add("selectedSize");
                setselectedSize(current => [...current, data]);
            }
        } else {
            if (index == removeClass) {
                const addClass = document.getElementsByClassName(index);
                addClass[0].classList.remove(`selectedSize`);
                setselectedSize((current) =>
                    current.filter((size) => size !== data)
                );
                setRemovableClass('')
            } else {
                const addClass = document.getElementsByClassName(index);
                addClass[0].classList.add("selectedSize");
                setselectedSize(current => [...current, data]);
            }
        }
    }

    // let selectedColors = []
    console.log(filterData)

    const [selectedColors, setselectedColors] = useState([]);

    const filteredData = async (from, data) => {
        setRemovableClass(data)
        if (selectedColors.length > 0) {
            const dfg = selectedColors.find(res => res == data)
            if (dfg !== undefined) {
                setselectedColors((current) =>
                    current.filter((size) => size !== data)
                );
                setRemovableClass('')
            } else {
                setselectedColors(current => [...current, data]);
            }
        } else {
            if (data == removeClass) {
                setselectedColors((current) =>
                    current.filter((size) => size !== data)
                );
                setRemovableClass('')
            } else {
                setselectedColors(current => [...current, data]);
            }
        }
    }
    console.log(sizeR)
    const apply = () => {
        hideFilter('Apply')
        if (selectedColors.length > 0) {
            if (selectedSize.length > 0) {
                dispetch(fetchFilterProduct({
                    mainCategoryId: cat_Id,
                    colors: selectedColors,
                    size: selectedSize,
                    minPrice: filterData.price.minPrice,
                    maxPrice: price
                }))
            } else {
                dispetch(fetchFilterProduct({
                    mainCategoryId: cat_Id,
                    colors: selectedColors,
                    minPrice: filterData.price.minPrice,
                    maxPrice: price
                }))
            }
        } else if (selectedSize.length > 0) {
            if (selectedColors.length > 0) {
                dispetch(fetchFilterProduct({
                    mainCategoryId: cat_Id,
                    colors: selectedColors,
                    size: selectedSize,
                    minPrice: filterData.price.minPrice,
                    maxPrice: price
                }))
            } else {
                dispetch(fetchFilterProduct({
                    mainCategoryId: cat_Id,
                    size: selectedSize,
                    minPrice: filterData.price.minPrice,
                    maxPrice: price
                }))
            }
        } else {
            dispetch(fetchFilterProduct({
                mainCategoryId: cat_Id,
                // size: selectedSize,
                minPrice: filterData.price.minPrice,
                maxPrice: price
            }))
        }

    }
    useEffect(() => {
        setPrice(filterData.price.maxPrice)
        setselectedColors([])
        setselectedSize([])
    }, [filterData, cat_Id])

    const pColor = filterData.colors.map((cl) => {
        return (
            [cl.productColorCodeId, cl.color]
        )
    })
    return (
        <>
            <div className='md:block hidden md:w-[30%] filterContainer'>
                <div className='w-[100%]  bg-[#f7f5f7] h-auto border mr-1'>
                    <div>
                        <div className='w-[80%] gender border-b-slate-400 mx-auto pt-2 '>
                            <div className='text-lg font-semibold'>Size</div>
                        </div>
                        <div className={`genderItem text-xs py-4 mx-8 h-auto overflow-hidden`}>
                            {
                                sizesss?.map((item, index) => {
                                    return (
                                        <button
                                            onClick={() => handleSize(`size${index}`, item.productSizeCodeId)}
                                            className={`size${index} py-0 m-[5px] p-3 rounded border border-black`}>{item.sizeCode}</button>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className='w-[100%]'>
                        <div className='w-[80%] gender border-b-slate-400 mx-auto pt-2 '>
                            <div className='text-lg font-semibold'>Colors</div>
                        </div>
                        <div className={`w-[100%]h-auto mx-8 p-3 overflow-hidden`}>
                            {
                                pColor?.map((color, index) => {
                                    return (
                                        <>
                                            <input
                                                onChange={() => filteredData('color', color[0])}
                                                className='m-1' type="checkbox" name="color" id="ischecked" />
                                            <span key={index} className={`font-[bold]`}>{color[1]}</span> < br />
                                        </>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div>
                        <div className='w-[80%] gender border-b-slate-400 mx-auto pt-2 '>
                            <div className='text-lg font-semibold'> Price</div>
                            <div>
                                <div className='flex justify-between'>
                                    <div className='text-center'>Min <br />
                                        <input
                                            className='w-[60px] text-center rounded bg-white border border-gray-300'
                                            type="number"
                                            value={filterData.price.minPrice}
                                            disabled
                                        />
                                    </div>
                                    <div className='text-center'>Max <br />
                                        <input
                                            className='w-[80px] bg-white border border-gray-300 rounded px-2'
                                            type="number"
                                            value={price}
                                            disabled
                                        />
                                    </div>
                                </div>
                                <input className='text-center w-[100%]'
                                    type="range"
                                    name=""
                                    defaultValue={price}
                                    id="range"
                                    min={filterData.price.minPrice}
                                    max={filterData.price.maxPrice}
                                    onChange={(e) => setPrice(e.target.value)}
                                />
                            </div>

                        </div>
                    </div>
                    <div className='text-center text-white'>
                        <button
                            onClick={() => apply()}
                            className='m-2 p-2 border rounded bg-blue-500 px-4'>Apply</button>
                        <button
                            onClick={() => hideFilter('cancel')}
                            className='m-2 md:hidden p-2 border bg-red-500 rounded px-4'>Cancel</button>
                    </div>
                </div>
            </div>
        </>
    )
}
