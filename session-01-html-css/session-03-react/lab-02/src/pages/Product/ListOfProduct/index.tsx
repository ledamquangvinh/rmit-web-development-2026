import type React from "react";

import data from "../../../data/data.json"
import ProductItem from "../ProductItem";

const ListOfProduct : React.FC = () => {
 return (
  <>
    <h2>List of Product</h2>
    {
      data.map((ProductItem, index) => {
        
      })
    }
  </>
 )
}

export default ListOfProduct;