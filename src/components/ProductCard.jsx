import { Link } from 'react-router-dom';

const ProductCard = ({ product, onDelete }) => (
  <div className="border p-4 rounded shadow">
    <img src={product.image || 'https://via.placeholder.com/150'} alt={product.name} className="mb-2 w-full h-40 object-cover" />
    <h2 className="text-xl font-semibold">{product.name}</h2>
    <p>Description: {product.description}</p>
    <p className="text-green-600 font-bold">Price: ${product.price}</p>
    <div className="mt-2 flex gap-2">
        <Link 
            to={`/product/${product.id}`} 
            className="text-blue-500 mx-2 btn btn-primary"
            style={{width: "8%", height: "8%"}}
        >
            Chi tiết
        </Link>

        <Link 
            to={`/edit/${product.id}`} 
            className="text-yellow-500 mx-2 btn btn-primary"
            style={{width: "8%", height: "8%"}}
        >
            Sửa
        </Link>

        <button onClick={() => onDelete(product.id)} className="text-white bg-danger btn" style={{width: "8%", height: "8%"}}>Xoá</button>
    </div>
  </div>
);

export default ProductCard;