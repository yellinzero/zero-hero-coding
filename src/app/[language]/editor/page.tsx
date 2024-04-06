import React from "react";
import { Breadcrumb, Layout, Menu } from "antd";
import { Header, Content, Footer } from "antd/lib/layout/layout";
import BreadcrumbItem from "antd/lib/breadcrumb/BreadcrumbItem";
const items = new Array(15).fill(null).map((_, index) => ({
  key: index + 1,
  label: `nav ${index + 1}`,
}));

export default function Editor() {
  return (
    <Layout style={{ height: "100%" }}>
      <Header style={{ display: "flex", alignItems: "center" }}>
        <div className="font-bold text-2xl text-white">Zero Hero</div>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={items}
          style={{ flex: 1, minWidth: 0 }}
        />
      </Header>
      <Content>
        <div
          style={{
            minHeight: 280,
            flex: 1,
            padding: 24,
          }}
        >
          Editor
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Zero Hero Coding ©{new Date().getFullYear()} Created by ZeroKing
      </Footer>
    </Layout>
  );
}
