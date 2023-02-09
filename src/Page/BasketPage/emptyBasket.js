import { Button, Container, Image, Row } from "react-bootstrap"
import { Link } from "react-router-dom";
const EmptyBasket = ({ page }) => {
    return (<Container >
        <Row className="d-flex justify-content-center">
            <Image className="emptybasket_img" src={require("../../img/emptybasket.png")} />
        </Row>
        <Row className="d-flex justify-content-center">
            <p className="w-25 emptyText">
                {
                    page === "basket" ? ("Your shopping cart is empty") : ("You do not have an order")
                }
            </p>
        </Row>
        <Row className="d-flex justify-content-center">
            <Button as={Link} to="/products/search?q=" className="w-50" variant="primary">Start shopping</Button>
        </Row>
    </Container>)
}

export default EmptyBasket;