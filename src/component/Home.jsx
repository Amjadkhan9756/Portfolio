import { useState, useEffect, useRef } from "react";
import * as THREE from "three";

const data = {
  name: "Amjad Khan",
  role: "Software Engineer · Full Stack Developer (MERN Stack)",
  email: "amjadkhann.tech@gmail.com",
  phone: "+91-9756859054",
  linkedin: "https://linkedin.com/in/amjad-khan-209363320",
  github: "https://github.com/Amjadkhan9756",
  leetcode: "https://leetcode.com/u/amjad_khan",
  summary:
    "Computer Science student (B.Tech, Expected 2027) specializing in full-stack MERN development. I build modular platforms with React.js, Next.js, and Node.js — skilled in optimized state management, database design, secure JWT authentication, and integrating cloud technologies like AWS and Docker for streamlined deployment workflows.",
  skills: [
    { label: "Languages", items: ["JavaScript", "TypeScript", "Java"], primary: true },
    { label: "Frontend", items: ["React.js", "Next.js", "Redux", "Tailwind CSS", "Bootstrap 5", "Material UI", "HTML", "CSS"], primary: true },
    { label: "Backend", items: ["Node.js", "Express.js", "MongoDB", "REST APIs"], primary: true },
    { label: "DevOps & Tools", items: ["Git", "GitHub", "Docker", "AWS", "CI/CD", "DBMS"], primary: false },
  ],
  experience: [
    {
      role: "Web Development Intern",
      company: "Academor",
      type: "Remote",
      period: "Aug 2023 – Sep 2023",
      hash: "a3f9c1e",
      bullets: [
        "Engineered responsive full-stack web modules using React.js and Node.js, boosting rendering speeds by 25%.",
        "Developed 10+ reusable UI components and structured backend API routes to scale data throughput by 40%.",
      ],
    },
  ],
  projects: [
    {
      name: "SocialMediaSite",
      file: "SocialMediaSite.jsx",
      desc: "A LinkedIn-style social blog platform with custom profile bios, education tracking, professional histories, and mutual connection requests. Features secure bcrypt session states and Multer media management for profile pictures and post media.",
      tech: ["Next.js 15", "React 19", "Redux Toolkit", "Bootstrap 5", "Node.js", "Express 5", "MongoDB", "Multer", "Bcrypt"],
      repo: "#",
      live: "https://proconnect-sandy.vercel.app/",
    },
  ],
  certifications: [
    "MERN Stack Development — New Delhi, India",
    "Full Stack Web Development Professional — Academor",
    "MERN Stack Advanced Training",
  ],
  achievements: [
    "Consistent LeetCode problem-solving streak with optimized algorithm runtimes.",
    "180+ hours of structured advanced full-stack development across engineering tracks.",
    "Optimized codebase workflows for personal deployments, reducing cloud asset overheads.",
  ],
  education: [
    { degree: "B.Tech in Computer Science & Engineering", institute: "Shri Ram Murti Smarak College of Engineering & Technology, Bareilly", year: "Expected 2027", hash: "e21b4a0" },
    { degree: "Senior Secondary Education (UP Board)", institute: "Bharat Inter College, Bhojipura, Bareilly, UP", year: "2022", hash: "9c04d7f" },
    { degree: "Secondary Education (UP Board)", institute: "Bharat Inter College, Bhojipura, Bareilly, UP", year: "2020", hash: "1d6a2e8" },
  ],
};

const TABS = [
  { key: "Home", file: "home.jsx" },
  { key: "About", file: "about.md" },
  { key: "Skills", file: "stack.json" },
  { key: "Projects", file: "projects.jsx" },
  { key: "Experience", file: "log.txt" },
  { key: "Contact", file: "contact.sh" },
];

/* ---------------------------------- theme ---------------------------------- */

const COLORS = {
  bg: "#0a0c10",
  bgElevated: "#0d1016",
  surface: "#12151c",
  surfaceHover: "#161a22",
  border: "rgba(255,255,255,0.08)",
  borderStrong: "rgba(255,255,255,0.16)",
  accent: "#ff7a45",
  accentSoft: "rgba(255,122,69,0.12)",
  accentBorder: "rgba(255,122,69,0.35)",
  mint: "#3ddc97",
  mintSoft: "rgba(61,220,151,0.12)",
  mintBorder: "rgba(61,220,151,0.35)",
  text: "#e9e8e3",
  textDim: "#8b93a1",
  textFaint: "#565f6b",
};

