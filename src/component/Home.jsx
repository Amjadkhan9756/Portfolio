import { useEffect, useRef, useState } from "react";
import "./Home.css";

const RESUME = "/Amjad_Khan.pdf";

const links = {
  email: "mailto:amjadkhann.tech@gmail.com",
  phone: "tel:9756859054",
  linkedin: "https://linkedin.com/in/amjad-khan-209363320",
  github: "https://github.com/Amjadkhan9756",
  leetcode: "https://leetcode.com/u/amjad_khan",
};

const skills = [
  { title: "Languages", items: ["JavaScript", "TypeScript", "Java"] },
  {
    title: "Frontend",
    items: ["React.js", "Next.js", "Redux Toolkit", "HTML5", "CSS3", "Tailwind CSS", "Material UI"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "REST APIs", "JWT Authentication and Authorization"],
  },
  { title: "Databases", items: ["MongoDB", "Mongoose", "PostgreSQL"] },
  { title: "Tools", items: ["Git", "GitHub", "GitHub Actions", "Docker", "CI/CD"] },
  { title: "Problem Solving", items: ["Data Structures and Algorithms (DSA)"] },
];

const technologies = [
  "Next.js 15",
  "React 19",
  "Redux Toolkit",
  "Node.js",
  "Express 5",
  "MongoDB",
  "Bcrypt",
  "Multer",
];

const socials = [
  { label: "GitHub", href: links.github, mark: "GH" },
  { label: "LinkedIn", href: links.linkedin, mark: "in" },
  { label: "LeetCode", href: links.leetcode, mark: "LC" },
];

function ArrowIcon({ diagonal = false }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      {diagonal ? (
        <path d="M5 15 15 5M6 5h9v9" />
      ) : (
        <path d="M3.5 10h13m-5-5 5 5-5 5" />
      )}
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path d="M10 2.75v9.5m-3.5-3.5 3.5 3.5 3.5-3.5M4 13.75v3.5h12v-3.5" />
    </svg>
  );
}

