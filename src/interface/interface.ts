import { IconType } from "react-icons";

export interface NavbarObj {
    name: string;
    icon: IconType;
    route: string;
}export interface ActiveProps {
    children: JSX.Element[] | JSX.Element,
    to: string
}


//reducer state interface
export interface navbarInitialState {
    isSmallDevice: boolean,
    isLargeDevice: boolean,
}
export interface productInitialState {
    quantity: number,
    idMeal: string,
    rating: number,
    votes: number,
    productBg: string,
    strMeal: string,
    strDrinkAlternate: null | string,
    strCategory: string,
    strArea: null | string,
    strInstructions: string,
    strMealThumb: undefined | string,
    strTags: string,
    strYoutube: null | string,
    strSource: null | string,
    strImageSource: string,
    strCreativeCommonsConfirmed: null | string,
    cost: number,
    strIngredient1: null | string,
    strIngredient2: null | string,
    strIngredient3: null | string,
    strIngredient4: null | string,
    strIngredient5: null | string,
    strIngredient6: null | string,
    strIngredient7: null | string,
    strIngredient8: null | string,
    strIngredient9: null | string,
    strIngredient10: null | string,
    strIngredient11: null | string,
    strIngredient12: null | string,
    strIngredient13: null | string,
    strIngredient14: null | string,
    strIngredient15: null | string,
    strIngredient16: null | string,
    strIngredient17: null | string,
    strIngredient18: null | string,
    strIngredient19: null | string,
    strIngredient20: null | string,
    strMeasure1: null | string,
    strMeasure2: null | string,
    strMeasure3: null | string,
    strMeasure4: null | string,
    strMeasure5: null | string,
    strMeasure6: null | string,
    strMeasure7: null | string,
    strMeasure8: null | string,
    strMeasure9: null | string,
    strMeasure10: null | string,
    strMeasure11: null | string,
    strMeasure12: null | string,
    strMeasure13: null | string,
    strMeasure14: null | string,
    strMeasure15: null | string,
    strMeasure16: null | string,
    strMeasure17: null | string,
    strMeasure18: null | string,
    strMeasure19: null | string,
    strMeasure20: null | string,
}
export interface productSliceInterface {
    products: productInitialState[],
    selectedProducts: productInitialState[],
    visualProducts: productInitialState[],
    currentPage: number,
    pageSize: number,
    isLoading: boolean,
    category: string
}
export interface singleProductSliceInterface {
    foodId: string[],
    modalStatus: boolean,
    food: null | productInitialState,
    ingrediants: ingrediantAndMeasureInterface[]
}
export interface SearchInputSliceInterface {
    searchValue: string,
    visible: boolean,
    searching: boolean,
    matchedFood: productInitialState[]
}
export interface cartSliceInterface {
    cartFood: productInitialState[]
}
export interface ingrediantAndMeasureInterface {
    ingrediant: string,
    measure: string
}