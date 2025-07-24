import  "./ContactCard.css"


function ContactCard() {
  return (
    <article className="text-container">
      <header>
        <h1>Kontakt aufnehmen</h1>
      </header>
      <section className="body-text">
        <p>
          Wenn Sie Kontakt aufnehmen möchten, senden Sie mir bitte hier eine Nachricht:
        </p>
        <address>
          <ul className="contact-list">
            <li>
              E-Mail: <a href="mailto:gebhard@loehnert.com" aria-label="E-Mail an Gebhard Löhnert senden">gebhard@loehnert.com</a>
            </li>
            <li>
              WhatsApp: <a href="https://api.whatsapp.com/send?phone=068120877866" aria-label="WhatsApp-Nachricht an Gebhard Löhnert senden" target="_blank" rel="noopener noreferrer">Nachricht senden</a>
            </li>
            <li>
              Telefon: <a href="tel:+43681208778666" aria-label="Gebhard Löhnert anrufen">0681 20 877 866</a>
            </li>
          </ul>
        </address>
        <p>
          Die erste Sitzung ist (immer) kostenlos.
        </p>
        <p>
          Ich lege Wert darauf, eine sichere, einfühlsame und kooperative Umgebung zu schaffen, in der sich die Klienten gehört und unterstützt fühlen, wenn sie ihre Gedanken, Emotionen und Verhaltensweisen erforschen.
        </p>
      </section>
    </article>
  );
}


export default ContactCard