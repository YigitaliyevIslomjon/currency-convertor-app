import React, { ReactNode, useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { menuItems } from "../data/menuItems";
import "./MainLayoute.scss";
import ErrorBoundary from "../components/ErrorBoundary";
const { Header, Sider, Content } = Layout;

interface MainLayoutPop {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutPop> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout className="mainLayout">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={menuItems}
        />
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
            }
          )}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          <ErrorBoundary>{children}</ErrorBoundary>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
