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
  page: { fontFamily: "'Inter', 'Segoe UI', sans-serif", color: "#1a1a1a", background: "#fff", minHeight: "100vh" },
  // Navbar
  nav: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 2rem", height: 60, background: "#fff", borderBottom: "0.5px solid #e5e5e5", position: "sticky", top: 0, zIndex: 100 },
  navName: { fontSize: 20, fontWeight: 600, color: "#534AB7", letterSpacing: "-0.5px" },
  navLinks: { display: "flex", gap: 4, listStyle: "none", margin: 0, padding: 0 },
  navLink: (active) => ({
    fontSize: 13, color: active ? "#534AB7" : "#666", textDecoration: "none",
    padding: "6px 12px", borderRadius: 8, background: active ? "#EEEDFE" : "transparent",
    cursor: "pointer", border: "none", fontFamily: "inherit",
  }),
  // Sections
  section: { padding: "3rem 2rem", borderBottom: "0.5px solid #f0f0f0", maxWidth: 860, margin: "0 auto" },
  sectionTitle: { fontSize: 18, fontWeight: 600, marginBottom: "1.5rem", display: "flex", alignItems: "center", gap: 10, color: "#1a1a1a" },
  // Hero
  hero: { background: "#FAFAFA", borderBottom: "0.5px solid #f0f0f0", textAlign: "center", padding: "4rem 2rem" },
  heroAvatar: { width: 80, height: 80, borderRadius: "50%", background: "#EEEDFE", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28, fontWeight: 600, color: "#534AB7", margin: "0 auto 1.5rem" },
  heroH1: { fontSize: 36, fontWeight: 700, marginBottom: 8, letterSpacing: "-1px" },
  heroRole: { fontSize: 15, color: "#7F77DD", marginBottom: 12, fontWeight: 500 },
  heroSummary: { fontSize: 14, color: "#555", maxWidth: 560, margin: "0 auto 1.5rem", lineHeight: 1.8 },
  heroLinks: { display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" },
  heroLink: { display: "flex", alignItems: "center", gap: 6, fontSize: 13, padding: "7px 14px", borderRadius: 8, border: "0.5px solid #ddd", color: "#555", textDecoration: "none", background: "#fff" },
  // Skills
  skillsGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 12 },
  skillGroup: { background: "#fff", border: "0.5px solid #e8e8e8", borderRadius: 12, padding: "1rem 1.25rem" },
  skillGroupLabel: { fontSize: 11, fontWeight: 600, color: "#534AB7", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 10 },
  skillTags: { display: "flex", flexWrap: "wrap", gap: 6 },
  tag: (primary) => ({ fontSize: 12, padding: "3px 9px", borderRadius: 99, background: primary ? "#EEEDFE" : "#f5f5f5", color: primary ? "#534AB7" : "#666", border: primary ? "0.5px solid #AFA9EC" : "0.5px solid #e0e0e0" }),
  // Cards
  card: { background: "#fff", border: "0.5px solid #e8e8e8", borderRadius: 12, padding: "1.25rem", marginBottom: 12 },
  cardHeader: { display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8, flexWrap: "wrap", gap: 8 },
  cardTitle: { fontSize: 15, fontWeight: 600 },
  cardSub: { fontSize: 13, color: "#888", marginBottom: 10 },
  dateBadge: { fontSize: 12, background: "#E1F5EE", color: "#0F6E56", borderRadius: 99, padding: "3px 10px", whiteSpace: "nowrap" },
  bullets: { listStyle: "none", margin: 0, padding: 0 },
  bullet: { fontSize: 13, color: "#555", padding: "4px 0 4px 16px", position: "relative", lineHeight: 1.6 },
  // Project
  projectCard: { background: "#fff", border: "0.5px solid #e8e8e8", borderRadius: 12, padding: "1.25rem" },
  projectTitle: { fontSize: 15, fontWeight: 600, marginBottom: 4 },
  projectDesc: { fontSize: 13, color: "#555", lineHeight: 1.7, marginBottom: 12 },
  techStack: { display: "flex", flexWrap: "wrap", gap: 5, marginBottom: 12 },
  tech: { fontSize: 11, padding: "2px 8px", borderRadius: 99, background: "#f5f5f5", color: "#555", border: "0.5px solid #e0e0e0" },
  // Certs
  certGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 12 },
  certItem: { background: "#fff", border: "0.5px solid #e8e8e8", borderRadius: 12, padding: "1rem 1.25rem", display: "flex", alignItems: "flex-start", gap: 10 },
  // Achievements
  achGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 12 },
  achCard: { background: "#FAFAFA", borderRadius: 8, padding: "1rem", display: "flex", alignItems: "flex-start", gap: 10 },
  achText: { fontSize: 13, color: "#555", lineHeight: 1.6 },
  // Education
  eduItem: { background: "#fff", border: "0.5px solid #e8e8e8", borderRadius: 12, padding: "1rem 1.25rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 8, marginBottom: 10 },
  // Contact
  contactGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 12 },
  contactItem: { background: "#fff", border: "0.5px solid #e8e8e8", borderRadius: 12, padding: "1rem 1.25rem", display: "flex", alignItems: "center", gap: 12 },
  // Footer
  footer: { textAlign: "center", padding: "2rem", fontSize: 13, color: "#aaa" },
};