function useGoogleFonts() {
  useEffect(() => {
    const id = "portfolio-fonts";
    if (document.getElementById(id)) return;
    const link = document.createElement("link");
    link.id = id;
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500;600&display=swap";
    document.head.appendChild(link);
  }, []);
}

/* --------------------------- 3D tilt hook (CSS) ----------------------------- */

function useTilt(strength = 10) {
  const ref = useRef(null);
  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(900px) rotateX(${(-py * strength).toFixed(2)}deg) rotateY(${(px * strength).toFixed(2)}deg) translateZ(6px)`;
    el.style.setProperty("--glow-x", `${(px + 0.5) * 100}%`);
    el.style.setProperty("--glow-y", `${(py + 0.5) * 100}%`);
  };
  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = `perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(0px)`;
  };
  return { ref, onMouseMove: onMove, onMouseLeave: onLeave };
}

function TiltCard({ children, style, strength, className }) {
  const tilt = useTilt(strength);
  return (
    <div
      ref={tilt.ref}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
      className={`tilt-card ${className || ""}`}
      style={style}
    >
      {children}
    </div>
  );
}

/* ------------------------- Three.js hub/spoke graph ------------------------- */

function StackGraph3D() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const nodes = [
      { label: "React", color: 0x61dafb },
      { label: "Next.js", color: 0xe9e8e3 },
      { label: "Node.js", color: 0x8cc84b },
      { label: "Express", color: 0x9aa5b1 },
      { label: "MongoDB", color: 0x3ddc97 },
      { label: "Redux", color: 0x764abc },
      { label: "Docker", color: 0x2496ed },
      { label: "AWS", color: 0xff9900 },
    ];

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0a0c10, 0.035);

    const camera = new THREE.PerspectiveCamera(45, mount.clientWidth / mount.clientHeight, 0.1, 100);
    camera.position.set(0, 0.6, 9);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    // core node
    const coreGeo = new THREE.IcosahedronGeometry(0.55, 1);
    const coreMat = new THREE.MeshBasicMaterial({ color: 0xff7a45, wireframe: true });
    const core = new THREE.Mesh(coreGeo, coreMat);
    group.add(core);

    const coreGlowGeo = new THREE.IcosahedronGeometry(0.62, 1);
    const coreGlowMat = new THREE.MeshBasicMaterial({ color: 0xff7a45, transparent: true, opacity: 0.08 });
    group.add(new THREE.Mesh(coreGlowGeo, coreGlowMat));

    const radius = 3.1;
    const satellites = [];
    const lineMat = new THREE.LineBasicMaterial({ color: 0x565f6b, transparent: true, opacity: 0.5 });

    nodes.forEach((n, i) => {
      const phi = Math.acos(1 - (2 * (i + 0.5)) / nodes.length);
      const theta = Math.PI * (1 + Math.sqrt(5)) * (i + 0.5);
      const x = radius * Math.cos(theta) * Math.sin(phi);
      const y = radius * Math.sin(theta) * Math.sin(phi) * 0.8;
      const z = radius * Math.cos(phi);

      const geo = new THREE.SphereGeometry(0.14, 16, 16);
      const mat = new THREE.MeshBasicMaterial({ color: n.color });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(x, y, z);
      group.add(mesh);
      satellites.push(mesh);

      const points = [new THREE.Vector3(0, 0, 0), mesh.position.clone()];
      const lineGeo = new THREE.BufferGeometry().setFromPoints(points);
      group.add(new THREE.Line(lineGeo, lineMat));
    });

    // faint outer wireframe shell for depth
    const shellGeo = new THREE.IcosahedronGeometry(4.1, 1);
    const shellMat = new THREE.MeshBasicMaterial({ color: 0x1c2028, wireframe: true, transparent: true, opacity: 0.35 });
    group.add(new THREE.Mesh(shellGeo, shellMat));

    let raf;
    let mouseX = 0;
    let mouseY = 0;
    const onPointerMove = (e) => {
      const r = mount.getBoundingClientRect();
      mouseX = ((e.clientX - r.left) / r.width - 0.5) * 2;
      mouseY = ((e.clientY - r.top) / r.height - 0.5) * 2;
    };
    mount.addEventListener("mousemove", onPointerMove);

    const clock = new THREE.Clock();
    const animate = () => {
      const t = clock.getElapsedTime();
      group.rotation.y = t * 0.18 + mouseX * 0.4;
      group.rotation.x = Math.sin(t * 0.15) * 0.1 + mouseY * 0.25;
      core.rotation.y = t * 0.4;
      core.rotation.x = t * 0.25;
      satellites.forEach((s, i) => {
        s.position.y += Math.sin(t * 1.4 + i) * 0.0006;
      });
      renderer.render(scene, camera);
      raf = requestAnimationFrame(animate);
    };
    animate();

    const onResize = () => {
      if (!mount) return;
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };
    const ro = new ResizeObserver(onResize);
    ro.observe(mount);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      mount.removeEventListener("mousemove", onPointerMove);
      mount.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} style={{ width: "100%", height: "100%", minHeight: 340 }} />;
}

/* --------------------------------- pieces ----------------------------------- */

function Dot({ color }) {
  return <span style={{ width: 11, height: 11, borderRadius: "50%", background: color, display: "inline-block" }} />;
}

function IdeChrome({ active, onNav }) {
  return (
    <div
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: "rgba(10,12,16,0.85)",
        backdropFilter: "blur(16px)",
        borderBottom: `1px solid ${COLORS.border}`,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 18px", borderBottom: `1px solid ${COLORS.border}` }}>
        <Dot color="#ff5f57" />
        <Dot color="#febc2e" />
        <Dot color="#28c840" />
        <span
          style={{
            marginLeft: 14,
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 12.5,
            color: COLORS.textFaint,
            letterSpacing: 0.3,
          }}
        >
          ~/portfolio/amjad-khan — zsh
        </span>
      </div>
      <div style={{ display: "flex", overflowX: "auto" }}>
        {TABS.map((t) => {
          const isActive = active === t.key;
          return (
            <button
              key={t.key}
              onClick={() => onNav(t.key)}
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 13,
                whiteSpace: "nowrap",
                padding: "10px 20px",
                background: isActive ? COLORS.bg : "transparent",
                color: isActive ? COLORS.accent : COLORS.textDim,
                border: "none",
                borderRight: `1px solid ${COLORS.border}`,
                borderTop: isActive ? `2px solid ${COLORS.accent}` : "2px solid transparent",
                cursor: "pointer",
                transition: "color 0.2s ease, background 0.2s ease",
              }}
              onMouseEnter={(e) => { if (!isActive) e.currentTarget.style.color = COLORS.text; }}
              onMouseLeave={(e) => { if (!isActive) e.currentTarget.style.color = COLORS.textDim; }}
            >
              {isActive ? "● " : ""}{t.file}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function LineNo({ n }) {
  return (
    <span style={{ color: COLORS.textFaint, width: 26, display: "inline-block", userSelect: "none", fontSize: 12.5 }}>
      {n}
    </span>
  );
}

function SectionHeading({ n, label }) {
  return (
    <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: "2rem" }}>
      <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, color: COLORS.accent }}>{n}</span>
      <h2
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 30,
          fontWeight: 700,
          color: COLORS.text,
          margin: 0,
        }}
      >
        {label}
      </h2>
      <span style={{ flex: 1, height: 1, background: COLORS.border }} />
    </div>
  );
}

function Tag({ children, tone = "accent" }) {
  const map = {
    accent: { color: COLORS.accent, bg: COLORS.accentSoft, border: COLORS.accentBorder },
    mint: { color: COLORS.mint, bg: COLORS.mintSoft, border: COLORS.mintBorder },
    dim: { color: COLORS.textDim, bg: "rgba(255,255,255,0.04)", border: COLORS.border },
  }[tone];
  return (
    <span
      style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: 12.5,
        color: map.color,
        background: map.bg,
        border: `1px solid ${map.border}`,
        borderRadius: 6,
        padding: "4px 10px",
        display: "inline-block",
      }}
    >
      {children}
    </span>
  );
}

/* --------------------------------- sections ---------------------------------- */

function Home({ onNav }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1.1fr 1fr",
        gap: 40,
        alignItems: "center",
        maxWidth: 1180,
        margin: "0 auto",
        padding: "4.5rem 2rem 3.5rem",
      }}
      className="hero-grid"
    >
      <div>
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, color: COLORS.mint, marginBottom: 18 }}>
          <LineNo n={1} /><span style={{ color: COLORS.textFaint }}>{"// "}</span>whoami
        </div>
        <h1
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(2.4rem, 5vw, 3.6rem)",
            fontWeight: 700,
            lineHeight: 1.08,
            color: COLORS.text,
            margin: "0 0 8px",
            letterSpacing: "-0.02em",
          }}
        >
          {data.name}
        </h1>
        <p
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 15,
            color: COLORS.accent,
            margin: "0 0 22px",
          }}
        >
          <LineNo n={2} />{data.role}
        </p>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15.5, color: COLORS.textDim, lineHeight: 1.85, maxWidth: 560, margin: "0 0 30px" }}>
          {data.summary}
        </p>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 34 }}>
          <button
            onClick={() => onNav("Projects")}
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 13.5,
              background: COLORS.accent,
              color: "#0a0c10",
              border: "none",
              padding: "12px 22px",
              borderRadius: 8,
              fontWeight: 600,
              cursor: "pointer",
              boxShadow: "0 8px 24px rgba(255,122,69,0.25)",
              transition: "transform 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-2px)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
          >
            ./view-projects
          </button>
          <button
            onClick={() => onNav("Contact")}
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 13.5,
              background: "transparent",
              color: COLORS.text,
              border: `1px solid ${COLORS.borderStrong}`,
              padding: "12px 22px",
              borderRadius: 8,
              cursor: "pointer",
              transition: "border-color 0.2s ease, color 0.2s ease",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = COLORS.mintBorder; e.currentTarget.style.color = COLORS.mint; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = COLORS.borderStrong; e.currentTarget.style.color = COLORS.text; }}
          >
            git contact --show
          </button>
        </div>
        <div style={{ display: "flex", gap: 18, flexWrap: "wrap" }}>
          {[
            ["Email", `mailto:${data.email}`],
            ["LinkedIn", data.linkedin],
            ["GitHub", data.github],
            ["LeetCode", data.leetcode],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12.5, color: COLORS.textDim, textDecoration: "none", borderBottom: `1px dashed ${COLORS.border}` }}
              onMouseEnter={(e) => (e.currentTarget.style.color = COLORS.text)}
              onMouseLeave={(e) => (e.currentTarget.style.color = COLORS.textDim)}
            >
              {label}
            </a>
          ))}
        </div>
      </div>

      <div
        style={{
          position: "relative",
          borderRadius: 16,
          border: `1px solid ${COLORS.border}`,
          background: "radial-gradient(circle at 50% 40%, rgba(255,122,69,0.06), transparent 60%), #0d1016",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", top: 14, left: 16, fontFamily: "'JetBrains Mono', monospace", fontSize: 11.5, color: COLORS.textFaint, zIndex: 2 }}>
          stack.render(mern) <span style={{ color: COLORS.mint }}>// drag to orbit</span>
        </div>
        <StackGraph3D />
      </div>
    </div>
  );
}

function About() {
  return (
    <div style={{ maxWidth: 1180, margin: "0 auto", padding: "3.5rem 2rem" }}>
      <SectionHeading n="01" label="About" />
      <div
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 14,
          color: COLORS.textDim,
          background: COLORS.surface,
          border: `1px solid ${COLORS.border}`,
          borderRadius: 12,
          padding: "1.8rem 2rem",
          maxWidth: 780,
          lineHeight: 2,
        }}
      >
        <div style={{ color: COLORS.textFaint }}>/**</div>
        <div style={{ color: COLORS.textFaint }}> * @file about.md</div>
        <div style={{ color: COLORS.textFaint }}> */</div>
        <p style={{ fontFamily: "'Inter', sans-serif", color: COLORS.text, fontSize: 15.5, lineHeight: 1.9, marginTop: 14 }}>
          {data.summary}
        </p>
      </div>
    </div>
  );
}

function Skills() {
  return (
    <div style={{ maxWidth: 1180, margin: "0 auto", padding: "3.5rem 2rem" }}>
      <SectionHeading n="02" label="Skills" />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: 18 }}>
        {data.skills.map((group) => (
          <TiltCard
            key={group.label}
            strength={8}
            style={{
              background: COLORS.surface,
              border: `1px solid ${COLORS.border}`,
              borderRadius: 14,
              padding: "1.5rem",
            }}
          >
            <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11.5, color: group.primary ? COLORS.accent : COLORS.mint, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 14 }}>
              "{group.label}": [
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 6 }}>
              {group.items.map((item) => (
                <Tag key={item} tone={group.primary ? "accent" : "mint"}>{item}</Tag>
              ))}
            </div>
            <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11.5, color: COLORS.textFaint, marginTop: 10 }}>]</p>
          </TiltCard>
        ))}
      </div>
    </div>
  );
}

function Projects() {
  return (
    <div style={{ maxWidth: 1180, margin: "0 auto", padding: "3.5rem 2rem" }}>
      <SectionHeading n="03" label="Projects" />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: 22 }}>
        {data.projects.map((p) => (
          <TiltCard
            key={p.name}
            strength={6}
            style={{
              background: COLORS.surface,
              border: `1px solid ${COLORS.border}`,
              borderRadius: 14,
              overflow: "hidden",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 16px", borderBottom: `1px solid ${COLORS.border}`, background: COLORS.bgElevated }}>
              <Dot color="#ff5f57" /><Dot color="#febc2e" /><Dot color="#28c840" />
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: COLORS.textFaint, marginLeft: 8 }}>{p.file}</span>
            </div>
            <div style={{ padding: "1.6rem" }}>
              <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 19, fontWeight: 700, color: COLORS.text, marginBottom: 10 }}>{p.name}</p>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14.5, color: COLORS.textDim, lineHeight: 1.85, marginBottom: 16 }}>{p.desc}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 18 }}>
                {p.tech.map((t) => <Tag key={t} tone="dim">{t}</Tag>)}
              </div>
              <div style={{ display: "flex", gap: 20 }}>
                {p.live && (
                  <a href={p.live} target="_blank" rel="noreferrer" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, color: COLORS.accent, textDecoration: "none", fontWeight: 600 }}>
                    ▶ live-demo →
                  </a>
                )}
                {p.repo && p.repo !== "#" && (
                  <a href={p.repo} target="_blank" rel="noreferrer" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, color: COLORS.mint, textDecoration: "none", fontWeight: 600 }}>
                    ⌥ repository →
                  </a>
                )}
              </div>
            </div>
          </TiltCard>
        ))}
      </div>
    </div>
  );
}

function LogEntry({ hash, title, meta, badge, bullets }) {
  return (
    <div style={{ display: "flex", gap: 18, marginBottom: 22 }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", paddingTop: 6 }}>
        <span style={{ width: 10, height: 10, borderRadius: "50%", background: COLORS.accent, boxShadow: `0 0 0 4px ${COLORS.accentSoft}` }} />
        <span style={{ width: 1, flex: 1, background: COLORS.border, marginTop: 6 }} />
      </div>
      <div style={{ flex: 1, paddingBottom: 6 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap", marginBottom: 6 }}>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12.5, color: COLORS.mint }}>#{hash}</span>
          <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 16.5, fontWeight: 700, color: COLORS.text, margin: 0 }}>{title}</p>
          {badge && <Tag tone="accent">{badge}</Tag>}
        </div>
        {meta && <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13.5, color: COLORS.textDim, marginBottom: 8 }}>{meta}</p>}
        {bullets && (
          <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
            {bullets.map((b, i) => (
              <li key={i} style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: COLORS.textDim, lineHeight: 1.8, paddingLeft: 18, position: "relative" }}>
                <span style={{ position: "absolute", left: 0, color: COLORS.accent }}>›</span>
                {b}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

function Experience() {
  return (
    <div style={{ maxWidth: 1180, margin: "0 auto", padding: "3.5rem 2rem" }}>
      <SectionHeading n="04" label="Experience" />
      {data.experience.map((exp) => (
        <LogEntry key={exp.role} hash={exp.hash} title={exp.role} meta={`${exp.company} · ${exp.type} · ${exp.period}`} bullets={exp.bullets} />
      ))}

      <div style={{ marginTop: "3rem" }}>
        <SectionHeading n="04.1" label="Certifications" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 14 }}>
          {data.certifications.map((c) => (
            <div key={c} style={{ background: COLORS.surface, border: `1px solid ${COLORS.border}`, borderRadius: 12, padding: "1.1rem 1.3rem", display: "flex", gap: 12, alignItems: "flex-start" }}>
              <span style={{ color: COLORS.accent, fontSize: 15, fontFamily: "'JetBrains Mono', monospace" }}>✓</span>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13.5, color: COLORS.textDim, lineHeight: 1.6 }}>{c}</p>
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginTop: "3rem" }}>
        <SectionHeading n="04.2" label="Achievements" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 14 }}>
          {data.achievements.map((a, i) => (
            <div key={i} style={{ background: COLORS.surface, border: `1px solid ${COLORS.mintBorder}`, borderRadius: 12, padding: "1.1rem 1.3rem", display: "flex", gap: 12, alignItems: "flex-start" }}>
              <span style={{ color: COLORS.mint, fontSize: 14, fontFamily: "'JetBrains Mono', monospace" }}>◆</span>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13.5, color: COLORS.textDim, lineHeight: 1.7 }}>{a}</p>
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginTop: "3rem" }}>
        <SectionHeading n="04.3" label="Education" />
        {data.education.map((e) => (
          <LogEntry key={e.degree} hash={e.hash} title={e.degree} meta={e.institute} badge={e.year} />
        ))}
      </div>
    </div>
  );
}

function Contact() {
  const contacts = [
    { label: "email", value: data.email, href: `mailto:${data.email}` },
    { label: "phone", value: data.phone, href: `tel:${data.phone}` },
    { label: "linkedin", value: "amjad-khan-209363320", href: data.linkedin },
    { label: "github", value: "Amjadkhan9756", href: data.github },
    { label: "leetcode", value: "amjad_khan", href: data.leetcode },
  ];
  return (
    <div style={{ maxWidth: 1180, margin: "0 auto", padding: "3.5rem 2rem" }}>
      <SectionHeading n="05" label="Contact" />
      <div
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 14,
          background: COLORS.surface,
          border: `1px solid ${COLORS.border}`,
          borderRadius: 12,
          padding: "1.4rem 1.8rem",
          maxWidth: 620,
        }}
      >
        {contacts.map((c) => (
          <a
            key={c.label}
            href={c.href}
            target="_blank"
            rel="noreferrer"
            style={{ display: "flex", gap: 10, padding: "8px 0", color: COLORS.textDim, textDecoration: "none", borderBottom: `1px solid ${COLORS.border}` }}
          >
            <span style={{ color: COLORS.mint }}>$</span>
            <span style={{ color: COLORS.accent }}>open</span>
            <span>--{c.label}</span>
            <span style={{ color: COLORS.text, marginLeft: "auto", wordBreak: "break-all" }}>{c.value}</span>
          </a>
        ))}
      </div>
    </div>
  );
}

const SECTIONS = { Home, About, Skills, Projects, Experience, Contact };

/* ----------------------------------- app ------------------------------------ */

export default function Portfolio() {
  useGoogleFonts();
  const [active, setActive] = useState("Home");
  const ActiveSection = SECTIONS[active];

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", background: COLORS.bg, minHeight: "100vh", color: COLORS.text }}>
      <style>{`
        .tilt-card { transition: transform 0.15s ease-out, border-color 0.2s ease; will-change: transform; }
        .tilt-card:hover { border-color: ${COLORS.accentBorder} !important; }
        @media (max-width: 860px) {
          .hero-grid { grid-template-columns: 1fr !important; }
        }
        a:focus-visible, button:focus-visible { outline: 2px solid ${COLORS.accent}; outline-offset: 2px; }
        @media (prefers-reduced-motion: reduce) {
          .tilt-card { transition: none !important; }
        }
      `}</style>
      <IdeChrome active={active} onNav={setActive} />
      {active === "Home" ? (
        <>
          <Home onNav={setActive} />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </>
      ) : (
        <ActiveSection onNav={setActive} />
      )}
      <footer
        style={{
          textAlign: "center",
          padding: "2.4rem",
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 12.5,
          color: COLORS.textFaint,
          borderTop: `1px solid ${COLORS.border}`,
        }}
      >
        // built by {data.name} · 2025
      </footer>
    </div>
  );
}