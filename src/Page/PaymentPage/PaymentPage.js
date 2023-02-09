import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import Cards from "react-credit-cards";
import { useForm } from "react-hook-form";
import { useState } from "react";
import 'react-credit-cards/es/styles-compiled.css';
import { yupResolver } from "@hookform/resolvers/yup";
import { CardValidSchema } from "../../Validation/cardValid.js";
import { usePostPaymentMutation } from "../../Api/paymentApi.js";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../../Redux/authSlice.js";
const PaymentPage = () => {
    const location = useLocation();
    const { register, handleSubmit } = useForm({
        shouldUseNativeValidation: true,
        resolver: yupResolver(CardValidSchema)
    });

    const navigate = useNavigate();
    const accesToken = useSelector(selectCurrentToken);

    const [postPayment, { }] = usePostPaymentMutation();

    const [cardSecurityCode, setcardSecurityCode] = useState("");
    const [cardName, setcardName] = useState("");
    const [cardNumber, setcardNumber] = useState("");
    const [cardExpiration, setcardExpiration] = useState("");
    const [focus, setFocus] = useState("");

    const handleInputFocus = (e) => {
        const x = (e.target.name === 'cardSecurityCode') ? 'cvc' : e.target.name
        setFocus(x);
    }
    const onSubmit = async (x) => {
        try {
            const q = await postPayment({ data: x, accesToken: accesToken });
            navigate("/orders");
        } catch (err) {
            console.log(err);
        }
    }
    const price = location.state?.price;
    return (

        <Container fluid className="p-5">
            <Form onSubmit={handleSubmit(onSubmit)} className="p-5">
                <Row>
                    <Form.Group>
                        <Form.Label>Adress</Form.Label>
                        <Form.Control {...register("adress", { required: true })} type="text" placeholder="Adress" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control {...register("phoneNumber", { required: true })} type="text" placeholder="Phone Number" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Province</Form.Label>
                        <Form.Control {...register("county", { required: true })} type="text" placeholder="Province" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>district</Form.Label>
                        <Form.Control {...register("district", { required: true })} type="text" placeholder="district" />
                    </Form.Group>
                </Row>
                <Row className="d-flex mt-5">
                    <Col>
                        <Form.Group>
                            <Form.Control
                                type="text"
                                placeholder="Name"
                                {...register("cardName", {
                                    required: true,
                                    onChange: (e) => {
                                        setcardName(e.target.value);
                                    }
                                })}
                                onFocus={handleInputFocus}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Control
                                type="string"
                                placeholder="Card Number"
                                {...register("cardNumber", {
                                    onChange: (e) => {
                                        setcardNumber(e.target.value);
                                    }
                                })}
                                onFocus={handleInputFocus}
                                maxLength="16"
                            />
                        </Form.Group>
                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Control
                                        type="text"
                                        placeholder="Expiration Date"
                                        {...register("cardExpiration", {
                                            onChange: (e) => {
                                                setcardExpiration(e.target.value);
                                            }
                                        })}
                                        onFocus={handleInputFocus}
                                        maxLength="4"
                                    />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <Form.Control
                                        type="text"
                                        placeholder="Security Code"
                                        {...register("cardSecurityCode", {
                                            onChange: (e) => {
                                                setcardSecurityCode(e.target.value);
                                            }
                                        })}
                                        onFocus={handleInputFocus}
                                        maxLength="3"
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <Cards
                            cvc={cardSecurityCode}
                            expiry={cardExpiration}
                            name={cardName}
                            number={cardNumber}
                            focused={focus}
                        />
                    </Col>
                </Row>
                <Button className="me-4" variant="outline-dark" type="submit">
                    Confirm Order
                </Button>
                <span>
                    price:{price}
                </span>

            </Form>
        </Container>

    );
}

export default PaymentPage;