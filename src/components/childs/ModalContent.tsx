// import { Paper } from '@mui/material';
import { AnyAction } from '@reduxjs/toolkit';
import React, { Dispatch, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../app/hooks';
import { ingrediantAndMeasureInterface, productInitialState } from '../../interface/interface';
import { setIngrediant } from '../../reducers/singleProductSlice';
// import TableContainer from '@mui/material/TableContainer';
// import Table from '@mui/material/Table';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import TableCell from '@mui/material/TableCell';
// import TableBody from '@mui/material/TableBody';


const ModalContent = () => {
    const modalFood: productInitialState | null = useAppSelector(state => state.singleProductSlice.food)
    const filterIngrediants: ingrediantAndMeasureInterface[] = useAppSelector(state => state.singleProductSlice.ingrediants)
    const dispatch: Dispatch<AnyAction> = useDispatch()
    type ObjectKey = keyof typeof modalFood;
    useEffect(() => {
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

    return (
        <div>
            <img src={modalFood?.strMealThumb} alt="" />
            {/* {filterIngrediants.map(x => <p>{x.ingrediant} {x.measure}</p>)} */}
            {/* <TableContainer>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Dessert (100g serving)</TableCell>
                            <TableCell align="right">Calories</TableCell>
                            <TableCell align="right">Fat&nbsp;(g)</TableCell>
                            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                            <TableCell align="right">Protein&nbsp;(g)</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>Dessert (100g serving)</TableCell>
                            <TableCell align="right">Calories</TableCell>
                            <TableCell align="right">Fat&nbsp;(g)</TableCell>
                            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                            <TableCell align="right">Protein&nbsp;(g)</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer> */}
        </div >
    );
};

export default ModalContent;