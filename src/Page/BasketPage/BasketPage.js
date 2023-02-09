import { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useGetBasketMutation } from "../../Api/productApi.js";
import { selectCurrentToken, selectCurrentUser } from "../../Redux/authSlice.js";
import { useNavigate, Link } from "react-router-dom";
import BasketTable from "./BasketTable.js";
import "../../css/basket.css";
import EmptyBasket from "./emptyBasket.js";
const BasketPage = () => {
    const accesToken = useSelector(selectCurrentToken);

    const navigate = useNavigate();

    const [data, setData] = useState(null);
    const [totalPrice, setPrice] = useState(0);

    const [isLoading, setLoading] = useState(true);


    const [getBasket, { isSuccess }] = useGetBasketMutation();



    useEffect(() => {
        const fetchData = async () => {
            if (!accesToken) return navigate("/");
            const datax = await getBasket({ accesToken }).unwrap();
            if (datax.items.length == 0) {
                setPrice(0);
            } else {
                setPrice(datax.totalPrice)
            }
            setData(datax);
            setLoading(false);
        }
        fetchData();
    }, [])
    return (<Container className="basket_container" fluid >
        {isLoading ? (<div></div>) : (
            <Row>
                {totalPrice == 0 ? (<EmptyBasket page={"basket"} />) : (
                    <>
                        <Col >
                            <BasketTable accesToken={accesToken} setPrice={setPrice} data={data.items} />
                        </Col >
                        <Col className="basket_right_col">
                            <Card>
                                <Card.Body>
                                    <Card.Title>Sepet</Card.Title>
                                    <Card.Text>
                                        Basket Amount:{totalPrice}
                                    </Card.Text>
                                    <Button variant="outline-dark" as={Link} to="/payment" state={{ price: totalPrice }}>Buy</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </>
                )}
            </Row>
        )}
    </Container>);
}

export default BasketPage;
