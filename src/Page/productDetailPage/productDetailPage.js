import { useAddBaskerMutation, useGetOnePrdocutQuery } from "../../Api/productApi.js";
import { Link, useParams } from "react-router-dom";
import { Button, Container, Row, Popover, OverlayTrigger } from "react-bootstrap";
import "../../css/productDetails.css";
import { DetailPrice, DetailsArg, DetailsImg, SellerDetail, SellerStar, DetailsTitle, DetailButton } from "../../Components/productDetailComp.js";
import ProductCardStar from "../productPage/productCardStar.js";
import { selectCurrentToken } from "../../Redux/authSlice.js";
import { useSelector } from "react-redux";

const ProductDetailCard = () => {
    const { id } = useParams();
    const token = useSelector(selectCurrentToken);
    const { data, isSuccess } = useGetOnePrdocutQuery(id);
    const [AddBasket, { }] = useAddBaskerMutation();
    const popover = (
        <Popover id="popover-basic">
            <Popover.Body>
                {token ? (<strong>Added to Cart </strong>) : (<strong>login to add to cart</strong>)}
            </Popover.Body>
        </Popover>
    );
    const AddBasketFunc = async () => {
        if (token) {
            try {
                const data = await AddBasket({ postId: id, accesToken: token }).unwrap();
            } catch (err) {
                console.log(err);
            }
        }
    }

    return (
        <Container className="card-details-container" fluid>
            <Row className="card-details-row">
                {isSuccess && <>
                    <DetailsImg src={`https://picsum.photos/id/235/600/600`} />
                    <DetailsArg>
                        <DetailsTitle>
                            <h2>{data.name}</h2>
                        </DetailsTitle>
                        <SellerDetail>
                            <span>Seller:</span>
                            <span>
                                <Link to={"/"}>{data.sellerId.name}</Link>
                            </span>
                        </SellerDetail>
                        <SellerStar>
                            <ProductCardStar fontSize={"20px"} star={data.star} />
                        </SellerStar>
                        <DetailPrice>
                            <span>{data.price}TL</span>
                        </DetailPrice>
                        <DetailButton>
                            <OverlayTrigger trigger="click" placement="right" overlay={popover}>
                                <Button className="detail_button" onClick={AddBasketFunc} variant="outline-dark">add to Card</Button>
                            </OverlayTrigger>
                        </DetailButton>
                    </DetailsArg>
                </>}
            </Row>
        </Container>
    );
}
export default ProductDetailCard;