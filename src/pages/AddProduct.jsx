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
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Thêm sản phẩm</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" placeholder="Tên" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className="w-full p-2 border rounded" required />
        <input type="number" placeholder="Giá" value={form.price} onChange={e => setForm({ ...form, price: e.target.value })} className="w-full p-2 border rounded" required />
        <textarea placeholder="Mô tả" value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} className="w-full p-2 border rounded" required />
        <button className="bg-green-500 text-white px-4 py-2 rounded">Thêm</button>
      </form>
    </div>
  );
};

export default AddProduct;
