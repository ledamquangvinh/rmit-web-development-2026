/**
 * Define Function Componet for Footer of Page
 */

import React from "react";
import "./style.css"
type Props = {
  message: string
}

const Footer : React.FC<Props> = (props: Props) => {
  return(
    <footer>
      <h3>{props.message}</h3>
    </footer>
  )
}

export default Footer