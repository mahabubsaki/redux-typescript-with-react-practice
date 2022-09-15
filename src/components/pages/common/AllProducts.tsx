import { AnyAction } from '@reduxjs/toolkit';
import React, { Dispatch, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../../app/hooks';
import { useDishes } from '../../../hooks/useDishes';
import { FaSearch } from 'react-icons/fa';
import { MdArrowDropDown } from 'react-icons/md';
import { Select, InputGroup, InputLeftElement, Input } from '@chakra-ui/react'
import { productInitialState } from '../../../interface/interface';
import { setLoadingState } from '../../../reducers/productSlice';
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
    return (
        <div>
            <div className="sticky top-0 left-0 right-0 h-[100px] bg-[#f7f5f2] flex flex-wrap items-center flex-col sm:flex-row">
                <div className="w-full sm:w-[50%]">
                    <Select onChange={(e) => { alert(e.target.value) }} icon={<MdArrowDropDown />} placeholder='Select option'>
                        <option value='option1'>Option 1</option>
                        <option value='option2'>Option 2</option>
                        <option value='option3'>Option 3</option>
                    </Select>
                </div>
                <div className="w-full sm:w-[50%]">
                    <InputGroup>
                        <InputLeftElement
                            pointerEvents='none'
                            children={<FaSearch color='gray.300' />}
                        />
                        <Input type='tel' placeholder='Phone number' />
                    </InputGroup>
                </div>
            </div>
            <div className="bg-[#d7d7d7] p-4 grid grid-cols-1  md:grid-cols-2 gap-5">
                {products.map(product => <SingleProduct product={product} />)}
            </div>
        </div>
    );
};

export default AllProducts;