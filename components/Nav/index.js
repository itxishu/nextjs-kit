import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import Link from 'next/link';
import React, { Component } from 'react';

const { Header, Content, Sider } = Layout;

export default class Nav extends Component {
  render() {
    const { router } = this.props;
    const {pathname} = router;
    return (
      <Header className="header">
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={[pathname]}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="/">
            <Link href="/">
              <a>基于nextjs的服务端渲染脚手架</a>
            </Link>
          </Menu.Item>
          <Menu.Item key="/doc">
            <Link href="/doc">
              <a>doc</a>
            </Link>
          </Menu.Item>
          <Menu.Item key="/about">
            <Link href="/about">
              <a>about</a>
            </Link>
          </Menu.Item>
          <Menu.Item key="/demo">
            <Link href="/demo">
              <a>rematch demo</a>
            </Link>
          </Menu.Item>
        </Menu>
      </Header>
    );
  }
}
