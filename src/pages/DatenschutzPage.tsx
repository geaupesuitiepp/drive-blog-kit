import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const DatenschutzPage = () => {
  return (
    <>
      <Helmet>
        <title>Datenschutzerklärung | Motorblick</title>
        <meta name="description" content="Datenschutzerklärung von Motorblick – Informationen zum Umgang mit personenbezogenen Daten." />
        <link rel="canonical" href="https://motorblick.com/datenschutz" />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <section className="container mx-auto max-w-3xl px-4 py-12">
        <nav className="flex items-center gap-2 text-xs text-muted-foreground mb-6">
          <Link to="/" className="hover:text-primary transition-colors">Startseite</Link>
          <span>›</span>
          <span className="text-foreground">Datenschutz</span>
        </nav>

        <h1 className="text-3xl font-black text-foreground mb-8">Datenschutzerklärung</h1>

        <div className="space-y-8 text-foreground leading-relaxed text-[15px]">
          <div>
            <h2 className="text-xl font-bold mb-3">1. Datenschutz auf einen Blick</h2>
            <h3 className="font-semibold mb-2">Allgemeine Hinweise</h3>
            <p className="text-muted-foreground">
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3">2. Verantwortliche Stelle</h2>
            <p className="text-muted-foreground">
              Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:<br /><br />
              <strong className="text-foreground">Motorblick</strong><br />
              E-Mail: kontakt@motorblick.com<br />
              Website: motorblick.com
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3">3. Datenerfassung auf dieser Website</h2>
            <h3 className="font-semibold mb-2">Server-Log-Dateien</h3>
            <p className="text-muted-foreground mb-3">
              Der Provider dieser Seiten erhebt und speichert automatisch Informationen in sogenannten Server-Log-Dateien, die Ihr Browser automatisch übermittelt. Dies sind:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-2">
              <li>Browsertyp und Browserversion</li>
              <li>Verwendetes Betriebssystem</li>
              <li>Referrer URL</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Uhrzeit der Serveranfrage</li>
              <li>IP-Adresse</li>
            </ul>
            <p className="text-muted-foreground mt-3">
              Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3">4. Cookies</h2>
            <p className="text-muted-foreground">
              Diese Website verwendet teilweise sogenannte Cookies. Cookies richten auf Ihrem Rechner keinen Schaden an und enthalten keine Viren. Cookies dienen dazu, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen. Cookies sind kleine Textdateien, die auf Ihrem Rechner abgelegt werden und die Ihr Browser speichert.
            </p>
            <p className="text-muted-foreground mt-3">
              Die meisten der von uns verwendeten Cookies sind sogenannte „Session-Cookies". Sie werden nach Ende Ihres Besuchs automatisch gelöscht. Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und Cookies nur im Einzelfall erlauben.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3">5. Externe Links</h2>
            <p className="text-muted-foreground">
              Unsere Website enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber verantwortlich.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3">6. Ihre Rechte</h2>
            <p className="text-muted-foreground">
              Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit widerrufen. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.
            </p>
          </div>

          <div className="border-t border-border pt-6 text-xs text-muted-foreground">
            <p>Stand: März 2026</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default DatenschutzPage;
