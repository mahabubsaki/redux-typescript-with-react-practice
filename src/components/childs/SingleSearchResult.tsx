import React, { Dispatch } from 'react';
import { productInitialState } from '../../interface/interface';
import { BiUpvote } from 'react-icons/bi'
import { GiAlliedStar } from 'react-icons/gi'
import { checkIfBlack } from '../../utils/CheckIfBlack';
import { setModalFood, setModalStatus } from '../../reducers/singleProductSlice';
import { AnyAction } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { setVisible } from '../../reducers/SearchInputSlice';

const SingleSearchResult = ({ product }: { product: productInitialState }) => {
    const { idMeal, strMeal, cost, rating, votes, strMealThumb, productBg } = product
    const dispatch: Dispatch<AnyAction> = useDispatch()
    return (
        <div style={{ color: checkIfBlack(productBg) ? 'white' : 'black', backgroundColor: productBg }} className='p-2 flex justify-between items-center border rounded hover:bg-[#f7f5f2] duration-300 cursor-pointer' onClick={() => {
            dispatch(setModalStatus(true))
            dispatch(setModalFood(product))
            dispatch(setVisible(false))
        }}>
            <div>
                <img src={strMealThumb} alt="" className='w-[60px]' />
            </div>
            <p className='w-[30%] text-center'>{strMeal}</p>
            <p>Meal Id : {idMeal}</p>
            <div>
                <p className='flex items-center gap-1'><BiUpvote /> <span>{votes} Votes</span></p>
                <p className='flex items-center gap-1'><GiAlliedStar /> <span>{rating} Ratings</span></p>
            </div>
            <p>${cost}</p>
        </div>
    );
};

export default SingleSearchResult;