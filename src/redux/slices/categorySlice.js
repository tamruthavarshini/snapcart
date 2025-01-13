import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const CATEGORY_GET_URL = `${process.env.REACT_APP_ECO_BASE_URL}/categories`;

export const getCategories = createAsyncThunk(
  "categories/fetch",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(CATEGORY_GET_URL);

      if (response.status !== 200) {
        throw new Error("Failed to fetch categories");
      }

      const categories = response.data.data.map((category) => {
        let imageBase64 = null;

        if (category.image?.data && category.image.data.length > 0) {
          try {
            const uint8Array = new Uint8Array(category.image.data);
            let binaryString = "";

            for (let i = 0; i < uint8Array.length; i++) {
              binaryString += String.fromCharCode(uint8Array[i]);
            }

            imageBase64 = `data:image/png;base64,${btoa(binaryString)}`;
          } catch (error) {
            console.error(
              `Error converting image for category ID ${category.id}:`,
              error
            );
          }
        }

        return {
          ...category,
          image: imageBase64 || null,
        };
      });

      return categories;
    } catch (error) {
      console.error("Error fetching categories:", error);
      return rejectWithValue(
        error.response?.data?.message || error.message
      );
    }
  }
);

const categorySlice = createSlice({
  name: "categories",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default categorySlice.reducer;
