import React from 'react'
import docAction, { list,categories } from '../../store/actions/doc'
import { connect } from 'react-redux'
import Layout from '../../components/layout'
class Doc extends React.Component {
  static getInitialProps({ store, isServer }) {
    // return docAction.list();
    return store.dispatch(categories());
  }

  componentDidMount() {
    this.props.categories()
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
  console.log('777', state)
  const { categories } = state
  return state
  // return { categories: doc.categories }
}
// const mapStateToProps = state => state
const mapDispatchToProps = () => ({ ...docAction })
export default connect(mapStateToProps, mapDispatchToProps)(Doc)
