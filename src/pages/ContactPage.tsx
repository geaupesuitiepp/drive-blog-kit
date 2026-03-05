import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Mail, Send } from "lucide-react";

const ContactPage = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      <Helmet>
        <title>Kontakt | AutoJournal</title>
        <meta name="description" content="Kontaktiere das Team von AutoJournal. Wir freuen uns auf deine Nachricht." />
      </Helmet>

      <section className="container mx-auto max-w-xl px-4 py-12">
        <Link to="/" className="mb-4 inline-block text-sm text-muted-foreground hover:text-primary">
          ← Zurück
        </Link>

        <div className="mb-6 flex items-center gap-3">
          <Mail className="text-primary" size={28} />
          <h1 className="text-3xl font-bold text-foreground">Kontakt</h1>
        </div>

        <p className="mb-8 text-muted-foreground">
          Du hast eine Frage, Anregung oder möchtest mit uns zusammenarbeiten? Schreib uns einfach eine Nachricht!
        </p>

        {sent ? (
          <div className="rounded-lg border border-primary/30 bg-primary/10 p-6 text-center">
            <Send className="mx-auto mb-3 text-primary" size={32} />
            <h2 className="text-lg font-semibold text-foreground">Nachricht gesendet!</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Vielen Dank für deine Nachricht. Wir melden uns so schnell wie möglich.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="mb-1 block text-sm font-medium text-foreground">Name</label>
              <input
                id="name"
                type="text"
                required
                className="w-full rounded-md border border-border bg-secondary px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder="Dein Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-1 block text-sm font-medium text-foreground">E-Mail</label>
              <input
                id="email"
                type="email"
                required
                className="w-full rounded-md border border-border bg-secondary px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder="deine@email.de"
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-1 block text-sm font-medium text-foreground">Nachricht</label>
              <textarea
                id="message"
                required
                rows={5}
                className="w-full rounded-md border border-border bg-secondary px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder="Deine Nachricht..."
              />
            </div>
            <button
              type="submit"
              className="rounded-md bg-primary px-6 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-accent"
            >
              Absenden
            </button>
          </form>
        )}
      </section>
    </>
  );
};

export default ContactPage;
