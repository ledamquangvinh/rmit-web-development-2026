import './App.sass'
import FilterableProductTable from './components/FilterableProductTable'
import data from './data/data.json'
import { Product } from './model/Product'

const products : Product[] = data.map(item => new Product(item.category, item.price, item.stocked, item.name))

function App() {

  return (
    <>
      <FilterableProductTable product={products} />
    </>
  )
}

export default App
