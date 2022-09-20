import { Button } from '@chakra-ui/react';
import React, { Dispatch } from 'react';
import { productInitialState } from '../../interface/interface';
import { HiPlusCircle, HiMinusCircle } from 'react-icons/hi'
import { checkIfBlack } from '../../utils/CheckIfBlack';
import { useAppSelector } from '../../app/hooks';
import { AnyAction } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { changeQuantity } from '../../reducers/cartSlice';


const CartSingleFood = ({ food }: { food: productInitialState }) => {
    const { strMealThumb, cost, quantity, strMeal, productBg, idMeal } = food
    const dispatch: Dispatch<AnyAction> = useDispatch()
    const currentCart: productInitialState[] = useAppSelector(state => state.cartSlice.cartFood)
    const handleQuantity = (operator: string): void => {
        const currentFoods = currentCart.find(item => item.idMeal === idMeal)
        if (currentFoods) {
            const newQuantity = operator === 'plus' ? currentFoods.quantity + 1 : currentFoods.quantity - 1
            const updatedQuantity = { ...currentFoods, quantity: newQuantity }
            const restFoods = currentCart.filter(item => item.idMeal !== idMeal)
            if (newQuantity === 0) {
                dispatch(changeQuantity(restFoods))
            }
            else {
                const currentFoodIndex = currentCart.findIndex(item => item.idMeal === idMeal)
                restFoods.splice(currentFoodIndex, 0, updatedQuantity)
                dispatch(changeQuantity(restFoods))
            }
        }
    }
    return (
        <div className='flex my-2 p-1 items-center rounded-2xl' style={{ backgroundColor: productBg, color: checkIfBlack(productBg) ? 'white' : 'black' }}>
            <div className='w-[30%]'>
                <img src={strMealThumb} alt="" className='rounded-lg' />
            </div>
            <div className='flex flex-col w-[70%] gap-1'>
                <p className='text-center italic font-bold text-[17px]'>{strMeal}</p>
                <div className='flex mx-auto items-center gap-3'>
                    <Button colorScheme='red' onClick={() => handleQuantity('minus')}><HiMinusCircle className='text-xl' /></Button>
                    <p className='text-[17px] font-semibold'>{quantity}</p>
                    <Button colorScheme='green' onClick={() => handleQuantity('plus')}><HiPlusCircle className='text-xl' /></Button>
                </div>
                <p className='text-[17px] font-semibold text-center'>Total Cost : ${cost * quantity}</p>
            </div>
        </div>
    );
};

export default CartSingleFood;