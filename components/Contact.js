"use client";
import { Github, Linkedin, Mail } from "lucide-react";
import { useState } from "react";


export default function Contact() {
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("sending");
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(formData)),
      });
      const data = await response.json();

      if (!response.ok) throw new Error(data.error || "Unable to send your message.");

      form.reset();
      setStatus("sent");
    } catch (submissionError) {
      setStatus("error");
      setError(submissionError.message);
    }
  }

  return (
    <section className="container mx-auto px-4" id="contact">
      <h2 className="font-tech text-accent text-4xl font-bold text-center mb-10">
        Contact Me
      </h2>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto glass p-7 rounded-2xl flex flex-col gap-4">
        <input
          type="text"
          required
          name="name"
          placeholder="Your Name"
          className="contact-input p-3 rounded-xl focus:outline-none"
        />
        <input
          type="email"
          required
          name="email"
          placeholder="Your Email"
          className="contact-input p-3 rounded-xl focus:outline-none"
        />
        <textarea
          required
          name="message"
          placeholder="Message"
          className="contact-input p-3 rounded-xl focus:outline-none"
          rows={5}
        />
        <button
          type="submit"
          disabled={status === "sending"}
          className="primary-button px-6 py-3 rounded-full font-bold transition-all hover:scale-[1.02]"
        >
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>
        {status === "sent" && <p className="text-center text-green-300" role="status">Thanks — your message has been sent.</p>}
        {status === "error" && <p className="text-center text-red-300" role="alert">{error}</p>}
      </form>
      <div className="flex gap-6 justify-center mt-8">
        <a href="https://linkedin.com/in/jasssangale" className="text-accent hover-glow"><Linkedin size={32} /></a>
        <a href="https://github.com/JassSangale" className="text-accent hover-glow"><Github size={32} /></a>
        <a href="mailto:jass04sangle@gmail.com" className="text-accent hover-glow"><Mail size={32} /></a>
      </div>
    </section>
  );
}
