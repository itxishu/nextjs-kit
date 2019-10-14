import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import Link from 'next/link'
import React, { Component } from 'react'
import docAction, { list, categories } from '../../store/actions/doc'
import { connect } from 'react-redux'
const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;

class CommonSider extends Component {

  componentDidMount() {
    // this.props.categories()
  }

  // static getDerivedStateFromProps(nextProps, prevState) {
    // console.log('22222', nextProps, prevState)
    // if (nextProps.categories !== prevState.categories) {
    //   console.log('3333', nextProps, prevState)
    // }
    // else return null;
    // return null
  // }

  render() {
    const { categories } = this.props.doc
    console.log(444, this.props)
    return (
      <Sider width={200} style={{ background: '#fff' }}>
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%' }}
        >
          <SubMenu key="sub1" title={<span><Icon type="user" />subnav 1</span>}>

            {categories.map((item, index) => {
              return <Menu.Item key={index}><Link href="/doc/miniprogram/?path=intro">
                <a>{item.name}</a>
              </Link></Menu.Item>
            })}
            <Menu.Item key="1"><Link href="/doc/miniprogram/?path=intro">
              <a>option1</a>
            </Link></Menu.Item>
            <Menu.Item key="2"><Link href="/doc/miniprogram/?path=guide">
              <a>option2</a>
            </Link></Menu.Item>
            <Menu.Item key="3">option3</Menu.Item>
            <Menu.Item key="4">option4</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
    )
  }
}


// import Clock from './clock'
// import Counter from './counter'

// function Examples ({ lastUpdate, light }) {
//   return (
//     <div>
//       <Clock lastUpdate={lastUpdate} light={light} />
//       <Counter />
//     </div>
//   )
// }

function mapStateToProps(state) {
  console.log('777', state)
  const { categories } = state
  return state
  // return { categories: doc.categories }
}
const mapDispatchToProps = () => ({ ...docAction })
export default connect(mapStateToProps, mapDispatchToProps)(CommonSider)
