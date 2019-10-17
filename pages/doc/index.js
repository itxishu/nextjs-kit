import React from 'react';
import { connect } from 'react-redux';
import Layout from '../../components/Layout';

class Index extends React.Component {
  static getInitialProps({ store, isServer }) {
    const a = 123;
  }

  render() {
    return (
      <div>
        <Layout>
          <div>Hello doc.</div>
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
