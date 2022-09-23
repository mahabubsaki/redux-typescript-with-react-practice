
import { AnyAction } from '@reduxjs/toolkit';
import React, { Dispatch, MutableRefObject, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../app/hooks';
import { ingrediantAndMeasureInterface, productInitialState } from '../../interface/interface';
import { setIngrediant, setModalFood } from '../../reducers/singleProductSlice';
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Button,
    InputGroup,
    InputRightElement,
    Input,
} from '@chakra-ui/react'
import { AiOutlineStar, AiTwotoneStar } from 'react-icons/ai';
import { addToCart, changeQuantity } from '../../reducers/cartSlice';
import toast from 'react-hot-toast';



const ModalContent = () => {
    const inputRef2 = useRef() as MutableRefObject<HTMLInputElement>
    const modalFood: productInitialState | null = useAppSelector(state => state.singleProductSlice.food)
    const { strMealThumb, strInstructions, rating, productBg, votes, strArea, strCategory, strSource, strYoutube, cost, idMeal } = modalFood || {}
    const filterIngrediants: ingrediantAndMeasureInterface[] = useAppSelector(state => state.singleProductSlice.ingrediants)
    const dispatch: Dispatch<AnyAction> = useDispatch()
    const currentCart: productInitialState[] = useAppSelector(state => state.cartSlice.cartFood)
    type ObjectKey = keyof typeof modalFood;
    useEffect(() => {
        console.log(modalFood)
        const array = []
        for (let i = 0; i <= 20; i++) {
            const ing = 'strIngredient' + i as ObjectKey
            const mst = 'strMeasure' + i as ObjectKey
            const checker = modalFood && modalFood[ing]
            if (checker && modalFood) {
                array.push({ ingrediant: modalFood[ing], measure: modalFood[mst] })
            }
        }
        dispatch(setIngrediant(array))
    }, [modalFood])
    const handleInputQuantity = (): void => {
        const currentFoods = currentCart.find(item => item.idMeal === idMeal)
        if (!currentFoods && modalFood) {
            dispatch(addToCart({ ...modalFood, quantity: +inputRef2.current.value }))
        } else if (currentFoods) {
            const updatedQuantity = { ...currentFoods, quantity: currentFoods.quantity + +inputRef2.current.value }
            const restFoods = currentCart.filter(item => item.idMeal !== idMeal)
            const currentFoodIndex = currentCart.findIndex(item => item.idMeal === idMeal)
            restFoods.splice(currentFoodIndex, 0, updatedQuantity)
            dispatch(changeQuantity(restFoods))
        }
        toast.success('Added to cart successfully')
        dispatch(setModalFood(null))
    }
    return (
        <div className='flex flex-col gap-3 text-[16.5px]'>
            <img src={strMealThumb} alt="" />
            <div>
                <p>Input the quantity that you want to add on Cart:</p>
                <InputGroup className='mt-3'>
                    <InputRightElement children={<Button onClick={() => {
                        if (!isNaN(+inputRef2.current.value)) {
                            handleInputQuantity()
                        } else {
                            toast.error('Please input valid quantity')
                        }
                    }}>Add</Button>}></InputRightElement>
                    <Input ref={inputRef2} /></InputGroup>
            </div>
            <p>Price Per Item : ${cost}</p>
            <p>Area : {strArea}</p>
            <p>Category : {strCategory}</p>
            {strSource && <Button colorScheme={'cyan'}><a rel="noreferrer" className='w-full hover:text-white' target={'_blank'} href={strSource}>Check Source</a></Button>}
            {strSource && <Button colorScheme={'red'}><a rel="noreferrer" className='w-full hover:text-white' target={'_blank'} href={strYoutube!}>See Tutorial</a></Button>}
            <p className='flex items-center'>{new Array(rating).fill(rating).map((r, index) => <AiTwotoneStar style={{ color: productBg }} key={r + index} />)}{new Array(5 - rating!).fill(5 - rating!).map((r, index) => <AiOutlineStar className="text-[gray]" key={r + index} />)} <span className='ml-2'>({votes} votes)</span></p>
            <p>{strInstructions}</p>
            <TableContainer>
                <Table variant='striped' colorScheme={'yellow'}>
                    <TableCaption>Ingrediants Measurment in Depth</TableCaption>
                    <Thead>
                        <Tr>
                            <Th>Ingrediants</Th>
                            <Th>Measurment</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {filterIngrediants.map(pair => <Tr>
                            <Td className='text-base'>{pair.ingrediant}</Td>
                            <Td className='text-base'>{pair.measure}</Td>
                        </Tr>)}
                    </Tbody>
                </Table>
            </TableContainer>
        </div >
    );
};

export default ModalContent;