import ProductsGrid from "../products/ProductsGrid"
import SectionTitle from "../ui/SectionTitle"

const FeaturedProducts = () => {
  return (
    <section className="pt-24">
      <SectionTitle text="featured products" />
      <ProductsGrid />
    </section>
  )
}

export default FeaturedProducts
