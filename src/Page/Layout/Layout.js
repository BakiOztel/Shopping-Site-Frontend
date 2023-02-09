import Header from "./Header/header.js";
import Footer from "./Footer.js";
import { Outlet } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import { useIsLoginMutation } from "../../Api/authApi.js";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setCredentials } from "../../Redux/authSlice.js";

const Layout = () => {

    const [getUser, { isLoading }] = useIsLoginMutation();

    const dispatch = useDispatch();

    const [Loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {

            try {
                const userData = await getUser();
                dispatch(setCredentials({ ...userData.data }));
                setLoading(false);
            } catch (err) {
                console.log(err);
                setLoading(false);
            }
        }
        fetchData();
    }, [])
    return (
        <Container className="layout_main" fluid>
            {Loading ? (<div></div>) : (
                <>
                    <Row>
                        <Header />
                    </Row>
                    <Row>
                        <Outlet />
                    </Row>
                    <Row>
                        <Footer />
                    </Row></>
            )}
        </Container>
    );
}

export default Layout;