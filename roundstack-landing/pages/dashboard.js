import styles from "../styles/Dashboard.module.css"

export default function Dashboard() {
  return (
    <div className={styles.container}>
      {/* Top Navigation */}
      <nav className={styles.nav}>
        <div className={styles.navContent}>
          <div className={styles.logo}>
            <div className={styles.logoIcon}>₿</div>
            <span className={styles.logoText}>RoundStack</span>
          </div>

          <div className={styles.navActions}>
            <button className={styles.statsButton}>
              <span className={styles.buttonIcon}>📊</span>
              Stats
            </button>
            <button className={styles.connectButton}>
              <span className={styles.buttonIcon}>👛</span>
              0x1234...5678
            </button>
          </div>
        </div>
      </nav>

      <div className={styles.dashboardContent}>
        {/* Hero Stats Cards */}
        <section className={styles.heroStats}>
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <div className={styles.statIcon}>👥</div>
              <div className={styles.statContent}>
                <div className={styles.statNumber}>3</div>
                <div className={styles.statLabel}>Active Groups</div>
              </div>
            </div>

            <div className={styles.statCard}>
              <div className={styles.statIcon}>⏰</div>
              <div className={styles.statContent}>
                <div className={styles.statNumber}>2d</div>
                <div className={styles.statLabel}>Next Deadline</div>
              </div>
            </div>

            <div className={styles.statCard}>
              <div className={styles.statIcon}>💰</div>
              <div className={styles.statContent}>
                <div className={styles.statNumber}>$2.5K</div>
                <div className={styles.statLabel}>Pending Payout</div>
              </div>
            </div>

            <div className={styles.statCard}>
              <div className={styles.statIcon}>⭐</div>
              <div className={styles.statContent}>
                <div className={styles.statNumber}>4.8</div>
                <div className={styles.statLabel}>Reputation</div>
              </div>
            </div>
          </div>
        </section>

        <div className={styles.mainGrid}>
          {/* Left Column - Main Content */}
          <div className={styles.mainContent}>
            {/* Active Groups Section */}
            <section className={styles.activeGroups}>
              <h2 className={styles.sectionTitle}>Active Groups</h2>

              <div className={styles.groupsList}>
                {/* Group Card 1 */}
                <div className={styles.groupCard}>
                  <div className={styles.groupHeader}>
                    <div className={styles.groupInfo}>
                      <h3 className={styles.groupName}>Tech Professionals ROSCA</h3>
                      <span className={styles.groupBadge}>Active</span>
                    </div>
                  </div>

                  <div className={styles.groupDetails}>
                    <div className={styles.detailRow}>
                      <div className={styles.detail}>
                        <span className={styles.detailLabel}>Members</span>
                        <span className={styles.detailValue}>12/12</span>
                      </div>
                      <div className={styles.detail}>
                        <span className={styles.detailLabel}>Your Position</span>
                        <span className={styles.detailValue}>#7</span>
                      </div>
                    </div>
                    <div className={styles.detailRow}>
                      <div className={styles.detail}>
                        <span className={styles.detailLabel}>Next Contribution</span>
                        <span className={styles.detailValue}>Dec 15, 2024</span>
                      </div>
                      <div className={styles.detail}>
                        <span className={styles.detailLabel}>Round Progress</span>
                        <div className={styles.progressContainer}>
                          <div className={styles.progressBar}>
                            <div className={styles.progressFill} style={{ width: "58%" }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={styles.groupActions}>
                    <button className={styles.primaryButton}>Contribute $500</button>
                  </div>
                </div>

                {/* Group Card 2 */}
                <div className={styles.groupCard}>
                  <div className={styles.groupHeader}>
                    <div className={styles.groupInfo}>
                      <h3 className={styles.groupName}>Startup Founders Circle</h3>
                      <span className={styles.groupBadgeReady}>Payout Ready</span>
                    </div>
                  </div>

                  <div className={styles.groupDetails}>
                    <div className={styles.detailRow}>
                      <div className={styles.detail}>
                        <span className={styles.detailLabel}>Members</span>
                        <span className={styles.detailValue}>8/8</span>
                      </div>
                      <div className={styles.detail}>
                        <span className={styles.detailLabel}>Your Position</span>
                        <span className={styles.detailValue}>#3</span>
                      </div>
                    </div>
                    <div className={styles.detailRow}>
                      <div className={styles.detail}>
                        <span className={styles.detailLabel}>Payout Date</span>
                        <span className={styles.detailValue}>Dec 12, 2024</span>
                      </div>
                      <div className={styles.detail}>
                        <span className={styles.detailLabel}>Round Progress</span>
                        <div className={styles.progressContainer}>
                          <div className={styles.progressBar}>
                            <div className={styles.progressFill} style={{ width: "100%" }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={styles.groupActions}>
                    <button className={styles.secondaryButton}>Claim $2,000</button>
                  </div>
                </div>

                {/* Group Card 3 */}
                <div className={styles.groupCard}>
                  <div className={styles.groupHeader}>
                    <div className={styles.groupInfo}>
                      <h3 className={styles.groupName}>Crypto Enthusiasts Pool</h3>
                      <span className={styles.groupBadgeWaiting}>Waiting</span>
                    </div>
                  </div>

                  <div className={styles.groupDetails}>
                    <div className={styles.detailRow}>
                      <div className={styles.detail}>
                        <span className={styles.detailLabel}>Members</span>
                        <span className={styles.detailValue}>6/10</span>
                      </div>
                      <div className={styles.detail}>
                        <span className={styles.detailLabel}>Your Position</span>
                        <span className={styles.detailValue}>#2</span>
                      </div>
                    </div>
                    <div className={styles.detailRow}>
                      <div className={styles.detail}>
                        <span className={styles.detailLabel}>Start Date</span>
                        <span className={styles.detailValue}>Pending</span>
                      </div>
                      <div className={styles.detail}>
                        <span className={styles.detailLabel}>Round Progress</span>
                        <div className={styles.progressContainer}>
                          <div className={styles.progressBar}>
                            <div className={styles.progressFill} style={{ width: "0%" }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={styles.groupActions}>
                    <button className={styles.disabledButton} disabled>
                      Waiting for Members
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* Upcoming Deadlines */}
            <section className={styles.deadlines}>
              <h2 className={styles.sectionTitle}>Upcoming Contribution Deadlines</h2>

              <div className={styles.deadlinesList}>
                <div className={styles.deadlineItem}>
                  <div className={styles.deadlineIcon}>⏰</div>
                  <div className={styles.deadlineInfo}>
                    <div className={styles.deadlineName}>Tech Professionals ROSCA</div>
                    <div className={styles.deadlineTime}>Contribution due in 2 days</div>
                  </div>
                  <div className={styles.deadlineAmount}>
                    <div className={styles.amount}>$500.00</div>
                    <div className={styles.date}>Dec 15, 2024</div>
                  </div>
                </div>

                <div className={styles.deadlineItem}>
                  <div className={styles.deadlineIcon}>📅</div>
                  <div className={styles.deadlineInfo}>
                    <div className={styles.deadlineName}>Startup Founders Circle</div>
                    <div className={styles.deadlineTime}>Payout available now</div>
                  </div>
                  <div className={styles.deadlineAmount}>
                    <div className={styles.amount}>$2,000.00</div>
                    <div className={styles.date}>Ready to claim</div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Right Sidebar */}
          <div className={styles.sidebar}>
            {/* Notifications Panel */}
            <div className={styles.sidebarCard}>
              <div className={styles.cardHeader}>
                <h3 className={styles.cardTitle}>
                  <span className={styles.titleIcon}>🔔</span>
                  Notifications
                </h3>
              </div>
              <div className={styles.cardContent}>
                <div className={styles.notification}>
                  <div className={styles.notificationIcon}>✅</div>
                  <div className={styles.notificationContent}>
                    <div className={styles.notificationTitle}>New Round Started</div>
                    <div className={styles.notificationDesc}>Tech Professionals ROSCA - Round 7</div>
                    <div className={styles.notificationTime}>2 hours ago</div>
                  </div>
                </div>

                <div className={styles.notification}>
                  <div className={styles.notificationIcon}>💰</div>
                  <div className={styles.notificationContent}>
                    <div className={styles.notificationTitle}>Payout Available</div>
                    <div className={styles.notificationDesc}>Startup Founders Circle - $2,000</div>
                    <div className={styles.notificationTime}>1 day ago</div>
                  </div>
                </div>

                <div className={styles.notification}>
                  <div className={styles.notificationIcon}>⚠️</div>
                  <div className={styles.notificationContent}>
                    <div className={styles.notificationTitle}>Contribution Reminder</div>
                    <div className={styles.notificationDesc}>Payment due in 2 days</div>
                    <div className={styles.notificationTime}>3 days ago</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className={styles.sidebarCard}>
              <div className={styles.cardHeader}>
                <h3 className={styles.cardTitle}>Quick Actions</h3>
              </div>
              <div className={styles.cardContent}>
                <button className={styles.actionButton}>
                  <span className={styles.actionIcon}>➕</span>
                  Create New Group
                </button>
                <button className={styles.actionButtonSecondary}>
                  <span className={styles.actionIcon}>👥</span>
                  Join Existing Group
                </button>
                <button className={styles.actionButtonSecondary}>
                  <span className={styles.actionIcon}>📜</span>
                  View Past Groups
                </button>
              </div>
            </div>

            {/* Reputation Score */}
            <div className={styles.sidebarCard}>
              <div className={styles.cardHeader}>
                <h3 className={styles.cardTitle}>
                  <span className={styles.titleIcon}>⭐</span>
                  Reputation Score
                </h3>
              </div>
              <div className={styles.cardContent}>
                <div className={styles.reputationScore}>
                  <div className={styles.scoreNumber}>4.8</div>
                  <div className={styles.scoreMax}>out of 5.0</div>
                </div>

                <div className={styles.reputationDetails}>
                  <div className={styles.reputationItem}>
                    <span className={styles.reputationLabel}>On-time Payments</span>
                    <span className={styles.reputationValue}>98%</span>
                  </div>
                  <div className={styles.reputationItem}>
                    <span className={styles.reputationLabel}>Groups Completed</span>
                    <span className={styles.reputationValue}>7</span>
                  </div>
                  <div className={styles.reputationItem}>
                    <span className={styles.reputationLabel}>Total Contributed</span>
                    <span className={styles.reputationValue}>$15,500</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