function CubeScene() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return undefined;

    let disposed = false;
    let disposeScene = () => {};

    import("three").then((THREE) => {
      if (disposed) return;

      const scene = new THREE.Scene();

      const camera = new THREE.PerspectiveCamera(36, 1, 0.1, 40);

      camera.position.set(0, 0, 8.5);

      const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));

      renderer.setClearColor(0x000000, 0);

      mount.appendChild(renderer.domElement);

      const sculpture = new THREE.Group();

      scene.add(sculpture);

      const shape = new THREE.Mesh(

        new THREE.IcosahedronGeometry(1.38, 1),

        new THREE.MeshBasicMaterial({

          color: 0x7d8aff,

          wireframe: true,

          transparent: true,

          opacity: 0.58,

        }),

      );

      sculpture.add(shape);

      const halo = new THREE.Mesh(

        new THREE.SphereGeometry(0.9, 40, 40),

        new THREE.MeshBasicMaterial({

          color: 0x7794ff,

          transparent: true,

          opacity: 0.12,

        }),

      );

      sculpture.add(halo);

      const ringColors = [0x9ca9ff, 0xff9b70, 0x6db8ff];

      const rings = ringColors.map((color, index) => {

        const ring = new THREE.Mesh(

          new THREE.TorusGeometry(2.02 + index * 0.12, 0.008, 8, 160),

          new THREE.MeshBasicMaterial({

            color,

            transparent: true,

            opacity: index === 1 ? 0.7 : 0.4,

          }),

        );

        ring.rotation.set(0.48 + index * 0.8, 0.42 + index * 0.58, index * 0.68);

        sculpture.add(ring);

        return ring;

      });

      const count = 360;

      const positions = new Float32Array(count * 3);

      for (let i = 0; i < count; i += 1) {

        const fraction = (i + 0.5) / count;

        const angle = i * 2.399963;

        const radius = 2.3 + ((i * 17) % 97) / 58;

        positions[i * 3] = Math.cos(angle) * radius;

        positions[i * 3 + 1] = (fraction - 0.5) * 5.6;

        positions[i * 3 + 2] = Math.sin(angle) * radius * 0.4 - 0.8;

      }

      const starsGeometry = new THREE.BufferGeometry();

      starsGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

      const starsMaterial = new THREE.PointsMaterial({

        color: 0xe7eaff,

        size: 0.018,

        transparent: true,

        opacity: 0.55,

        sizeAttenuation: true,

      });

      const stars = new THREE.Points(starsGeometry, starsMaterial);

      scene.add(stars);

      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

      const pointer = { x: 0, y: 0 };

      const startTime = performance.now();

      let frame = 0;

      let isVisible = true;

      let isPageVisible = !document.hidden;

      const renderFrame = () => {

        frame = 0;

        if (!isVisible || !isPageVisible) return;

        const time = (performance.now() - startTime) / 1000;

        sculpture.rotation.y += (pointer.x * 0.22 + time * 0.045 - sculpture.rotation.y) * 0.018;

        sculpture.rotation.x += (pointer.y * 0.15 + Math.sin(time * 0.3) * 0.1 - sculpture.rotation.x) * 0.018;

        rings.forEach((ring, index) => {

          ring.rotation.z += (index % 2 === 0 ? 1 : -1) * 0.0007;

        });

        halo.scale.setScalar(1 + Math.sin(time * 0.7) * 0.035);

        renderer.render(scene, camera);

        if (!reducedMotion.matches) {

          frame = window.requestAnimationFrame(renderFrame);

        }

      };

      const requestFrame = () => {

        if (!frame && isVisible && isPageVisible) {

          frame = window.requestAnimationFrame(renderFrame);

        }

      };

      const resizeObserver = new ResizeObserver(() => {

        const width = mount.clientWidth;

        const height = mount.clientHeight;

        if (!width || !height) return;

        camera.aspect = width / height;

        camera.updateProjectionMatrix();

        renderer.setSize(width, height);

        requestFrame();

      });

      resizeObserver.observe(mount);

      const observer = new IntersectionObserver(([entry]) => {

        isVisible = entry.isIntersecting;

        requestFrame();

      });

      observer.observe(mount);

      const onPointerMove = (event) => {

        const bounds = mount.getBoundingClientRect();

        pointer.x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2;

        pointer.y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 2;

        requestFrame();

      };

      const onVisibilityChange = () => {

        isPageVisible = !document.hidden;

        requestFrame();

      };

      mount.addEventListener("pointermove", onPointerMove);

      document.addEventListener("visibilitychange", onVisibilityChange);

      requestFrame();

      disposeScene = () => {

        window.cancelAnimationFrame(frame);

        resizeObserver.disconnect();

        observer.disconnect();

        mount.removeEventListener("pointermove", onPointerMove);

        document.removeEventListener("visibilitychange", onVisibilityChange);

        scene.traverse((object) => {

          if (object instanceof THREE.Mesh || object instanceof THREE.Points) {

            object.geometry.dispose();

            const materials = Array.isArray(object.material) ? object.material : [object.material];

            materials.forEach((material) => material.dispose());

          }

        });

        renderer.dispose();

        renderer.domElement.remove();

      };
    });

    return () => {
      disposed = true;
      disposeScene();
    };
  }, []);

  return <div ref={mountRef} className="hero-scene" aria-hidden="true" />;
}

function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const items = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="site-header">
      <nav className="navigation page-width" aria-label="Main navigation">
        <a
          className="brand"
          href="#home"
          aria-label="Amjad Khan, back to top"
          onClick={() => setMenuOpen(false)}
        >
          <span className="brand-mark">a<span>.</span></span>
          <span className="brand-name">amjad<span>.dev</span></span>
        </a>
        <button
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          type="button"
        >
          <span />
          <span />
        </button>
        <div className={`nav-content${menuOpen ? " nav-content-open" : ""}`}>
          <div className="nav-links">
            {items.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
                {item.label}
              </a>
            ))}
          </div>
          <a className="button button-small button-outline nav-resume" href={RESUME} download="Amjad_Khan.pdf">
            <DownloadIcon />
            Resume
          </a>
        </div>
      </nav>
    </header>
  );
}

