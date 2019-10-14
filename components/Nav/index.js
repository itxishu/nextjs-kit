import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import Link from 'next/link'
import React, { Component } from 'react'
const { Header, Content, Sider } = Layout;

export default class Nav extends Component {
  render() {
    return (
      <Header className="header">
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="1"><Link href="/doc"><a>doc</a></Link></Menu.Item>
          <Menu.Item key="2"><Link href="/about"><a>about</a></Link></Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Header>
    )
  }
}
