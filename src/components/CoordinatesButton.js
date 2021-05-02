import React, { Component } from 'react'

export default class CoordinatesButton extends Component {
    render() {
        return (
            <div>
                <button onClick={this.sendCords}>Coords!</button>
            </div>
        )
    }

    sendCords = (event) => {
        const x = event.clientX 
        const y = event.clientY
        this.props.onReceiveCoordinates([x, y])
    }
}
