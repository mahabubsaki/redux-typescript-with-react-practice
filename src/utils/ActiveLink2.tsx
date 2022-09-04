import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import { useAppSelector } from '../app/hooks';
import { ActiveProps } from '../interface/interface';
const ActiveLink2 = ({ children, to, ...props }: ActiveProps) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
    const isSmallOpen: boolean = useAppSelector(state => state.navSlice.isSmallDevice)
    return (
        <Link className={`text-white duration-200 ${isSmallOpen ? 'text-[16px] p-[10px]' : 'text-[28px] p-[10px]'} flex gap-3 items-center rounded-xl cursor-pointer ${match ? 'bg-[red]' : 'bg-[transparent]'}`} to={to}
            {...props}>
            {children}
        </Link>
    );
};

export default ActiveLink2;