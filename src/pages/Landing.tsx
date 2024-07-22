import FeaturedProducts from '@/components/landing/FeaturedProducts'
import Hero from '@/components/landing/Hero'
import { type LoaderFunction } from 'react-router-dom'
import { customFetch, type ProductsResponse } from '@/utils'

const url = '/products?featured=true'

export const loader: LoaderFunction = async (): Promise<ProductsResponse> => {
  const response = await customFetch<ProductsResponse>(url)
  return { ...response.data }
}

const Landing = () => {
  return (
    <>
      <Hero />
      <FeaturedProducts />
    </>
  )
}

export default Landing
