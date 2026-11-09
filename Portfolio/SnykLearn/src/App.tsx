import { useState, type ReactNode } from "react";

const images = {
  jtbd: "/images/dc5648f26ea741e484d455a93fc4157e-appsec-persona-jtbd-card.png",
  glossary: "/images/74a80ea53ffd6edd462f40fb75f7cc37-snyk-learn-ooux-object-glossary.png",
  relationships: "/images/8dbf8c2f6c6c40bddc6bdab6f1cd9ae4-ooux-object-relationships.png",
  objectMap: "/images/fd21be109cafb135724ba31b26cf92f0-ooux-abstact-assignment.png",
  flow: "/images/2bfbb7fe312feec46ae24cff4f373044-flow-chart.png",
  earlyFlow:
    "/images/d8f73f9dbb5c39e74086b7a95588a092-create-and-view-assignment-progress-flow-draft-1.png",
  keyScreens:
    "/images/10c439b36fd0af13ecf6e36fbb6a1481-view-assignment-progress-v1-key-screens.png",
  final: "/images/253069a2e46f7da5951dc855de333e66-assignment-final-design.png",
};

const sections = [
  ["problem", "The problem"],
  ["framework", "Framing the work"],
  ["system", "Mapping the system"],
  ["scope", "Defining scope"],
  ["design", "Designing the flow"],
  ["impact", "Outcome & impact"],
];

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={diagonal ? "arrow diagonal" : "arrow"}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function Figure({
  src,
  number,
  children,
  tone = "light",
}: {
  src: string;
  number: number;
  children: ReactNode;
  tone?: "light" | "dark";
}) {
  return (
    <figure className={`figure figure--${tone}`}>
      <a
        href={src}
        target="_blank"
        rel="noreferrer"
        aria-label={`Open figure ${number} at full size`}
      >
        <img src={src} alt="" loading="lazy" />
        <span className="figure__open">
          View full size <Arrow diagonal />
        </span>
      </a>
      <figcaption>
        <span>Fig. {String(number).padStart(2, "0")}</span>
        {children}
      </figcaption>
    </figure>
  );
}

