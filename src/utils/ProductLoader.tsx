import React from 'react';
import { MoonLoader } from 'react-spinners';
import styles from '../styles/AllProduct.module.css'

const ProductLoader: () => JSX.Element = () => {
    return (
        <div className='flex items-center justify-center h-screen'>
            <div>
                <MoonLoader color='#090088' loading={true} size={60} />
                <p className={`${styles.LoadingText} my-2 text-xl`}>Loading</p>
            </div>
        </div>
    );
};

export default ProductLoader;