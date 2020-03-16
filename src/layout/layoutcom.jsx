// layout布局
import React from "react";
import { Layout, Breadcrumb } from 'antd';
import SliderTab from "@common/sliderTab"
import {LogoContainer} from "./styled"
const { Header, Content, Footer, Sider } = Layout;

class LayoutCom extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        {/* sliderTab部分 */}
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <LogoContainer></LogoContainer>
          <SliderTab/>
        </Sider>

        {/* 右侧内容区部分 */}
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
        
          <Content style={{ margin: '0 16px' }}>
              {/* 面包屑 */}
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>

            {/* 这部分是内容 */}
            {this.props.children}
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default LayoutCom