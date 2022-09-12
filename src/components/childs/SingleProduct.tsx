import React, { MutableRefObject, useEffect, useMemo, useRef } from 'react';
import { productInitialState } from '../../interface/interface';
import { randomColor } from '../../utils/RandomColor';

const SingleProduct = ({ product }: { product: productInitialState }) => {
    const { idMeal, dateModified, strArea, strCategory, strCreativeCommonsConfirmed, strDrinkAlternate, strImageSource, strMeal, strInstructions, strMealThumb, cost, productBg } = product
    return (
        <div className={`border rounded flex flex-col p-3`} style={{ backgroundColor: productBg }}>
            <div>
                <img src={strMealThumb && strMealThumb} alt="" className='w-full h-full rounded-lg' />
            </div>

            {cost}
        </div>
    );
};

export default SingleProduct;