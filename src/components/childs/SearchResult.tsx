import { CircularProgress } from '@chakra-ui/react';
import { Result } from 'antd';
import React from 'react';
import { useAppSelector } from '../../app/hooks';
import { productInitialState } from '../../interface/interface';
import SingleSearchResult from './SingleSearchResult';
// w-[calc(100%+2rem)]
const SearchResult = () => {
    const matchedFoods: productInitialState[] = useAppSelector(state => state.searchSlice.matchedFood)
    const isLoading: boolean = useAppSelector(state => state.searchSlice.searching)
    const searchStirng: string = useAppSelector(state => state.searchSlice.searchValue)
    return (
        <div onClick={(e) => e.stopPropagation()} className='absolute -bottom-[550px] bg-[white] shadow h-[550px] rounded left-0 right-0 border p-3 overflow-y-auto'>
            {searchStirng && <p className='text-center font-semibold text-lg py-2 border-b'>{matchedFoods.length} search result for "{searchStirng}" keyword</p>}
            {isLoading && <div className='h-[calc(100%-44px)] flex justify-center items-center'>
                <CircularProgress isIndeterminate color='teal.300' />
            </div>}
            {(matchedFoods.length === 0 && !isLoading && searchStirng) && <div className={`${searchStirng ? 'h-[calc(100%-47px)]' : 'h-full'} flex justify-center items-center`}>
                <Result status='error' title='Not Found' />
            </div>}
            {(matchedFoods.length === 0 && !isLoading && !searchStirng) && <div className={`${searchStirng ? 'h-[calc(100%-47px)]' : 'h-full'} flex justify-center items-center`}>
                <Result status='info' title='Search Your Preferred Food' />
            </div>}
            {matchedFoods.length > 0 && <div className='flex flex-col gap-1 my-2'>
                {matchedFoods.map(product => <SingleSearchResult key={product.idMeal} product={product} />)}
            </div>}
        </div>
    );
};

export default SearchResult;