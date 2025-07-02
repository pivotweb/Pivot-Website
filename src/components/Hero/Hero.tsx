import React, { useState } from "react";
import HeroPic from '/images/HeroPic.png';
import "./Hero.css";

export const Hero = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState<"success" | "error" | "">("");
  const [isLoading, setIsLoading] = useState(false);

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleJoin = async () => {
    if (!email.trim()) {
      setMessage("Please enter your email address.");
      setMessageType("error");
      return;
    }

    if (!isValidEmail(email)) {
      setMessage("Please enter a valid email address.");
      setMessageType("error");
      return;
    }

    setIsLoading(true);
    setMessage("");
    setMessageType("");

    try {
      const res = await fetch("https://pivot-oc3v.onrender.com/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setMessage("Thank you for joining our mailing list!");
        setMessageType("success");
        setEmail("");
      } else {
        setMessage("Something went wrong. Please try again.");
        setMessageType("error");
      }
    } catch (error) {
      console.error("Subscription error:", error);
      setMessage("Network error. Please try again later.");
      setMessageType("error");
    } finally {
      setIsLoading(false);

      // Auto-clear message after 6 seconds
      setTimeout(() => {
        setMessage("");
        setMessageType("");
      }, 6000);
    }
  };

  return (
    <section className="Main-hero-sct">
      <div className="main-hero-container">
        <div className="Main-hero-context">
          <h1>
            Rethinking Our <span>Collective <br /> Existence.</span> Rebuilding Africa <br /> from Within.
          </h1>
          <p>
            The Pivot is a civic-inspired movement designed to <br />
            spark bold conversations, spotlight real solutions, and <br />
            nurture the change-makers leading Africa’s <br />
            transformation.
          </p>

          {/* Mailing List Input */}
          <div className="Main-hero-input">
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isLoading}
              aria-label="Email input"
              className="input-email"
            />
            <button
              onClick={handleJoin}
              disabled={isLoading}
              className="join-btn"
              aria-label="Join mailing list"
            >
              {isLoading ? "Joining..." : "Join our mailing list"}
            </button>
          </div>

          {/* Feedback Message Box */}
          {message && (
            <div
              className={`feedback-box ${messageType === "success" ? "success" : "error"}`}
              role="alert"
              aria-live="assertive"
            >
              {messageType === "success" ? "✅" : "⚠️"} {message}
            </div>
          )}
        </div>

        <div className="Main-hero-image">
          <img src={HeroPic} alt="Hero Section Visual" />
        </div>
      </div>
    </section>
  );
};