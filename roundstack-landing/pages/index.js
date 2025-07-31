import styles from "../styles/Home.module.css"
import Link from "next/link"

export default function RoundStackLanding() {
  return (
    <div className={styles.container}>
      {/* Navigation */}
      <nav className={styles.nav}>
        <div className={styles.navContent}>
          <div className={styles.logo}>
            <div className={styles.logoIcon}>₿</div>
            <span className={styles.logoText}>RoundStack</span>
          </div>

          <div className={styles.navLinks}>
            <a href="#how-it-works" className={styles.navLink}>
              How It Works
            </a>
            <a href="#features" className={styles.navLink}>
              Features
            </a>
            <a href="#groups" className={styles.navLink}>
              Groups
            </a>
            <Link href="/dashboard" className={styles.navLink}>
              Dashboard
            </Link>
            <button className={styles.connectButton}>
              Connect Wallet
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroGrid}>
            <div className={styles.heroText}>
              <h1 className={styles.heroTitle}>Revolutionize Group Savings with Smart Contracts</h1>
              <p className={styles.heroSubtitle}>
                Create or join automated rotating savings groups. On-chain, reputation-based, and dispute-resilient.
              </p>

              <div className={styles.heroButtons}>
                <button className={styles.primaryButton}>
                  <span className={styles.buttonIcon}>👛</span>
                  Connect Wallet
                </button>
                <button className={styles.secondaryButton}>
                  <span className={styles.buttonIcon}>👥</span>
                  Start a Group
                </button>
                <button className={styles.secondaryButton}>
                  <span className={styles.buttonIcon}>🌐</span>
                  Browse Groups
                </button>
              </div>
            </div>

            {/* Hero Illustration */}
            <div className={styles.heroIllustration}>
               
                <div className={styles.centralNode}>
  <img src="1st.jpg" alt="Hero illustration" className={styles.heroImage} />
</div>

                <div className={styles.connectionLines}></div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className={styles.howItWorks}>
        <div className={styles.sectionContent}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>How It Works</h2>
            <p className={styles.sectionSubtitle}>Simple, transparent, and automated</p>
          </div>

          <div className={styles.stepsGrid}>
            {/* Step 1 */}
            <div className={styles.step}>
              <div className={styles.stepNumber}>01</div>
              <h3 className={styles.stepTitle}>Form a Group</h3>
              <p className={styles.stepDescription}>
                Choose members, set the rules. Define contribution amounts, rotation schedule, and group parameters.
              </p>
              <div className={styles.stepCard}>
                <div className={styles.stepIcon}>👥</div>
                <p className={styles.stepCardText}>Set group size & rules</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className={styles.step}>
              <div className={styles.stepNumber}>02</div>
              <h3 className={styles.stepTitle}>Contribute & Rotate</h3>
              <p className={styles.stepDescription}>
                Each round, contribute and someone gets paid. Smart contracts handle the rotation automatically.
              </p>
              <div className={styles.stepCard}>
                <div className={styles.stepIcon}>🔄</div>
                <p className={styles.stepCardText}>Automated payouts</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className={styles.step}>
              <div className={styles.stepNumber}>03</div>
              <h3 className={styles.stepTitle}>Reputation & Protection</h3>
              <p className={styles.stepDescription}>
                Smart contracts and scores ensure fairness. Build reputation and resolve disputes transparently.
              </p>
              <div className={styles.stepCard}>
                <div className={styles.stepIcon}>🛡️</div>
                <p className={styles.stepCardText}>Trust & security</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className={styles.features}>
        <div className={styles.sectionContent}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Why Choose RoundStack</h2>
            <p className={styles.sectionSubtitle}>Built for the decentralized future</p>
          </div>

          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>📈</div>
              <h3 className={styles.featureTitle}>Automated Payouts</h3>
              <p className={styles.featureDescription}>
                Smart contracts handle all payments automatically. No manual intervention required.
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>⭐</div>
              <h3 className={styles.featureTitle}>On-Chain Reputation</h3>
              <p className={styles.featureDescription}>
                Build your reputation score through successful participation and timely contributions.
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🛡️</div>
              <h3 className={styles.featureTitle}>Dispute Resolution</h3>
              <p className={styles.featureDescription}>
                Trustless dispute resolution system protects all participants fairly and transparently.
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>💰</div>
              <h3 className={styles.featureTitle}>Crypto-Native</h3>
              <p className={styles.featureDescription}>
                Support for USDC, ETH, and other major cryptocurrencies. True DeFi integration.
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🔒</div>
              <h3 className={styles.featureTitle}>Private & Public Groups</h3>
              <p className={styles.featureDescription}>
                Create invite-only groups or join public ones. Full control over group membership.
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>👁️</div>
              <h3 className={styles.featureTitle}>Full Transparency</h3>
              <p className={styles.featureDescription}>
                All transactions and group activities are visible on-chain. Complete transparency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.stats}>
        <div className={styles.sectionContent}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Trusted by the Community</h2>
            <p className={styles.sectionSubtitle}>Growing every day</p>
          </div>

          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>132</div>
              <div className={styles.statLabel}>Groups Created</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>$12,480</div>
              <div className={styles.statLabel}>Saved On-Chain</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>98%</div>
              <div className={styles.statLabel}>Completion Rate</div>
            </div>
          </div>

          {/* Testimonial */}
          <div className={styles.testimonial}>
            <p className={styles.testimonialText}>
              "RoundStack transformed how our startup team saves for equipment. The automated system and reputation
              tracking made everything seamless and trustworthy."
            </p>
            <div className={styles.testimonialAuthor}>
              <div className={styles.authorAvatar}></div>
              <div className={styles.authorInfo}>
                <div className={styles.authorName}>Sarah Chen</div>
                <div className={styles.authorTitle}>Founder, TechStart</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Groups Preview */}
      <section id="groups" className={styles.groups}>
        <div className={styles.sectionContent}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Active Groups</h2>
            <p className={styles.sectionSubtitle}>Join an existing group or create your own</p>
          </div>

          <div className={styles.groupsGrid}>
            {/* Group Card 1 */}
            <div className={styles.groupCard}>
              <div className={styles.groupHeader}>
                <h3 className={styles.groupTitle}>Tech Professionals</h3>
                <span className={styles.groupBadge}>Open</span>
              </div>
              <div className={styles.groupDetails}>
                <div className={styles.groupDetail}>
                  <span className={styles.detailLabel}>Frequency</span>
                  <span className={styles.detailValue}>Monthly</span>
                </div>
                <div className={styles.groupDetail}>
                  <span className={styles.detailLabel}>Members</span>
                  <span className={styles.detailValue}>8/12</span>
                </div>
                <div className={styles.groupDetail}>
                  <span className={styles.detailLabel}>Contribution</span>
                  <span className={styles.detailValue}>$500 USDC</span>
                </div>
                <div className={styles.groupDetail}>
                  <span className={styles.detailLabel}>Next Round</span>
                  <span className={styles.detailValue}>Dec 15</span>
                </div>
              </div>
              <button className={styles.groupButton}>Join Group</button>
            </div>

            {/* Group Card 2 */}
            <div className={styles.groupCard}>
              <div className={styles.groupHeader}>
                <h3 className={styles.groupTitle}>RoundStack Enthusiasts</h3>
                <span className={styles.groupBadge}>Active</span>
              </div>
              <div className={styles.groupDetails}>
                <div className={styles.groupDetail}>
                  <span className={styles.detailLabel}>Frequency</span>
                  <span className={styles.detailValue}>Weekly</span>
                </div>
                <div className={styles.groupDetail}>
                  <span className={styles.detailLabel}>Members</span>
                  <span className={styles.detailValue}>6/6</span>
                </div>
                <div className={styles.groupDetail}>
                  <span className={styles.detailLabel}>Contribution</span>
                  <span className={styles.detailValue}>0.1 ETH</span>
                </div>
                <div className={styles.groupDetail}>
                  <span className={styles.detailLabel}>Next Round</span>
                  <span className={styles.detailValue}>Dec 12</span>
                </div>
              </div>
              <button className={styles.groupButtonDisabled} disabled>
                Group Full
              </button>
            </div>

            {/* Group Card 3 */}
            <div className={styles.groupCard}>
              <div className={styles.groupHeader}>
                <h3 className={styles.groupTitle}>Startup Founders</h3>
                <span className={styles.groupBadge}>Open</span>
              </div>
              <div className={styles.groupDetails}>
                <div className={styles.groupDetail}>
                  <span className={styles.detailLabel}>Frequency</span>
                  <span className={styles.detailValue}>Bi-weekly</span>
                </div>
                <div className={styles.groupDetail}>
                  <span className={styles.detailLabel}>Members</span>
                  <span className={styles.detailValue}>4/8</span>
                </div>
                <div className={styles.groupDetail}>
                  <span className={styles.detailLabel}>Contribution</span>
                  <span className={styles.detailValue}>$1,000 USDC</span>
                </div>
                <div className={styles.groupDetail}>
                  <span className={styles.detailLabel}>Next Round</span>
                  <span className={styles.detailValue}>Dec 20</span>
                </div>
              </div>
              <button className={styles.groupButton}>Join Group</button>
            </div>
          </div>

          <div className={styles.viewAllGroups}>
            <button className={styles.viewAllButton}>View All Groups →</button>
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className={styles.finalCta}>
        <div className={styles.sectionContent}>
          <h2 className={styles.ctaTitle}>Ready to Save Smarter?</h2>
          <p className={styles.ctaSubtitle}>Join the future of group savings today</p>

          <div className={styles.ctaButtons}>
            <button className={styles.primaryButton}>
              <span className={styles.buttonIcon}>👛</span>
              Connect Wallet
            </button>
            <button className={styles.secondaryButton}>
              <span className={styles.buttonIcon}>👥</span>
              Start a Group
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerGrid}>
            <div className={styles.footerBrand}>
              <div className={styles.footerLogo}>
                <div className={styles.logoIcon}>₿</div>
                <span className={styles.logoText}>RoundStack</span>
              </div>
              <p className={styles.footerDisclaimer}>RoundStack is non-custodial and fully on-chain</p>
            </div>

            <div className={styles.footerColumn}>
              <h4 className={styles.footerColumnTitle}>Product</h4>
              <ul className={styles.footerLinks}>
                <li>
                  <a href="#" className={styles.footerLink}>
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#" className={styles.footerLink}>
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className={styles.footerLink}>
                    Security
                  </a>
                </li>
                <li>
                  <a href="#" className={styles.footerLink}>
                    Pricing
                  </a>
                </li>
              </ul>
            </div>

            <div className={styles.footerColumn}>
              <h4 className={styles.footerColumnTitle}>Resources</h4>
              <ul className={styles.footerLinks}>
                <li>
                  <a href="#" className={styles.footerLink}>
                    📄 Docs
                  </a>
                </li>
                <li>
                  <a href="#" className={styles.footerLink}>
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className={styles.footerLink}>
                    ✉️ Contact
                  </a>
                </li>
                <li>
                  <a href="#" className={styles.footerLink}>
                    🔗 GitHub
                  </a>
                </li>
              </ul>
            </div>

            <div className={styles.footerColumn}>
              <h4 className={styles.footerColumnTitle}>Connect</h4>
              <ul className={styles.footerLinks}>
                <li>
                  <a href="#" className={styles.footerLink}>
                    🐦 Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className={styles.footerLink}>
                    Discord
                  </a>
                </li>
                <li>
                  <a href="#" className={styles.footerLink}>
                    Telegram
                  </a>
                </li>
                <li>
                  <a href="#" className={styles.footerLink}>
                    Blog
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.footerBottom}>
            <p className={styles.copyright}>© 2024 RoundStack. All rights reserved.</p>
            <div className={styles.walletSupport}>
              <span className={styles.walletLabel}>Supported Wallets:</span>
              <div className={styles.walletIcons}>
                <div className={styles.walletIcon}>👛</div>
                <div className={styles.walletIcon}>🔗</div>
                <div className={styles.walletIcon}>🛡️</div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
