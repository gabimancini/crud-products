/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetProductsQuery } from "../api/apiSlice";
import ProductCard from "./Product";
function ProductList() {
  const { data: products, isError, isLoading } = useGetProductsQuery("20")
  if (isLoading) return <div>Loading...</div>
  else if (isError) return <div>Problemas al cargar</div>
  return (
    <>
     <h1>Products List</h1> 
      <div className="container__card">
        {products?.map((product: any) => {
          return (

            <ProductCard
              id={product.id}
              title={product.title}
              image={product.image}
              description={product.description}
              price={product.price}
            />
          )
        })}
      </div>
    </>
  )

}
export default ProductList;