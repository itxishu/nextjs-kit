import React from 'react';
import { connect } from 'react-redux';
import Layout from '../components/Layout';

class Index extends React.Component {
  static getInitialProps({ store, isServer }) {
    const a = 123;
  }

  render() {
    return (
      <div>
        {this.props.list &&
          this.props.list.map((item, index) => {
            return <div key={index}>{item.message}</div>;
          })}
        <Layout>
          <div>基于nextjs的服务端渲染脚手架</div>
        </Layout>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return state;
}
// const mapStateToProps = state => state
const mapDispatchToProps = dispatch => ({});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index);
