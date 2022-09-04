import axios from "axios"
import { useDispatch } from "react-redux"

const useDishes = () => {
    const dispatch = useDispatch()
    fetch("../data/data.json")
        .then(res => res.json())
        .then(data => console.log(data))
}
export {
    useDishes
}