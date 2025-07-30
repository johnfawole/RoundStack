import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {

  return (

    <div className = {styles.container}>
      <Head>
        <title>RoundStack</title>
      </Head>

    <header className={styles.header}>
      <div className= {styles.logo}>RoundStack - Bringing Rotational Savings and Credit Onchain</div>
      <nav className = {styles.nav}>
        <a href="#how">How It Works</a>
        <a href="#features">Features</a>
        <a href="#groups">Groups</a>
        <button className={styles.connectBtn}>Connect Wallet</button>
      </nav>
    </header>

    <section className = {styles.hero}>
      <h1>Built for the decentralized future</h1>
      <p>Create or join automated rotating saving groups.</p>
    <div className = {styles.cta}>
      <button>Start a Group</button>
      <button>Join a Group</button>
    </div>
    </section>

    <section id="features" className={styles.features}>
      <div className = {styles.featureCard}>Automated Payouts</div>
      <div className = {styles.featureCard}>Onchain Reputation</div>
      <div className = {styles.featureCard}>Dispute Resolution</div>
      <div className = {styles.featureCard}>Crypto Native</div>
      <div className = {styles.featureCard}>Private and Public Groups</div>
      <div className = {styles.featureCard}>Full Transparency</div>
    </section>

    <section className = {styles.trusted}>
      <h2>Trusted by the Community</h2>
      <div className={styles.stats}
    </section>
    </div>
  )
}