function Divider() {
  return <span style={{ flex: 1, height: 1, background: "#f0f0f0", display: "inline-block", marginLeft: 12 }} />;
}

function Navbar({ active, onNav }) {
  return (
    <nav style={styles.nav}>
      <div style={styles.navName}>Amjad</div>
      <ul style={styles.navLinks}>
        {NAV_LINKS.map((link) => (
          <li key={link}>
            <button style={styles.navLink(active === link)} onClick={() => onNav(link)}>
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
      <div style={{ marginTop: "2rem" }}>
        <button
          onClick={() => onNav("Projects")}
          style={{ background: "#534AB7", color: "#fff", border: "none", padding: "10px 24px", borderRadius: 8, fontSize: 14, fontWeight: 500, cursor: "pointer", marginRight: 10 }}
        >
          View Projects
        </button>
        <button
          onClick={() => onNav("Contact")}
          style={{ background: "transparent", color: "#534AB7", border: "1.5px solid #AFA9EC", padding: "10px 24px", borderRadius: 8, fontSize: 14, fontWeight: 500, cursor: "pointer" }}
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
      <p style={{ fontSize: 14, color: "#555", lineHeight: 1.9, maxWidth: 680 }}>{data.summary}</p>
    </div>
  );
}

function Skills() {
  return (
    <div style={styles.section} id="skills">
      <h2 style={styles.sectionTitle}>Skills <Divider /></h2>
      <div style={styles.skillsGrid}>
        {data.skills.map((group) => (
          <div key={group.label} style={styles.skillGroup}>
            <p style={styles.skillGroupLabel}>{group.label}</p>
            <div style={styles.skillTags}>
              {group.items.map((item) => (
                <span key={item} style={styles.tag(group.primary)}>{item}</span>
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
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
        {data.projects.map((p) => (
          <div key={p.name} style={styles.projectCard}>
            <p style={styles.projectTitle}>{p.name}</p>
            <p style={styles.projectDesc}>{p.desc}</p>
            <div style={styles.techStack}>
              {p.tech.map((t) => <span key={t} style={styles.tech}>{t}</span>)}
            </div>
            <a href={p.repo} style={{ fontSize: 13, color: "#534AB7", textDecoration: "none" }}>⌥ View Repository →</a>
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
        <div key={exp.role} style={styles.card}>
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
                <span style={{ position: "absolute", left: 0, color: "#7F77DD" }}>–</span>
                {b}
              </li>
            ))}
          </ul>
        </div>
      ))}

      <h2 style={{ ...styles.sectionTitle, marginTop: "2rem" }}>Certifications <Divider /></h2>
      <div style={styles.certGrid}>
        {data.certifications.map((c) => (
          <div key={c} style={styles.certItem}>
            <span style={{ color: "#EF9F27", fontSize: 20, flexShrink: 0 }}>★</span>
            <p style={{ fontSize: 13, fontWeight: 500, lineHeight: 1.5 }}>{c}</p>
          </div>
        ))}
      </div>

      <h2 style={{ ...styles.sectionTitle, marginTop: "2rem" }}>Achievements <Divider /></h2>
      <div style={styles.achGrid}>
        {data.achievements.map((a, i) => (
          <div key={i} style={styles.achCard}>
            <span style={{ color: "#7F77DD", fontSize: 18 }}>◆</span>
            <p style={styles.achText}>{a}</p>
          </div>
        ))}
      </div>

      <h2 style={{ ...styles.sectionTitle, marginTop: "2rem" }}>Education <Divider /></h2>
      {data.education.map((e) => (
        <div key={e.degree} style={styles.eduItem}>
          <div>
            <p style={{ fontSize: 14, fontWeight: 600 }}>{e.degree}</p>
            <p style={{ fontSize: 13, color: "#888", marginTop: 2 }}>{e.institute}</p>
          </div>
          <span style={{ fontSize: 12, color: "#534AB7", background: "#EEEDFE", borderRadius: 99, padding: "3px 10px", whiteSpace: "nowrap" }}>{e.year}</span>
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
          <a key={c.label} href={c.href} target="_blank" rel="noreferrer" style={{ ...styles.contactItem, textDecoration: "none" }}>
            <div style={{ width: 36, height: 36, borderRadius: "50%", background: "#EEEDFE", display: "flex", alignItems: "center", justifyContent: "center", color: "#534AB7", fontSize: 16, flexShrink: 0 }}>✉</div>
            <div>
              <p style={{ fontSize: 12, color: "#aaa" }}>{c.label}</p>
              <p style={{ fontSize: 13, fontWeight: 500, color: "#1a1a1a", wordBreak: "break-all" }}>{c.value}</p>
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