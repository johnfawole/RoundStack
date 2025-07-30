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
      <div className={styles.stats}>
        <div>132<br/> Groups Created</div>
        <div>$12,500<br/>Saved Onchain</div>
        <div>98%<br/>Completion Rate</div>
      </div>

      <blockquote>
        "RoundStack transformed how our team saves for equipment."
      </blockquote>
    </section>

    <section id="groups" className={styles.groups}>
      <h2>Active Groups</h2>
      <div className={styles.groupList}>
        <div className = {styles.groupCard}>
          <strong>Tech Professionals</strong><br/>
          Weekly * $100 * 6 members<br/>
          Next Payout: Sep 5th<br/>
          <button>Join Group</button>
        </div>
        <div className={styles.groupCard}>
          <strong>Crypto Enthusiasts</strong><br/>
          Biwweekly * 0.1 ETH * 5 members<br/>
          Next payout: September 10th<br/>
          <button> Join Group</button>
        </div>
      </div>
    </section>

    <section className = {styles.finalCTA}>
      <h2>Ready to Save Smarter?</h2>
      <button>Start a Group</button>
      <button>Connect Wallet</button>
    </section>


    <footer className = {styles.footer}>
      <p>(c) RoundStack for the Morph's Consumer Buildation </p>
    </footer>
    </div>
  )
}