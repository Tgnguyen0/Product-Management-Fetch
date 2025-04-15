import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../features/products/productSlice';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
  const [form, setForm] = useState({ name: '', price: '', description: '' });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProduct(form)).then(() => navigate('/'));
  };

  return (
    <div className="p-4 mx-auto" style={{width: "700px"}}>
      <h2 className="text-2xl font-bold mb-4">Thêm sản phẩm</h2>
      <div className="card">
        <form onSubmit={handleSubmit} className="space-y-4 card-body d-grid">
            <div className="d-grid" style={{marginBottom: "10px"}}>
                <label>Name: </label>
                <input type="text" placeholder="Tên" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className="w-full p-2 border rounded" required />
            </div>

            <div className="d-grid" style={{marginBottom: "10px"}}>
                <label>Price: </label>
                <input type="number" placeholder="Giá" value={form.price} onChange={e => setForm({ ...form, price: e.target.value })} className="w-full p-2 border rounded" required />
            </div>

            <div className="d-grid" style={{marginBottom: "10px"}}>
                <label>Description: </label>
                <input type="number" placeholder="Giá" value={form.price} onChange={e => setForm({ ...form, price: e.target.value })} className="w-full p-2 border rounded" required />
            </div>
            
            <div className="d-flex justify-content-center">
                <button className="btn btn-primary mb-4 rounded" style={{marginRight: "4px", width: "40%"}}>Thêm</button>
                <button onClick={() => navigate(-1)} className="btn btn-primary mb-4 rounded" style={{width: "40%"}}>← Quay lại</button>
            </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
