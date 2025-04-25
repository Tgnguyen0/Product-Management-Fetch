import { useParams, useNavigate } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import Spinner from '../components/Spinner';
import { useState } from 'react';

const ProductDetail = () => {
  const { id } = useParams();
  const { data: product, loading } = useFetch(`https://dummyjson.com/products/${id}`);
  const [ reviewsList, setReviewsList ] = useState([]);
  const navigate = useNavigate();

  //setReviewsList(product.reviews);

  return (
    <div className="p-4" style={{width: "100%", marginTop: "5px"}}>

        <button onClick={() => navigate(-1)} className="mb-4 text-blue-500">← Quay lại</button>

        <div className="d-flex">
          <div className="card p-4 max-w-xl mx-auto" style={{marginTop: "10px", maxWidth: "500px"}}>
              <h2 className="text-2xl font-bold mb-2">Thông tin chi tiết sản phẩm</h2>

              {loading ? (
                <Spinner />
              ) : (
                <div>
                  <div className="card-body">
                    <img
                      src={product.images || 'https://via.placeholder.com/150'}
                      alt={product.name}
                      className="card-img-top mb-2 w-full h-40 object-cover"
                    />
                    <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
                    <p className="mb-2 card-text">Description: {product.description}</p>
                    <p className="text-green-600 font-bold card-text">Price: ${product.price}</p>
                  </div>
                </div>
              )}
          </div>

          <div className="card p-4 max-w-xl mx-auto" style={{marginTop: "10px", marginLeft: "10px", width: "500px"}}>
            <h2>Bình Luận</h2>

            {product && product.reviews && product.reviews.map((review, index) => (
              <div key={index} className="border p-3 mb-2 rounded shadow max-w-xl" style={{maxWidth: "500px"}}>
                <h4 className="font-semibold">{review.reviewerName}</h4>
                <p className="text-yellow-600">Rating: {review.rating}/5</p>
                <p>{review.comment}</p>
                <small className="text-gray-500">{new Date(review.date).toLocaleDateString()}</small>
              </div>
            ))}
          </div>
        </div>
    </div>
  );
};

export default ProductDetail;