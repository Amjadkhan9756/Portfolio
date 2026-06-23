import { useState } from "react";

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
    {
      label: "Languages",
      items: ["JavaScript", "TypeScript", "Java"],
      primary: true,
    },
    {
      label: "Frontend",
      items: ["React.js", "Next.js", "Redux", "Tailwind CSS", "Bootstrap 5", "Material UI", "HTML", "CSS"],
      primary: true,
    },
    {
      label: "Backend",
      items: ["Node.js", "Express.js", "MongoDB", "REST APIs"],
      primary: true,
    },
    {
      label: "DevOps & Tools",
      items: ["Git", "GitHub", "Docker", "AWS", "CI/CD", "DBMS"],
      primary: false,
    },
  ],
  experience: [
    {
      role: "Web Development Intern",
      company: "Academor",
      type: "Remote",
      period: "Aug 2023 – Sep 2023",
      bullets: [
        "Engineered responsive full-stack web modules using React.js and Node.js, boosting rendering speeds by 25%.",
        "Developed 10+ reusable UI components and structured backend API routes to scale data throughput by 40%.",
      ],
    },
  ],
  projects: [
    {
      name: "SocialMediaSite",
      desc: "A LinkedIn-style social blog platform with custom profile bios, education tracking, professional histories, and mutual connection requests. Features secure bcrypt session states and Multer media management for profile pictures and post media.",
      tech: ["Next.js 15", "React 19", "Redux Toolkit", "Bootstrap 5", "Node.js", "Express 5", "MongoDB", "Multer", "Bcrypt"],
      repo: "#",
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
    {
      degree: "B.Tech in Computer Science & Engineering",
      institute: "Shri Ram Murti Smarak College of Engineering & Technology, Bareilly",
      year: "Expected 2027",
    },
    {
      degree: "Senior Secondary Education (UP Board)",
      institute: "Bharat Inter College, Bhojipura, Bareilly, UP",
      year: "2022",
    },
    {
      degree: "Secondary Education (UP Board)",
      institute: "Bharat Inter College, Bhojipura, Bareilly, UP",
      year: "2020",
    },
  ],
};

const NAV_LINKS = ["Home", "About", "Skills", "Projects", "Experience", "Contact"];

