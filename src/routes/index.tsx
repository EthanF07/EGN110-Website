import { createFileRoute } from '@tanstack/react-router'
import { useState, useEffect, useRef } from 'react'

export const Route = createFileRoute('/')({
  component: LandingPage,
})

// ─── SVG Icons ───────────────────────────────────────────────────────────────

function IconActivity() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  )
}

function IconZap() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  )
}

function IconShield() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  )
}

function IconTrendingUp() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </svg>
  )
}

function IconWifi() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M5 12.55a11 11 0 0 1 14.08 0" />
      <path d="M1.42 9a16 16 0 0 1 21.16 0" />
      <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
      <line x1="12" y1="20" x2="12.01" y2="20" strokeWidth="3" />
    </svg>
  )
}

function IconCpu() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <rect x="55" y="9" width="6" height="6" />
      <line x1="9" y1="1" x2="9" y2="4" /><line x1="15" y1="1" x2="15" y2="4" />
      <line x1="9" y1="20" x2="9" y2="23" /><line x1="15" y1="20" x2="15" y2="23" />
      <line x1="20" y1="9" x2="23" y2="9" /><line x1="20" y1="14" x2="23" y2="14" />
      <line x1="1" y1="9" x2="4" y2="9" /><line x1="1" y1="14" x2="4" y2="14" />
    </svg>
  )
}

// ─── Animated Wearable SVG ────────────────────────────────────────────────────

function WearableDevice() {
  return (
    <div className="kf-device-wrap">
      <svg viewBox="0 0 340 420" fill="none" xmlns="http://www.w3.org/2000/svg" className="kf-device-svg">
        {/* Outer body / shirt silhouette */}
        <path
          d="M60 100 L20 160 L50 180 L50 380 L290 380 L290 180 L320 160 L280 100 L230 120 C220 140 200 155 170 155 C140 155 120 140 110 120 Z"
          fill="#1a1a1e"
          stroke="#2e2e36"
          strokeWidth="1.5"
        />
        {/* Collar */}
        <path
          d="M110 120 C120 140 140 155 170 155 C200 155 220 140 230 120"
          fill="none"
          stroke="#3a3a44"
          strokeWidth="2"
        />

        {/* Sensor grid lines */}
        <g opacity="0.25" stroke="#b8ff57" strokeWidth="0.5">
          <line x1="80" y1="160" x2="260" y2="160" />
          <line x1="80" y1="200" x2="260" y2="200" />
          <line x1="80" y1="240" x2="260" y2="240" />
          <line x1="80" y1="280" x2="260" y2="280" />
          <line x1="80" y1="320" x2="260" y2="320" />
          <line x1="110" y1="155" x2="110" y2="375" />
          <line x1="150" y1="155" x2="150" y2="375" />
          <line x1="190" y1="155" x2="190" y2="375" />
          <line x1="230" y1="155" x2="230" y2="375" />
        </g>

        {/* Sensor nodes */}
        {[
          [110, 180], [150, 180], [190, 180], [230, 180],
          [110, 220], [150, 220], [190, 220], [230, 220],
          [110, 260], [150, 260], [190, 260], [230, 260],
          [110, 300], [150, 300], [190, 300], [230, 300],
          [130, 340], [170, 340], [210, 340],
        ].map(([x, y], i) => (
          <circle
            key={i}
            cx={x}
            cy={y}
            r="4"
            fill="#b8ff57"
            opacity="0.7"
            className="kf-sensor-dot"
            style={{ animationDelay: `${(i * 0.11).toFixed(2)}s` }}
          />
        ))}

        {/* Central processor unit */}
        <rect x="148" y="198" width="44" height="44" rx="4" fill="#0d0d10" stroke="#b8ff57" strokeWidth="1.5" />
        <rect x="156" y="206" width="28" height="28" rx="2" fill="#141418" stroke="#b8ff57" strokeOpacity="0.4" strokeWidth="1" />
        <text x="170" y="225" textAnchor="middle" fill="#b8ff57" fontSize="8" fontFamily="monospace" letterSpacing="1">CPU</text>

        {/* Data pulse line */}
        <polyline
          points="60,270 80,270 95,250 115,290 130,255 145,275 165,260 185,280 200,265 215,275 235,268 260,268 280,268"
          fill="none"
          stroke="#b8ff57"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.85"
          className="kf-pulse-line"
        />

        {/* Sleeve sensors */}
        <circle cx="35" cy="200" r="5" fill="#b8ff57" opacity="0.6" className="kf-sensor-dot" style={{ animationDelay: '0.5s' }} />
        <circle cx="305" cy="200" r="5" fill="#b8ff57" opacity="0.6" className="kf-sensor-dot" style={{ animationDelay: '0.7s' }} />
        <circle cx="30" cy="240" r="4" fill="#b8ff57" opacity="0.4" className="kf-sensor-dot" style={{ animationDelay: '0.9s' }} />
        <circle cx="310" cy="240" r="4" fill="#b8ff57" opacity="0.4" className="kf-sensor-dot" style={{ animationDelay: '1.1s' }} />

        {/* Live label */}
        <rect x="238" y="156" width="40" height="18" rx="3" fill="#b8ff57" />
        <text x="258" y="168" textAnchor="middle" fill="#0a0a0b" fontSize="8" fontWeight="bold" fontFamily="monospace" letterSpacing="2">LIVE</text>

        {/* Form status bar */}
        <rect x="80" y="360" width="180" height="8" rx="4" fill="#1e1e24" />
        <rect x="80" y="360" width="138" height="8" rx="4" fill="#b8ff57" opacity="0.9" className="kf-form-bar" />
        <text x="170" y="354" textAnchor="middle" fill="#b8ff57" fontSize="7" fontFamily="monospace" letterSpacing="1" opacity="0.7">FORM SCORE</text>
      </svg>

      {/* Floating data chips */}
      <div className="kf-chip kf-chip-1">
        <span className="kf-chip-label">Squat Depth</span>
        <span className="kf-chip-value">92%</span>
      </div>
      <div className="kf-chip kf-chip-2">
        <span className="kf-chip-label">Spine Angle</span>
        <span className="kf-chip-value">+4°</span>
      </div>
      <div className="kf-chip kf-chip-3">
        <span className="kf-chip-label">Rep Tempo</span>
        <span className="kf-chip-value">2:1:2</span>
      </div>
    </div>
  )
}

