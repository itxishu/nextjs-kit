import React from 'react';
import Head from 'next/head';
import { connect } from 'react-redux';
import styles from './styles.styl';

const Home = ({ user }) => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div className="hero">
      <h1 className="title">Welcome to FIG-SSR Home page!</h1>

      <div className={styles.stark}>Hi {user.name}</div>

      <p className="description">{user.info}</p>

      <div className="row">
        <a href="https://nextjs.top/docs" className="col-md-4 card">
          <h3>Documentation &rarr;</h3>
          <p>Learn more about FIG-SSR in the documentation.</p>
        </a>
        <a href="https://nextjs.top/learn" className="col-md-4 card">
          <h3>Next.js Learn &rarr;</h3>
          <p>Learn about FIG-SSR by following an interactive tutorial!</p>
        </a>
        <a
          href="https://github.com/zeit/next.js/tree/master/examples"
          className="col-md-4 card"
        >
          <h3>Examples &rarr;</h3>
          <p>Find other example boilerplates on the FIG-SSR GitHub.</p>
        </a>
      </div>
    </div>

    <style jsx>{`
      .hero {
        width: 100%;
        color: #333;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 48px;
      }
      .title,
      .description {
        text-align: center;
      }
      .card {
        padding: 18px 18px 24px;
        width: 220px;
        text-align: left;
        text-decoration: none;
        color: #434343;
        border: 1px solid #9b9b9b;
      }
      .card:hover {
        border-color: #067df7;
      }
      .card h3 {
        margin: 0;
        color: #067df7;
        font-size: 18px;
      }
      .card p {
        margin: 0;
        padding: 12px 0 0;
        font-size: 13px;
        color: #333;
      }
    `}</style>
  </div>
);

Home.getInitialProps = async ({ store }) => {
  await store.dispatch.home.getUser();
  return {};
};

const mapState = ({ home }) => {
  console.log(home);
  return { ...home };
};

const mapDispatch = dispatch => ({
  getUser: () => dispatch.home.getUser()
});

export default connect(
  mapState,
  mapDispatch
)(Home);
