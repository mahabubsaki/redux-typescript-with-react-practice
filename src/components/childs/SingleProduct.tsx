import React, { Dispatch, useEffect, useMemo, useRef } from 'react';
import { productInitialState } from '../../interface/interface';
import { AiTwotoneStar, AiOutlineStar } from 'react-icons/ai'
import { useAppSelector } from '../../app/hooks';
import { useDispatch } from 'react-redux';
import { addToIdStore, removeFromIdStore } from '../../reducers/singleProductSlice';
import { AnyAction } from '@reduxjs/toolkit';

const SingleProduct = ({ product }: { product: productInitialState }) => {
    const { idMeal, strArea, strCategory, strTags, strMeal, strInstructions, strMealThumb, cost, productBg, rating, votes } = product
    const colors: string[] = ['#48639C', '#4C4C9D', '#712F79', '#976391', '#F7996E', '#412234', '#6D466B', '#B49FCC', '#EAD7D7', '']
    const idList: string[] = useAppSelector(state => state.singleProductSlice.foodId)
    const dispatch: Dispatch<AnyAction> = useDispatch()
    useEffect(() => {

    }, [])
    return (
        <div className={`shadow rounded-lg bg-[white] flex flex-col`}>
            <div>
                <img src={strMealThumb && strMealThumb} alt="" className='w-full h-full rounded-t-lg shadow-2xl' />
            </div>
            <div className='p-4'>
                <p className="my-3 text-3xl my-xl:text-[2rem] lg:text-[2.5rem] font-bold text-center">{strMeal}</p>
                <hr className='w-[90%] mx-auto border-[2px]' />
                <p className="my-3 text-[26px] my-xl:text-[28px] lg:text-[35px] text-center">Category : <span style={{ color: productBg, fontWeight: 'bold' }}>{strCategory}</span></p>
                <p className="my-3 text-[26px] my-xl:text-[28px] lg:text-[35px] text-center">Origin : <span style={{ color: productBg, fontWeight: 'bold' }}>{strArea === 'Unknown' ? 'Bengali' : strArea}</span></p>
                <p className='flex justify-center items-center my-3 text-2xl my-xl:text-[1rem] lg:text-[2rem]'>{new Array(rating).fill(rating).map((r, index) => <AiTwotoneStar style={{ color: productBg }} key={r + index} />)}{new Array(5 - rating).fill(5 - rating).map((r, index) => <AiOutlineStar className="text-[gray]" key={r + index} />)} <span className='ml-2'>({votes} votes)</span></p>
                {idList.includes(idMeal) ? <p>{strInstructions} <span className="ml-1 text-blue-600 hover:underline cursor-pointer" onClick={() => {
                    dispatch(removeFromIdStore(idMeal))
                }}>Show Less</span></p> : <p>{strInstructions.length < 200 ? strInstructions : `${strInstructions.slice(0, 200)}......`}<span className="ml-1 text-blue-600 hover:underline cursor-pointer" onClick={() => {
                    dispatch(addToIdStore(idMeal))
                }}>Read More</span></p>}
                <p className='text-center'>{strTags?.split(',').map(s => <span className="inline-block p-2 rounded bg-[#DFDFDE] m-2">#{s}</span>)}</p>
            </div>
        </div>
    );
};

export default SingleProduct;