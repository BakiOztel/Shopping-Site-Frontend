import { Col, Card } from "react-bootstrap";
import ProductCardStar from "./productCardStar.js";
import { useNavigate } from "react-router-dom";
const PrdocutCard = ({ info, index }) => {
    const navigate = useNavigate();
    return (
        < Col className="product-col" key={index} >
            <Card className="card-product">
                <Card.Img className="card-img-product" variant="top" onClick={() => { navigate(`/products/detail/${info._id}`) }} src={`https://picsum.photos/id/23${index}/300/300`} />
                <Card.Body>
                    <Card.Title>{info.name}</Card.Title>
                    <ProductCardStar fontSize="12" star={info.star} />
                    <Card.Text color="orange">{info.price} <span>TL</span></Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
}
export default PrdocutCard;