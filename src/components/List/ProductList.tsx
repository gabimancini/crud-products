/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetProductsQuery } from "../../api/apiSlice";
import ProductCard from "./Product";
import Typography from '@mui/material/Typography';
import { CustomizedContainer, ContainerCard } from "./styledProduct"; 
function ProductList() {
  const { data: products, isError, isLoading } = useGetProductsQuery()

  if (isLoading) return <CustomizedContainer>Cargando tus productos... </CustomizedContainer>
  else if (isError) return <CustomizedContainer>Problemas al cargar</CustomizedContainer>

  return ( 
    <CustomizedContainer>
      <Typography gutterBottom pt={4} mt={10} mb={6} variant="h3" component="div">Products List</Typography>
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
              category={product.category}
            />
          )
        })}
      </ContainerCard>
    </CustomizedContainer> 
  )
}
export default ProductList;