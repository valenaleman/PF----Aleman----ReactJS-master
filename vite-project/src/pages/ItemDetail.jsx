import { useParams } from "react-router-dom";

const product = [
    { id: "1", name: "Babysec", type: "Ultrasec", price: "$3200", amount: "60" },
    { id: "2", name: "Pampers", type: "Premium care, piel delicada", price: "$5900", amount: "58"},
    { id: "3", name: "Pampers", type: "Premium care, recién nacido hipoalergénico", price: "$2420", amount: "36" },
];

const getUser = (id) => {
    return product.find((productos) => productos.id === id)
}

const ItemDetail = () => {
    const { id } = useParams()

    const productos = getUser(id);

    return (
        <div>
            <h1>ItemDetail id: {id}</h1>
            <p>
                <b>Producto:</b> {productos.name}
            </p>
            <p>
                <b>Tipo:</b> {productos.type}
            </p>
            <p>
                <b>Precio:</b> {productos.price}
            </p> 
            <p>
                <b>Cantidad:</b> {productos.amount}
            </p>
        </div>
    )
}

export default ItemDetail