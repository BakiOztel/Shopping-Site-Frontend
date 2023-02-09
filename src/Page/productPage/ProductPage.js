import LeftSlide from "./productSlide.js";
import { Row, Col, Container, Spinner } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import { useGetProductsQuery } from "../../Api/productApi.js";
import "../../css/product.css";
import PrdocutCard from "./productCard.js";
const ProductPage = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const params = {};
    searchParams.forEach((value, key) => {
        params[key] = value;
    });
    const { data, isLoading, isSuccess } = useGetProductsQuery(params);
    return (
        <Container className="prodcut_container">
            {isLoading && <Row>
                <Spinner animation="border" role="status">

                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </Row>}
            {isSuccess && <Row >
                <Col md="2">
                    <LeftSlide />
                </Col>
                <Col className="product_page_secondC" md="10">
                    <Row md={4}>
                        {data.map((currentElement, index) => (
                            <PrdocutCard info={currentElement} key={index} index={index} />
                        ))}
                    </Row>
                </Col>
            </Row >}
        </Container>
    );
}

export default ProductPage;