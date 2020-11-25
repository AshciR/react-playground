import React, { Component } from 'react'

class Welcome extends Component {

    render() {
        return <h1>Welcome {this.props.name} You are a {this.props.relation}</h1>
    }

}

export default Welcome;
