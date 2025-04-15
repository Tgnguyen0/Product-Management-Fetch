import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchProducts = createAsyncThunk("products/fetch", async () => {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    return data.products;
  });
  
  export const fetchProductById = createAsyncThunk("products/fetchById", async (id) => {
    const res = await fetch(`https://dummyjson.com/products/${id}`);
    return await res.json();
  });
  
  export const addProduct = createAsyncThunk("products/add", async (product) => {
    const res = await fetch("https://dummyjson.com/products/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    });
    return await res.json();
  });
  
  export const updateProduct = createAsyncThunk("products/update", async ({ id, updatedProduct }) => {
    const res = await fetch(`https://dummyjson.com/products/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedProduct),
    });
    return await res.json();
  });
  
  export const deleteProduct = createAsyncThunk("products/delete", async (id) => {
    await fetch(`https://dummyjson.com/products/${id}`, {
      method: "DELETE",
    });
    return id;
  });

const productSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => { state.loading = true; })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.loading = false;
        state.error = 'Failed to fetch products';
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        const index = state.items.findIndex(p => p.id === action.payload.id);
        state.items[index] = action.payload;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.items = state.items.filter(p => p.id !== action.payload);
      });
  },
});

export default productSlice.reducer;