// ─── Partner App Data ─────────────────────────────────────────────────────────

const partnerApps = [
  {
    name: 'Nike Training Club',
    category: 'Full-Body Training',
    description: 'Stream ProForm movement data directly into Nike Training Club workouts. Real-time form corrections overlay on guided sessions — so every bodyweight squat, lunge, and burpee gets biomechanical feedback matched to the drill.',
    color: '#f7461f',
  },
  {
    name: 'FitOn',
    category: 'Free Guided Workouts',
    description: 'ProForm supercharges FitOn\'s free video workouts with live form scoring. Whether it\'s HIIT, Pilates, or strength training, sensor data grades every rep so you get personal-trainer-level feedback without the price tag.',
    color: '#00c9a7',
  },
  {
    name: 'Strong',
    category: 'Strength & Weight Tracking',
    description: 'Every set logged in Strong gets paired with ProForm form-quality data. Track not just weight and reps but how cleanly you moved — so progressive overload decisions are based on technique, not ego.',
    color: '#4a9eff',
  },
  {
    name: 'Planet Fitness',
    category: 'Gym & Circuit Training',
    description: 'ProForm integrates with the Planet Fitness app to guide members through machine circuits and free-weight zones with real-time posture cues — making every gym visit safer and more effective, no matter your experience level.',
    color: '#7b2d8e',
  },
]

// ─── Scroll Reveal Hook ───────────────────────────────────────────────────────

function useReveal() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return { ref, visible }
}

// ─── Main Component ───────────────────────────────────────────────────────────