function Chapter({
  id,
  index,
  eyebrow,
  title,
  children,
}: {
  id: string;
  index: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="chapter" id={id}>
      <div className="chapter__label">
        <span>{index}</span>
        <p>{eyebrow}</p>
      </div>
      <div className="chapter__body">
        <h2>{title}</h2>
        {children}
      </div>
    </section>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="site">
      <header className="site-header">
        <a
          href="https://phoebeyudesign.github.io/portfolio/#top"
          className="avatar-link"
          aria-label="Phoebe Yu, home"
        >
          <img src="/images/phoebe-avatar.png" alt="" />
        </a>
        <button
          className={menuOpen ? "menu-toggle is-open" : "menu-toggle"}
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="main-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <span />
          <span />
        </button>
        <nav id="main-menu" className={menuOpen ? "is-open" : ""} aria-label="Main navigation">
          <a
            href="https://phoebeyudesign.github.io/portfolio/#top"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="https://phoebeyudesign.github.io/portfolio/#analytics"
            onClick={() => setMenuOpen(false)}
          >
            Analytics
          </a>
          <a className="active" href="#top" onClick={() => setMenuOpen(false)}>
            Learn
          </a>
          <a
            href="https://phoebeyudesign.github.io/portfolio/#myo"
            onClick={() => setMenuOpen(false)}
          >
            MyObservatory
          </a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero__eyebrow reveal">
            <span>Case study</span>
            <span>Enterprise product · 2024</span>
          </div>
          <div className="hero__title reveal reveal--delay">
            <h1>
              Turning learning into an
              <br />
              <em>operational product.</em>
            </h1>
            <p>
              Snyk Learn enables application security teams to assign secure coding lessons and
              track learner progress at scale.
            </p>
          </div>
          <div className="hero__footer">
            <a href="#overview" className="round-link" aria-label="Scroll to project overview">
              <Arrow />
            </a>
            <div className="hero__mark" aria-hidden="true">
              LEARN
            </div>
          </div>
        </section>

        <section className="overview" id="overview">
          <div className="overview__intro">
            <p className="kicker">Project overview</p>
            <h2>
              Building the enterprise workflows that turned learning into an operational security
              product.
            </h2>
          </div>
          <div className="overview__copy">
            <p>
              This project focused on improving how assignments are created and monitored for
              enterprise teams managing training across large groups of engineers.
            </p>
            <p>
              I led end-to-end product design for the Assignments experience, partnering with
              product and engineering to define scope, explore solutions, and deliver a focused
              early release.
            </p>
          </div>
          <dl className="meta">
            <div>
              <dt>Role</dt>
              <dd>Product Designer</dd>
            </div>
            <div>
              <dt>Collaborators</dt>
              <dd>Product, engineering, content, marketing, brand</dd>
            </div>
            <div>
              <dt>Timeline</dt>
              <dd>2024</dd>
            </div>
            <div>
              <dt>Scope</dt>
              <dd>Manage Assignments</dd>
            </div>
          </dl>
        </section>

        <aside className="contents" aria-label="On this page">
          <span>On this page</span>
          <div>
            {sections.map(([id, label], index) => (
              <a href={`#${id}`} key={id}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {label}
              </a>
            ))}
          </div>
        </aside>

        <section className="statement">
          <p>The result</p>
          <h2>
            Assignments became the foundation of Snyk Learn’s first <em>enterprise tier.</em>
          </h2>
          <div className="statement__line" />
          <p className="statement__detail">
            The early version generated customer demand, with organisations joining the beta and
            converting to paid through to the full V1 launch.
          </p>
        </section>

        <div className="narrative">
          <Chapter
            id="problem"
            index="01"
            eyebrow="The problem"
            title="Strong content, but no operational control."
          >
            <p className="lead">
              Snyk Learn offered high-quality, bite-sized lessons, but AppSec teams had to share
              content through LMS platforms, email, or Slack.
            </p>
            <p>
              These workarounds didn’t scale. Teams had no reliable way to distribute relevant
              lessons, track completion, or generate evidence for audits and compliance.
            </p>
            <div className="problem-grid">
              <div>
                <span>01</span>
                <h3>Distribute</h3>
                <p>Send relevant lessons to the right teams.</p>
              </div>
              <div>
                <span>02</span>
                <h3>Track</h3>
                <p>Understand completion and progress.</p>
              </div>
              <div>
                <span>03</span>
                <h3>Prove</h3>
                <p>Generate audit-ready evidence.</p>
              </div>
            </div>
            <blockquote>
              High effort. Low visibility.
              <span>No reliable way to prove learning impact.</span>
            </blockquote>
          </Chapter>

          <Chapter
            id="framework"
            index="02"
            eyebrow="Framing the work"
            title="From recurring patterns to Jobs-to-be-Done."
          >
            <p className="lead">
              I translated how AppSec teams managed learning assignments—and where friction
              occurred—into core Jobs-to-be-Done, then mapped the end-to-end assignment journey.
            </p>
            <p>
              This kept the team focused on high-value opportunities, surfaced unmet needs and
              workflow inefficiencies, and gave us a shared language for prioritisation.
            </p>
            <Figure src={images.jtbd} number={1}>
              AppSec persona Jobs-to-be-Done
            </Figure>
          </Chapter>

          <Chapter
            id="system"
            index="03"
            eyebrow="Mapping the system"
            title="Defining the object before designing the UI."
          >
            <p className="lead">
              Snyk Learn already included lessons, learning paths, and certificates. Assignments
              needed to integrate cleanly into that existing ecosystem.
            </p>
            <p>
              I used object-oriented UX to map relationships, core content, metadata, and calls to
              action. This reduced ambiguity between design and engineering about what an
              “assignment” actually contains.
            </p>
            <Figure src={images.glossary} number={2}>
              Snyk Learn object glossary
            </Figure>
            <div className="figure-pair">
              <Figure src={images.relationships} number={3}>
                Object relationships map
              </Figure>
              <Figure src={images.objectMap} number={4}>
                ORCA object map covering AppSec and learner touchpoints
              </Figure>
            </div>
          </Chapter>

          <Chapter
            id="scope"
            index="04"
            eyebrow="Defining scope"
            title="Treating Assignments as a system, not a screen."
          >
            <p className="lead">
              The end-to-end journey revealed six connected tasks: create, edit, delete, view
              progress, send reminders, and download reports.
            </p>
            <Figure src={images.flow} number={5}>
              AppSec assignment call-to-action flow
            </Figure>
            <div className="decision">
              <div>
                <p className="kicker">Early version focus</p>
                <h3>The minimum set of tasks needed to validate value.</h3>
              </div>
              <ul>
                <li>
                  <span>Build now</span>Create assignments to roll out learning at scale
                </li>
                <li>
                  <span>Build now</span>View progress to monitor completion
                </li>
                <li>
                  <span>Build now</span>Download reports for analysis and audits
                </li>
                <li className="muted">
                  <span>Defer</span>Edit, delete, and send reminders
                </li>
              </ul>
            </div>
            <p>
              Aligning early with product and engineering reduced system complexity, accelerated
              delivery, and let us validate the core enterprise use case before expanding the
              workflow.
            </p>
          </Chapter>

          <Chapter
            id="design"
            index="05"
            eyebrow="Designing the flow"
            title="Prioritising speed and validated learning."
          >
            <p className="lead">
              Early explorations mapped the create and progress journeys, helping us identify where
              clarity and efficiency could be improved.
            </p>
            <Figure src={images.earlyFlow} number={6}>
              Early assignment flow—scoped create and progress experience
            </Figure>
            <p>
              Engineering flagged that assignment titles required a new data model and learning
              paths added significant complexity. We deliberately cut both from the early version.
              They were not essential to validating the core use case: assigning learning at scale
              and tracking completion with confidence.
            </p>
            <div className="pullquote">
              <span>Design decision</span>
              <p>
                Reduce cognitive and technical overhead now. Create a clear path for expansion after
                real usage.
              </p>
            </div>
            <h3 className="subhead">The early version experience</h3>
            <p>
              AppSec can select an assignment from a dropdown, quickly create new assignments,
              review progress in a structured table, and export data as a CSV for further analysis
              and reporting.
            </p>
            <Figure src={images.keyScreens} number={7}>
              Key UI screens focused on assignment creation, progress, and export
            </Figure>
          </Chapter>
        </div>

        <section className="impact" id="impact">
          <div className="impact__heading">
            <span>06 / Outcome & impact</span>
            <h2>From passive content library to mission-critical compliance tool.</h2>
          </div>
          <div className="impact__copy">
            <p>
              The new Assignments experience enabled teams to distribute training at scale, monitor
              completion in a structured view, and export audit-ready reports.
            </p>
            <p>
              The work unlocked Snyk Learn’s first enterprise monetisation initiative and
              contributed to meaningful growth in paid adoption and revenue within the first six
              months.
            </p>
          </div>
          <Figure src={images.final} number={8} tone="dark">
            Assignment final design
          </Figure>
          <div className="impact__next">
            <span>What happened next</span>
            <p>
              Following the early version, we moved into edit assignments, delete assignments, and
              reminders—working toward the complete V1 experience.
            </p>
          </div>
        </section>

        <section className="next-project">
          <p>Continue exploring</p>
          <a href="https://phoebeyu.design/myobservatory">
            <span>Next case study</span>
            <strong>MyObservatory</strong>
            <Arrow />
          </a>
        </section>
      </main>

      <footer>
        <p>Thanks for stopping by.</p>
        <a href="mailto:phoebeyu.design@gmail.com">
          Let’s make something meaningful. <Arrow diagonal />
        </a>
        <span>Product designer · 2026</span>
      </footer>
    </div>
  );
}

export default App;
