// Code DelayedButton Component Here
import React, { Component } from 'react'

export default class DelayedButton extends Component {
    render() {
        return (
            <div>
                <button onClick={this.delayButton}>Delay</button>
            </div>
        )
    }

    delayButton = (event) => {
        event.persist()
        setTimeout(() => {
            this.props.onDelayedClick(event) 

        }, 
        this.props.delay
        )
            
    }
}
