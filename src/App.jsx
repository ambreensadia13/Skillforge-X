
import React, { useState } from "react";

import {
    Routes,
    Route,
    Link,
    useNavigate,
} from "react-router-dom";

import {
    ArrowRight,
    BrainCircuit,
    BriefcaseBusiness,
    GraduationCap,
    FileSearch,
    Target,
    TrendingUp,
    CheckCircle2,
    Menu,
    X,
    Sparkles,
    ShieldCheck,
    Map,
    Users,
    Mail,
    Lock,
    User,
    ChevronRight,
    Eye,
    EyeOff,
} from "lucide-react";

import Contact from "./pages/Contact";

import "./App.css";

/* =========================================
   SHARED BRAND LOGO
========================================= */

function BrandLogo({ footer = false }) {
    return (
        <Link
            to="/"
            className={`logo ${footer ? "footer-logo" : ""}`}
            aria-label="SkillForge-X Home"
        >
            <img
                src="/logo.png"
                alt="SkillForge-X logo"
                className="brand-logo"
            />

            <span className="brand-name">
                SkillForge<span className="logo-x">-X</span>
            </span>
        </Link>
    );
}

/* =========================================
   NAVBAR
========================================= */

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    function closeMenu() {
        setMenuOpen(false);
    }

    return (
        <header className="navbar">
            <BrandLogo />

            <button
                type="button"
                className="menu-toggle"
                onClick={() => setMenuOpen((previous) => !previous)}
                aria-label={
                    menuOpen ? "Close navigation" : "Open navigation"
                }
                aria-expanded={menuOpen}
            >
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
                <Link to="/" onClick={closeMenu}>
                    Home
                </Link>

                <a href="/#about" onClick={closeMenu}>
                    About
                </a>

                <a href="/#features" onClick={closeMenu}>
                    Features
                </a>

                <a href="/#how-it-works" onClick={closeMenu}>
                    How It Works
                </a>

                <Link to="/contact" onClick={closeMenu}>
                    Contact
                </Link>
            </nav>

            <div className="nav-actions">
                <Link
                    to="/signin"
                    className="signin-btn"
                    onClick={closeMenu}
                >
                    Sign In
                </Link>

                <Link
                    to="/signup"
                    className="signup-btn"
                    onClick={closeMenu}
                >
                    Sign Up <ArrowRight size={16} />
                </Link>
            </div>
        </header>
    );
}

/* =========================================
   HERO
========================================= */

