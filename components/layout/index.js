import Link from 'next/link';
import Head from 'next/head';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { withRouter } from 'next/router';
import stylesheet from 'antd/dist/antd.min.css';
import Nav from '../Nav';
import CommonBreadcrumb from '../Breadcrumb';

const { SubMenu } = Menu;
const { Content, Sider } = Layout;
class layout extends React.Component {
  render(children, title = 'This is the default title') {
    const { router } = this.props;
    return (
      <div>
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        <Head>
          <title>hi stark</title>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
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
          <Nav router={router} />
          <Layout>
            <CommonBreadcrumb />
            <Layout style={{ padding: '0 10px10px' }}>
              <Content
                style={{
                  background: '#fff',
                  padding: 1,
                  margin: 0,
                  minHeight: 600
                }}
              >
                {this.props.children}
              </Content>
            </Layout>
          </Layout>
        </Layout>

        <footer>{'我是底部'}</footer>
      </div>
    );
  }
}
export default withRouter(layout);
