import React from 'react';
import styles from '../../styles/Navbar.module.css'

import { navArray } from '../../constant/variables';
import ActiveLink from '../../utils/ActiveLink';
const Navbar = () => {
    return (
        <div className={`border rounded-xl flex flex-col p-2 h-full relative overflow-y-auto justify-between ${styles.NavContainer}`}>

            <p className="text-2xl text-center mt-2 mb-[10px] font-bold">Unnamed Dashboard</p>
            <div>
                {navArray.map(item => <ActiveLink to={item.route}>
                    <item.icon /><span>{item.name}</span>
                </ActiveLink>)}
            </div>
            <button className={`rounded-[8px] font-semibold p-[10px] w-full bg-[red] ${styles.Logout}`}>
                Logout
            </button>
        </div>
    );
};

export default Navbar;