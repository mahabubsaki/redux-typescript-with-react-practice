import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import { useAppSelector } from '../app/hooks';
import { ActiveProps } from '../interface/interface';
const ActiveLink = ({ children, to, ...props }: ActiveProps) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
    const isLargeOpen: boolean = useAppSelector(state => state.navSlice.isLargeDevice)
    return (
        <Link className={`p-[10px] text-white ${isLargeOpen && 'text-[28px] justify-center'} duration-200 flex gap-3 items-center rounded-xl cursor-pointer ${match ? 'bg-[red]' : 'bg-[transparent]'}`} to={to}
            {...props}>
            {children}
        </Link>
    );
};

export default ActiveLink;