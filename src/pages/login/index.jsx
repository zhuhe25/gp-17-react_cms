import React, { Component } from 'react';
import { LoginContainer } from "./styled"
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {connect} from "react-redux"
import {mapStateToProps,mapDispatchToProps} from "./connect";
@connect(mapStateToProps,mapDispatchToProps)
class Login extends Component {
    //表单验证成功后的回调
    render() {
        console.log(this.props)
        return (
            <LoginContainer>
                <div className="loginContent">
                    <div className="logo_title">GP-17-CMS</div>
                    <Form
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={this.props.handleLogin.bind(this)}
                    >
                        {/* 切记每一个form.item身上必须加一个name字段否则onFinish这个方法获取不到value值 */}
                        <Form.Item
                            name="username"
                            rules={[
                                { required: true, message: "当前信息是必须传递的" }
                            ]}
                        >
                            <Input type="text" prefix={<UserOutlined />} placeholder="请输入用户名" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[
                                { max: 5, message: "密码最大长度为5" }
                            ]}
                        >
                            <Input type="password" prefix={<LockOutlined />} placeholder="请输入密码" />
                        </Form.Item>
                        <Form.Item className="login_btn">
                            <Button type="primary" htmlType="submit">提交</Button>
                        </Form.Item>
                    </Form>
                </div>
            </LoginContainer>
        );
    }
}



export default Login;