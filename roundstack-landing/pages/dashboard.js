import { useState } from "react";
import { ethers } from "ethers";
import styles from "../styles/Dashboard.module.css";
import RoundStackFactoryAbi from "../src/RoundStackFactoryABI.json";
import RoundStackGroupAbi from "../src/RoundStackGroupABI.json";

const FACTORY_ADDRESS = "0x83F9111513196c6ce61304E4a0AE4b8Dc1e3aABa";

// Use your real deployed group contract address for all demo groups
const GROUPS = [
  {
    name: "Tech Professionals ROSCA",
    address: "0xcca1C89793Ab0fCEf5D0fEea5E18592114EB7F15",
    members: "12/12",
    position: "#7",
    nextContribution: "Dec 15, 2024",
    progress: "58",
    contributionAmount: "0.000005", // ETH
    status: "Active"
  },
  {
    name: "Startup Founders Circle",
    address: "0xcca1C89793Ab0fCEf5D0fEea5E18592114EB7F15",
    members: "8/8",
    position: "#3",
    payoutDate: "Dec 12, 2024",
    progress: "100",
    payoutAmount: "0.000002", // ETH
    status: "Payout Ready"
  },
  {
    name: "Crypto Enthusiasts Pool",
    address: "0xcca1C89793Ab0fCEf5D0fEea5E18592114EB7F15",
    members: "6/10",
    position: "#2",
    startDate: "Pending",
    progress: "0",
    status: "Waiting"
  }
];