function LandingPage() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [activeApp, setActiveApp] = useState(0)

  const featuresReveal = useReveal()
  const appsReveal = useReveal()
  const ctaReveal = useReveal()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email.trim()) setSubmitted(true)
  }

  return (
    <div className="kf-root">
      {/* ── NAV ─────────────────────────────────────────────────────────── */}
      <nav className="kf-nav">
        <div className="kf-nav-inner">
          <div className="kf-logo">
            <span className="kf-logo-mark">P</span>
            <span className="kf-logo-text">ProForm</span>
          </div>
          <div className="kf-nav-links">
            <a href="#features" className="kf-nav-link">Technology</a>
            <a href="#apps" className="kf-nav-link">Integrations</a>
            <a href="#cta" className="kf-nav-cta">Early Access</a>
          </div>
        </div>
      </nav>

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="kf-hero">
        <div className="kf-hero-grid">
          <div className="kf-hero-copy">
            <div className="kf-hero-eyebrow">
              <span className="kf-dot" />
              Next-generation wearable · Form analysis · Real-time coaching
            </div>
            <h1 className="kf-h1">
              Your body<br />
              <span className="kf-accent">knows</span> when<br />
              form breaks.
            </h1>
            <p className="kf-hero-body">
              ProForm is an intelligent athletic shirt embedded with 23 bio-mechanical
              sensors that analyzes your movement in real time — catching bad form before
              it becomes injury.
            </p>
            <div className="kf-hero-actions">
              <a href="#cta" className="kf-btn-primary">Reserve yours</a>
              <a href="#features" className="kf-btn-ghost">See how it works</a>
            </div>
            <div className="kf-hero-stats">
              <div className="kf-stat">
                <span className="kf-stat-num">23</span>
                <span className="kf-stat-label">Sensor nodes</span>
              </div>
              <div className="kf-stat-divider" />
              <div className="kf-stat">
                <span className="kf-stat-num">4ms</span>
                <span className="kf-stat-label">Feedback latency</span>
              </div>
              <div className="kf-stat-divider" />
              <div className="kf-stat">
                <span className="kf-stat-num">4</span>
                <span className="kf-stat-label">App integrations</span>
              </div>
            </div>
          </div>

          <div className="kf-hero-visual">
            <div className="kf-glow-bg" />
            <WearableDevice />
          </div>
        </div>

        {/* ticker tape */}
        <div className="kf-ticker-wrap" aria-hidden="true">
          <div className="kf-ticker">
            {Array(3).fill(['FORM CORRECTION', 'LIVE BIOMETRICS', 'INJURY PREVENTION', 'REP COUNTING', 'POSTURE ANALYSIS', 'MUSCLE ACTIVATION', 'MOVEMENT COACHING']).flat().map((item, i) => (
              <span key={i} className="kf-ticker-item">
                {item} <span className="kf-ticker-sep">·</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURES ─────────────────────────────────────────────────────── */}
      <section id="features" className="kf-section kf-section-dark">
        <div
          ref={featuresReveal.ref}
          className={`kf-container kf-reveal ${featuresReveal.visible ? 'kf-revealed' : ''}`}
        >
          <div className="kf-section-header">
            <p className="kf-overline">Technology</p>
            <h2 className="kf-h2">Form feedback,<br /><em>woven in.</em></h2>
            <p className="kf-section-body">
              ProForm's sensor mesh captures 340+ data points per second across your
              torso, arms and core — translating raw movement into precise coaching cues
              delivered through haptic buzz and app alerts.
            </p>
          </div>

          <div className="kf-features-layout">
            {/* large feature card */}
            <div className="kf-feature-hero-card">
              <div className="kf-feature-icon-lg">
                <IconActivity />
              </div>
              <h3 className="kf-feature-title-lg">Real-Time Form Correction</h3>
              <p className="kf-feature-desc-lg">
                A haptic pulse fires within 4ms of detecting a form deviation — before
                your nervous system has finished processing the bad rep. Paired with
                your training app, it logs every deviation with a body-map overlay so
                you can review exactly where technique broke down.
              </p>
              <div className="kf-feature-tags">
                <span className="kf-tag">Haptic feedback</span>
                <span className="kf-tag">Body-map overlay</span>
                <span className="kf-tag">Rep grading</span>
              </div>
            </div>

            {/* side grid */}
            <div className="kf-features-grid">
              {[
                {
                  icon: <IconZap />,
                  title: 'Muscle Activation Mapping',
                  body: 'See which muscle groups are firing — and which are compensating. Fix imbalances that hide in plain sight.',
                },
                {
                  icon: <IconShield />,
                  title: 'Injury Risk Scoring',
                  body: 'Cumulative load and asymmetry patterns build a live injury-risk score. Know when to push and when to pull back.',
                },
                {
                  icon: <IconTrendingUp />,
                  title: 'Progress Benchmarking',
                  body: 'Form quality scores tracked over weeks. Watch technique solidify as strength grows — with data to prove it.',
                },
                {
                  icon: <IconWifi />,
                  title: 'Bluetooth 5.3 Sync',
                  body: 'Sub-10ms wireless sync to your phone or watch. Data streams live — no post-workout upload required.',
                },
                {
                  icon: <IconCpu />,
                  title: 'On-Garment Processing',
                  body: 'The onboard microcontroller crunches 340 data points/sec. Heavy analysis moves to the app; instant cues stay local.',
                },
              ].map((f, i) => (
                <div key={i} className="kf-feature-card" style={{ animationDelay: `${i * 0.08}s` }}>
                  <div className="kf-feature-icon">{f.icon}</div>
                  <h4 className="kf-feature-title">{f.title}</h4>
                  <p className="kf-feature-desc">{f.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PARTNER APPS ─────────────────────────────────────────────────── */}
      <section id="apps" className="kf-section kf-section-mid">
        <div
          ref={appsReveal.ref}
          className={`kf-container kf-reveal ${appsReveal.visible ? 'kf-revealed' : ''}`}
        >
          <div className="kf-section-header">
            <p className="kf-overline">Integrations</p>
            <h2 className="kf-h2">Works inside the<br /><em>apps you train with.</em></h2>
            <p className="kf-section-body">
              ProForm doesn't replace your training app — it powers it with a layer
              of real movement data. Four launch integrations, with more on the way.
            </p>
          </div>

          {/* desktop: tab panel */}
          <div className="kf-apps-layout">
            <div className="kf-apps-tabs">
              {partnerApps.map((app, i) => (
                <button
                  key={i}
                  onClick={() => setActiveApp(i)}
                  className={`kf-app-tab ${activeApp === i ? 'kf-app-tab-active' : ''}`}
                  style={{ '--app-color': app.color } as React.CSSProperties}
                >
                  <span
                    className="kf-app-tab-dot"
                    style={{ background: app.color }}
                  />
                  <span className="kf-app-tab-info">
                    <span className="kf-app-name">{app.name}</span>
                    <span className="kf-app-category">{app.category}</span>
                  </span>
                </button>
              ))}
            </div>

            <div
              className="kf-app-detail"
              style={{ '--app-color': partnerApps[activeApp].color } as React.CSSProperties}
            >
              <div
                className="kf-app-detail-badge-pill"
                style={{ background: partnerApps[activeApp].color + '22', color: partnerApps[activeApp].color, borderColor: partnerApps[activeApp].color + '55' }}
              >
                {partnerApps[activeApp].category}
              </div>
              <h3 className="kf-app-detail-name">{partnerApps[activeApp].name}</h3>
              <p className="kf-app-detail-desc">{partnerApps[activeApp].description}</p>
              <div className="kf-app-detail-pills">
                <span className="kf-app-pill">Live data stream</span>
                <span className="kf-app-pill">Form history sync</span>
                <span className="kf-app-pill">Adaptive programming</span>
              </div>
              <div
                className="kf-app-detail-bar"
                style={{ background: `linear-gradient(90deg, ${partnerApps[activeApp].color}, transparent)` }}
              />
            </div>
          </div>

          {/* mobile: scrollable cards */}
          <div className="kf-apps-mobile">
            {partnerApps.map((app, i) => (
              <div key={i} className="kf-app-mobile-card">
                <span className="kf-app-mobile-dot" style={{ background: app.color }} />
                <div>
                  <div className="kf-app-name">{app.name}</div>
                  <div className="kf-app-category">{app.category}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section id="cta" className="kf-section kf-section-cta">
        <div
          ref={ctaReveal.ref}
          className={`kf-cta-inner kf-reveal ${ctaReveal.visible ? 'kf-revealed' : ''}`}
        >
          <p className="kf-overline kf-overline-light">Early Access</p>
          <h2 className="kf-cta-h2">
            Train smarter.<br />
            <span className="kf-accent">Move better.</span>
          </h2>
          <p className="kf-cta-body">
            ProForm ships Q3 2026. Reserve your unit now and lock in
            founding-member pricing — 34% off retail, plus lifetime free app integrations.
          </p>

          {submitted ? (
            <div className="kf-success">
              <div className="kf-success-mark">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <div>
                <p className="kf-success-title">You're on the list.</p>
                <p className="kf-success-sub">We'll reach out before units ship with your exclusive offer.</p>
              </div>
            </div>
          ) : (
            <form className="kf-cta-form" onSubmit={handleSubmit}>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="kf-email-input"
              />
              <button type="submit" className="kf-btn-primary">
                Reserve early access
              </button>
            </form>
          )}

          <p className="kf-cta-footnote">No payment now. Cancel anytime. 3,847 people already in line.</p>
        </div>

        <div className="kf-cta-deco" aria-hidden="true">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="kf-deco-ring" style={{ '--i': i } as React.CSSProperties} />
          ))}
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────────────────── */}
      <footer className="kf-footer">
        <div className="kf-footer-inner">
          <div className="kf-logo">
            <span className="kf-logo-mark">K</span>
            <span className="kf-logo-text">ProForm</span>
          </div>
          <p className="kf-footer-copy">© 2026 ProForm Inc. — Wear your coach.</p>
          <div className="kf-footer-links">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
