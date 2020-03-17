import React, { Component } from 'react';
import {Button} from "antd"
class One extends Component {
    render() {
        return (
            <div>
                One
                <Button onClick={this.props.handleStep.bind(this)}>下一步</Button>
            </div>
        );
    }
}

export default One;