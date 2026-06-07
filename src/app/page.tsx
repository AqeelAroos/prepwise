import Link from 'next/link'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main style={{minHeight:'100vh', background:'#07090f', display:'flex', flexDirection:'column', fontFamily:'system-ui,sans-serif', position:'relative', overflow:'hidden'}}>
      <style>{`
        @media (max-width: 640px) {
          .hero-title { font-size: 46px !important; letter-spacing: -2px !important; }
          .hero-italic { font-size: 52px !important; }
          .feature-grid { grid-template-columns: 1fr !important; }
          .hero-actions { flex-direction: column !important; }
          .hero-actions a { text-align: center !important; justify-content: center !important; }
          .nav-pad { padding: 16px 20px !important; }
          .hero-pad { padding: 60px 20px 40px !important; }
        }
        .feature-card { transition: border-color 0.25s, background 0.25s, transform 0.25s; }
        .feature-card:hover { border-color: rgba(129,140,248,0.25) !important; background: rgba(129,140,248,0.05) !important; transform: translateY(-3px); }
        .nav-link:hover { color: rgba(255,255,255,0.9) !important; }
      `}</style>

      {/* Background glows */}
      <div style={{position:'fixed', top:'-240px', left:'50%', transform:'translateX(-50%)', width:'900px', height:'700px', background:'radial-gradient(ellipse, rgba(99,102,241,0.14) 0%, transparent 65%)', pointerEvents:'none', zIndex:0}} />
      <div style={{position:'fixed', bottom:'-150px', right:'-80px', width:'500px', height:'500px', background:'radial-gradient(ellipse, rgba(192,132,252,0.07) 0%, transparent 65%)', pointerEvents:'none', zIndex:0}} />

      {/* Nav */}
      <nav className="nav-pad" style={{position:'relative', zIndex:10, display:'flex', justifyContent:'space-between', alignItems:'center', padding:'20px 48px', borderBottom:'1px solid rgba(255,255,255,0.06)'}}>
        <span style={{color:'white', fontWeight:800, fontSize:'20px', letterSpacing:'-0.5px'}}>
          CV<span style={{color:'#818cf8'}}>Prep</span>
        </span>
        <div style={{display:'flex', gap:'10px', alignItems:'center'}}>
          <Link href="/auth/login" className="nav-link" style={{color:'rgba(255,255,255,0.45)', textDecoration:'none', fontSize:'13px', padding:'8px 14px', transition:'color 0.2s'}}>
            Sign In
          </Link>
          <Link href="/auth/signup" style={{background:'linear-gradient(135deg,#6366f1,#818cf8)', color:'white', textDecoration:'none', fontSize:'13px', fontWeight:600, padding:'10px 22px', borderRadius:'100px', boxShadow:'0 0 24px rgba(99,102,241,0.3)'}}>
            Get Started
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero-pad" style={{position:'relative', zIndex:1, flex:1, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', textAlign:'center', padding:'80px 24px 60px'}}>

        {/* Badge */}
        <div style={{display:'inline-flex', alignItems:'center', gap:'8px', background:'rgba(99,102,241,0.1)', border:'1px solid rgba(129,140,248,0.25)', color:'#818cf8', fontSize:'11px', letterSpacing:'3px', textTransform:'uppercase', padding:'8px 18px', borderRadius:'100px', marginBottom:'36px'}}>
          <span style={{width:'6px', height:'6px', background:'#818cf8', borderRadius:'50%', boxShadow:'0 0 8px rgba(129,140,248,0.8)'}}></span>
          AI-Powered Interview Prep
        </div>

        {/* Title */}
        <h1 className="hero-title" style={{fontSize:'68px', fontWeight:800, color:'white', letterSpacing:'-3px', lineHeight:'0.92', marginBottom:'24px', maxWidth:'760px'}}>
          Land your<br/>
          <span className="hero-italic" style={{fontStyle:'italic', fontWeight:300, fontFamily:'Georgia,serif', fontSize:'76px', background:'linear-gradient(135deg, #818cf8 0%, #c084fc 100%)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text'}}>dream job</span><br/>
          with AI
        </h1>

        <p style={{color:'rgba(255,255,255,0.4)', fontSize:'16px', maxWidth:'460px', lineHeight:'1.8', marginBottom:'40px'}}>
          Upload your CV, paste a job description, and get instant match scores, tailored interview questions, and a personalised cover letter.
        </p>

        {/* CTAs */}
        <div className="hero-actions" style={{display:'flex', gap:'12px', marginBottom:'72px', width:'100%', maxWidth:'460px', justifyContent:'center', flexWrap:'wrap'}}>
          <Link href="/analyze" style={{background:'linear-gradient(135deg,#6366f1,#818cf8)', color:'white', textDecoration:'none', fontWeight:700, padding:'15px 32px', borderRadius:'100px', fontSize:'14px', boxShadow:'0 8px 32px rgba(99,102,241,0.35)', flex:1, textAlign:'center', display:'flex', alignItems:'center', justifyContent:'center', whiteSpace:'nowrap'}}>
            Try Demo →
          </Link>
          <Link href="/auth/signup" style={{background:'rgba(255,255,255,0.04)', color:'rgba(255,255,255,0.65)', textDecoration:'none', border:'1px solid rgba(255,255,255,0.1)', padding:'15px 32px', borderRadius:'100px', fontSize:'14px', flex:1, textAlign:'center', display:'flex', alignItems:'center', justifyContent:'center', whiteSpace:'nowrap'}}>
            Sign Up Free
          </Link>
        </div>

        {/* Feature cards */}
        <div className="feature-grid" style={{display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'16px', maxWidth:'900px', width:'100%'}}>
          {[
            {icon:'🎯', title:'Match Score', desc:'See exactly how well your CV fits the role with a detailed percentage breakdown.'},
            {icon:'💬', title:'Interview Questions', desc:'5 tailored questions with personalised suggested answers based on your background.'},
            {icon:'✉️', title:'Cover Letter', desc:'One-click personalised cover letter tailored to the role, ready to copy and send.'},
          ].map(f => (
            <div key={f.title} className="feature-card" style={{background:'rgba(255,255,255,0.025)', border:'1px solid rgba(255,255,255,0.07)', borderRadius:'16px', padding:'26px', textAlign:'left'}}>
              <div style={{fontSize:'28px', marginBottom:'14px'}}>{f.icon}</div>
              <div style={{color:'white', fontWeight:600, fontSize:'15px', marginBottom:'8px'}}>{f.title}</div>
              <div style={{color:'rgba(255,255,255,0.35)', fontSize:'13px', lineHeight:'1.7'}}>{f.desc}</div>
            </div>
          ))}
        </div>

        {/* Trust tags */}
        <div style={{display:'flex', gap:'10px', marginTop:'28px', flexWrap:'wrap', justifyContent:'center'}}>
          {['Skills Gap Analysis','ATS Tips','Save Analyses','Instant Results'].map(t => (
            <span key={t} style={{fontSize:'11px', color:'rgba(255,255,255,0.25)', border:'1px solid rgba(255,255,255,0.07)', padding:'5px 14px', borderRadius:'100px'}}>✓ {t}</span>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}
