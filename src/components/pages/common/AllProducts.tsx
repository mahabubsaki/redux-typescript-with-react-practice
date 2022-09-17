
import React from 'react';
import styles from '../../../styles/AllProduct.module.css'
import { useDishes } from '../../../hooks/useDishes';
import { FaSearch } from 'react-icons/fa';
import { MdArrowDropDown } from 'react-icons/md';
import { Select, InputGroup, InputLeftElement, Input } from '@chakra-ui/react'

import { catefories } from '../../../constant/variables';
import CombineProducts from '../../childs/CombineProducts';
import { useAppSelector } from '../../../app/hooks';
import { Pagination } from 'antd';

const AllProducts: () => JSX.Element = () => {
    const handlepage = () => {

    }
    const handlesize = () => {

    }
    useDishes()
    const isLoading: boolean = useAppSelector(state => state.productSlice.isLoading)
    return (
        <div>
            <div className="sticky top-0 left-0 right-0 p-3 bg-[#f7f5f2]">
                <div className='grid grid-cols-1 my-xl:grid-cols-2 gap-3 mb-4'>
                    <div>
                        <Select onChange={(e) => {
                            if (e.target.value) {
                                alert(e.target.value)
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
                    <div className={styles.SelectRange}>
                        <Select onChange={(e) => {
                            if (e.target.value) {
                                alert(e.target.value)
                            }
                        }} icon={<MdArrowDropDown />} isDisabled={isLoading} placeholder='Foods Per Page'>
                            <option value="10">10</option>
                            <option value="15">15</option>
                            <option value="20">20</option>
                            <option value="25">25</option>
                            <option value="30">30</option>
                        </Select>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <Pagination onChange={handlepage} disabled={isLoading} onShowSizeChange={handlesize} total={500} responsive={true} defaultCurrent={1} />
                </div>
            </div>
            <CombineProducts />
        </div>
    );
};

export default AllProducts;