import { useGetOrderQuery } from "../../Api/paymentApi.js";
import { Container, Table } from "react-bootstrap";
import EmptyBasket from "../BasketPage/emptyBasket.js";
const OrderPage = () => {
    const { data, isLoading, isSuccess } = useGetOrderQuery();
    return (
        <Container style={{ minHeight: "800px" }} fluid className="p-5">
            {isLoading && <div></div>}
            {isSuccess && <>
                {data.orders.orders.length > 0 ? (
                    <Table bordered hover>
                        <tbody>
                            <tr>
                                <th>
                                    Adress
                                </th>
                                <th>
                                    Number
                                </th>
                                <th>
                                    Total Price
                                </th>
                            </tr>
                            {data.orders.orders.map((currentElement, index) => (
                                <tr key={index}>
                                    <th>{currentElement.ordersId.OrderAdress.OpenAdress}</th>
                                    <th>{currentElement.ordersId.OrderAdress.phoneNumber} </th>
                                    <th>{currentElement.ordersId.totalPrice}TL</th>
                                </tr>
                            ))
                            }
                        </tbody>


                    </Table>
                ) : (<EmptyBasket />)}
            </>}

        </Container>

    );
}

export default OrderPage;