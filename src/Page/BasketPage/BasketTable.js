import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BasketImg } from "../../Components/basketPageComp.js";
import { GoTrashcan } from "react-icons/go";
import { useState } from "react";
import { useDeleteProductBasketMutation } from "../../Api/productApi.js";
const BasketTable = ({ data, setPrice }) => {
    const [list, updateList] = useState(data);
    const [deletePr, { isLoading }] = useDeleteProductBasketMutation();
    const DeleteProductFromBasket = async ({ productIndex, price }) => {
        const x = await deletePr({ index: productIndex, cost: price });
        updateList((lists) => lists.filter((_, index) => index !== productIndex));
        setPrice(Price => Price -= price)
    }
    return (
        <Table bordered hover>
            <tbody>
                {list.map((currentElement, index) => (
                    <tr key={index}>
                        <th>{index}</th>
                        <th> <BasketImg src={`https://picsum.photos/id/23${index}/300/300`} /></th>
                        <th>{currentElement.productId.name}</th>
                        <th>{currentElement.productId.price} TL</th>
                        <th>piece:{currentElement.qty}</th>
                        <th>Seller : <Link to={`/seller/${currentElement.productId.sellerId._id}`}>{currentElement.productId.sellerId.name}</Link></th>
                        <th>
                            <Button onClick={() => { DeleteProductFromBasket({ productIndex: index, price: currentElement.productId.price }) }}>
                                <GoTrashcan />
                            </Button>
                        </th>
                    </tr>
                ))
                }
            </tbody>
        </Table>
    );
}
export default BasketTable;