function SectionHeading({ eyebrow, title, description, centered = false }) {
  return (
    <div className={`section-heading${centered ? " section-heading-centered" : ""}`}>
      <span className="eyebrow"><span className="eyebrow-dot" />{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

function Hero() {
  return (
    <section className="hero page-width" id="home">
      <div className="hero-copy">
        <div className="availability">
          <span className="availability-dot" />
          OPEN TO OPPORTUNITIES
        </div>
        <p className="hero-intro">Hi, I’m Amjad Khan(9756859054)</p>
        <h1>
          I build things<br />
          <span>for the web.</span>
        </h1>
        <p className="hero-description">
          Full-stack developer &amp; Computer Science student crafting thoughtful digital
          experiences with React, Next.js, and Node.js.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">
            Explore my work <ArrowIcon />
          </a>
          <a className="button button-outline" href={RESUME} download="Amjad_Khan.pdf">
            <DownloadIcon /> Download CV
          </a>
        </div>
        <div className="hero-socials" aria-label="Social profiles">
          {socials.map((social) => (
            <a key={social.label} href={social.href} target="_blank" rel="noreferrer">
              <span className="social-mark" aria-hidden="true">{social.mark}</span>
              {social.label}
              <ArrowIcon diagonal />
            </a>
          ))}
        </div>
      </div>

      <div className="hero-visual">
        <div className="visual-glow" />
        <CubeScene />
        <div className="portrait-frame">
          <img
            src="/image/image.png"
            alt="Portrait of Amjad Khan"
            className="portrait"
            fetchPriority="high"
            width="1254"
            height="1254"
          />
          <div className="portrait-overlay" />
          <div className="portrait-caption">
            <span className="portrait-caption-mark">AK</span>
            <span><strong>Amjad Khan</strong><small>BUILDING ON THE WEB</small></span>
          </div>
        </div>
        <div className="orbit-chip chip-react"><span>✳</span> React.js</div>
        <div className="orbit-chip chip-node"><span>⬡</span> Node.js</div>
        <span className="visual-index">01 <span>/</span> 05</span>
      </div>
      <a className="scroll-cue" href="#about"><span /> SCROLL TO EXPLORE</a>
    </section>
  );
}

function About() {
  return (
    <section className="section page-width about-section" id="about">
      <SectionHeading eyebrow="A LITTLE ABOUT ME" title="Curious by nature. Builder by choice." />
      <div className="about-grid">
        <p className="about-lead">
          I’m a developer who loves turning good ideas into <span>useful, dependable
          products.</span>
        </p>
        <div className="about-detail">
          <p>
            Currently pursuing my B.Tech in Computer Science, I work across the full
            stack—from crafting thoughtful interfaces to designing APIs and databases.
            I care about clean code, useful details, and experiences that feel right.
          </p>
          <a className="text-link" href={links.github} target="_blank" rel="noreferrer">
            A little more about my work <ArrowIcon diagonal />
          </a>
        </div>
      </div>
      <div className="stats-strip">
        <div className="stat"><strong>03<span>+</span></strong><span>YEARS LEARNING &amp; BUILDING</span></div>
        <div className="stat"><strong>10<span>+</span></strong><span>REUSABLE UI COMPONENTS</span></div>
        <div className="stat"><strong>180<span>+</span></strong><span>HOURS OF DEVELOPMENT TRAINING</span></div>
        <div className="stat"><strong>2027</strong><span>B.TECH GRADUATION</span></div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="section section-muted" id="skills">
      <div className="page-width">
        <SectionHeading
          eyebrow="WHAT I WORK WITH"
          title="A thoughtful stack."
          description="The technologies I use to take a project from its first sketch to production."
        />
        <div className="skills-grid">
          {skills.map((group, index) => (
            <article className="skill-card" key={group.title}>
              <div className="skill-card-top">
                <span className="skill-number">0{index + 1}</span>
                <span className="skill-card-accent" aria-hidden="true">{["◈", "⌘", "✳", "▤", "⌘", "↗"][index]}</span>
              </div>
              <h3>{group.title}</h3>
              <div className="skill-tags">
                {group.items.map((skill) => <span className="skill-tag" key={skill}>{skill}</span>)}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="section page-width projects-section" id="projects">
      <SectionHeading
        eyebrow="SELECTED WORK"
        title="A closer look."
        description="A project built around the idea that professional networking can feel more human."
      />
      <article className="project-card">
        <div className="project-preview">
          <div className="preview-topbar">
            <span /><span /><span />
            <span className="preview-address">postBlogs · social / blog</span>
          </div>
          <div className="preview-content">
            <div className="preview-rail"><span>p.</span><span>◎</span><span>▤</span><span>⌘</span></div>
            <div className="preview-feed">
              <div className="preview-greeting">YOUR SOCIAL BLOG COMMUNITY</div>
              <div className="preview-headline">A place to share<br /><span>what’s next.</span></div>
              <div className="preview-subline" />
              <div className="preview-subline preview-subline-short" />
              <div className="preview-post">
                <div className="preview-avatar">AK</div>
                <div className="preview-lines"><span /><span /></div>
                <span className="preview-post-dot">···</span>
              </div>
              <div className="preview-post preview-post-second">
                <div className="preview-avatar preview-avatar-blue">P</div>
                <div className="preview-lines"><span /><span /></div>
                <span className="preview-post-dot">···</span>
              </div>
            </div>
            <div className="preview-profile">
              <div className="profile-cover" />
              <div className="profile-avatar">AK</div>
              <span className="profile-name">Stories worth sharing.</span>
              <span className="profile-line" /><span className="profile-line profile-line-short" />
              <span className="profile-action" />
            </div>
          </div>
          <span className="preview-label">PRODUCT / 2025</span>
        </div>
        <div className="project-details">
          <div className="project-kicker"><span>FEATURED PROJECT</span><span>01 — 01</span></div>
          <h3>postBlogs – Social Blog Platform</h3>
          <p className="project-tagline">A space to share ideas and connect through stories.</p>
          <p className="project-description">
            A social blog platform for publishing posts, sharing media, and building a
            community. Create a profile, join conversations, and connect with others.
          </p>
          <div className="project-features">
            <span>Member profiles</span>
            <span>Blog posts &amp; media</span>
            <span>Social connections</span>
            <span>Secure authentication</span>
          </div>
          <div className="project-tech">
            {technologies.map((technology) => <span key={technology}>{technology}</span>)}
          </div>
          <a
            className="button button-primary project-link"
            href="https://post-blogs-ten.vercel.app/login/"
            target="_blank"
            rel="noreferrer"
          >
            View live project <ArrowIcon diagonal />
          </a>
        </div>
      </article>
    </section>
  );
}

function Experience() {
  return (
    <section className="section section-muted" id="experience">
      <div className="page-width">
        <SectionHeading eyebrow="THE JOURNEY SO FAR" title="Learning by doing." />
        <div className="journey-grid">
          <div>
            <h3 className="journey-heading">Experience</h3>
            <article className="journey-card">
              <div className="journey-marker" />
              <div className="journey-meta"><span>BAREILLY · UTTAR PRADESH</span><span>JUN 03 — AUG 05, 2026</span></div>
              <h4>Full Stack Intern</h4>
              <p className="journey-company">Vitsoft Solutions Pvt. Ltd.</p>
              <ul>
                <li>Developed features for MERN stack web applications as part of an Agile team.</li>
                <li>Built responsive React.js interfaces and integrated REST APIs to fetch, display, and update server data.</li>
                <li>Implemented Express.js and MongoDB CRUD services, user authentication, and secured API endpoints.</li>
                <li>Collaborated with team members using Git and GitHub for version control and code reviews.</li>
              </ul>
            </article>
            <article className="journey-card">
              <div className="journey-marker" />
              <div className="journey-meta"><span>REMOTE · INDIA</span><span>AUG — SEP 2023</span></div>
              <h4>Web Development Intern</h4>
              <p className="journey-company">Academor</p>
              <ul>
                <li>Built responsive web modules using React and Node.js, improving rendering speed by 25%.</li>
                <li>Created 10+ reusable UI components and scalable backend API routes.</li>
              </ul>
            </article>
          </div>
          <div>
            <h3 className="journey-heading">Education</h3>
            <article className="journey-card education-card">
              <div className="journey-marker journey-marker-blue" />
              <div className="journey-meta"><span>BAREILLY, INDIA</span><span>2023 — 2027</span></div>
              <h4>B.Tech, Computer Science &amp; Engineering</h4>
              <p className="journey-company">Shri Ram Murti Smarak College of Engineering &amp; Technology</p>
              <span className="education-badge">EXPECTED GRADUATION · 2027</span>
            </article>
            <a
              className="certification-note"
              href="/Vitsoft_Internship_Certificate.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <span className="certification-mark">✳</span>
              <p>
                <strong>Full Stack Developer Internship Certificate</strong>
                <br />Vitsoft Solutions Pvt. Ltd. · Issued 5 August 2026
                <br />Signed by Babita Sharma, HR Head · View certificate
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="page-width contact-inner">
        <SectionHeading
          eyebrow="HAVE SOMETHING IN MIND?"
          title={<>Let’s make it<br /><span>happen.</span></>}
          description="Have a project, an opportunity, or just want to say hello? My inbox is always open."
        />
        <a className="button button-primary contact-button" href={links.email}>
          Say hello <ArrowIcon diagonal />
        </a>
        <div className="contact-bottom">
          <div className="contact-details">
            <a href={links.email}>amjadkhann.tech@gmail.com</a>
            <a href={links.phone}>{links.phone.replace("tel:", "")}</a>
          </div>
          <span>BAREILLY, INDIA · OPEN TO JOBS</span>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="portfolio">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <footer className="site-footer">
        <div className="page-width footer-inner">
          <a className="footer-brand" href="#home">amjad<span>.dev</span></a>
          <span>DESIGNED &amp; BUILT WITH CARE.</span>
          <span>© {new Date().getFullYear()} AMJAD KHAN</span>
        </div>
      </footer>
    </div>
  );
}
