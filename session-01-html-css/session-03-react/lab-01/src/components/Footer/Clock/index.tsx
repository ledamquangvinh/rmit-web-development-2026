/**
 * Define Clock Component for Footer
 */

import React, { type ReactNode } from "react";

import "./style.css"

type Type = {
  date: Date
}

export default class Clock extends React.Component<Type> {
  // define state (statement of class component, look like an attribute)
  state: Type = {date: new Date()}

  timerID! : number

  // define constructor of class
  public constructor(props: Type) {
    super(props)
  }

  // define event handler pre-render
  public componentDidMount(): void {
    this.timerID = setInterval(() => this.timer_tick(), 1000)
  }

  // define event handle after-render
  public componentWillUnmount(): void {
    clearInterval(this.timerID);
  }

  // 
  public render() : ReactNode {
    return (
    <div className="timer">
      Now is <span>{this.state.date.toLocaleTimeString()}</span>
    </div>
    )
  }

  // define Timer Tick
  public timer_tick() {
    this.setState({ date: new Date })
  }
}