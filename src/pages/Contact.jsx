import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
    ArrowLeft,
    ArrowRight,
    Mail,
    MapPin,
    Send,
    CheckCircle2,
    MessageCircle,
    Clock3,
    Linkedin,
    Github,
} from "lucide-react";

import "./Contact.css";

const CONTACT_EMAIL = "ambreenvqagueness.20@gmail.com";

const initialForm = {
    name: "",
    email: "",
    subject: "",
    message: "",
};

function Contact() {
    const [form, setForm] = useState(initialForm);
    const [status, setStatus] = useState({
        type: "",
        message: "",
    });
    const [isSending, setIsSending] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setForm((previous) => ({
            ...previous,
            [name]: value,
        }));

        if (status.message) {
            setStatus({ type: "", message: "" });
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (isSending) return;

        setIsSending(true);
        setStatus({ type: "", message: "" });

        try {
            const response = await fetch(
                `https://formsubmit.co/ajax/${CONTACT_EMAIL}`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },
                    body: JSON.stringify({
                        name: form.name,
                        email: form.email,
                        subject: `SkillForge-X Contact: ${form.subject}`,
                        message: form.message,
                        _template: "table",
                    }),
                }
            );

            const result = await response.json();

            if (!response.ok || result.success === false) {
                throw new Error(result.message || "Unable to send your message.");
            }

            setStatus({
                type: "success",
                message:
                    "Your message has been sent successfully. Thank you for contacting SkillForge-X!",
            });

            setForm(initialForm);
        } catch (error) {
            setStatus({
                type: "error",
                message:
                    "We couldn't send your message. Please try again or email us directly.",
            });
        } finally {
            setIsSending(false);
        }
    };

    return (
        <main className="contact-page">
            <div className="contact-glow contact-glow-one" />
            <div className="contact-glow contact-glow-two" />

            <section className="contact-hero">
                <Link to="/" className="contact-back">
                    <ArrowLeft size={17} />
                    Back to Home
                </Link>

                <div className="contact-heading">
                    <span className="contact-eyebrow">
                        <MessageCircle size={16} />
                        WE'RE HERE TO HELP
                    </span>

                    <h1>
                        Let's start a <span>conversation.</span>
                    </h1>

                    <p>
                        Have a question about SkillForge-X? Want to share feedback or
                        explore a collaboration? We'd love to hear from you.
                    </p>
                </div>
            </section>

            <section className="contact-container">
                <aside className="contact-info">
                    <div className="contact-info-top">
                        <span className="contact-info-label">GET IN TOUCH</span>

                        <h2>
                            We'd love to
                            <br />
                            hear from you.
                        </h2>

                        <p>
                            Whether you're a student, a fresh graduate, or someone
                            interested in our platform, feel free to reach out.
                        </p>
                    </div>

                    <div className="contact-details">
                        <a
                            href={`mailto:${CONTACT_EMAIL}`}
                            className="contact-detail"
                        >
                            <span className="contact-detail-icon">
                                <Mail size={20} />
                            </span>

                            <span>
                                <small>Email us</small>
                                <strong>{CONTACT_EMAIL}</strong>
                            </span>
                        </a>

                        <div className="contact-detail">
                            <span className="contact-detail-icon">
                                <MapPin size={20} />
                            </span>

                            <span>
                                <small>Location</small>
                                <strong>Pakistan</strong>
                            </span>
                        </div>

                        <div className="contact-detail">
                            <span className="contact-detail-icon">
                                <Clock3 size={20} />
                            </span>

                            <span>
                                <small>Response time</small>
                                <strong>Usually within 1–2 days</strong>
                            </span>
                        </div>
                    </div>

                    <div className="contact-social">
                        <p>Connect with us</p>

                        <div className="contact-social-links">
                            <a
                                href="https://www.linkedin.com/"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="LinkedIn"
                            >
                                <Linkedin size={19} />
                            </a>

                            <a
                                href="https://github.com/"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="GitHub"
                            >
                                <Github size={19} />
                            </a>
                        </div>
                    </div>

                    <div className="contact-decoration">
                        <span>SkillForge-X</span>
                        <span>Build your future with intelligence.</span>
                    </div>
                </aside>

                <div className="contact-form-card">
                    <div className="contact-form-heading">
                        <span className="contact-form-badge">
                            <Send size={15} />
                            CONTACT FORM
                        </span>

                        <h2>Send us a message</h2>

                        <p>
                            Fill out the form below and we'll get back to you as soon as
                            possible.
                        </p>
                    </div>

                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="contact-field-row">
                            <div className="contact-field">
                                <label htmlFor="contact-name">Full name</label>
                                <input
                                    id="contact-name"
                                    name="name"
                                    type="text"
                                    placeholder="Your full name"
                                    value={form.name}
                                    onChange={handleChange}
                                    maxLength={100}
                                    autoComplete="name"
                                    required
                                />
                            </div>

                            <div className="contact-field">
                                <label htmlFor="contact-email">Email address</label>
                                <input
                                    id="contact-email"
                                    name="email"
                                    type="email"
                                    placeholder="you@example.com"
                                    value={form.email}
                                    onChange={handleChange}
                                    maxLength={254}
                                    autoComplete="email"
                                    required
                                />
                            </div>
                        </div>

                        <div className="contact-field">
                            <label htmlFor="contact-subject">Subject</label>
                            <input
                                id="contact-subject"
                                name="subject"
                                type="text"
                                placeholder="What would you like to discuss?"
                                value={form.subject}
                                onChange={handleChange}
                                maxLength={150}
                                required
                            />
                        </div>

                        <div className="contact-field">
                            <label htmlFor="contact-message">Your message</label>
                            <textarea
                                id="contact-message"
                                name="message"
                                placeholder="Tell us how we can help..."
                                value={form.message}
                                onChange={handleChange}
                                rows={5}
                                maxLength={3000}
                                required
                            />

                            <span className="contact-character-count">
                                {form.message.length}/3000 characters
                            </span>
                        </div>

                        {status.message && (
                            <div
                                className={`contact-status ${status.type}`}
                                role="status"
                                aria-live="polite"
                            >
                                {status.type === "success" ? (
                                    <CheckCircle2 size={19} />
                                ) : (
                                    <MessageCircle size={19} />
                                )}

                                <span>{status.message}</span>
                            </div>
                        )}

                        <button
                            type="submit"
                            className="contact-submit"
                            disabled={isSending}
                        >
                            {isSending ? (
                                <>
                                    Sending message...
                                    <span className="contact-spinner" />
                                </>
                            ) : (
                                <>
                                    Send Message
                                    <ArrowRight size={19} />
                                </>
                            )}
                        </button>

                        <p className="contact-form-note">
                            <span>*</span> All fields are required.
                        </p>
                    </form>
                </div>
            </section>

            <section className="contact-bottom">
                <div>
                    <h2>Ready to build your future?</h2>
                    <p>
                        Explore how SkillForge-X can help you take the next step in your
                        career.
                    </p>
                </div>

                <Link to="/signup" className="contact-bottom-link">
                    Get Started
                    <ArrowRight size={18} />
                </Link>
            </section>
        </main>
    );
}

export default Contact;