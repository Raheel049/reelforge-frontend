import React, { useState } from 'react';
import styles from './Home.module.css';

export default function ReelForgeLanding() {
  const [activeTab, setActiveTab] = useState('script-gen');

  return (
    <div className={styles.container}>
      {/* Background glow radial filter */}
      <div className={styles.glow} />

      {/* Navigation */}
      <nav className={styles.navbar}>
        <div className={styles.brand}>
          <div className={styles.brandIcon}>⚡</div>
          <span className={styles.brandName}>
            Reel<span className={styles.brandAccent}>Forge</span>
          </span>
        </div>

        <div className={styles.navLinks}>
          <a href="#pipeline" className={styles.navLink}>Pipeline</a>
          <a href="#features" className={styles.navLink}>Features</a>
          <a href="#pricing" className={styles.navLink}>Pricing</a>
          <a href="#docs" className={styles.navLink}>API Docs</a>
        </div>

        <div className={styles.navActions}>
          <button className={styles.signInBtn}>Sign In</button>
          <button className={styles.ctaBtn}>Start Forging →</button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className={styles.hero}>
        <div className={styles.badge}>
          <span>✨</span> Distributed AI Reel Generation Engine
        </div>

        <h1 className={styles.heroTitle}>
          Turn Ideas into High-Engagement Reels in{' '}
          <span className={styles.gradientText}>Seconds</span>
        </h1>

        <p className={styles.heroSubtitle}>
          ReelForge automates dynamic b-roll selection, voice synchronization, 
          and animated kinetic captions through an asynchronous cloud rendering pipeline.
        </p>

        <div className={styles.buttonGroup}>
          <button className={styles.ctaBtnLarge}>
            Create Reel Now <span>→</span>
          </button>
          <button className={styles.secondaryBtn}>
            <span>▶</span> View Architecture Demo
          </button>
        </div>

        {/* Interactive Studio Preview Mockup */}
        <div className={styles.previewWindow}>
          <div className={styles.windowHeader}>
            <div className={styles.windowDots}>
              <span className={`${styles.dot} ${styles.dotRed}`} />
              <span className={`${styles.dot} ${styles.dotYellow}`} />
              <span className={`${styles.dot} ${styles.dotGreen}`} />
            </div>

            <div className={styles.tabGroup}>
              {['script-gen', 'voice-sync', 'cloud-render'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`${styles.tabBtn} ${
                    activeTab === tab ? styles.tabBtnActive : ''
                  }`}
                >
                  {tab.replace('-', ' ').toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.windowBody}>
            <div className={styles.consolePanel}>
              <div className={styles.codeBox}>
                <div className={styles.codeLabel}>// 1. Content Intent & Hook</div>
                <p className={styles.codeText}>
                  "Explain black hole event horizons for a 30s viral reel."
                </p>
              </div>

              <div className={styles.codeBox}>
                <div className={styles.codeLabel}>// 2. Headless Pipeline Status</div>
                <p className={styles.stepDone}>✔ Storyboard generation complete</p>
                <p className={styles.stepDone}>✔ 9:16 vertical video assets matched</p>
                <p className={styles.stepDone}>✔ Word-level kinetic subtitles rendered</p>
              </div>
            </div>

            {/* Vertical 9:16 Reel Simulation */}
            <div className={styles.reelPreview}>
              <div className={styles.previewHeader}>
                <span style={{ color: '#c084fc' }}>● RENDERING</span>
                <span>9:16 HD</span>
              </div>
              <div className={styles.captionBadge}>
                "Light itself cannot escape..."
              </div>
              <div className={styles.previewFooter}>
                <span>00:27</span>
                <span style={{ color: '#34d399' }}>100% COMPLETE</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className={styles.features}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Built for High-Scale Content Engines</h2>
          <p className={styles.sectionSubtitle}>
            Engineered to handle automated bulk creation from API request to export.
          </p>
        </div>

        <div className={styles.featureGrid}>
          <div className={styles.featureCard}>
            <div className={styles.cardIcon}>⚡</div>
            <h3 className={styles.cardTitle}>Autonomous Video Assembly</h3>
            <p className={styles.cardDesc}>
              Matches script pacing with semantic footage cuts and transitions tailored for Shorts and Reels.
            </p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.cardIcon}>⚙️</div>
            <h3 className={styles.cardTitle}>Distributed Cloud Workers</h3>
            <p className={styles.cardDesc}>
              Render worker queues deploy on demand to compile FFmpeg compositions in parallel without server timeouts.
            </p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.cardIcon}>📈</div>
            <h3 className={styles.cardTitle}>Retention-Focused Captions</h3>
            <p className={styles.cardDesc}>
              Generates synced, colored, bouncing captions designed to maximize average view duration and watch time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}