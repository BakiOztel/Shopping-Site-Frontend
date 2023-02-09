import { Carousel, Container, Row, Card, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../css/mainPage.css"
const MainPage = () => {

    return (
        <Container className="mainpage_container" >
            <Row>
                <Carousel id="carouselHero">
                    <Carousel.Item>
                        <img className="d-block w-100" src={require("../../img/61TD5JLGhIL._SX3000_ (1).jpg")} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={require("../../img/71dbxIcDioL._SX3000_.jpg")} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={require("../../img/71tIrZqybrL._SX3000_.jpg")} />
                    </Carousel.Item>
                </Carousel>
            </Row>
            <Row>
                <Col className="w-25 col-main" >
                    <Card className="card-main" >
                        <Card.Title className="card-title-main" variant="top">Health and Personal Care</Card.Title>
                        <Card.Body>
                            <Link to="/products/kisisel_bakim">
                                <Card.Img className="card-img-main" src={require("../../img/kisisel-bakim.jpg")} />
                            </Link>
                            <Card.Text className="card-text-main" as={Link} to="/products/search?tag=Personelcare">
                                See more
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="w-25 col-main">
                    <Card className="card-main" >
                        <Card.Title className="card-title-main">Dresses</Card.Title>
                        <Card.Body>
                            <Link to="/products/search?q=elbiseler">
                                <Card.Img className="card-img-main" src={require("../../img/62469.jpg")} />
                            </Link>
                            <Card.Text className="card-text-main" as={Link} to="/products/search?tag=dresses">
                                See more
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="w-25 col-main">
                    <Card className="card-main" >
                        <Card.Title className="card-title-main">Fitness</Card.Title>
                        <Card.Body>
                            <Link to="/products/search?q=fitness">
                                <Card.Img className="card-img-main" src={require("../../img/fitnessfit.jpg")} />
                            </Link>
                            <Card.Text className="card-text-main" as={Link} to="/products/search?tag=fitness">
                                See more
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="w-25 col-main">
                    <Card className="card-main" >
                        <Card.Title className="card-title-main">Gaming accessories</Card.Title>
                        <Card.Body>
                            <Link to="/products/search?q=gaming">
                                <Card.Img className="card-img-main" src={require("../../img/colorful-gaming-accessories.jpg")} />
                            </Link>
                            <Card.Text className="card-text-main" as={Link} to="/products/search?tag=gaming">
                                See more
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default MainPage;