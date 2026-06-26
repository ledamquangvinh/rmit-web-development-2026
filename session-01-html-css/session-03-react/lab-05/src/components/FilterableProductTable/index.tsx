import type React from "react";
import type { Product } from "../../model/Product";
import SearchBar from "../SearchBar";
import { useState } from "react";
import ProductTable from "../Products/ProductTable";

interface Props {
  product: Product[];
}

const FilterableProductTable: React.FC<Props> = (props: Props) => {
  const [filterText, setFilterText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);

  return (
    <div>
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={setFilterText}
        onInStockOnlyChange={setInStockOnly}
      />
      <ProductTable products={props.product} filterText={filterText} inStockOnly={inStockOnly}/>
    </div>
  );
};

export default FilterableProductTable;
