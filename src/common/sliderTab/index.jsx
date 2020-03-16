import React, { Component } from 'react';
import {Menu} from "antd"
import sliderEach from "@utils/sliderEach";
import {routesConifg} from "@router"
import {withRouter} from "react-router-dom"

@withRouter
class SliderTab extends Component {
    constructor(){
        super();
        this.state = {
            currentKey:localStorage.getItem("currentKey") || "",
            currentOpenKey: localStorage.getItem("currentOpenKey")
        }
    }
    render() {
        let {currentKey,currentOpenKey} = this.state;
        return (
            <Menu theme="dark" selectedKeys={[currentKey]} defaultOpenKeys={[currentOpenKey]} mode="inline" onClick={this.handlePush.bind(this)}>
                {sliderEach(routesConifg)}
            </Menu>
        );
    }
    //路由跳转
    handlePush({key,keyPath}){
        this.setState({
            currentKey:key,
            currentOpenKey:keyPath[1]?keyPath[1]:""
        })
        
        localStorage.setItem("currentKey",key);
        localStorage.setItem("currentOpenKey",keyPath[1])
        this.props.history.replace(key);
    }
}

export default SliderTab;