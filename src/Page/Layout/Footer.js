import { Row, Col, Container } from "react-bootstrap";
import { FooterImg, FooterItems, FooterLink, FooterNav } from "../../Components/footerComp.js";
import { AiOutlineInstagram, AiOutlineFacebook, AiFillTwitterCircle } from "react-icons/ai"
import "../../css/footer.css";
const Footer = () => {
    return (<Container className="footer_container" fluid>
        <Row>
            <Col>
                <FooterNav>
                    <FooterItems>
                        <FooterLink to="/Whoweare">Who are we</FooterLink>
                    </FooterItems>
                    <FooterItems>
                        <FooterLink to="/Contact">Contact</FooterLink>

                    </FooterItems>
                    <FooterItems>
                        <span>Secure shopping</span>
                        <FooterImg src={require("../../img/Guvenli-Odeme-2.png")} />
                    </FooterItems>
                </FooterNav>
            </Col>

            <Col>
                <FooterNav>
                    <FooterItems>
                        <span>Social Media</span>
                    </FooterItems>
                    <FooterItems>
                        <FooterLink to="/">
                            <AiOutlineInstagram size={35} />
                        </FooterLink>

                    </FooterItems>
                    <FooterItems>
                        <FooterLink to="/">
                            <AiOutlineFacebook size={35} />
                        </FooterLink>
                    </FooterItems>
                    <FooterItems>
                        <FooterLink to="/">
                            <AiFillTwitterCircle size={35} />
                        </FooterLink>
                    </FooterItems>
                </FooterNav>
            </Col>

            <Col>
                <FooterNav>
                    <FooterItems>
                        <span>Support</span>
                    </FooterItems>
                    <FooterItems>
                        <FooterLink to="/">Frequently Asked Questions</FooterLink>

                    </FooterItems>
                    <FooterItems>
                        <FooterLink to="/">Live Help</FooterLink>
                    </FooterItems>
                </FooterNav>
            </Col>
        </Row>
    </Container>);
}



export default Footer;