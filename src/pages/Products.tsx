import Filters from '@/components/products/Filters';
import ProductsContainer from '@/components/products/ProductsContainer';
import PaginationContainer from '@/components/products/PaginationContainer';
import { customFetch, type ProductsResponse } from '../utils';
import { type LoaderFunction } from 'react-router-dom';

const url = '/products';

export const loader: LoaderFunction = async (): Promise<ProductsResponse> => {
  const response = await customFetch<ProductsResponse>(url);
  return { ...response.data };
};

const Products = () => {
  
  return (
    <>
      <Filters />
      <ProductsContainer />
      <PaginationContainer />
    </>
  );
};
export default Products;