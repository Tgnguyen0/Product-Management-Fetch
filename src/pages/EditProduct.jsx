import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { updateProduct } from '../features/products/productSlice';

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [form, setForm] = useState({ name: '', price: '', description: '' });

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then(data => setForm(data));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProduct({ ...form, id: parseInt(id) })).then(() => navigate('/'));
  };

  return (
    <div className="p-4 mx-auto" style={{width: "700px"}}>
      <h2 className="text-2xl font-bold mb-4">Chỉnh sửa sản phẩm</h2>
      <div className="card">
        <form onSubmit={handleSubmit} className="space-y-4 card-body d-grid">
            <div className="d-grid" style={{marginBottom: "10px"}}>
                <label>Name: </label>
                <input type="text" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className="w-full p-2 border rounded" required />
            </div>

            <div className="d-grid" style={{marginBottom: "10px"}}>
                <label>Price: </label>
                <input type="number" value={form.price} onChange={e => setForm({ ...form, price: e.target.value })} className="w-full p-2 border rounded" required />
            </div>

            <div className="d-grid" style={{marginBottom: "10px"}}>
                <label>Description: </label>
                <textarea value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} className="w-full p-2 border rounded" style={{height: "100px"}} required />
            </div>
            
            <div className="d-flex justify-content-center">
                <button className="btn btn-primary mb-4 rounded" style={{marginRight: "4px", width: "40%"}}>Cập nhật</button>
                <button onClick={() => navigate(-1)} className="btn btn-primary mb-4 rounded" style={{width: "40%"}}>← Quay lại</button>
            </div>
        </form>
      </div>
    </div>
  );
};

export default EditProduct;