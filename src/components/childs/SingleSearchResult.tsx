import React from 'react';
import { productInitialState } from '../../interface/interface';
import { BiUpvote } from 'react-icons/bi'
import { GiAlliedStar } from 'react-icons/gi'
import { checkIfBlack } from '../../utils/CheckIfBlack';

const SingleSearchResult = ({ product }: { product: productInitialState }) => {
    const { idMeal, strMeal, cost, rating, votes, strMealThumb, productBg } = product
    return (
        <div style={{ color: checkIfBlack(productBg) ? 'white' : 'black', backgroundColor: productBg }} className='p-2 flex justify-between items-center border rounded hover:bg-[#f7f5f2] duration-300 cursor-pointer' onClick={() => alert('ss')}>
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