function Hero() {
    return (
        <section className="hero section-container" id="home">
            <div className="hero-content">
                <div className="eyebrow">
                    <Sparkles size={15} />
                    AI-POWERED CAREER INTELLIGENCE
                </div>

                <h1>
                    Turn Your Skills Into
                    <span> Career Opportunities.</span>
                </h1>

                <p>
                    Discover relevant internships, trainee programs, and
                    entry-level jobs across Pakistan. Let AI analyze your
                    resume, identify skill gaps, and guide you towards
                    your professional future.
                </p>

                <div className="hero-buttons">
                    <Link to="/signup" className="primary-btn">
                        Get Started <ArrowRight size={18} />
                    </Link>

                    <a href="#how-it-works" className="secondary-btn">
                        Explore Platform
                    </a>
                </div>

                <div className="hero-trust">
                    <ShieldCheck size={20} />

                    <span>
                        Designed for Pakistani students and fresh graduates
                    </span>
                </div>

                <div className="hero-proof">
                    <div className="proof-avatars">
                        <span>
                            <GraduationCap size={17} />
                        </span>

                        <span>
                            <BriefcaseBusiness size={16} />
                        </span>

                        <span>
                            <BrainCircuit size={17} />
                        </span>
                    </div>

                    <div>
                        <strong>Career-focused intelligence</strong>
                        <small>Skills • Opportunities • Growth</small>
                    </div>
                </div>
            </div>

            <div className="hero-visual">
                <div className="visual-glow" />

                <div className="dashboard-preview">
                    <div className="preview-header">
                        <div>
                            <small>YOUR CAREER OVERVIEW</small>
                            <h3>Career Intelligence</h3>
                        </div>

                        <span className="preview-badge">
                            <Sparkles size={13} /> AI Powered
                        </span>
                    </div>

                    <div className="profile-preview">
                        <div className="profile-avatar">
                            <User size={25} />
                        </div>

                        <div>
                            <strong>Your Career Journey</strong>
                            <p>Let's discover your potential</p>
                        </div>

                        <span className="online-dot" />
                    </div>

                    <div className="match-card">
                        <div className="match-top">
                            <div className="match-icon">
                                <BriefcaseBusiness size={20} />
                            </div>

                            <div>
                                <strong>Job Compatibility</strong>
                                <p>AI-powered job matching</p>
                            </div>

                            <span className="match-status">Preview</span>
                        </div>

                        <div className="match-score">
                            <strong>92%</strong>
                            <span>Sample match score</span>
                        </div>

                        <div className="progress-track">
                            <div className="progress-fill" />
                        </div>
                    </div>

                    <div className="preview-bottom">
                        <div className="mini-card">
                            <div className="mini-icon">
                                <FileSearch size={19} />
                            </div>

                            <strong>Resume Analysis</strong>
                            <span>Skills identified</span>

                            <CheckCircle2
                                size={17}
                                className="check-icon"
                            />
                        </div>

                        <div className="mini-card">
                            <div className="mini-icon">
                                <Map size={19} />
                            </div>

                            <strong>Skill Roadmap</strong>
                            <span>Growth plan</span>

                            <TrendingUp
                                size={17}
                                className="check-icon"
                            />
                        </div>
                    </div>

                    <div className="preview-footer">
                        <Sparkles size={16} />
                        Your career. Your potential. Your future.
                    </div>
                </div>

                <div className="floating-tag tag-one">
                    <CheckCircle2 size={17} />
                    Smart Job Matching
                </div>

                <div className="floating-tag tag-two">
                    <BrainCircuit size={18} />
                    AI Career Guidance
                </div>
            </div>
        </section>
    );
}

/* =========================================
   ABOUT
========================================= */

