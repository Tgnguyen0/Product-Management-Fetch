import { useParams, useNavigate } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import Spinner from '../components/Spinner';

const ProductDetail = () => {
  const { id } = useParams();
  const { data: product, loading } = useFetch(`https://dummyjson.com/products/${id}`);
  const navigate = useNavigate();

  return (
    <div className="p-4" style={{width: "100%", marginTop: "5px"}}>
        <h2 className="text-2xl font-bold mb-2">Thông tin chi tiết sản phẩm</h2>
        <div className="card p-4 max-w-xl mx-auto" style={{marginTop: "10px", maxWidth: "500px"}}>
            {loading ? <Spinner /> : (
                <div className="card-body">
                    <img src={product.image || 'https://via.placeholder.com/150'} alt={product.name} className="w-full h-60 object-cover mb-4" />
                    <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
                    <p className="mb-2 card-text">Description: {product.description}</p>
                    <p className="text-green-600 font-bold card-text">Price: ${product.price}</p>
                </div>
            )}
            <button onClick={() => navigate(-1)} className="mb-4 text-blue-500">← Quay lại</button>
        </div>
    </div>
  );
};

export default ProductDetail;