export default function Dashboard() {
  const [provider, setProvider] = useState();
  const [signer, setSigner] = useState();
  const [account, setAccount] = useState();

// Connect wallet
async function connectWallet() {
  if (window.ethereum) {
    const _provider = new ethers.BrowserProvider(window.ethereum);
    setProvider(_provider);
    // Request accounts from MetaMask
    await window.ethereum.request({ method: "eth_requestAccounts" });
    const _signer = await _provider.getSigner();
    setSigner(_signer);
    const address = await _signer.getAddress();
    setAccount(address);
  } else {
    alert("MetaMask not detected");
  }
}

  // Create new group
  async function createNewGroup() {
    if (!signer) return connectWallet();
    const factory = new ethers.Contract(FACTORY_ADDRESS, RoundStackFactoryAbi, signer);
    // Example values, replace with your UI inputs
    const tx = await factory.createGroup(
      ethers.parseEther("0.5"), // 0.5 ETH
      12,                       // maxMembers
      604800                    // intervalSeconds (1 week)
    );
    await tx.wait();
    alert("Group created!");
  }

  // Join group
  async function joinGroup(groupAddress) {
    if (!signer) return connectWallet();
    const group = new ethers.Contract(groupAddress, RoundStackGroupAbi, signer);
    const tx = await group.joinGroup();
    await tx.wait();
    alert("Joined group!");
  }

  // Contribute ETH
  async function contributeToGroup(groupAddress, amountEth) {
    if (!signer) return connectWallet();
    const group = new ethers.Contract(groupAddress, RoundStackGroupAbi, signer);
    const tx = await group.contribute({ value: ethers.parseEther(amountEth) });
    await tx.wait();
    alert("Contribution sent!");
  }

  // Claim payout
  async function claimPayout(groupAddress) {
    if (!signer) return connectWallet();
    const group = new ethers.Contract(groupAddress, RoundStackGroupAbi, signer);
    const tx = await group.claimPayout();
    await tx.wait();
    alert("Payout claimed!");
  }

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
            <button className={styles.connectButton} onClick={connectWallet}>
              <span className={styles.buttonIcon}>👛</span>
              {account ? `${account.slice(0,6)}...${account.slice(-4)}` : "Connect"}
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
                      <h3 className={styles.groupName}>{GROUPS[0].name}</h3>
                      <span className={styles.groupBadge}>{GROUPS[0].status}</span>
                    </div>
                  </div>
                  <div className={styles.groupDetails}>
                    <div className={styles.detailRow}>
                      <div className={styles.detail}>
                        <span className={styles.detailLabel}>Members</span>
                        <span className={styles.detailValue}>{GROUPS[0].members}</span>
                      </div>
                      <div className={styles.detail}>
                        <span className={styles.detailLabel}>Your Position</span>
                        <span className={styles.detailValue}>{GROUPS[0].position}</span>
                      </div>
                    </div>
                    <div className={styles.detailRow}>
                      <div className={styles.detail}>
                        <span className={styles.detailLabel}>Next Contribution</span>
                        <span className={styles.detailValue}>{GROUPS[0].nextContribution}</span>
                      </div>
                      <div className={styles.detail}>
                        <span className={styles.detailLabel}>Round Progress</span>
                        <div className={styles.progressContainer}>
                          <div className={styles.progressBar}>
                            <div className={styles.progressFill} style={{ width: `${GROUPS[0].progress}%` }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.groupActions}>
                    <button
                      className={styles.primaryButton}
                      onClick={() => contributeToGroup(GROUPS[0].address, GROUPS[0].contributionAmount)}
                    >
                      Contribute $500
                    </button>
                  </div>
                </div>

                {/* Group Card 2 */}
                <div className={styles.groupCard}>
                  <div className={styles.groupHeader}>
                    <div className={styles.groupInfo}>
                      <h3 className={styles.groupName}>{GROUPS[1].name}</h3>
                      <span className={styles.groupBadgeReady}>{GROUPS[1].status}</span>
                    </div>
                  </div>
                  <div className={styles.groupDetails}>
                    <div className={styles.detailRow}>
                      <div className={styles.detail}>
                        <span className={styles.detailLabel}>Members</span>
                        <span className={styles.detailValue}>{GROUPS[1].members}</span>
                      </div>
                      <div className={styles.detail}>
                        <span className={styles.detailLabel}>Your Position</span>
                        <span className={styles.detailValue}>{GROUPS[1].position}</span>
                      </div>
                    </div>
                    <div className={styles.detailRow}>
                      <div className={styles.detail}>
                        <span className={styles.detailLabel}>Payout Date</span>
                        <span className={styles.detailValue}>{GROUPS[1].payoutDate}</span>
                      </div>
                      <div className={styles.detail}>
                        <span className={styles.detailLabel}>Round Progress</span>
                        <div className={styles.progressContainer}>
                          <div className={styles.progressBar}>
                            <div className={styles.progressFill} style={{ width: `${GROUPS[1].progress}%` }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.groupActions}>
                    <button
                      className={styles.secondaryButton}
                      onClick={() => claimPayout(GROUPS[1].address)}
                    >
                      Claim $2,000
                    </button>
                  </div>
                </div>

                {/* Group Card 3 */}
                <div className={styles.groupCard}>
                  <div className={styles.groupHeader}>
                    <div className={styles.groupInfo}>
                      <h3 className={styles.groupName}>{GROUPS[2].name}</h3>
                      <span className={styles.groupBadgeWaiting}>{GROUPS[2].status}</span>
                    </div>
                  </div>
                  <div className={styles.groupDetails}>
                    <div className={styles.detailRow}>
                      <div className={styles.detail}>
                        <span className={styles.detailLabel}>Members</span>
                        <span className={styles.detailValue}>{GROUPS[2].members}</span>
                      </div>
                      <div className={styles.detail}>
                        <span className={styles.detailLabel}>Your Position</span>
                        <span className={styles.detailValue}>{GROUPS[2].position}</span>
                      </div>
                    </div>
                    <div className={styles.detailRow}>
                      <div className={styles.detail}>
                        <span className={styles.detailLabel}>Start Date</span>
                        <span className={styles.detailValue}>{GROUPS[2].startDate}</span>
                      </div>
                      <div className={styles.detail}>
                        <span className={styles.detailLabel}>Round Progress</span>
                        <div className={styles.progressContainer}>
                          <div className={styles.progressBar}>
                            <div className={styles.progressFill} style={{ width: `${GROUPS[2].progress}%` }}></div>
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
                <button className={styles.actionButton} onClick={createNewGroup}>
                  <span className={styles.actionIcon}>➕</span>
                  Create New Group
                </button>
                <button className={styles.actionButtonSecondary} onClick={() => joinGroup(GROUPS[0].address)}>
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
  );
}