function About() {
    return (
        <section className="about section-container" id="about">
            <div className="section-heading">
                <span className="section-label">
                    ABOUT SKILLFORGE-X
                </span>

                <h2>
                    Your Career Journey Deserves
                    <span> More Than Just Job Listings.</span>
                </h2>

                <p>
                    Finding the right opportunity is not always easy.
                    Students often struggle to identify suitable jobs,
                    understand employer requirements, and recognize
                    the skills they need to develop.
                </p>
            </div>

            <div className="about-content">
                <div className="about-highlight">
                    <img
                        src="/logo.png"
                        alt="SkillForge-X logo"
                        className="career-card-logo"
                    />

                    <span className="highlight-label">
                        INTELLIGENT CAREER GUIDANCE
                    </span>

                    <h3>
                        Build a Career That Matches Your Potential
                    </h3>

                    <p>
                        SkillForge-X connects your qualifications and skills
                        with relevant career opportunities through AI-powered
                        insights.
                    </p>

                    <div className="highlight-bottom">
                        <span>
                            <CheckCircle2 size={16} /> Personalized
                        </span>

                        <span>
                            <CheckCircle2 size={16} /> Career-focused
                        </span>
                    </div>
                </div>

                <div className="about-text">
                    <span className="section-label">
                        FROM UNIVERSITY TO INDUSTRY
                    </span>

                    <h3>
                        Your next opportunity starts with understanding
                        yourself.
                    </h3>

                    <p>
                        SkillForge-X is an AI-powered career intelligence
                        and intelligent job matching platform designed
                        specifically for Pakistani university students
                        and fresh graduates.
                    </p>

                    <p>
                        It analyzes resumes, identifies skill gaps,
                        recommends relevant learning paths, and matches
                        candidates with internships, trainee programs,
                        and entry-level job opportunities.
                    </p>

                    <div className="about-points">
                        <span>
                            <CheckCircle2 />
                            Discover relevant opportunities
                        </span>

                        <span>
                            <CheckCircle2 />
                            Understand your skill gaps
                        </span>

                        <span>
                            <CheckCircle2 />
                            Build a career development roadmap
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* =========================================
   FEATURES
========================================= */

const features = [
    {
        icon: Target,
        title: "AI Job Matching",
        description:
            "Find relevant Pakistani internships, trainee programs, and entry-level jobs based on your skills, qualifications, and interests.",
    },
    {
        icon: FileSearch,
        title: "Resume Analysis",
        description:
            "Upload your resume and let AI analyze your education, experience, technical skills, and professional qualifications.",
    },
    {
        icon: BrainCircuit,
        title: "Skill Gap Analysis",
        description:
            "Identify the skills you already have and discover the missing skills required for your targeted career roles.",
    },
    {
        icon: Map,
        title: "Personalized Skill Roadmap",
        description:
            "Receive a structured learning roadmap with recommended skills and courses to improve your employability.",
    },
    {
        icon: BriefcaseBusiness,
        title: "Career Opportunities",
        description:
            "Explore internships, graduate trainee programs, and entry-level positions from relevant job platforms in Pakistan.",
    },
    {
        icon: TrendingUp,
        title: "Career Growth Insights",
        description:
            "Understand your career readiness and discover practical steps to improve your professional profile.",
    },
];

function Features() {
    return (
        <section className="features-section" id="features">
            <div className="section-container">
                <div className="section-heading">
                    <span className="section-label">WHAT WE OFFER</span>

                    <h2>
                        Everything You Need to
                        <span> Move Forward.</span>
                    </h2>

                    <p>
                        Smart tools that simplify your journey from
                        academic learning to professional opportunities.
                    </p>
                </div>

                <div className="features-grid">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;

                        return (
                            <article
                                className="feature-card"
                                key={feature.title}
                            >
                                <div className="feature-card-top">
                                    <div className="feature-icon">
                                        <Icon size={25} />
                                    </div>

                                    <span className="feature-number">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>
                                </div>

                                <h3>{feature.title}</h3>
                                <p>{feature.description}</p>

                                <div className="feature-card-line" />
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

/* =========================================
   HOW IT WORKS
========================================= */

const steps = [
    {
        number: "01",
        icon: User,
        title: "Create Your Profile",
        text: "Sign up and provide your educational background, career interests, and professional information.",
    },
    {
        number: "02",
        icon: FileSearch,
        title: "Upload Your Resume",
        text: "Let the AI resume analyzer identify your qualifications, technical skills, and experience.",
    },
    {
        number: "03",
        icon: BrainCircuit,
        title: "Get Intelligent Insights",
        text: "Receive relevant job matches, skill gap analysis, and personalized learning recommendations.",
    },
    {
        number: "04",
        icon: TrendingUp,
        title: "Build Your Career",
        text: "Follow your skill roadmap and explore suitable opportunities to move towards your career goals.",
    },
];

function HowItWorks() {
    return (
        <section className="process-section" id="how-it-works">
            <div className="section-container">
                <div className="section-heading">
                    <span className="section-label">HOW IT WORKS</span>

                    <h2>
                        Your Journey to a Career
                        <span> Starts Here.</span>
                    </h2>

                    <p>
                        Four simple steps to transform your profile
                        into meaningful career opportunities.
                    </p>
                </div>

                <div className="steps-grid">
                    {steps.map((step, index) => {
                        const Icon = step.icon;

                        return (
                            <article
                                className="step-card"
                                key={step.number}
                            >
                                <div className="step-card-header">
                                    <span className="step-number">
                                        {step.number}
                                    </span>

                                    <div className="step-icon">
                                        <Icon size={25} />
                                    </div>
                                </div>

                                <h3>{step.title}</h3>
                                <p>{step.text}</p>

                                {index !== steps.length - 1 && (
                                    <ChevronRight className="step-arrow" />
                                )}
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

/* =========================================
   TARGET AUDIENCE
========================================= */

function Audience() {
    return (
        <section className="audience-section section-container">
            <div className="audience-content">
                <span className="section-label">WHO IS IT FOR?</span>

                <h2>
                    Built for the
                    <span> Next Generation of Professionals.</span>
                </h2>

                <p>
                    Whether you are still studying or have recently
                    graduated, SkillForge-X helps you take the next
                    step towards your professional future.
                </p>

                <div className="audience-list">
                    <div>
                        <GraduationCap />

                        <span>
                            <strong>University Students</strong>
                            <small>
                                Discover internships and build industry-ready
                                skills.
                            </small>
                        </span>
                    </div>

                    <div>
                        <Users />

                        <span>
                            <strong>Fresh Graduates</strong>
                            <small>
                                Find entry-level jobs and graduate trainee
                                programs.
                            </small>
                        </span>
                    </div>
                </div>
            </div>

            <div className="audience-visual">
                <div className="audience-orbit orbit-one" />
                <div className="audience-orbit orbit-two" />

                <div className="audience-circle">
                    <GraduationCap size={65} />
                    <span>LEARN</span>
                    <span>GROW</span>
                    <span>SUCCEED</span>
                </div>

                <div className="audience-note">
                    <Sparkles size={18} />

                    <span>
                        Empowering future professionals across Pakistan.
                    </span>
                </div>
            </div>
        </section>
    );
}

/* =========================================
   CALL TO ACTION
========================================= */

function CTA() {
    return (
        <section className="cta-section" id="contact">
            <div className="cta-decoration cta-decoration-one" />
            <div className="cta-decoration cta-decoration-two" />

            <div className="cta-content">
                <span className="cta-label">
                    YOUR FUTURE STARTS NOW
                </span>

                <h2>
                    Don't Just Search for a Job.
                    <span> Build Your Career.</span>
                </h2>

                <p>
                    Discover your potential, understand your skills,
                    and find opportunities that match your ambitions.
                </p>

                <Link to="/signup" className="cta-button">
                    Create Your Account <ArrowRight size={19} />
                </Link>
            </div>
        </section>
    );
}

/* =========================================
   FOOTER
========================================= */

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-main section-container">
                <div className="footer-brand">
                    <BrandLogo footer />

                    <p>
                        AI-powered career intelligence designed to
                        connect Pakistani students and fresh graduates
                        with meaningful career opportunities.
                    </p>

                    <div className="footer-tag">
                        <ShieldCheck size={16} />
                        Built for your career journey
                    </div>
                </div>

                <div className="footer-column">
                    <h4>Explore</h4>

                    <a href="/#home">Home</a>
                    <a href="/#about">About Us</a>
                    <a href="/#features">Features</a>
                    <a href="/#how-it-works">How It Works</a>
                </div>

                <div className="footer-column">
                    <h4>Account</h4>

                    <Link to="/signin">Sign In</Link>
                    <Link to="/signup">Create Account</Link>
                </div>

                <div className="footer-column">
                    <h4>Get in Touch</h4>

                    <Link to="/contact">
                        <Mail size={15} /> Contact Us
                    </Link>

                    <span>Pakistan</span>
                </div>
            </div>

            <div className="footer-bottom section-container">
                <p>© 2026 SkillForge-X. All rights reserved.</p>
                <p>Empowering Careers Through Intelligence.</p>
            </div>
        </footer>
    );
}

/* =========================================
   HOME PAGE
========================================= */

function Home() {
    return (
        <>
            <Navbar />

            <main>
                <Hero />
                <About />
                <Features />
                <HowItWorks />
                <Audience />
                <CTA />
            </main>

            <Footer />
        </>
    );
}

/* =========================================
   SIGN IN PAGE
========================================= */

function SignIn() {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    function handleSubmit(event) {
        event.preventDefault();

        alert(
            "Sign In UI is ready. Backend authentication will be connected later."
        );
    }

    return (
        <div className="auth-page">
            <BrandLogo />

            <Link to="/" className="auth-back-link">
                <ChevronRight className="back-arrow" size={15} />
                Back to Homepage
            </Link>

            <div className="auth-card">
                <div className="auth-icon">
                    <Lock size={27} />
                </div>

                <span className="auth-eyebrow">WELCOME BACK</span>
                <h1>Welcome Back!</h1>

                <p>Sign in to continue your career journey.</p>

                <form onSubmit={handleSubmit}>
                    <label htmlFor="signin-email">
                        Email Address
                    </label>

                    <div className="input-wrapper">
                        <Mail size={17} />

                        <input
                            id="signin-email"
                            type="email"
                            placeholder="Enter your email"
                            autoComplete="email"
                            required
                        />
                    </div>

                    <label htmlFor="signin-password">
                        Password
                    </label>

                    <div className="input-wrapper">
                        <Lock size={17} />

                        <input
                            id="signin-password"
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter your password"
                            autoComplete="current-password"
                            required
                        />

                        <button
                            type="button"
                            className="password-toggle"
                            onClick={() =>
                                setShowPassword((previous) => !previous)
                            }
                            aria-label={
                                showPassword
                                    ? "Hide password"
                                    : "Show password"
                            }
                        >
                            {showPassword ? (
                                <EyeOff size={17} />
                            ) : (
                                <Eye size={17} />
                            )}
                        </button>
                    </div>

                    <button
                        type="button"
                        className="forgot-password"
                    >
                        Forgot password?
                    </button>

                    <button type="submit" className="auth-submit">
                        Sign In <ArrowRight size={17} />
                    </button>
                </form>

                <div className="auth-switch">
                    Don't have an account?
                    <Link to="/signup"> Sign Up</Link>
                </div>

                <button
                    type="button"
                    className="back-home"
                    onClick={() => navigate("/")}
                >
                    <ChevronRight className="back-arrow" />
                    Back to Homepage
                </button>
            </div>

            <p className="auth-footer">
                © 2026 SkillForge-X. Empowering your future.
            </p>
        </div>
    );
}

/* =========================================
   SIGN UP PAGE
========================================= */

function SignUp() {
    const [showPassword, setShowPassword] = useState(false);

    function handleSubmit(event) {
        event.preventDefault();

        alert(
            "Registration UI is ready. Backend registration will be connected later."
        );
    }

    return (
        <div className="auth-page">
            <BrandLogo />

            <Link to="/" className="auth-back-link">
                <ChevronRight className="back-arrow" size={15} />
                Back to Homepage
            </Link>

            <div className="auth-card signup-card">
                <div className="auth-icon">
                    <GraduationCap size={29} />
                </div>

                <span className="auth-eyebrow">
                    START YOUR JOURNEY
                </span>

                <h1>Create Your Account</h1>

                <p>
                    Start building your professional future with SkillForge-X.
                </p>

                <form onSubmit={handleSubmit}>
                    <label htmlFor="signup-name">
                        Full Name
                    </label>

                    <div className="input-wrapper">
                        <User size={17} />

                        <input
                            id="signup-name"
                            type="text"
                            placeholder="Enter your full name"
                            autoComplete="name"
                            required
                        />
                    </div>

                    <label htmlFor="signup-email">
                        Email Address
                    </label>

                    <div className="input-wrapper">
                        <Mail size={17} />

                        <input
                            id="signup-email"
                            type="email"
                            placeholder="Enter your email"
                            autoComplete="email"
                            required
                        />
                    </div>

                    <label htmlFor="signup-password">
                        Password
                    </label>

                    <div className="input-wrapper">
                        <Lock size={17} />

                        <input
                            id="signup-password"
                            type={showPassword ? "text" : "password"}
                            placeholder="Create a password"
                            autoComplete="new-password"
                            minLength={8}
                            required
                        />

                        <button
                            type="button"
                            className="password-toggle"
                            onClick={() =>
                                setShowPassword((previous) => !previous)
                            }
                            aria-label={
                                showPassword
                                    ? "Hide password"
                                    : "Show password"
                            }
                        >
                            {showPassword ? (
                                <EyeOff size={17} />
                            ) : (
                                <Eye size={17} />
                            )}
                        </button>
                    </div>

                    <p className="password-hint">
                        Use at least 8 characters for your password.
                    </p>

                    <button type="submit" className="auth-submit">
                        Create Account <ArrowRight size={17} />
                    </button>
                </form>

                <div className="auth-switch">
                    Already have an account?
                    <Link to="/signin"> Sign In</Link>
                </div>

                <Link to="/" className="back-home">
                    <ChevronRight className="back-arrow" />
                    Back to Homepage
                </Link>
            </div>

            <p className="auth-footer">
                © 2026 SkillForge-X. Empowering your future.
            </p>
        </div>
    );
}

/* =========================================
   APP ROUTES
========================================= */

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="*" element={<Home />} />
        </Routes>
    );
}
