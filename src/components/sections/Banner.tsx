export default function Banner() {
  return (
    <section id="global-reach" aria-label="Global reach" className="w-full">
      <div
        className="w-full relative overflow-hidden"
        style={{ height: 'clamp(420px, 46vw, 550px)' }}
      >
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="/Textile.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
        />

        {/* Gentle wash behind the text only, so the shadow can stay light */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 65% 60% at 50% 50%, rgba(10,14,11,0.38) 0%, transparent 70%)',
          }}
        />

        <div className="container-wide relative z-10 h-full flex items-center justify-center text-center">
          <div
            style={{
              animation: 'threadText 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.3s both',
              maxWidth: '760px',
            }}
          >
            <p
              style={{
                fontFamily: '"Helvetica Neue", Arial, "Segoe UI", sans-serif',
                fontSize: '12px',
                fontWeight: 600,
                letterSpacing: '0.24em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.8)',
                marginBottom: '18px',
                textShadow: '0 1px 3px rgba(0,0,0,0.3)',
              }}
            >
              Global Textile Sourcing
            </p>

            <h2
              style={{
                fontFamily: '"Fraunces", Georgia, "Times New Roman", serif',
                color: '#FFFFFF',
                margin: 0,
                lineHeight: 1.1,
                textShadow: '0 1px 2px rgba(0,0,0,0.3), 0 4px 16px rgba(0,0,0,0.22)',
              }}
            >
              <span
                style={{
                  display: 'block',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  fontSize: 'clamp(28px, 4vw, 48px)',
                  letterSpacing: '0.01em',
                }}
              >
                Rooted in Pakistan{' '}
                <span style={{ fontStyle: 'italic', fontWeight: 400, textTransform: 'none' }}>
                  and
                </span>
              </span>
              <span
                style={{
                  display: 'block',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  fontSize: 'clamp(28px, 4vw, 48px)',
                  letterSpacing: '0.01em',
                  marginTop: '4px',
                }}
              >
                <span style={{ fontStyle: 'italic', fontWeight: 400, textTransform: 'none' }}>
                  ready
                </span>{' '}
                for the world's trade
              </span>
            </h2>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes threadText {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  )
}