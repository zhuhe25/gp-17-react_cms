// 做高阶组件
import React from "react";
import LayoutCom from "./layoutcom"
import {Redirect} from "react-router-dom"
import Cookies from "js-cookie";
export default (WrapperComponent)=>{
    return class extends React.Component{
        render(){
            if(Cookies.get("token")){
                return (
                    <LayoutCom>
                        <WrapperComponent/>
                    </LayoutCom>
                )
            }else{
                return <Redirect to="/login"/>
            }
        }
    }
}