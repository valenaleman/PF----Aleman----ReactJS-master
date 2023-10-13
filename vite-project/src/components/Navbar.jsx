import ProductWidget from "./ProductWidget"

const Navbar = () => {
    return (
        <div className="navbar bg-dark text-white">
            <div className="container">
                <h1>Producto</h1>
                <div>
                    <ProductWidget product={product} />
                </div>
            </div>
        </div>
    )
}

export default Navbar