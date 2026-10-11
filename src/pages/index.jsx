import React, { Component, Suspense, lazy, useEffect, useRef, useState } from 'react';
import {
  Menu,
  X,
  Mail,
  Linkedin,
  Github,
  MapPin,
  Phone,
  ArrowRight,
  ArrowUpRight,
  ArrowDown,
  GraduationCap,
  Server,
  LayoutGrid,
  Database,
  Cloud,
  Rocket,
  Users,
  ShieldCheck,
  PiggyBank,
} from 'lucide-react';
import { LANGUAGES, translations } from '../i18n/translations';
import { Reveal, TiltCard, useInView, usePrefersReducedMotion } from '../components/motion';
import '../styles/index.css';

const HeroScene = lazy(() => import('../components/HeroScene'));

const SECTIONS = ['home', 'about', 'experience', 'projects', 'skills', 'contact'];
const EMAIL = 'hazar.nenni@protonmail.com';
const PHONE = '+216 58 696 734';
const LINKEDIN_URL = 'https://www.linkedin.com/in/hazar-nenni-1603a4175/';
const GITHUB_URL = 'https://github.com/hazarnenni';
const LANG_STORAGE_KEY = 'portfolio-lang';
const SKILL_ICONS = [Server, LayoutGrid, Database, Cloud];
const HIGHLIGHT_ICONS = [Rocket, Users, ShieldCheck, PiggyBank];

function getInitialLanguage() {
  try {
    const saved = localStorage.getItem(LANG_STORAGE_KEY);
    if (LANGUAGES.includes(saved)) return saved;
  } catch (e) {
    // Storage unavailable (private mode, blocked cookies) — fall back to the browser language.
  }
  return navigator.language?.toLowerCase().startsWith('fr') ? 'fr' : 'en';
}

// Falls back to the static orb if WebGL is unavailable or the 3D chunk fails to load.
class SceneBoundary extends Component {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  render() {
    return this.state.failed ? this.props.fallback : this.props.children;
  }
}

