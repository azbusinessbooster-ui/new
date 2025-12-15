export default function Home() {
  const container = { maxWidth: 1050, margin: "0 auto", padding: "0 20px" };

  const card = {
    background: "#fff",
    border: "1px solid #e6e8ef",
    borderRadius: 14,
    padding: 22,
    boxShadow: "0 6px 20px rgba(16,24,40,0.06)",
  };

  const muted = { color: "#4b5563" };

  const button = {
    display: "inline-block",
    padding: "12px 18px",
    borderRadius: 12,
    border: "1px solid #111",
    background: "#111",
    color: "#fff",
    textDecoration: "none",
    fontWeight: 600,
  };

  return (
    <main style={{ fontFamily: "Arial, sans-serif", color: "#0b1220", background: "#ffffff" }}>
      {/* HERO */}
      <section style={{ padding: "80px 0", background: "linear-gradient(180deg,#f6f8ff 0%, #ffffff 100%)" }}>
        <div style={container}>
          <div style={{ maxWidth: 820 }}>
            <p style={{ ...muted, margin: 0, fontWeight: 600 }}>Business Booster</p>
            <h1 style={{ fontSize: 46, lineHeight: 1.1, margin: "12px 0 14px" }}>
              Professional support to help your business grow.
            </h1>
            <p style={{ ...muted, fontSize: 18, lineHeight: 1.6, margin: "0 0 22px" }}>
              We help with business setup, marketing strategy, and ongoing maintenance to grow visibility, engagement, and revenue.
            </p>
            <a href="#contact" style={button}>Get Started</a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section style={{ padding: "60px 0" }}>
        <div style={container}>
          <h2 style={{ fontSize: 32, margin: "0 0 26px" }}>Our Services</h2>

          <div style={{ display: "grid", gap: 18, gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
            <div style={card}>
              <h3 style={{ marginTop: 0 }}>Business Setup</h3>
              <p style={{ ...muted, marginBottom: 0 }}>
                Get structured the right way with clear systems and a professional foundation.
              </p>
            </div>

            <div style={card}>
              <h3 style={{ marginTop: 0 }}>Marketing Strategy</h3>
              <p style={{ ...muted, marginBottom: 0 }}>
                A practical plan tailored to your goals and your audience to increase results.
              </p>
            </div>

            <div style={card}>
              <h3 style={{ marginTop: 0 }}>Ongoing Growth & Maintenance</h3>
              <p style={{ ...muted, marginBottom: 0 }}>
                Continuous improvements to keep your visibility, engagement, and revenue moving up.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS (with arrows) */}
      <section style={{ padding: "60px 0", background: "#f9fafc" }}>
        <div style={container}>
          <h2 style={{ fontSize: 32, margin: "0 0 26px" }}>How It Works</h2>

          {/* Desktop row with arrows */}
          <div style={{ display: "grid", gap: 14, alignItems: "center", gridTemplateColumns: "1fr auto 1fr auto 1fr" }}>
            <div style={card}>
              <div style={{ fontWeight: 800, marginBottom: 8 }}>Step 1</div>
              <p style={{ ...muted, margin: 0, lineHeight: 1.6 }}>
                Send our team an email or message with your needs or questions. We’ll follow up shortly and schedule a meeting.
              </p>
            </div>

            <div aria-hidden="true" style={{ fontSize: 26, color: "#6b7280", textAlign: "center" }}>➜</div>

            <div style={card}>
              <div style={{ fontWeight: 800, marginBottom: 8 }}>Step 2</div>
              <p style={{ ...muted, margin: 0, lineHeight: 1.6 }}>
                We set up the program and identify the best approach for your needs.
              </p>
            </div>

            <div aria-hidden="true" style={{ fontSize: 26, color: "#6b7280", textAlign: "center" }}>➜</div>

            <div style={card}>
              <div style={{ fontWeight: 800, marginBottom: 8 }}>Step 3</div>
              <p style={{ ...muted, margin: 0, lineHeight: 1.6 }}>
                Once approved by your company, we implement what’s needed into your business.
              </p>
            </div>
          </div>

          {/* Small-screen note */}
          <p style={{ ...muted, marginTop: 14, fontSize: 14 }}>
            (On mobile, steps will stack automatically.)
          </p>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" style={{ padding: "70px 0" }}>
        <div style={container}>
          <div style={{ ...card, display: "grid", gap: 10 }}>
            <h2 style={{ fontSize: 28, margin: 0 }}>Ready to Boost Your Business?</h2>
            <p style={{ ...muted, margin: 0 }}>
              Send us an email or message to get started.
            </p>
            <div style={{ fontSize: 16, lineHeight: 1.8 }}>
              📧 <strong>azbusinessbooster@gmail.com</strong><br />
              📞 <strong>602-245-8245</strong>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
