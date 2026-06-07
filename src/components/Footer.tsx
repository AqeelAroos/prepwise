import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{
      background: '#0a0a0f',
      borderTop: '1px solid rgba(255,255,255,0.07)',
      padding: '48px 48px 28px',
      fontFamily: 'system-ui, sans-serif',
    }}>
      <style>{`
        @media (max-width: 640px) {
          .footer-grid { grid-template-columns: 1fr !important; gap: 36px !important; }
          .footer-wrap { padding: 36px 20px 24px !important; }
        }
      `}</style>

      <div className="footer-wrap" style={{ maxWidth: '960px', margin: '0 auto' }}>
        {/* Top row */}
        <div className="footer-grid" style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr',
          gap: '48px',
          marginBottom: '48px',
        }}>
          {/* Brand */}
          <div>
            <div style={{ fontWeight: 800, fontSize: '20px', color: 'white', letterSpacing: '-0.5px', marginBottom: '12px' }}>
              CV<span style={{ color: '#818cf8' }}>Prep</span>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '13px', lineHeight: '1.8', maxWidth: '260px' }}>
              AI-powered CV analysis and interview prep to help you land your dream job faster.
            </p>
          </div>

          {/* Product links */}
          <div>
            <div style={{ color: 'rgba(255,255,255,0.2)', fontSize: '10px', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '16px' }}>
              Product
            </div>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { label: 'CV Analyzer', href: '/analyze' },
                { label: 'CV Scorer', href: '/cv-score' },
                { label: 'Job Tracker', href: '/tracker' },
                { label: 'Dashboard', href: '/dashboard' },
              ].map(link => (
                <Link key={link.href} href={link.href} style={{
                  color: 'rgba(255,255,255,0.45)',
                  textDecoration: 'none',
                  fontSize: '13px',
                  transition: 'color 0.2s',
                }}>
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Account links */}
          <div>
            <div style={{ color: 'rgba(255,255,255,0.2)', fontSize: '10px', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '16px' }}>
              Account
            </div>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { label: 'Sign In', href: '/auth/login' },
                { label: 'Sign Up Free', href: '/auth/signup' },
              ].map(link => (
                <Link key={link.href} href={link.href} style={{
                  color: 'rgba(255,255,255,0.45)',
                  textDecoration: 'none',
                  fontSize: '13px',
                }}>
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Divider */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <span style={{ color: 'rgba(255,255,255,0.18)', fontSize: '12px' }}>
            © 2026 CVPrep · Built by Aqeel Aroos
          </span>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: '6px',
            background: 'rgba(129,140,248,0.08)', border: '1px solid rgba(129,140,248,0.18)',
            color: '#818cf8', fontSize: '11px', padding: '5px 14px', borderRadius: '100px',
          }}>
            <span style={{ width: '5px', height: '5px', background: '#818cf8', borderRadius: '50%' }} />
            Powered by AI
          </span>
        </div>
      </div>
    </footer>
  )
}