function SectionHeader({ eyebrow, title, description, index }) {
  return (
    <Reveal className="section-header">
      <span className="eyebrow">
        <span className="eyebrow-index">{String(index).padStart(2, '0')}</span>
        {eyebrow}
      </span>
      <h2 className="section-title">{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </Reveal>
  );
}

export default function Portfolio() {
  const [lang, setLang] = useState(getInitialLanguage);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const progressRef = useRef(null);
  const reducedMotion = usePrefersReducedMotion();
  const [heroVisualRef, heroInView] = useInView({ rootMargin: '0px' }, false);
  const t = translations[lang];

  const marqueeItems = [...new Set(t.skills.groups.flatMap((group) => group.items))];

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem(LANG_STORAGE_KEY, lang);
    } catch (e) {
      // Ignore — the choice just won't persist across visits.
    }
  }, [lang]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
      }
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId) => {
    setIsMenuOpen(false);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth' });
  };

  const languageSwitch = (
    <div className="lang-switch" role="group" aria-label={t.nav.language}>
      <span className={`lang-thumb ${lang === 'fr' ? 'is-right' : ''}`} aria-hidden="true" />
      {LANGUAGES.map((code) => (
        <button
          key={code}
          type="button"
          className={`lang-option ${lang === code ? 'is-active' : ''}`}
          aria-pressed={lang === code}
          onClick={() => setLang(code)}
        >
          {code.toUpperCase()}
        </button>
      ))}
    </div>
  );

  const orbFallback = <div className="orb-fallback" aria-hidden="true" />;

  return (
    <div className="portfolio">
      <header className={`navbar ${isScrolled || isMenuOpen ? 'is-scrolled' : ''}`}>
        <div className="nav-shell">
          <button type="button" className="brand" onClick={() => scrollToSection('home')}>
            <span className="brand-mark">HN</span>
            <span className="brand-name">Hazar Nenni</span>
          </button>

          <nav className="nav-menu" aria-label="Primary">
            {SECTIONS.slice(1).map((id) => (
              <button
                key={id}
                type="button"
                onClick={() => scrollToSection(id)}
                className={`nav-link ${activeSection === id ? 'is-active' : ''}`}
                aria-current={activeSection === id ? 'true' : undefined}
              >
                {t.nav[id]}
              </button>
            ))}
          </nav>

          <div className="nav-actions">
            {languageSwitch}
            <button
              type="button"
              className="mobile-menu-btn"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? t.nav.closeMenu : t.nav.openMenu}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          <span className="scroll-progress" ref={progressRef} aria-hidden="true" />
        </div>

        {isMenuOpen && (
          <nav className="mobile-menu" aria-label="Mobile">
            {SECTIONS.slice(1).map((id) => (
              <button
                key={id}
                type="button"
                onClick={() => scrollToSection(id)}
                className={`mobile-menu-item ${activeSection === id ? 'is-active' : ''}`}
              >
                {t.nav[id]}
                <ArrowRight size={16} />
              </button>
            ))}
          </nav>
        )}
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-backdrop" aria-hidden="true" />

          <div className="container hero-layout">
            <div className="hero-copy">
              <span className="status-pill intro" style={{ '--i': 0 }}>
                <span className="status-dot" aria-hidden="true"></span>
                {t.hero.status}
              </span>

              <h1 className="hero-title intro" style={{ '--i': 1 }}>
                Hazar <span className="text-gradient">Nenni</span>
              </h1>
              <p className="hero-role intro" style={{ '--i': 2 }}>{t.hero.role}</p>
              <p className="hero-stack intro" style={{ '--i': 3 }}>{t.hero.stack}</p>
              <p className="hero-summary intro" style={{ '--i': 4 }}>{t.hero.summary}</p>

              <div className="hero-actions intro" style={{ '--i': 5 }}>
                <a href={`mailto:${EMAIL}`} className="btn btn-primary">
                  <Mail size={18} />
                  <span>{t.hero.ctaPrimary}</span>
                </a>
                <button type="button" onClick={() => scrollToSection('projects')} className="btn btn-ghost">
                  <span>{t.hero.ctaSecondary}</span>
                  <ArrowRight size={18} className="btn-arrow" />
                </button>
              </div>

              <ul className="hero-meta intro" style={{ '--i': 6 }}>
                <li>
                  <MapPin size={16} />
                  {t.hero.location}
                </li>
                <li>{t.hero.remote}</li>
                <li className="hero-socials">
                  <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <Linkedin size={16} />
                  </a>
                  <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <Github size={16} />
                  </a>
                </li>
              </ul>
            </div>

            <div className="hero-visual" ref={heroVisualRef} role="img" aria-label={t.hero.sceneLabel}>
              <div className="hero-visual-glow" aria-hidden="true" />
              {reducedMotion ? (
                orbFallback
              ) : (
                <SceneBoundary fallback={orbFallback}>
                  <Suspense fallback={orbFallback}>
                    <HeroScene paused={!heroInView} />
                  </Suspense>
                </SceneBoundary>
              )}
            </div>
          </div>

          <button type="button" className="scroll-cue" onClick={() => scrollToSection('about')}>
            <span>{t.hero.scroll}</span>
            <ArrowDown size={16} />
          </button>

          <div className="marquee" aria-hidden="true">
            <div className="marquee-track">
              {[...marqueeItems, ...marqueeItems].map((item, i) => (
                <span key={i} className="marquee-item">{item}</span>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container">
            <SectionHeader index={1} eyebrow={t.about.eyebrow} title={t.about.title} />

            <div className="bento">
              <Reveal className="bento-intro">
                <TiltCard className="card card-feature" max={4}>
                  <p className="about-intro">{t.about.intro}</p>
                </TiltCard>
              </Reveal>

              <Reveal className="bento-education" delay={100}>
                <TiltCard className="card" max={4}>
                  <div className="card-label">
                    <GraduationCap size={18} />
                    {t.about.educationLabel}
                  </div>
                  <h3>{t.about.degree}</h3>
                  <p className="muted">{t.about.school}</p>
                  <p className="date">{t.about.eduDates}</p>
                  <p>{t.about.eduDescription}</p>
                </TiltCard>
              </Reveal>

              {t.about.stats.map((stat, i) => {
                const Icon = HIGHLIGHT_ICONS[i % HIGHLIGHT_ICONS.length];
                return (
                  <Reveal key={i} delay={i * 80}>
                    <TiltCard className="card highlight">
                      <span className="icon-badge"><Icon size={20} /></span>
                      <h3>{stat.label}</h3>
                      <p>{stat.text}</p>
                    </TiltCard>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <section id="experience" className="section section-alt">
          <div className="container">
            <SectionHeader index={2} eyebrow={t.experience.eyebrow} title={t.experience.title} />

            <ol className="timeline">
              {t.experience.jobs.map((job) => (
                <Reveal as="li" key={job.company} className="timeline-item">
                  <span className="timeline-node" aria-hidden="true" />
                  <div className="timeline-meta">
                    <span className="date">{job.period}</span>
                    <span className="company">{job.company}</span>
                  </div>
                  <div className="card timeline-card">
                    <h3>{job.role}</h3>
                    <p className="job-summary">{job.summary}</p>
                    <ul className="bullet-list">
                      {job.points.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                    {job.tags && (
                      <ul className="tag-list job-tags">
                        {job.tags.map((tag) => (
                          <li key={tag} className="tag">{tag}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="container">
            <SectionHeader
              index={3}
              eyebrow={t.projects.eyebrow}
              title={t.projects.title}
              description={t.projects.description}
            />

            <div className="projects-grid">
              {t.projects.items.map((project, i) => (
                <Reveal key={project.name} delay={(i % 3) * 90}>
                  <TiltCard as="article" className="card project-card">
                    <div className="project-top">
                      <span className="project-index">{String(i + 1).padStart(2, '0')}</span>
                      <span className="project-status">{project.status}</span>
                    </div>
                    <span className="project-type">{project.type}</span>
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                    <ul className="tag-list">
                      {project.tags.map((tag) => (
                        <li key={tag} className="tag">{tag}</li>
                      ))}
                    </ul>
                    {/* {project.url && (
                      <a href={project.url} target="_blank" rel="noopener noreferrer" className="project-link">
                        {t.projects.visit}
                        <ArrowUpRight size={16} />
                      </a>
                    )} */}
                  </TiltCard>
                </Reveal>
              ))}

              <Reveal delay={(t.projects.items.length % 3) * 90}>
                <TiltCard as="article" className="card project-card project-more">
                  <span className="icon-badge"><Github size={22} /></span>
                  <h3>{t.projects.more.title}</h3>
                  <p>{t.projects.more.description}</p>
                  <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="project-link">
                    {t.projects.more.cta}
                    <ArrowUpRight size={16} />
                  </a>
                </TiltCard>
              </Reveal>
            </div>
          </div>
        </section>

        <section id="skills" className="section section-alt">
          <div className="container">
            <SectionHeader index={4} eyebrow={t.skills.eyebrow} title={t.skills.title} />

            <div className="skills-grid">
              {t.skills.groups.map((group, i) => {
                const Icon = SKILL_ICONS[i % SKILL_ICONS.length];
                return (
                  <Reveal key={i} delay={i * 80}>
                    <TiltCard className="card skills-card">
                      <span className="icon-badge"><Icon size={20} /></span>
                      <h3>{group.title}</h3>
                      <ul className="tag-list">
                        {group.items.map((item) => (
                          <li key={item} className="tag">{item}</li>
                        ))}
                      </ul>
                    </TiltCard>
                  </Reveal>
                );
              })}
            </div>

            <div className="skills-secondary">
              <Reveal>
                <div className="card">
                  <h3>{t.skills.softTitle}</h3>
                  <ul className="tag-list">
                    {t.skills.soft.map((skill, i) => (
                      <li key={i} className="tag tag-muted">{skill}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              <Reveal delay={80}>
                <div className="card">
                  <h3>{t.skills.languagesTitle}</h3>
                  <ul className="language-list">
                    {t.skills.languages.map((language, i) => (
                      <li key={i}>
                        <span>{language.name}</span>
                        <span className="muted">{language.level}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              <Reveal delay={160}>
                <div className="card">
                  <h3>{t.skills.extraTitle}</h3>
                  <ul className="extra-list">
                    {t.skills.extra.map((item, i) => (
                      <li key={i}>
                        <h4>{item.title}</h4>
                        {item.date && <p className="date">{item.date}</p>}
                        <p>{item.text}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="container">
            <Reveal className="contact-panel">
              <div className="contact-glow" aria-hidden="true" />
              <div className="contact-grid">
                <div>
                  <span className="eyebrow">
                    <span className="eyebrow-index">05</span>
                    {t.contact.eyebrow}
                  </span>
                  <h2 className="contact-title">{t.contact.title}</h2>
                  <p className="contact-text">{t.contact.text}</p>
                  <div className="hero-actions">
                    <a href={`mailto:${EMAIL}`} className="btn btn-primary">
                      <Mail size={18} />
                      <span>{t.contact.email}</span>
                    </a>
                    <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                      <Linkedin size={18} />
                      <span>{t.contact.linkedin}</span>
                    </a>
                  </div>
                </div>

                <dl className="contact-details">
                  <div>
                    <dt><Mail size={16} />{t.contact.emailLabel}</dt>
                    <dd><a href={`mailto:${EMAIL}`}>{EMAIL}</a></dd>
                  </div>
                  <div>
                    <dt><Phone size={16} />{t.contact.phoneLabel}</dt>
                    <dd><a href={`tel:${PHONE.replace(/\s/g, '')}`}>{PHONE}</a></dd>
                  </div>
                  <div>
                    <dt><MapPin size={16} />{t.contact.locationLabel}</dt>
                    <dd>{t.hero.location}</dd>
                  </div>
                </dl>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-content">
          <p>© {new Date().getFullYear()} Hazar Nenni. {t.footer.rights}</p>
          <button type="button" className="footer-link" onClick={() => scrollToSection('home')}>
            {t.footer.backToTop}
          </button>
        </div>
      </footer>
    </div>
  );
}
