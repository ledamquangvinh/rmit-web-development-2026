/**
 * Define class component for header of page
 */

import React from 'react'
import "./style.css"

// import resources
import reactLogo from '../../assets/react.svg'

// define property for header component
type Props = {
  title: string
}
// define class component
class Header extends React.Component<Props>{
  public constructor(props: Props){
    super(props)
  }

  public render(): React.ReactNode {
    return (
    <header>
      <h1>{this.props.title}</h1>
      <img src={reactLogo} className='logo'/>
    </header>
    )
  }
}

export default Header