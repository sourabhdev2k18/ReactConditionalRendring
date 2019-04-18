import React, { Component } from 'react'

class App extends Component {
    constructor() {
        super()

        this.state = {
            isLogged: true
        }

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState((prevSate) => {
            return {
                isLogged: !prevSate.isLogged
            }
        })
    }
    render() {
        let buttonTxt = this.state.isLogged ? 'Logged-In' : 'Logged-Out'
        return (
            <div>
                <button onClick={this.handleClick}>{buttonTxt}</button>
            </div>
        )
    }
}
export default App