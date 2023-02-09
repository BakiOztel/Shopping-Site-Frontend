import { Container, Image, Nav, Navbar, NavDropdown, Row } from "react-bootstrap";
import { Search, SearchButton } from "../../../Components/mainSearchComp.js";
import { BsSearch } from "react-icons/bs"
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import "../../../css/header.css";
import { useDispatch, useSelector } from "react-redux";
import { logOut, selectCurrentUser } from "../../../Redux/authSlice.js";
import { useLogOutMutation } from "../../../Api/authApi.js";


const Header = () => {
    const navigate = useNavigate();
    const user = useSelector(selectCurrentUser);

    const dispatch = useDispatch();

    const { register, handleSubmit } = useForm({
        shouldUseNativeValidation: true,
    });

    const [LogOut, { isLoading }] = useLogOutMutation();

    const onSubmit = async (data) => {
        navigate(`/products/search?q=${data.q}`);
    };
    const DropdownClick = async (data) => {
        navigate(`/products/search?tag=${data}`)
    }
    const LogOutt = async () => {
        try {
            const x = await LogOut();
            dispatch(logOut);
            window.location.reload(false);
        } catch (err) {
            console.log(err);
        }
    }
    return (


        <Container fluid className="header_container" style={{ height: "200px" }}>
            <Row>
                <Navbar bg="">
                    <Navbar.Brand style={{ color: "black" }}>
                        <Link to="/">
                            <Image src={require("../../../img/alver.png")} className="w-75" />
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Collapse>
                        <Search onSubmit={handleSubmit(onSubmit)}>
                            <input placeholder="" {...register("q")} />
                            <SearchButton type="submit">
                                <BsSearch />
                            </SearchButton>
                        </Search>
                        <Nav>

                            {user ? (<NavDropdown className="header_dropdown" title="Account" id="nav-dropdown" renderMenuOnMount={true}>
                                <Nav.Link as={Link} to="/basket">Basket</Nav.Link>
                                <Nav.Link as={Link} to="/orders">Order</Nav.Link>
                                <Nav.Link onClick={LogOutt}>Log Out</Nav.Link>
                            </NavDropdown>) : (<NavDropdown className="header_dropdown" title="Sign in" id="nav-dropdown" renderMenuOnMount={true}>
                                <NavDropdown.Item as={Link} to="/login" eventKey="4.1">Sign in</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/register" eventKey="4.2">Register</NavDropdown.Item>
                            </NavDropdown>)}
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Row>
            <Row >
                <Navbar>
                    <Nav className="w-100 pe-4 ps-4  d-flex justify-content-evenly bottom_navbar">
                        <Nav.Link as={Link} to="/products/search?tag=Women">Women</Nav.Link>
                        <Nav.Link as={Link} to="/products/search?tag=Men">Men</Nav.Link>
                        <Nav.Link as={Link} to="/products/search?tag=House">House</Nav.Link>
                        <Nav.Link as={Link} to="/products/search?tag=Cosmetic">Cosmetic</Nav.Link>
                        <Nav.Link as={Link} to="/products/search?tag=SuperMarket">SuperMarket</Nav.Link>
                        <Nav.Link as={Link} to="/products/search?tag=Electronic">Electronic</Nav.Link>
                        <Nav.Link as={Link} to="/products/search?tag=Sport">Sport</Nav.Link>
                    </Nav>
                </Navbar>

            </Row>

        </Container>

    );
}
export default Header;