import { AnyAction } from "@reduxjs/toolkit"
import axios from "axios"
import { Dispatch, useEffect } from "react"
import { useDispatch } from "react-redux"
import { useAppSelector } from "../app/hooks"
import { setFullProduct, setLoadingState, setSelectedProducts, setVisualProducts } from "../reducers/productSlice"
import { randomColor } from "../utils/RandomColor"

const useDishes = () => {
    const dispatch: Dispatch<AnyAction> = useDispatch()
    const productArray = useAppSelector(state => state.productSlice.products)
    if (productArray.length > 0) {
        setTimeout(() => {
            dispatch(setFullProduct(productArray))
            dispatch(setLoadingState(false))
        }, 2000)
    }
    useEffect(() => {
        let cancelled = false
        const getAllData = async () => {
            const { data: first } = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
            const { data: second } = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?f=b')
            const { data: third } = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?f=c')
            const { data: fourth } = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?f=d')
            const { data: fifth } = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?f=e')
            const { data: sixth } = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?f=f')
            const { data: seventh } = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?f=g')
            const { data: eigth } = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?f=h')
            const { data: ningth } = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?f=i')
            const { data: tenth } = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?f=j')
            const { data: eleventh } = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?f=k')
            const { data: twelvth } = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?f=l')
            const { data: thirteenth } = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?f=m')
            const { data: fourteenth } = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?f=n')
            const { data: fifteenth } = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?f=o')
            const { data: sixteenth } = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?f=p')
            const { data: seventingth } = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?f=r')
            const { data: eigthteenth } = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?f=s')
            const { data: nineteeth } = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?f=t')
            const { data: twentyth } = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?f=v')
            const { data: twentyfirst } = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?f=w')
            const { data: twentysecond } = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?f=y')
            if (!cancelled) {
                const allProducts = [...first.meals, ...second.meals, ...third.meals, ...fourth.meals, ...fifth.meals, ...sixth.meals, ...seventh.meals, ...eigth.meals, ...ningth.meals, ...tenth.meals, ...eleventh.meals, ...twelvth.meals, ...thirteenth.meals, ...fourteenth.meals, ...fifteenth.meals, ...sixteenth.meals, ...seventingth.meals, ...eigthteenth.meals, ...nineteeth.meals, ...twentyth.meals, ...twentyfirst.meals, ...twentysecond.meals]
                const productWithPrice = allProducts.map(pd => {
                    return { ...pd, cost: Math.round(Math.random() * 1000), productBg: randomColor(), rating: Math.ceil(Math.random() * 5), votes: Math.round(Math.random() * 50) }
                })
                dispatch(setFullProduct(productWithPrice))
                dispatch(setSelectedProducts(productWithPrice))
                dispatch(setVisualProducts(productWithPrice.slice(0, 10)))
                dispatch(setLoadingState(false))
            }
        }
        productArray.length === 0 && getAllData()
        return () => {
            cancelled = true
        }
    }, [dispatch, productArray.length])
}
export {
    useDishes
}