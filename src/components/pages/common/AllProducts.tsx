
import React, { Dispatch, useEffect } from 'react';
import styles from '../../../styles/AllProduct.module.css'
import { useDishes } from '../../../hooks/useDishes';
import { FaSearch } from 'react-icons/fa';
import { MdArrowDropDown } from 'react-icons/md';
import { Select, InputGroup, InputLeftElement, Input } from '@chakra-ui/react'

import { catefories } from '../../../constant/variables';
import CombineProducts from '../../childs/CombineProducts';
import { useAppSelector } from '../../../app/hooks';
import { Pagination } from 'antd';
import { productInitialState } from '../../../interface/interface';
import { AnyAction } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { setCurrentCategory, setCurrentPage, setLoadingState, setPageSize, setSelectedProducts, setVisualProducts } from '../../../reducers/productSlice';

const AllProducts: () => JSX.Element = () => {
    useDishes()
    const dispatch: Dispatch<AnyAction> = useDispatch()
    const isLoading: boolean = useAppSelector(state => state.productSlice.isLoading)
    const products: productInitialState[] = useAppSelector(state => state.productSlice.products)
    const selectedProducts: productInitialState[] = useAppSelector(state => state.productSlice.selectedProducts)
    const currentPage: number = useAppSelector(state => state.productSlice.currentPage)
    const currentPageSize: number = useAppSelector(state => state.productSlice.pageSize)
    const currentCategory: string = useAppSelector(state => state.productSlice.category)


    const handlePagination = (current: number, pageSize: number): void => {
        dispatch(setLoadingState(true))
        let sliced;
        if (currentPageSize !== pageSize) {
            dispatch(setPageSize(pageSize))
            sliced = selectedProducts.slice(0, pageSize)
        } else {
            sliced = selectedProducts.slice(((current - 1) * pageSize), ((current - 1) * pageSize) + pageSize)
        }

        dispatch(setCurrentPage(currentPageSize !== pageSize ? 1 : current))
        dispatch(setVisualProducts(sliced))
        setTimeout(() => {
            dispatch(setLoadingState(false))
        }, 1000)
    }
    useEffect(() => {
        dispatch(setSelectedProducts(products))
        dispatch(setVisualProducts(products.slice(0, 10)))
        dispatch(setCurrentPage(1))
        dispatch(setPageSize(10))
    }, [products, dispatch])
    return (
        <div>
            <div className="sticky top-0 left-0 right-0 p-3 bg-[#f7f5f2]">
                <p className='text-center my-2 text-lg font-semibold'>Total {selectedProducts.length} Foods Found in {currentCategory === 'All' ? 'All' : currentCategory} Category</p>
                <div className='grid grid-cols-1 my-xl:grid-cols-2 gap-3 mb-4'>
                    <div>
                        <Select onChange={(e) => {
                            if (e.target.value) {
                                dispatch(setLoadingState(true))
                                let filtered = products.filter(pd => pd.strCategory === e.target.value)
                                if (e.target.value === 'all') {
                                    dispatch(setCurrentCategory('All'))
                                    dispatch(setSelectedProducts(products))
                                    filtered = products
                                } else {
                                    dispatch(setCurrentCategory(e.target.value))
                                    dispatch(setSelectedProducts(filtered))
                                }
                                dispatch(setCurrentPage(1))
                                dispatch(setVisualProducts(filtered.slice(0, currentPageSize)))
                                setTimeout(() => {
                                    dispatch(setLoadingState(false))
                                }, 1000)
                            }
                        }} icon={<MdArrowDropDown />} isDisabled={isLoading} placeholder='Select Food Category'>
                            <option value="all">All</option>
                            {catefories.map((c) => <option value={c}>{c}</option>)}

                        </Select>
                    </div>
                    <div>
                        <InputGroup>
                            <InputLeftElement
                                pointerEvents='none'
                                children={<FaSearch color='gray.300' />}
                            />
                            <Input disabled={isLoading} type='tel' placeholder='Search Food' />
                        </InputGroup>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <Pagination onChange={handlePagination} disabled={isLoading} defaultPageSize={10} pageSizeOptions={[10, 15, 20, 25, 30]} total={selectedProducts.length} size="default" current={currentPage} />
                </div>
            </div>
            <CombineProducts />
        </div>
    );
};

export default AllProducts;