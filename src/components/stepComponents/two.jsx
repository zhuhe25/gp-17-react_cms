import React, { Component } from 'react';
import {Button} from "antd"
class Two extends Component {
    render() {
        return (
            <div>
                Two
                <Button onClick={this.props.handleStep.bind(this)}>下一步</Button>
            </div>
        );
    }
}

export default Two;