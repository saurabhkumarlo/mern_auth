import React from "react";

import Product from "../components/Products";
import { useFetchProductsQuery } from "../features/products/productApi";

const HomePage = () => {
  // const { products } = useSelector((state) => state.products);

  const {
    data: products,
    isLoading,
    isError,
    error,
  } = useFetchProductsQuery() || {};

  return (
    <>
      {/* <h1 className='text-4xl text-center my-4 py-5'>All Products</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 items-center justify-center mx-4 py-5 px-3 my-2'>
                {
                    products?.map((product) => {
                        return <Product key={product?._id} product={product} />
                    })
                }
            </div> */}

      {/* <div className='h-screen bg-gray-100 flex items-center flex-row md:flex-row lg:flex-row sm:flex-col justify-center gap-10'>

                {
                    products?.map((product) => {
                        return <Product key={product?._id} product={product} />
                    })
                }
            </div> */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 items-center justify-center px-3 py-4 dark:bg-black">
        {products?.map((product) => {
          return <Product key={product?._id} product={product} />;
        })}
      </div>
    </>
  );
};

export default HomePage;
