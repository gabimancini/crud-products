import ProductList from "./components/List/ProductList"
import ProductForm  from "./components/Form/ProductForm"
import  {Main} from './styledApp'
function App() {
  return (
    <Main>
      <ProductForm />
      <ProductList />
    </Main>
  )
}

export default App
