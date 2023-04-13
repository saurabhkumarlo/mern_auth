import { rootApi } from "../api/rootApi";
export const productsApi = rootApi.injectEndpoints({
  // product EndPoints

  endpoints: (builder) => ({
    fetchProducts: builder.query({
      query: () => "/getAllProduct",
      invalidatesTags:["Product"]

    }),
    addProduct:(builder).mutation({
      query:(data) => ({
        method:"POST",
        "url":"/create/new",
        body:data
      }),
      invalidatesTags:["Product"]
    })
  }),
});

export const { useFetchProductsQuery,useAddProductMutation } = productsApi;
