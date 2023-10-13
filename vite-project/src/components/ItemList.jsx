const ItemList = ({ products }) => {
    return <div>
        <ul>
            {products.map (product => (
                <li key={product.id}>{product.name} - ${product.price}</li>
            ))}
        </ul>
    </div>;
}

export default ItemList