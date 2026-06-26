import type React from "react";
import type { Product } from "../../../model/Product";
import type { JSXElementConstructor, ReactElement } from "react";
import ProductRow from "../ProductRow";
import ProductCategoryRow from "../ProductCategoryRow";

interface Props {
  products: Product[]
  filterText: string
  inStockOnly: boolean
}

const ProductTable : React.FC<Props> = (props: Props) => {
  const rows: ReactElement<unknown, string | JSXElementConstructor<unknown>>[] = []
  let lastCategory: string | null = null

  props.products.forEach((product) => {
    if (product.Name.toLowerCase().indexOf(props.filterText.toLowerCase()) === -1)
      return

    if(props.inStockOnly != product.Stocked)
      return

    if(product.Category !== lastCategory) 
      rows.push(<ProductCategoryRow category={product.Category} key={product.Category}/>)

    rows.push(<ProductRow product={product} key={product.Name}/>)
    lastCategory = product.Category
  })
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
  )
}

export default ProductTable;