import React from 'react';
import { connect } from 'react-redux';
import Layout from '../components/layout';

class Index extends React.Component {
  static getInitialProps({ store, isServer }) {
    const a = 123;
  }

  render() {
    console.log('home-props', this.props);
    return (
      <div>
        {this.props.list &&
          this.props.list.map((item, index) => {
            return <div key={index}>{item.message}</div>;
          })}
        <Layout>
          <div>Hello World.</div>
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
