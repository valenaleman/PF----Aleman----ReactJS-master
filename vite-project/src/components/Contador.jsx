import { useState} from "react";

const Contador = () => {
    const [count, setCount] = useState(0)
    const Agregar = () => {
        console.log("Agregando producto al carrito");
            setCount(count + 1);
    };
    const Eliminar = () => {
        console.log("Eliminando producto del carrito");
            setCount(count - 1);
    };
    return (
        <div>
            <h1>Cantidad de productos agregados al carrito: {count}</h1>
            <button className="btn btn-primary me-2" onClick={Agregar}>Agregar producto</button>
            <button className="btn btn-danger" onClick={Eliminar}>Eliminar producto</button>
        </div>
    )
}

export default Contador