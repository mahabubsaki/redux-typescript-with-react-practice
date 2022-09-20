import React, { useMemo } from 'react';
import { Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, Button } from '@chakra-ui/react'
import { productInitialState } from '../../interface/interface';
import { useAppSelector } from '../../app/hooks';
import CartSingleFood from './CartSingleFood';
import { HiChevronDoubleRight } from 'react-icons/hi'

const SideDrawer = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
    const currentCart: productInitialState[] = useAppSelector(state => state.cartSlice.cartFood)
    const totalCost: number[] = useMemo(() => {
        const cartTuple = currentCart.reduce((pre, cur) => {
            const quantity = pre[0] + cur.quantity
            const cost = pre[1] + (cur.quantity * cur.cost)
            return [quantity, cost]
        }, [0, 0])
        return cartTuple
    }, [currentCart])
    return (
        <Drawer
            isOpen={isOpen}
            placement='right'
            onClose={onClose}
        >
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader className='text-xl font-bold'>Cart Status</DrawerHeader>
                <p className='text-xl text-center mt-1 mb-4'><span className='border-b-[2.5px] border-[black] rounded pb-2 px-1'>Payment Cost Info</span></p>
                <div className='bg-[#FFF8BC] rounded-xl p-4 text-lg flex flex-col gap-2'>
                    <div className='flex justify-between'>
                        <p>Total Items :</p>
                        <p className='font-bold'>{totalCost[0]}</p>
                    </div>
                    <div className='flex justify-between'>
                        <p>Total Price :</p>
                        <p className='font-bold'>${totalCost[1]}</p>
                    </div>
                    <div className='flex justify-between'>
                        <p>VAT :</p>
                        <p className='font-bold'>${(totalCost[1] * 0.05).toFixed(1)}</p>
                    </div>
                    <hr className='border-[1.5px] border-black' />
                    <div className='flex justify-between'>
                        <p>Grand Total :</p>
                        <p className='font-bold'>${Number((totalCost[1] * 0.05).toFixed(1)) + totalCost[1]}</p>
                    </div>
                    <Button colorScheme="linkedin" className='flex items-center gap-2'><span>Proceed To Checkout</span> <HiChevronDoubleRight className='relative top-[2px]' /></Button>
                </div>
                <DrawerBody>
                    <p className='text-xl text-center mt-3 mb-4'><span className='border-b-[2.5px] border-[black] rounded pb-2 px-1'>Cart Food Info</span></p>
                    {currentCart.map(item => <CartSingleFood key={item.idMeal} food={item} />)}
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    );
};

export default SideDrawer;