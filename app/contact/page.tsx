import Link from "next/link";
import React from "react";

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/ahmed-virk-481446384/",
    description: "Connect with me on LinkedIn",
  },
  {
    name: "GitHub",
    href: "https://github.com/virkahmed",
    description: "Check out my code on GitHub",
  },
  {
    name: "Email",
    href: "mailto:ahmed@example.com",
    description: "Send me an email",
  },
];

export default function ContactPage() {
  return (
    <section className="py-12">
      <div className="container mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold mb-4">Contact</h1>
        <p className="text-muted-foreground mb-8">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <p className="text-muted-foreground mb-6">
              Feel free to reach out through any of the channels below. I typically respond within 24-48 hours.
            </p>
            <div className="space-y-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                  className="block p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <h3 className="font-semibold mb-1">{link.name}</h3>
                  <p className="text-sm text-muted-foreground">{link.description}</p>
                </a>
              ))}
            </div>
          </div>
          <div className="pt-6 border-t">
            <h2 className="text-2xl font-semibold mb-4">Location</h2>
            <p className="text-muted-foreground">
              Princeton, New Jersey, United States
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

