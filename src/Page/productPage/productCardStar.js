import { CardStar, CardStarRate } from "../../Components/productPageComp.js";
import { BsStarFill } from "react-icons/bs";
import { useState } from "react";
const ProductCardStar = ({ star, className, fontSize }) => {
    const [starA, setStar] = useState((5 - star));
    return (<CardStar fontSize={fontSize} className={className}>
        {Array.from({ length: star }).map((current, index) => (<BsStarFill key={index} color="orange" />))}
        {Array.from({ length: starA }).map((current, index) => (<BsStarFill key={index} />))}
        <span >{star}</span>
    </CardStar>);
}

export default ProductCardStar;