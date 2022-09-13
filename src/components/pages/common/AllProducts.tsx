import { AnyAction } from '@reduxjs/toolkit';
import React, { Dispatch, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../../app/hooks';
import { useDishes } from '../../../hooks/useDishes';
import { productInitialState } from '../../../interface/interface';
import { setFullProduct, setLoadingState } from '../../../reducers/productSlice';
import ProductLoader from '../../../utils/ProductLoader';
import SingleProduct from '../../childs/SingleProduct';

const AllProducts: () => JSX.Element = () => {
    useDishes()
    const isLoading: boolean = useAppSelector(state => state.productSlice.isLoading)
    const products: productInitialState[] = useAppSelector(state => state.productSlice.products)
    const dispatch: Dispatch<AnyAction> = useDispatch()
    useEffect(() => {
        dispatch(setLoadingState(true))
    }, [])

    if (isLoading) {
        return <ProductLoader />
    }
    console.log(products);
    return (
        <div className="bg-[#d7d7d7] p-4 grid grid-cols-1  md:grid-cols-2 gap-5">
            {products.map(product => <SingleProduct product={product} />)}
        </div>
    );
};

export default AllProducts;