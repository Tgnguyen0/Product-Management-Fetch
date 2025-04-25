import { Link } from 'react-router-dom';

const ProductCard = ({ product, onDelete }) => (
    <Link className="card border p-4 rounded shadow" to={`/product/${product.id}`} >
        <img src={product.images || 'https://via.placeholder.com/150'} alt={product.name} className="card-img-top mb-2 w-full h-40 object-cover" />
        <div class="card-body">
            <h4 className="text-xl font-semibold">{product.title}</h4>
            <p class="text-green-600 font-bold card-text">Price: ${product.price}</p>
            <div className="mt-2 flex gap-2">
                <Link 
                    to={`/edit/${product.id}`} 
                    className="text-yellow-500 mx-2 btn btn-primary"
                    style={{width: "15%", height: "15%"}}
                >
                    Sửa
                </Link>

                <button onClick={() => onDelete(product.id)} className="text-white bg-danger btn" style={{width: "15%", height: "15%"}}>Xoá</button>
            </div>
        </div>
    </Link>
);

export default ProductCard;