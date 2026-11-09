import { useEffect, useRef, useState, type CSSProperties } from "react";
import avatarImage from "./assets/phoebe-avatar.png";
import bouncingBombImage from "./assets/bouncing-bomb.png";
import colearnlaImage from "./assets/colearnla.png";
import minigoalImage from "./assets/minigoal.png";
import phoebeWave from "./assets/phoebe-wave.gif";
import testlaImage from "./assets/testla.png";

const ArrowUpRight = ({ size = 24 }: { size?: number }) => (
  <svg
    aria-hidden="true"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M7 17 17 7M7 7h10v10" />
  </svg>
);

const Spark = ({ className = "" }: { className?: string }) => (
  <svg className={className} aria-hidden="true" viewBox="0 0 100 100" fill="none">
    <path
      d="M50 1c1.5 31.8 17.2 47.5 49 49-31.8 1.5-47.5 17.2-49 49C48.5 67.2 32.8 51.5 1 50 32.8 48.5 48.5 32.8 50 1Z"
      fill="currentColor"
    />
  </svg>
);

const work = [
  {
    id: "analytics",
    number: "01",
    title: "Analytics",
    subtitle: "Making data feel human",
    description:
      "A clearer way for teams to understand performance, spot patterns and move from insight to action.",
    tags: ["Product design", "Data visualisation"],
    className: "work-card--analytics",
    visual: (
      <div className="analytics-ui" aria-hidden="true">
        <div className="analytics-sidebar">
          <span />
          <span />
          <span />
          <span />
        </div>
        <div className="analytics-content">
          <div className="analytics-head" />
          <div className="analytics-stats">
            <span />
            <span />
            <span />
          </div>
          <div className="analytics-chart">
            {[32, 48, 40, 68, 58, 82, 72, 92].map((height, i) => (
              <i key={i} style={{ height: `${height}%` }} />
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "learn",
    number: "02",
    title: "Learn",
    subtitle: "Learning without the noise",
    description:
      "Reimagining the learning journey to help people build momentum, stay curious and make progress.",
    tags: ["Research", "Product strategy"],
    className: "work-card--learn",
    visual: (
      <div className="learn-visual" aria-hidden="true">
        <div className="learn-orbit orbit-one" />
        <div className="learn-orbit orbit-two" />
        <div className="learn-core">learn</div>
        <span className="learn-dot dot-one" />
        <span className="learn-dot dot-two" />
        <span className="learn-dot dot-three" />
      </div>
    ),
  },
  {
    id: "myo",
    number: "03",
    title: "MyO",
    subtitle: "Care, made more connected",
    description:
      "A thoughtful digital experience that helps people feel supported, informed and in control.",
    tags: ["Service design", "0–1 product"],
    className: "work-card--myo",
    visual: (
      <div className="myo-visual" aria-hidden="true">
        <div className="myo-phone">
          <div className="myo-speaker" />
          <div className="myo-greeting">Good morning</div>
          <div className="myo-cloud" aria-hidden="true">
            <span />
          </div>
          <div className="myo-copy" />
          <div className="myo-copy short" />
          <div className="myo-button" />
        </div>
      </div>
    ),
  },
];

const explorations = [
  {
    number: "01",
    eyebrow: "AI Experiments",
    title: "Playful prototypes for everyday possibilities.",
    color: "module--yellow",
    items: [
      {
        name: "minigoal",
        meta: "A hackathon exploring generative UI.",
        image: minigoalImage,
        href: "https://phoebeyu.design/minigoal",
      },
      {
        name: "bouncing bomb",
        meta: "Experimenting with AI-powered card game design.",
        image: bouncingBombImage,
        href: "https://phoebeyu.design/bouncing-bomb",
      },
    ],
  },
  {
    number: "02",
    eyebrow: "Community & Collaboration",
    title: "Making space to learn and create together.",
    color: "module--coral",
    items: [
      {
        name: "colearnla",
        meta: "A community for collective learning",
        image: colearnlaImage,
        href: "https://phoebeyu.design/colearnla1",
      },
      {
        name: "testla",
        meta: "A playground for people and ideas",
        image: testlaImage,
        href: "https://phoebeyu.design/testlahk",
      },
    ],
  },
];

function ProjectCard({ project, index }: { project: (typeof work)[number]; index: number }) {
  return (
    <article
      id={project.id}
      className={`work-card ${project.className}`}
      style={{ "--card-index": index } as CSSProperties}
    >
      <div className="work-visual">{project.visual}</div>
      <div className="work-copy">
        <div className="work-card-topline">
          <div className="work-number">{project.number}</div>
          <p className="work-kicker">{project.subtitle}</p>
        </div>
        <h3>{project.title}</h3>
        <p className="work-description">{project.description}</p>
        <div className="tag-row">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <a
          href={`https://phoebeyu.design/${
            project.id === "analytics"
              ? "snyk-analytics"
              : project.id === "learn"
                ? "snyk-learn-assignment"
                : "myobservatory"
          }`}
          className="round-link"
          aria-label={`View ${project.title} case study`}
        >
          <ArrowUpRight size={22} />
        </a>
      </div>
    </article>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [workVisible, setWorkVisible] = useState(false);
  const workSectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = workSectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setWorkVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.18 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <header className="site-header">
        <a href="#top" className="avatar-link" aria-label="Phoebe Yu, home">
          <img src={avatarImage} alt="" />
        </a>
        <button
          className={`menu-toggle ${menuOpen ? "is-open" : ""}`}
          type="button"
          aria-expanded={menuOpen}
          aria-controls="main-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
        <nav id="main-menu" className={menuOpen ? "is-open" : ""} aria-label="Main navigation">
          <a className="active" href="#top" onClick={() => setMenuOpen(false)}>
            Home
          </a>
          <a href="#analytics" onClick={() => setMenuOpen(false)}>
            Analytics
          </a>
          <a href="#learn" onClick={() => setMenuOpen(false)}>
            Learn
          </a>
          <a href="#myo" onClick={() => setMenuOpen(false)}>
            Myobservatory
          </a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-character" aria-hidden="true">
          <img src={phoebeWave} alt="" />
        </div>
        <div className="hero-content">
          <p className="hero-hello">
            Hello, I&apos;m Phoebe <span aria-hidden="true">👋</span>
          </p>
          <h1>
            Product Designer
            <br />
            <span className="title-amp">&amp;</span> <span className="scribble">Experimenter</span>
          </h1>
          <p className="hero-bio">
            Exploring possibilities, bringing people together and turning ideas into reality.
          </p>
          <div className="hero-actions">
            <a className="pill-button pill-button--primary" href="#work">
              Explore my work <span>↓</span>
            </a>
            <a className="pill-button pill-button--outline" href="mailto:hello@phoebeyu.design">
              Let&apos;s connect <ArrowUpRight size={19} />
            </a>
          </div>
        </div>
        <div className="hero-foot">
          <span>Based in Los Angeles</span>
          <span className="availability">
            <i /> Open to interesting things
          </span>
        </div>
      </section>

      <section
        className={`selected-work ${workVisible ? "work-is-visible" : ""}`}
        id="work"
        ref={workSectionRef}
      >
        <div className="section-heading">
          <div>
            <p className="eyebrow">A few things I&apos;ve shaped</p>
            <h2>Selected work</h2>
          </div>
          <p className="section-note">Strategy, systems and experiences designed with care.</p>
        </div>
        <div className="work-stack">
          {work.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </section>

      <section className="beyond" id="beyond">
        <div className="beyond-intro">
          <p className="eyebrow">The side quests</p>
          <h2>Beyond Product Design</h2>
          <p>
            A space for curiosity, experimentation and bringing people together. Here&apos;s what
            I&apos;m exploring and building beyond my day-to-day product design practice.
          </p>
        </div>

        <div className="module-list">
          {explorations.map((module) => (
            <article className={`module ${module.color}`} key={module.number}>
              <div className="module-heading">
                <span className="module-number">{module.number}</span>
                <div>
                  <p>{module.eyebrow}</p>
                  <h3>{module.title}</h3>
                </div>
              </div>
              <div className="mini-grid">
                {module.items.map((item) => (
                  <a
                    className="mini-card"
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    key={item.name}
                  >
                    <div
                      className={`mini-art ${
                        item.name === "minigoal" || item.name === "colearnla"
                          ? "mini-art--smaller"
                          : ""
                      }`}
                    >
                      <img src={item.image} alt={`${item.name} project cover`} />
                    </div>
                    <div className="mini-copy">
                      <div>
                        <h4>{item.name}</h4>
                        <p>{item.meta}</p>
                      </div>
                      <span className="mini-arrow">
                        <ArrowUpRight size={20} />
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer id="contact">
        <div className="footer-spark">
          <Spark />
        </div>
        <p className="eyebrow">Have a thought, idea or good recommendation?</p>
        <h2>
          Let&apos;s make something
          <br />
          wonderful.
        </h2>
        <a className="pill-button pill-button--primary" href="mailto:hello@phoebeyu.design">
          Say hello <ArrowUpRight size={19} />
        </a>
        <div className="footer-bottom">
          <span>© 2025 Phoebe Yu</span>
          <div>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
              LinkedIn ↗
            </a>
            <a href="mailto:hello@phoebeyu.design">Email ↗</a>
          </div>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </main>
  );
}
