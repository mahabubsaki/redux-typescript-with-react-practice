import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import { ActiveProps } from '../interface/interface';
const ActiveLink = ({ children, to, ...props }: ActiveProps) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
    return (
        <Link className={`p-[10px] text-white duration-300 flex gap-3 items-center rounded-xl cursor-pointer ${match ? 'bg-[red]' : 'bg-[transparent]'}`} to={to}
            {...props}>
            {children}
        </Link>
    );
};

export default ActiveLink;