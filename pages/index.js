import React from 'react'
import docAction, { list } from '../store/actions/doc'
import { connect } from 'react-redux'
import Layout from '../components/layout'
class Index extends React.Component {
  static getInitialProps({ store, isServer }) {
    // return docAction.list();
    return store.dispatch(list());
  }

  componentDidMount() {
    this.props.list()
  }

  componentWillUnmount() {

  }

  render() {
    console.log(this.props)
    if (!this.props.doc.posts) return <div> hah </div>
    return (
      <div>
        {this.props.doc.posts.map((item, index) => {
          return <div key={index}>{item.title.rendered}</div>
        })}
        <Layout>
          <div>Hello World.</div>
        </Layout>
      </div>
    )
  }
}
function mapStateToProps(state) {
  console.log('state5555', state)
  const { categories } = state
  return state
  // return { categories: doc.categories }
}
// const mapStateToProps = state => state
const mapDispatchToProps = () => ({ ...docAction })
export default connect(mapStateToProps, mapDispatchToProps)(Index)