const styles = {
  // Layout
  page: { fontFamily: "'Poppins', sans-serif", color: "#e2e8f0", background: "#0f172a", minHeight: "100vh", position: "relative" },
  // Navbar
  nav: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 2rem", height: 70, background: "rgba(15, 23, 42, 0.5)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(6, 182, 212, 0.2)", position: "sticky", top: 0, zIndex: 100, boxShadow: "0 8px 32px rgba(0, 0, 0, 0.4)" },
  navName: { fontSize: 22, fontWeight: 800, background: "linear-gradient(135deg, #06b6d4, #0ea5e9, #a78bfa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", letterSpacing: "-1px", cursor: "pointer" },
  navLinks: { display: "flex", gap: 4, listStyle: "none", margin: 0, padding: 0, flexWrap: "wrap" },
  navLink: (active) => ({
    fontSize: 14, color: active ? "#06b6d4" : "#cbd5e1", textDecoration: "none",
    padding: "8px 12px", borderRadius: 8, background: active ? "rgba(6, 182, 212, 0.1)" : "transparent",
    cursor: "pointer", border: "none", fontFamily: "inherit", transition: "all 0.3s ease",
  }),
  // Sections
  section: { padding: "4rem 2rem", borderBottom: "1px solid rgba(6, 182, 212, 0.1)", maxWidth: 1000, margin: "0 auto", position: "relative", zIndex: 2 },
  sectionTitle: { fontSize: 28, fontWeight: 700, marginBottom: "2rem", display: "flex", alignItems: "center", gap: 15, color: "#f8fafc", background: "linear-gradient(135deg, #06b6d4, #0ea5e9)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" },
  // Hero
  hero: { background: "linear-gradient(135deg, rgba(15, 23, 42, 0.4) 0%, rgba(26, 58, 82, 0.3) 50%, rgba(45, 27, 105, 0.2) 100%)", backdropFilter: "blur(10px)", textAlign: "center", padding: "5rem 2rem 4rem", borderBottom: "1px solid rgba(6, 182, 212, 0.1)", position: "relative", zIndex: 2 },
  heroAvatar: { width: 120, height: 120, borderRadius: "50%", background: "linear-gradient(135deg, #06b6d4, #0ea5e9)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 48, fontWeight: 700, color: "#0f172a", margin: "0 auto 2rem", boxShadow: "0 20px 50px rgba(6, 182, 212, 0.3), inset 0 1px 1px rgba(255, 255, 255, 0.2)" },
  heroH1: { fontSize: 48, fontWeight: 800, marginBottom: 12, letterSpacing: "-2px", color: "#f8fafc", textShadow: "0 4px 12px rgba(0, 0, 0, 0.3)" },
  heroRole: { fontSize: 18, background: "linear-gradient(135deg, #06b6d4, #a78bfa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", marginBottom: 16, fontWeight: 600 },
  heroSummary: { fontSize: 15, color: "#cbd5e1", maxWidth: 620, margin: "0 auto 2rem", lineHeight: 1.8 },
  heroLinks: { display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", marginBottom: "2rem" },
  heroLink: { display: "flex", alignItems: "center", gap: 8, fontSize: 14, padding: "10px 18px", borderRadius: 10, border: "1px solid rgba(6, 182, 212, 0.4)", color: "#cbd5e1", textDecoration: "none", background: "rgba(6, 182, 212, 0.08)", backdropFilter: "blur(10px)", transition: "all 0.3s ease", cursor: "pointer" },
  // Skills
  skillsGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16 },
  skillGroup: { background: "rgba(30, 41, 59, 0.6)", border: "1px solid rgba(6, 182, 212, 0.2)", borderRadius: 14, padding: "1.5rem", backdropFilter: "blur(10px)", transition: "all 0.3s ease", cursor: "pointer" },
  skillGroupLabel: { fontSize: 12, fontWeight: 700, color: "#06b6d4", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 12 },
  skillTags: { display: "flex", flexWrap: "wrap", gap: 8 },
  tag: (primary) => ({ fontSize: 13, padding: "6px 12px", borderRadius: 20, background: primary ? "rgba(6, 182, 212, 0.15)" : "rgba(167, 139, 250, 0.1)", color: primary ? "#06b6d4" : "#a78bfa", border: primary ? "1px solid rgba(6, 182, 212, 0.3)" : "1px solid rgba(167, 139, 250, 0.2)", transition: "all 0.3s ease" }),
  // Cards
  card: { background: "rgba(30, 41, 59, 0.6)", border: "1px solid rgba(6, 182, 212, 0.2)", borderRadius: 14, padding: "1.5rem", marginBottom: 16, backdropFilter: "blur(10px)", transition: "all 0.3s ease" },
  cardHeader: { display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12, flexWrap: "wrap", gap: 12 },
  cardTitle: { fontSize: 17, fontWeight: 700, color: "#f8fafc" },
  cardSub: { fontSize: 14, color: "#94a3b8", marginBottom: 8 },
  dateBadge: { fontSize: 12, background: "rgba(6, 182, 212, 0.15)", color: "#06b6d4", borderRadius: 20, padding: "4px 12px", whiteSpace: "nowrap", border: "1px solid rgba(6, 182, 212, 0.3)" },
  bullets: { listStyle: "none", margin: 0, padding: 0 },
  bullet: { fontSize: 14, color: "#cbd5e1", padding: "6px 0 6px 20px", position: "relative", lineHeight: 1.8 },
  // Project
  projectCard: { background: "rgba(30, 41, 59, 0.6)", border: "1px solid rgba(6, 182, 212, 0.2)", borderRadius: 14, padding: "1.5rem", backdropFilter: "blur(10px)", transition: "all 0.3s ease" },
  projectTitle: { fontSize: 17, fontWeight: 700, marginBottom: 8, color: "#f8fafc" },
  projectDesc: { fontSize: 14, color: "#cbd5e1", lineHeight: 1.8, marginBottom: 14 },
  techStack: { display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 14 },
  tech: { fontSize: 12, padding: "4px 10px", borderRadius: 8, background: "rgba(167, 139, 250, 0.1)", color: "#a78bfa", border: "1px solid rgba(167, 139, 250, 0.2)" },
  // Certs
  certGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 14 },
  certItem: { background: "rgba(30, 41, 59, 0.6)", border: "1px solid rgba(6, 182, 212, 0.2)", borderRadius: 14, padding: "1.25rem", display: "flex", alignItems: "flex-start", gap: 12, backdropFilter: "blur(10px)" },
  // Achievements
  achGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 14 },
  achCard: { background: "rgba(30, 41, 59, 0.6)", borderRadius: 12, padding: "1.25rem", display: "flex", alignItems: "flex-start", gap: 12, border: "1px solid rgba(167, 139, 250, 0.2)", backdropFilter: "blur(10px)" },
  achText: { fontSize: 14, color: "#cbd5e1", lineHeight: 1.7 },
  // Education
  eduItem: { background: "rgba(30, 41, 59, 0.6)", border: "1px solid rgba(6, 182, 212, 0.2)", borderRadius: 14, padding: "1.25rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12, marginBottom: 12, backdropFilter: "blur(10px)" },
  // Contact
  contactGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 14 },
  contactItem: { background: "rgba(30, 41, 59, 0.6)", border: "1px solid rgba(6, 182, 212, 0.2)", borderRadius: 14, padding: "1.25rem", display: "flex", alignItems: "center", gap: 14, backdropFilter: "blur(10px)" },
  // Footer
  footer: { textAlign: "center", padding: "2.5rem", fontSize: 14, color: "#64748b", borderTop: "1px solid rgba(6, 182, 212, 0.1)", position: "relative", zIndex: 2 },
};

