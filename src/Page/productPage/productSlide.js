import { Container, FormCheck, Row } from "react-bootstrap";
import ProductCardStar from "./productCardStar.js";
import "../../css/productSlide.css";
import { ProductLeftSlideDiv } from "../../Components/productPageComp.js";
import { useSearchParams } from "react-router-dom";
const LeftSlide = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const params = {};

    searchParams.forEach((value, key) => {
        params[key] = value;
    });


    const filterFunc = (name, value) => {
        setSearchParams(searchParams => {
            searchParams.set(name, value);
            return searchParams;
        });
    }
    return (<Container fluid>
        <Row className="productSlideRow">
            <ProductLeftSlideDiv onClick={() => { filterFunc("star", 1) }}>
                <ProductCardStar className="productSlideStar" star={1} />
                <span>and above</span>
            </ProductLeftSlideDiv>
            <ProductLeftSlideDiv onClick={() => { filterFunc("star", 2) }}>
                <ProductCardStar className="productSlideStar" star={2} />
                <span>vand above</span>
            </ProductLeftSlideDiv>
            <ProductLeftSlideDiv onClick={() => { filterFunc("star", 3) }}>
                <ProductCardStar className="productSlideStar" star={3} />
                <span>and above</span>
            </ProductLeftSlideDiv>
            <ProductLeftSlideDiv onClick={() => { filterFunc("star", 4) }}>
                <ProductCardStar className="productSlideStar" star={4} />
                <span>and above</span>
            </ProductLeftSlideDiv>
        </Row>
    </Container>);
}
export default LeftSlide;