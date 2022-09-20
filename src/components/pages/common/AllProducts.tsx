
import React, { Dispatch } from 'react';
import { useDishes } from '../../../hooks/useDishes';
import { useDisclosure } from '@chakra-ui/react'
import CombineProducts from '../../childs/CombineProducts';
import { AnyAction } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import SideDrawer from '../../childs/SideDrawer';
import FilterPart from '../../childs/FilterPart';
import { setVisible } from '../../../reducers/SearchInputSlice';

const AllProducts: () => JSX.Element = () => {
    useDishes()
    const { isOpen, onClose } = useDisclosure()
    const dispatch: Dispatch<AnyAction> = useDispatch()
    return (
        <div onClick={() => dispatch(setVisible(false))}>
            <FilterPart />
            <CombineProducts />
            <SideDrawer isOpen={isOpen} onClose={onClose} />
        </div>
    );
};

export default AllProducts;