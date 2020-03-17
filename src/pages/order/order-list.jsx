import React, { Component,Fragment} from 'react';
import layoutHoc from "@layout"
import { Steps, Button } from "antd";
import One from "@components/stepComponents/one.jsx"
import Two from "@components/stepComponents/two.jsx"
import Three from "@components/stepComponents/three.jsx"
const { Step } = Steps;
@layoutHoc
class OrderList extends Component {
    constructor(){
        super();
        this.state = {
            current:0
        }
    }
    render() {
        let {current} = this.state;
        return (
            <Fragment>
                <Steps current={current}>
                    <Step title="基本信息" description="请填写您的个人信息" />
                    <Step title="证件信息" description="请上传您的证件照" />
                    <Step title="提交审核" description="审核日期大约3-5天" />
                </Steps>
                {current==0?<One handleStep={this.handleClick.bind(this)}/>:current == 1?<Two handleStep={this.handleClick.bind(this)}/>:<Three handleStep={this.handleClick.bind(this)}/>}
            </Fragment>
        );
    }
    handleClick(){
        this.setState({
            current:++this.state.current
        })
    }
}

export default OrderList;