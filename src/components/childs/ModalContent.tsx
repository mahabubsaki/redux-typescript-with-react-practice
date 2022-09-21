import React from 'react';
import { useAppSelector } from '../../app/hooks';
import { productInitialState } from '../../interface/interface';

const ModalContent = () => {
    const modalFood: productInitialState | null = useAppSelector(state => state.singleProductSlice.food)
    return (
        <div>
            <img src={modalFood?.strMealThumb} alt="" />
        </div>
    );
};

export default ModalContent;