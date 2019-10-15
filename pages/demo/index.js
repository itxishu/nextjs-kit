import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button } from 'antd'
class Demo extends Component {
  static getInitialProps({ store, isServer }) {
    store.dispatch.demo.query()
  }

  getList = () => {
    this.props.query()
  }

  render() {
    console.log('home-props', this.props)
    return (
      <div>
        <Button type='primary' onClick={this.getList}>GetData</Button>
        {this.props.list && this.props.list.map((item, index) => {
          return <div key={index}>{item.title}</div>
        })}
      </div>
    )
  }
}
function mapStateToProps(state) {
  const { demo } = state
  return {...demo}
}
// const mapStateToProps = state => state
const mapDispatchToProps = dispatch => ({ 
  query: () => dispatch.demo.query()
})
export default connect(mapStateToProps, mapDispatchToProps)(Demo)
