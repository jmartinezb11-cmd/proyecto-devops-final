const express = require('express');

const app = express();

const PORT = 3000; 

app.get('/',(req, res) => {

    res.send(`<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Infraestructura DevOps en la Nube</title>
  <link href="https://fonts.googleapis.com/css2?family=Share+Tech+Mono&family=Barlow:wght@300;400;600;700&family=Orbitron:wght@400;700;900&display=swap" rel="stylesheet"/>
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    :root {
      --black: #000000;
      --dark:  #0a0a0f;
      --panel: #0d0d14;
      --border: rgba(0, 200, 255, 0.18);
      --cyan:  #00c8ff;
      --cyan2: #00ffe7;
      --green: #00ff88;
      --dim:   rgba(255,255,255,0.45);
      --white: #e8f0f5;
      --glow:  0 0 18px rgba(0,200,255,0.45);
    }

    html, body {
      min-height: 100vh;
      background: var(--black);
      color: var(--white);
      font-family: 'Barlow', sans-serif;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow-x: hidden;
    }

    /* ── grid background ── */
    body::before {
      content: '';
      position: fixed;
      inset: 0;
      background-image:
        linear-gradient(rgba(0,200,255,0.04) 1px, transparent 1px),
        linear-gradient(90deg, rgba(0,200,255,0.04) 1px, transparent 1px);
      background-size: 48px 48px;
      pointer-events: none;
      z-index: 0;
    }

    /* ── scan-line overlay ── */
    body::after {
      content: '';
      position: fixed;
      inset: 0;
      background: repeating-linear-gradient(
        0deg,
        transparent,
        transparent 3px,
        rgba(0,0,0,0.08) 3px,
        rgba(0,0,0,0.08) 4px
      );
      pointer-events: none;
      z-index: 0;
    }

    .page {
      position: relative;
      z-index: 1;
      width: min(760px, 94vw);
      padding: 56px 0 64px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0;
    }

    /* ── top label ── */
    .course-tag {
      font-family: 'Share Tech Mono', monospace;
      font-size: .72rem;
      letter-spacing: .25em;
      color: var(--cyan);
      text-transform: uppercase;
      opacity: .7;
      margin-bottom: 36px;
      animation: fadeDown .8s ease both;
    }

    /* ── main card ── */
    .card {
      width: 100%;
      background: var(--panel);
      border: 1px solid var(--border);
      border-radius: 4px;
      position: relative;
      padding: 52px 52px 44px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 36px;
      animation: fadeUp .9s ease both .1s;
    }

    /* corner accents */
    .card::before, .card::after,
    .card .corner-br, .card .corner-tl {
      content: '';
      position: absolute;
      width: 18px; height: 18px;
      border-color: var(--cyan);
      border-style: solid;
    }
    .card::before  { top: -1px; left: -1px;  border-width: 2px 0 0 2px; }
    .card::after   { top: -1px; right: -1px; border-width: 2px 2px 0 0; }
    .card .corner-br { bottom: -1px; right: -1px; border-width: 0 2px 2px 0; }
    .card .corner-tl { bottom: -1px; left: -1px;  border-width: 0 0 2px 2px; }

    /* ── divider line ── */
    .divider {
      width: 100%;
      height: 1px;
      background: linear-gradient(90deg, transparent, var(--cyan), transparent);
      opacity: .35;
    }

    /* ── title block ── */
    .title-block { text-align: center; }

    .eyebrow {
      font-family: 'Share Tech Mono', monospace;
      font-size: .68rem;
      letter-spacing: .3em;
      color: var(--cyan2);
      text-transform: uppercase;
      margin-bottom: 18px;
      opacity: .6;
    }

    h1 {
      font-family: 'Orbitron', sans-serif;
      font-weight: 900;
      font-size: clamp(1.5rem, 4.5vw, 2.4rem);
      line-height: 1.15;
      letter-spacing: .03em;
      background: linear-gradient(135deg, var(--white) 30%, var(--cyan) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      margin-bottom: 10px;
    }

    .subtitle {
      font-size: .9rem;
      font-weight: 300;
      color: var(--dim);
      letter-spacing: .06em;
      line-height: 1.6;
    }

    /* ── dev section ── */
    .dev-block {
      text-align: center;
      width: 100%;
    }

    .section-label {
      font-family: 'Share Tech Mono', monospace;
      font-size: .63rem;
      letter-spacing: .3em;
      text-transform: uppercase;
      color: var(--cyan);
      opacity: .55;
      margin-bottom: 10px;
    }

    .dev-name {
      font-family: 'Orbitron', sans-serif;
      font-size: clamp(1rem, 2.8vw, 1.35rem);
      font-weight: 700;
      letter-spacing: .06em;
      color: var(--white);
    }

    /* ── tech pills ── */
    .tech-block { text-align: center; width: 100%; }

    .pills {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 10px;
      margin-top: 14px;
    }

    .pill {
      font-family: 'Share Tech Mono', monospace;
      font-size: .72rem;
      letter-spacing: .12em;
      padding: 6px 18px;
      border: 1px solid rgba(0,200,255,0.28);
      border-radius: 2px;
      color: var(--cyan);
      background: rgba(0,200,255,0.06);
      text-transform: uppercase;
      transition: background .25s, border-color .25s, box-shadow .25s;
    }

    .pill:hover {
      background: rgba(0,200,255,0.14);
      border-color: var(--cyan);
      box-shadow: var(--glow);
    }

    /* ── status badges ── */
    .status-block { text-align: center; width: 100%; }

    .badges {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 16px;
      margin-top: 14px;
    }

    .badge {
      display: flex;
      align-items: center;
      gap: 9px;
      font-family: 'Share Tech Mono', monospace;
      font-size: .73rem;
      letter-spacing: .18em;
      text-transform: uppercase;
      padding: 9px 22px;
      border-radius: 2px;
      border: 1px solid;
      position: relative;
      overflow: hidden;
    }

    .badge::before {
      content: '';
      position: absolute;
      inset: 0;
      opacity: .08;
    }

    .badge.cicd {
      color: var(--cyan2);
      border-color: rgba(0,255,231,.35);
    }
    .badge.cicd::before { background: var(--cyan2); }

    .badge.deploy {
      color: var(--green);
      border-color: rgba(0,255,136,.35);
    }
    .badge.deploy::before { background: var(--green); }

    .dot {
      width: 7px; height: 7px;
      border-radius: 50%;
      flex-shrink: 0;
      animation: pulse 1.8s ease-in-out infinite;
    }

    .badge.cicd   .dot { background: var(--cyan2); box-shadow: 0 0 8px var(--cyan2); }
    .badge.deploy .dot { background: var(--green);  box-shadow: 0 0 8px var(--green); animation-delay: .5s; }

    /* ── footer stamp ── */
    .footer-stamp {
      margin-top: 40px;
      font-family: 'Share Tech Mono', monospace;
      font-size: .6rem;
      letter-spacing: .25em;
      color: rgba(255,255,255,0.15);
      text-transform: uppercase;
      animation: fadeUp .8s ease both .4s;
    }

    /* ── animations ── */
    @keyframes fadeDown {
      from { opacity: 0; transform: translateY(-14px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(20px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    @keyframes pulse {
      0%, 100% { opacity: 1; transform: scale(1); }
      50%       { opacity: .4; transform: scale(.7); }
    }

    @media (max-width: 520px) {
      .card { padding: 36px 24px 32px; }
    }
  </style>
</head>
<body>
<div class="page">

  <p class="course-tag">Sistemas Operativos II</p>

  <div class="card">
    <div class="corner-br"></div>
    <div class="corner-tl"></div>

    <!-- title -->
    <div class="title-block">
      <p class="eyebrow">Proyecto Final</p>
      <h1>Implementación de una<br>Infraestructura DevOps<br>en la Nube</h1>
      <p class="subtitle">con Docker &nbsp;·&nbsp; Jenkins &nbsp;·&nbsp; Docker Swarm</p>
    </div>

    <div class="divider"></div>

    <!-- developer -->
    <div class="dev-block">
      <p class="section-label">Desarrollado por</p>
      <p class="dev-name">Josue Abraham Martinez Bautista</p>
    </div>

    <div class="divider"></div>

    <!-- technologies -->
    <div class="tech-block">
      <p class="section-label">Tecnologías</p>
      <div class="pills">
        <span class="pill">Docker</span>
        <span class="pill">Jenkins</span>
        <span class="pill">GitHub</span>
        <span class="pill">AWS</span>
        <span class="pill">Docker Swarm</span>
      </div>
    </div>

    <div class="divider"></div>

    <!-- status -->
    <div class="status-block">
      <p class="section-label">Estado del Sistema</p>
      <div class="badges">
        <div class="badge cicd">
          <span class="dot"></span>
          CI/CD Activo
        </div>
        <div class="badge deploy">
          <span class="dot"></span>
          Servicio Desplegado
        </div>
      </div>
    </div>

  </div>

  <p class="footer-stamp">DevOps &nbsp;·&nbsp; Cloud Infrastructure &nbsp;·&nbsp; 2025</p>

</div>
</body>
</html>`);

 });

app.listen(PORT, () => {

   console.log(`Servidor ejecutandose en puerto ${PORT}`);
});



