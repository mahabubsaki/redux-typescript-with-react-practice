import React from 'react';

import { navArray } from '../constant/variables';
const Navbar = () => {
    return (
        <div className="border bg-[#393e46] rounded-xl flex flex-col p-2 h-full relative overflow-y-auto justify-between">

            <p className="text-2xl text-center mt-2 mb-[10px] font-bold">Unnamed Dashboard</p>
            <div>
                {navArray.map(item => <div className="p-[10px] bg-[transparent] text-white flex gap-3 text-xl items-center rounded-xl cursor-pointer">
                    <item.icon /><span>{item.name}</span>

                </div>)}
            </div>
            <button className="rounded-[8px] p-[10px] w-full bg-[red]">
                Logout
            </button>
        </div>
    );
};

export default Navbar;