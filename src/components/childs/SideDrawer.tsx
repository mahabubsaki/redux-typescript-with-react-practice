import React from 'react';
import { Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody } from '@chakra-ui/react'

const SideDrawer = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
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
                <DrawerBody>
                    <p className='text-xl text-center mb-2'>Payment Cost Info</p>
                    <div className='bg-[#FFF8BC] rounded-xl p-4 text-lg flex flex-col gap-2'>
                        <div className='flex justify-between'>
                            <p>Total Items :</p>
                            <p className='font-bold'>0</p>
                        </div>
                        <div className='flex justify-between'>
                            <p>Total Price :</p>
                            <p className='font-bold'>$0</p>
                        </div>
                        <div className='flex justify-between'>
                            <p>VAT :</p>
                            <p className='font-bold'>$0</p>
                        </div>
                        <hr className='border-[1.5px] border-black' />
                        <div className='flex justify-between'>
                            <p>Grand Total :</p>
                            <p className='font-bold'>$0</p>
                        </div>
                    </div>
                    <p className='text-xl text-center my-2'>Cart Food Info</p>
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    );
};

export default SideDrawer;