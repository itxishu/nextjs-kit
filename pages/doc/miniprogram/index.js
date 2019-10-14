import { withRouter } from 'next/router'
import Layout from '../../../components/layout'
import CommonSider from '../../../components/Sider'
class Miniprogram extends React.Component {
  render() {
    return <Layout>
      <CommonSider/>
    {this.props.router.query.path}
    </Layout>
  }
}

export default withRouter(Miniprogram)
