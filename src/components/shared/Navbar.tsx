import React from 'react';
import styles from '../../styles/Navbar.module.css'
import { navArray } from '../../constant/variables';
import ActiveLink from '../../utils/ActiveLink';
import logo from '../../assets/e-payment.png'
import logout from '../../assets/logout.png'
import { useAppSelector } from '../../app/hooks';
import ActiveLink2 from '../../utils/ActiveLink2';
const Navbar = () => {
    const isLargeOpen: boolean = useAppSelector(state => state.navSlice.isLargeDevice)
    const isSmallOpen: boolean = useAppSelector(state => state.navSlice.isSmallDevice)
    return (
        <>
            {!isLargeOpen ? <div className={`border rounded-xl hidden my-xl:flex flex-col p-2 h-full relative overflow-y-auto ${isLargeOpen ? 'hidden' : 'block'} duration-100 justify-between ${styles.NavContainer}`}>
                <div className='mt-2 flex h-[50px] justify-center items-center'>
                    <img src={logo} width='50px' height='100%' alt="" />
                </div>
                <div>
                    {navArray.map(item => <ActiveLink to={item.route}>
                        <item.icon /><span>{item.name}</span>
                    </ActiveLink>)}
                </div>
                <button className={`rounded-[8px] font-semibold p-[10px] w-full bg-[red] ${styles.Logout}`}>
                    Logout
                </button>
            </div> : <div className={`border rounded-xl hidden my-xl:flex flex-col p-2 h-full relative ${!isLargeOpen ? 'hidden' : 'block'} duration-100 overflow-y-auto justify-between ${styles.NavContainer}`}>
                <img src={logo} alt="" className='w-[45px] h-[45px] mx-auto' />
                <div>
                    {navArray.map(item => <ActiveLink to={item.route}>
                        <item.icon />
                    </ActiveLink>)}
                </div>
                <img src={logout} alt="" className='w-[45px] h-[45px] mx-auto' />
            </div>}
            {!isSmallOpen && <div className={`border rounded-xl flex my-xl:hidden flex-col p-2 h-full relative duration-100 overflow-y-auto justify-between ${styles.NavContainer}`}>
                <img src={logo} alt="" className='w-[45px] h-[45px] mx-auto' />
                <div>
                    {navArray.map(item => <ActiveLink2 to={item.route}>
                        <item.icon />
                    </ActiveLink2>)}
                </div>
                <img src={logout} alt="" className='w-[45px] h-[45px] mx-auto' />
            </div>}
        </>
    );
};

export default Navbar;