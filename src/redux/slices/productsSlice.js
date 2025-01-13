import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from "axios";

const PRODUCTS_GET_URL = `${process.env.REACT_APP_ECO_BASE_URL}/products`;
const PRODUCT_DETAILS_GET_URL =`${process.env.REACT_APP_ECO_BASE_URL}/product`;

export const getProducts = createAsyncThunk(
  "products/fetch",
  async (categoryId, { rejectWithValue }) => {
    try {
      const response = await axios.get(PRODUCTS_GET_URL, {
        params: { categoryId },
      });

      console.log("API Response:", response.data);

      if (response.status !== 200) {
        throw new Error("Failed to fetch products");
      }

      return response.data;
    } catch (error) {
      console.error("Error fetching products:", error);
      return rejectWithValue(
        error.response?.data?.message || error.message
      );
    }
  }
);

export const getProductDetails = createAsyncThunk(
  "product/fetchDetails",
  async ({ categoryId, product_id }, { rejectWithValue }) => {
    console.log(categoryId+" "+ product_id+ " "+PRODUCT_DETAILS_GET_URL);
    try {
      // Ensure params are being passed correctly without any extra characters
      const response = await axios.get(PRODUCT_DETAILS_GET_URL, {
        params: { categoryId, product_id },  // Send both categoryId and product_id as query parameters
      });

      console.log("API Response:", response.data);  // Log response data

      if (response.status !== 200) {
        throw new Error("Failed to fetch product details");
      }

      return response.data.data;
    } catch (error) {
      console.error("Error fetching product details:", error);  // Log any errors
      return rejectWithValue(
        error.response?.data?.message || error.message
      );
    }
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.data;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Handle getProductDetails extra reducers
      .addCase(getProductDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProductDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload; // Expecting a single product response
      })
      .addCase(getProductDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default productsSlice.reducer;
