
import React, { Dispatch, useState } from 'react';
import { useDishes } from '../../../hooks/useDishes';
import { useDisclosure } from '@chakra-ui/react'
import CombineProducts from '../../childs/CombineProducts';
import { AnyAction } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import SideDrawer from '../../childs/SideDrawer';
import FilterPart from '../../childs/FilterPart';
import { setVisible } from '../../../reducers/SearchInputSlice';
import { Button, Modal } from 'antd';
import { useAppSelector } from '../../../app/hooks';
import { setModalFood, setModalStatus } from '../../../reducers/singleProductSlice';
import { productInitialState } from '../../../interface/interface';
import ModalContent from '../../childs/ModalContent';

const AllProducts: () => JSX.Element = () => {
    useDishes()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const dispatch: Dispatch<AnyAction> = useDispatch()
    const isModalOpen: boolean = useAppSelector(state => state.singleProductSlice.modalStatus)
    const modalFood: productInitialState | null = useAppSelector(state => state.singleProductSlice.food)
    return (
        <div onClick={() => dispatch(setVisible(false))}>
            <FilterPart onOpen={onOpen} />
            <CombineProducts />
            <SideDrawer isOpen={isOpen} onClose={onClose} />
            {modalFood && <Modal title={modalFood && modalFood.strMeal} open={isModalOpen} footer={[<Button shape='round' type='dashed' onClick={() => {
                dispatch(setModalStatus(false))
                dispatch(setModalFood(null))
            }}>Cancel</Button>]} onCancel={() => {
                dispatch(setModalStatus(false))
                dispatch(setModalFood(null))
            }} maskClosable={false}>
                <ModalContent />
            </Modal>}
        </div>
    );
};

export default AllProducts;