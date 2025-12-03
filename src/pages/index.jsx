import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, Linkedin, Github, MapPin, Phone, Calendar, Briefcase, GraduationCap, Code, Award, ChevronDown, Sparkles, Rocket, Zap } from 'lucide-react';
import '../styles/index.css';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="portfolio-container">
      <div className="animated-bg">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
        <div className="stars"></div>
      </div>

      <div 
        className="cursor-glow" 
        style={{ 
          left: `${mousePosition.x}px`, 
          top: `${mousePosition.y}px` 
        }}
      ></div>

      <nav className={`navbar ${scrollY > 50 ? 'navbar-scrolled' : ''}`}>
        <div className="nav-container">
          <div className="nav-content">
            <div className="logo">
              <span className="logo-text">HN</span>
              <Sparkles className="logo-icon" size={20} />
            </div>
            
            <div className="nav-menu desktop-menu">
              {['Home', 'About', 'Experience', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`nav-link ${activeSection === item.toLowerCase() ? 'active' : ''}`}
                >
                  {item}
                </button>
              ))}
            </div>

            <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="mobile-menu">
            {['Home', 'About', 'Experience', 'Skills', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="mobile-menu-item"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      <section id="home" className="hero-section">
        <div className="hero-content">
          <div className="hero-badge">
            <Rocket size={16} />
            <span>Available for new opportunities</span>
          </div>
          
          <div className="hero-avatar">
            <div className="avatar-ring"></div>
            <div className="avatar-content">HN</div>
          </div>

          <h1 className="hero-title">
            <span className="gradient-text">Hazar Nenni</span>
          </h1>
          
          <h2 className="hero-subtitle">
            <Zap size={24} className="inline-icon" />
            Fullstack Developer
          </h2>
          
          <p className="hero-description">
            Crafting exceptional digital experiences with modern web technologies, 
            cloud solutions, and scalable architectures that make a difference.
          </p>

          <div className="hero-actions">
            <a href="mailto:hazar.nenni@protonmail.com" className="btn btn-primary">
              <Mail size={20} />
              <span>Let's Talk</span>
            </a>
            <a href="https://linkedin.com/in/hazar-nenni" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              <Linkedin size={20} />
              <span>Connect</span>
            </a>
          </div>

          <button onClick={() => scrollToSection('about')} className="scroll-indicator">
            <ChevronDown size={32} />
          </button>
        </div>
      </section>

      <section id="about" className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Get to know me</span>
            <h2 className="section-title">About Me</h2>
          </div>

          <div className="about-grid">
            <div className="glass-card card-hover">
              <div className="card-icon">
                <MapPin size={24} />
              </div>
              <h3>Location</h3>
              <p>Monastir, Tunisia</p>
            </div>

            <div className="glass-card card-hover">
              <div className="card-icon">
                <Phone size={24} />
              </div>
              <h3>Contact</h3>
              <p>+216 58696734</p>
              <p className="text-small">hazar.nenni@protonmail.com</p>
            </div>

            <div className="glass-card card-hover education-card">
              <div className="card-icon">
                <GraduationCap size={24} />
              </div>
              <h3>Education</h3>
              <h4>Master of Software Engineering</h4>
              <p className="institution">Higher Institute of Informatics and Mathematics of Monastir</p>
              <p className="date">Sep 2021 – Dec 2023</p>
              <p className="description">
                Specialized in software design, development, and cutting-edge web technologies.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Career Journey</span>
            <h2 className="section-title">Work Experience</h2>
          </div>

          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="glass-card experience-card">
                <div className="experience-header">
                  <div className="experience-icon">
                    <Briefcase size={24} />
                  </div>
                  <div className="experience-info">
                    <h3>Fullstack Developer</h3>
                    <p className="company">E-BUILD</p>
                    <p className="period">
                      <Calendar size={16} />
                      Aug 2024 – Present
                    </p>
                  </div>
                </div>
                <ul className="experience-list">
                  <li>Enhanced CRM systems, e-commerce platforms, and corporate websites, increasing feature adoption and customer satisfaction</li>
                  <li>Optimized VPS-hosted applications, reducing downtime from 20 hours/month to under 4 hours</li>
                  <li>Integrated 10+ third-party APIs, connecting multiple services for seamless workflows</li>
                  <li>Developed real-time features, improving transaction speed and overall system responsiveness</li>
                  <li>Collaborated with cross-functional teams to define requirements and deliver tailored solutions</li>
                </ul>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="glass-card experience-card">
                <div className="experience-header">
                  <div className="experience-icon">
                    <Briefcase size={24} />
                  </div>
                  <div className="experience-info">
                    <h3>Backend Developer</h3>
                    <p className="company">SASTEC TN</p>
                    <p className="period">
                      <Calendar size={16} />
                      Jun 2023 – Aug 2024
                    </p>
                  </div>
                </div>
                <ul className="experience-list">
                  <li>Revamped media processing workflows, cutting average video encoding time from 15 minutes to under 9 minutes</li>
                  <li>Strengthened system security and operational reliability across backend services</li>
                  <li>Upgraded cloud-based storage solutions, reducing monthly infrastructure costs by $2,000</li>
                  <li>Facilitated system migration and created comprehensive API documentation for developers</li>
                  <li>Supported developer onboarding and ensured smooth transition to new tools and workflows</li>
                </ul>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="glass-card experience-card">
                <div className="experience-header">
                  <div className="experience-icon">
                    <Briefcase size={24} />
                  </div>
                  <div className="experience-info">
                    <h3>Freelance Developer</h3>
                    <p className="period">
                      <Calendar size={16} />
                      Jan 2021 – Mar 2023
                    </p>
                  </div>
                </div>
                <ul className="experience-list">
                  <li>Delivered and maintained complete web solutions, including e-commerce sites and online learning platforms</li>
                  <li>Deployed and configured applications on VPS and cloud environments for multiple clients</li>
                  <li>Implemented authentication, authorization, and secure deployment pipelines</li>
                  <li>Communicated with clients to gather requirements and provide tailored solutions</li>
                  <li>Developed personal projects and prototypes to demonstrate new technologies and approaches</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">What I bring to the table</span>
            <h2 className="section-title">Skills & Expertise</h2>
          </div>

          <div className="skills-grid">
            <div className="glass-card skills-card">
              <div className="skills-header">
                <Code size={28} />
                <h3>Technical Skills</h3>
              </div>
              <div className="skills-tags">
                {['PHP', 'Java', 'JavaScript', 'Go', 'Node.js', 'ReactJS', 'AngularJS', 'Laravel', 'Symfony', 'Prisma', 'GraphQL', 'Docker', 'AWS S3', 'Cloudflare', 'CI/CD', 'Git/GitHub', 'Tailwind', 'Bootstrap'].map(skill => (
                  <span key={skill} className="skill-tag tech-tag">{skill}</span>
                ))}
              </div>
            </div>

            <div className="glass-card skills-card">
              <div className="skills-header">
                <Award size={28} />
                <h3>Soft Skills</h3>
              </div>
              <div className="skills-tags">
                {['Leadership', 'Team Collaboration', 'Mentoring', 'Problem Solving', 'Communication', 'Adaptability'].map(skill => (
                  <span key={skill} className="skill-tag soft-tag">{skill}</span>
                ))}
              </div>
            </div>

            <div className="glass-card skills-card">
              <div className="skills-header">
                <GraduationCap size={28} />
                <h3>Languages</h3>
              </div>
              <div className="language-list">
                <div className="language-item">
                  <span className="language-name">Arabic</span>
                  <span className="language-level">Native</span>
                </div>
                <div className="language-item">
                  <span className="language-name">English</span>
                  <span className="language-level">Fluent</span>
                </div>
                <div className="language-item">
                  <span className="language-name">French</span>
                  <span className="language-level">Fluent</span>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-card extra-card">
            <h3>Extracurricular & Blogging</h3>
            <div className="extra-content">
              <div className="extra-item">
                <h4>Microsoft Club - ISIMA</h4>
                <p className="date">Sep 2021 – Sep 2022</p>
                <p>Conducted training sessions in software development and computer networking for club members, fostering hands-on learning and skill development in IT projects.</p>
              </div>
              <div className="extra-item">
                <h4>Technical Blogging</h4>
                <p>Authored a technical blog, publishing tutorials, project walkthroughs, and programming insights for the developer community.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section section-alt">
        <div className="container">
          <div className="contact-content">
            <div className="section-header">
              <span className="section-badge">Get in touch</span>
              <h2 className="section-title">Let's Work Together</h2>
            </div>
            <p className="contact-description">
              I'm always interested in hearing about new projects and opportunities. 
              Let's create something amazing together!
            </p>
            <div className="contact-actions">
              <a href="mailto:hazar.nenni@protonmail.com" className="btn btn-primary btn-large">
                <Mail size={24} />
                <span>Email Me</span>
              </a>
              <a href="https://linkedin.com/in/hazar-nenni" target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-large">
                <Linkedin size={24} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>© 2025 Hazar Nenni. Crafted with passion and innovation.</p>
      </footer>
    </div>
  );
}