import Head from 'next/head'
import Header from '../components/Header';
import styles from '../styles/Home.module.scss'

const Home = () => {
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Clover&nbsp;&mdash; Cross-chain DeFi Interoperability</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>

        <h1 className={styles.title}>
          Cross-chain DeFi Interoperability
        </h1>
      </main>
    </div>
  )
};

export default Home;