function Divider() {
  return <span style={{ flex: 1, height: 2, background: "linear-gradient(90deg, rgba(6, 182, 212, 0.5), transparent)", display: "inline-block", marginLeft: 16, borderRadius: 10 }} />;
}

function Navbar({ active, onNav }) {
  return (
    <nav style={styles.nav}>
      <div style={styles.navName}>Amjad</div>
      <ul style={styles.navLinks}>
        {NAV_LINKS.map((link) => (
          <li key={link}>
            <button 
              style={styles.navLink(active === link)} 
              onClick={() => onNav(link)}
              onMouseEnter={(e) => { e.target.style.color = "#06b6d4"; e.target.style.background = "rgba(6, 182, 212, 0.1)"; }}
              onMouseLeave={(e) => { e.target.style.color = active === link ? "#06b6d4" : "#cbd5e1"; e.target.style.background = active === link ? "rgba(6, 182, 212, 0.1)" : "transparent"; }}
            >
              {link}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function Home({ onNav }) {
  return (
    <div style={styles.hero} id="home">
      <div style={styles.heroAvatar}>AK</div>
      <h1 style={styles.heroH1}>{data.name}</h1>
      <p style={styles.heroRole}>{data.role}</p>
      <p style={styles.heroSummary}>{data.summary}</p>
      <div style={styles.heroLinks}>
        <a href={`mailto:${data.email}`} style={styles.heroLink}>✉ Email</a>
        <a href={data.linkedin} target="_blank" rel="noreferrer" style={styles.heroLink}>in LinkedIn</a>
        <a href={data.github} target="_blank" rel="noreferrer" style={styles.heroLink}>⌥ GitHub</a>
        <a href={data.leetcode} target="_blank" rel="noreferrer" style={styles.heroLink}>⌨ LeetCode</a>
        <a href={`tel:${data.phone}`} style={styles.heroLink}>✆ {data.phone}</a>
      </div>
      <div style={{ marginTop: "2.5rem", display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
        <button
          onClick={() => onNav("Projects")}
          style={{ background: "linear-gradient(135deg, #06b6d4, #0ea5e9)", color: "#fff", border: "none", padding: "12px 32px", borderRadius: 10, fontSize: 15, fontWeight: 600, cursor: "pointer", transition: "all 0.3s ease", boxShadow: "0 8px 24px rgba(6, 182, 212, 0.3)" }}
          onMouseEnter={(e) => { e.target.style.transform = "translateY(-3px)"; e.target.style.boxShadow = "0 12px 32px rgba(6, 182, 212, 0.5)"; }}
          onMouseLeave={(e) => { e.target.style.transform = "translateY(0)"; e.target.style.boxShadow = "0 8px 24px rgba(6, 182, 212, 0.3)"; }}
        >
          View Projects
        </button>
        <button
          onClick={() => onNav("Contact")}
          style={{ background: "transparent", color: "#06b6d4", border: "2px solid rgba(6, 182, 212, 0.5)", padding: "10px 30px", borderRadius: 10, fontSize: 15, fontWeight: 600, cursor: "pointer", transition: "all 0.3s ease", backdropFilter: "blur(10px)" }}
          onMouseEnter={(e) => { e.target.style.background = "rgba(6, 182, 212, 0.1)"; e.target.style.borderColor = "rgba(6, 182, 212, 1)"; }}
          onMouseLeave={(e) => { e.target.style.background = "transparent"; e.target.style.borderColor = "rgba(6, 182, 212, 0.5)"; }}
        >
          Contact Me
        </button>
      </div>
    </div>
  );
}

function About() {
  return (
    <div style={styles.section} id="about">
      <h2 style={styles.sectionTitle}>About <Divider /></h2>
      <p style={{ fontSize: 15, color: "#cbd5e1", lineHeight: 1.9, maxWidth: 720 }}>{data.summary}</p>
    </div>
  );
}

function Skills() {
  return (
    <div style={styles.section} id="skills">
      <h2 style={styles.sectionTitle}>Skills <Divider /></h2>
      <div style={styles.skillsGrid}>
        {data.skills.map((group) => (
          <div 
            key={group.label} 
            style={styles.skillGroup}
            onMouseEnter={(e) => { 
              e.currentTarget.style.borderColor = "rgba(6, 182, 212, 0.5)"; 
              e.currentTarget.style.background = "rgba(6, 182, 212, 0.1)";
              e.currentTarget.style.boxShadow = "0 8px 24px rgba(6, 182, 212, 0.2)";
              e.currentTarget.style.transform = "translateY(-4px)";
            }}
            onMouseLeave={(e) => { 
              e.currentTarget.style.borderColor = "rgba(6, 182, 212, 0.2)"; 
              e.currentTarget.style.background = "rgba(30, 41, 59, 0.6)";
              e.currentTarget.style.boxShadow = "none";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <p style={styles.skillGroupLabel}>{group.label}</p>
            <div style={styles.skillTags}>
              {group.items.map((item) => (
                <span 
                  key={item} 
                  style={styles.tag(group.primary)}
                  onMouseEnter={(e) => {
                    e.target.style.transform = "scale(1.05)";
                    e.target.style.background = group.primary ? "rgba(6, 182, 212, 0.25)" : "rgba(167, 139, 250, 0.2)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = "scale(1)";
                    e.target.style.background = group.primary ? "rgba(6, 182, 212, 0.15)" : "rgba(167, 139, 250, 0.1)";
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Projects() {
  return (
    <div style={styles.section} id="projects">
      <h2 style={styles.sectionTitle}>Projects <Divider /></h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 18 }}>
        {data.projects.map((p) => (
          <div 
            key={p.name} 
            style={styles.projectCard}
            onMouseEnter={(e) => { 
              e.currentTarget.style.borderColor = "rgba(6, 182, 212, 0.5)"; 
              e.currentTarget.style.background = "rgba(6, 182, 212, 0.08)";
              e.currentTarget.style.boxShadow = "0 12px 32px rgba(6, 182, 212, 0.2)";
              e.currentTarget.style.transform = "translateY(-6px)";
            }}
            onMouseLeave={(e) => { 
              e.currentTarget.style.borderColor = "rgba(6, 182, 212, 0.2)"; 
              e.currentTarget.style.background = "rgba(30, 41, 59, 0.6)";
              e.currentTarget.style.boxShadow = "none";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <p style={styles.projectTitle}>{p.name}</p>
            <p style={styles.projectDesc}>{p.desc}</p>
            <div style={styles.techStack}>
              {p.tech.map((t) => <span key={t} style={styles.tech}>{t}</span>)}
            </div>
            <a href={p.repo} style={{ fontSize: 14, color: "#06b6d4", textDecoration: "none", fontWeight: 500, transition: "all 0.3s ease" }} onMouseEnter={(e) => { e.target.style.color = "#0ea5e9"; }} onMouseLeave={(e) => { e.target.style.color = "#06b6d4"; }}>⌥ View Repository →</a>
          </div>
        ))}
      </div>
    </div>
  );
}

function Experience() {
  return (
    <div style={styles.section} id="experience">
      <h2 style={styles.sectionTitle}>Experience <Divider /></h2>
      {data.experience.map((exp) => (
        <div 
          key={exp.role} 
          style={styles.card}
          onMouseEnter={(e) => { 
            e.currentTarget.style.borderColor = "rgba(6, 182, 212, 0.5)"; 
            e.currentTarget.style.boxShadow = "0 8px 24px rgba(6, 182, 212, 0.15)";
          }}
          onMouseLeave={(e) => { 
            e.currentTarget.style.borderColor = "rgba(6, 182, 212, 0.2)"; 
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          <div style={styles.cardHeader}>
            <div>
              <p style={styles.cardTitle}>{exp.role}</p>
              <p style={styles.cardSub}>{exp.company} · {exp.type}</p>
            </div>
            <span style={styles.dateBadge}>{exp.period}</span>
          </div>
          <ul style={styles.bullets}>
            {exp.bullets.map((b, i) => (
              <li key={i} style={styles.bullet}>
                <span style={{ position: "absolute", left: 0, color: "#06b6d4", fontWeight: "bold" }}>→</span>
                {b}
              </li>
            ))}
          </ul>
        </div>
      ))}

      <h2 style={{ ...styles.sectionTitle, marginTop: "3rem" }}>Certifications <Divider /></h2>
      <div style={styles.certGrid}>
        {data.certifications.map((c) => (
          <div 
            key={c} 
            style={styles.certItem}
            onMouseEnter={(e) => { 
              e.currentTarget.style.borderColor = "rgba(167, 139, 250, 0.5)"; 
              e.currentTarget.style.boxShadow = "0 8px 24px rgba(167, 139, 250, 0.15)";
            }}
            onMouseLeave={(e) => { 
              e.currentTarget.style.borderColor = "rgba(6, 182, 212, 0.2)"; 
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <span style={{ color: "#f59e0b", fontSize: 24, flexShrink: 0 }}>★</span>
            <p style={{ fontSize: 14, fontWeight: 500, lineHeight: 1.6, color: "#cbd5e1" }}>{c}</p>
          </div>
        ))}
      </div>

      <h2 style={{ ...styles.sectionTitle, marginTop: "3rem" }}>Achievements <Divider /></h2>
      <div style={styles.achGrid}>
        {data.achievements.map((a, i) => (
          <div 
            key={i} 
            style={styles.achCard}
            onMouseEnter={(e) => { 
              e.currentTarget.style.borderColor = "rgba(167, 139, 250, 0.5)"; 
              e.currentTarget.style.boxShadow = "0 8px 24px rgba(167, 139, 250, 0.15)";
            }}
            onMouseLeave={(e) => { 
              e.currentTarget.style.borderColor = "rgba(167, 139, 250, 0.2)"; 
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <span style={{ color: "#06b6d4", fontSize: 20 }}>◆</span>
            <p style={styles.achText}>{a}</p>
          </div>
        ))}
      </div>

      <h2 style={{ ...styles.sectionTitle, marginTop: "3rem" }}>Education <Divider /></h2>
      {data.education.map((e) => (
        <div 
          key={e.degree} 
          style={styles.eduItem}
          onMouseEnter={(e) => { 
            e.currentTarget.style.borderColor = "rgba(6, 182, 212, 0.5)"; 
            e.currentTarget.style.boxShadow = "0 8px 24px rgba(6, 182, 212, 0.15)";
          }}
          onMouseLeave={(e) => { 
            e.currentTarget.style.borderColor = "rgba(6, 182, 212, 0.2)"; 
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          <div>
            <p style={{ fontSize: 15, fontWeight: 700, color: "#f8fafc" }}>{e.degree}</p>
            <p style={{ fontSize: 13, color: "#94a3b8", marginTop: 4 }}>{e.institute}</p>
          </div>
          <span style={{ fontSize: 12, color: "#06b6d4", background: "rgba(6, 182, 212, 0.15)", borderRadius: 20, padding: "4px 12px", whiteSpace: "nowrap", border: "1px solid rgba(6, 182, 212, 0.3)" }}>{e.year}</span>
        </div>
      ))}
    </div>
  );
}

function Contact() {
  const contacts = [
    { label: "Email", value: data.email, href: `mailto:${data.email}` },
    { label: "Phone", value: data.phone, href: `tel:${data.phone}` },
    { label: "LinkedIn", value: "amjad-khan-209363320", href: data.linkedin },
    { label: "GitHub", value: "Amjadkhan9756", href: data.github },
    { label: "LeetCode", value: "amjad_khan", href: data.leetcode },
  ];
  return (
    <div style={styles.section} id="contact">
      <h2 style={styles.sectionTitle}>Contact <Divider /></h2>
      <div style={styles.contactGrid}>
        {contacts.map((c) => (
          <a 
            key={c.label} 
            href={c.href} 
            target="_blank" 
            rel="noreferrer" 
            style={{ ...styles.contactItem, textDecoration: "none" }}
            onMouseEnter={(e) => { 
              e.currentTarget.style.borderColor = "rgba(6, 182, 212, 0.5)"; 
              e.currentTarget.style.boxShadow = "0 8px 24px rgba(6, 182, 212, 0.15)";
              e.currentTarget.style.transform = "translateY(-4px)";
            }}
            onMouseLeave={(e) => { 
              e.currentTarget.style.borderColor = "rgba(6, 182, 212, 0.2)"; 
              e.currentTarget.style.boxShadow = "none";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <div style={{ width: 44, height: 44, borderRadius: "50%", background: "linear-gradient(135deg, rgba(6, 182, 212, 0.2), rgba(167, 139, 250, 0.2))", display: "flex", alignItems: "center", justifyContent: "center", color: "#06b6d4", fontSize: 18, flexShrink: 0, border: "1px solid rgba(6, 182, 212, 0.3)" }}>✉</div>
            <div>
              <p style={{ fontSize: 12, color: "#94a3b8", marginBottom: 4 }}>{c.label}</p>
              <p style={{ fontSize: 14, fontWeight: 500, color: "#f8fafc", wordBreak: "break-all" }}>{c.value}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

const SECTIONS = { Home, About, Skills, Projects, Experience, Contact };

export default function Portfolio() {
  const [active, setActive] = useState("Home");
  const ActiveSection = SECTIONS[active];

  return (
    <div style={styles.page}>
      <Navbar active={active} onNav={setActive} />
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
      <footer style={styles.footer}>Designed & built by Amjad Khan · 2025</footer>
    </div>
  );
}