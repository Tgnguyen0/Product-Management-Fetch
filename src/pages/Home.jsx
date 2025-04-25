import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, deleteProduct } from '../features/products/productSlice';
import ProductCard from '../components/ProductCard';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';

const Home = () => {
  const dispatch = useDispatch();
  const { items, loading } = useSelector(state => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleDelete = (id) => {
    if (confirm('Bạn có chắc muốn xoá?')) {
      dispatch(deleteProduct(id));
    }
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Danh sách sản phẩm</h1>
        <Link to="/add" className="bg-blue-500 text-white px-4 py-2 rounded btn btn-primary">Thêm mới</Link>
      </div>
      {loading ? <Spinner /> : (
        <div className="row">
          {items.map((product, index) => (
            index % 2 !== 0 ? (
              <div className="col-12 col-sm-6 col-md-4 mb-4" key={product.id}>
                <ProductCard
                  key={product.id}
                  product={product}
                  onDelete={handleDelete}
                />
              </div>
            ) : (<br></br>)
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;