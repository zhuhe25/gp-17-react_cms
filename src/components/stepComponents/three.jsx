import React, { Component } from 'react';
import {Button} from "antd"
class Three extends Component {
    render() {
        return (
            <div>
                Three
                <Button onClick={this.props.handleStep.bind(this)}>下一步</Button>
            </div>
        );
    }
}

export default Three;