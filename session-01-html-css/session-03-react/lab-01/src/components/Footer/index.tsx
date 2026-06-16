/**
 * Define Function Componet for Footer of Page
 */

import React from "react";
import "./style.css"
import Clock from "./Clock";
type Props = {
  message: string
}

const Footer : React.FC<Props> = (props: Props) => {
  return(
    <footer>
      <h3>{props.message}</h3>
      <Clock date={new Date}></Clock>
    </footer>
  )
}

export default Footer