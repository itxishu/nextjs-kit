import Link from 'next/link'
import Head from 'next/head'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import Nav from '../Nav'
import CommonSider from '../Sider'
import CommonBreadcrumb from '../Breadcrumb'
import { withRouter } from 'next/router'
const { SubMenu } = Menu;
const { Content, Sider } = Layout;
class layout extends React.Component {
  render(children, title = 'This is the default title') {
    console.log(this.props.router)
    const url = this.props.router.pathname || ''
    const displaySider = ['/doc','/doc/miniprogram/'].includes(url)
    return <div>
      <Head>
        <title>hi stark</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      {/* <header>
      <nav>
        <Link href='/'><a>Home</a></Link> |
        <Link href='/about'><a>About</a></Link> |
        <Link href='/contact'><a>Contact</a></Link>
      </nav>
    </header> */}

      <Layout>
        <style jsx>{`
        #components-layout-demo-top-side-2 .logo {
          width: 120px;
          height: 31px;
          background: #333;
          border-radius: 6px;
          margin: 16px 28px 16px 0;
          float: left;
        }
      `}</style>
        <Nav />
        <Layout>
          {displaySider && <CommonSider />}
          <Layout style={{ padding: '0 24px 24px' }}>
            <CommonBreadcrumb />
            <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
              {children}
            </Content>
          </Layout>
        </Layout>
      </Layout>


      <footer>
        {'I`m here to stay'}
      </footer>
    </div>
  }
}
export default withRouter(layout)