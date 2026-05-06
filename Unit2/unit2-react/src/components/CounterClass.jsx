import React, { Component } from "react";

class CounterClass extends Component{
    constructor(){
        super();
        this.state = {
            count: 0
        }
        this.increment = this.increment.bind(this)
    }

    increment(){
        this.setState({
            count: this.state.count + 1
        })
    }

    render(){
        return(
            <div>
                <h1>Counter Class</h1>
                <p>Count Value:{this.state.count}</p>
                <button onClick={() => this.setState({count: this.state.count + 1})}>Add (+1)</button>
                <button onClick={() => this.setState({count: this.state.count - 1})}>Subtract (-1)</button>
                <button onClick={() => this.setState({count: 0})}>Reset</button>
            </div>
        )
    }
}

export default CounterClass;