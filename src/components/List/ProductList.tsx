/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetProductsQuery} from "../../api/apiSlice";
import ProductCard from "./Product";
import  {ContainerCard} from './styledProduct'
function ProductList() {
  const { data: products, isError, isLoading } = useGetProductsQuery()
 
  if (isLoading) return <div>Cargando tus productos... </div>
  else if (isError) return <div>Problemas al cargar</div> 
  return (
    <div>
     <h1>Products List</h1> 
      <ContainerCard>
        {products?.map((product: any) => {
          return (
            <ProductCard
            key={product.id}
              id={product.id}
              title={product.title}
             image={product.image}
             description={product.description} 
             price={product.price}
            />
 
          )
        })}
      </ContainerCard>
    </div>
  )

}
export default ProductList;