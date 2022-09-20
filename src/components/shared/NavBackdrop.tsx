import React, { Dispatch } from 'react';
import { useAppSelector } from '../../app/hooks';
import { navArray } from '../../constant/variables';
import styles from '../../styles/Navbar.module.css'
import ActiveLink from '../../utils/ActiveLink';
import logo from '../../assets/e-payment.png'
import logout from '../../assets/logout.png'
import ActiveLink2 from '../../utils/ActiveLink2';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { AnyAction } from '@reduxjs/toolkit';
import { toggleSmall } from '../../reducers/navSlice';

const NavBackdrop = () => {
    const dispatch: Dispatch<AnyAction> = useDispatch()
    const isSmallOpen: boolean = useAppSelector(state => state.navSlice.isSmallDevice)
    return (
        <div className={`fixed inset-0 bg-black bg-opacity-10 backdrop-blur-[1.5px] flex my-xl:hidden justify-start z-20`}>
            <div className={`h-[100%] duration-500 ${isSmallOpen ? 'w-[65%]' : 'w-[0%]'} px-[10px] pt-[35px] bg-[#F7F5F2] relative`}>
                <AiOutlineCloseCircle className="absolute block right-[2px] text-3xl top-0 cursor-pointer" onClick={() => dispatch(toggleSmall(!isSmallOpen))} />
                <div className={`border rounded-xl flex flex-col p-2 h-full relative overflow-y-auto duration-100 justify-between ${styles.NavContainer}`}>
                    <div className='mt-2 flex h-[50px] gap-4 items-center'>
                        <img src={logo} width='50px' height='100%' alt="" />
                        <p className="text-[24px] text-center mt-2 mb-[10px] font-bold">Redefine Dashboard</p>
                    </div>
                    <div>
                        {navArray.map((item, index) => <ActiveLink2 key={index} to={item.route}>
                            <item.icon /><span>{item.name}</span>
                        </ActiveLink2>)}
                    </div>
                    <button className={`rounded-[8px] font-semibold p-[10px] w-full bg-[red] ${styles.Logout}`}>
                        Logout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NavBackdrop;