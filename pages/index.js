import React from 'react'
import { connect } from 'react-redux'
import Layout from '../components/layout'
class Index extends React.Component {
  static getInitialProps({ store, isServer }) {
    console.log('index-getInitialProps',store, this.props)
    store.dispatch.home.query()
  }

  render() {
    console.log('home-props', this.props)
    return (
      <div>
        {this.props.list && this.props.list.map((item, index) => {
          return <div key={index}>{item.message}</div>
        })}
        {/* <Layout>
          <div>Hello World.</div>
        </Layout> */}
        123
      </div>
    )
  }
}
function mapStateToProps(state) {
  const { home } = state
  return {...home}
}
// const mapStateToProps = state => state
const mapDispatchToProps = dispatch => ({ 
  query: () => dispatch.home.query()
})
export default connect(mapStateToProps, mapDispatchToProps)(Index)
