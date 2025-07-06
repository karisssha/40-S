import  "./ContactCard.css"


function contactCard() {
  return (
    <div className="text-container">
      <div className="title">Kontakt aufnehmen</div>
      <div className="body-text">
        <p>
          Wenn Sie Kontakt aufnehmen möchten, senden Sie mir bitte hier eine Nachricht:
        </p>
        <ul className="contact-list">
          <li>
            E-Mail: <a href="mailto:gebhard@loehnert.com">gebhard@loehnert.com</a>
          </li>
          <li>
            WhatsApp: <a href="https://api.whatsapp.com/send?phone=068120877866">Nachricht senden</a>
          </li>
          <li>
            Telefon: <a href="tel:068120877">0681 20 877 866</a>
          </li>
        </ul>
        <p>
          Die erste Sitzung ist (immer) kostenlos.
        </p>
        <p>
          Ich lege Wert darauf, eine sichere, einfühlsame und kooperative Umgebung zu schaffen, in der sich die Klienten gehört und unterstützt fühlen, wenn sie ihre Gedanken, Emotionen und Verhaltensweisen erforschen.
        </p>
      </div>
    </div>
  );
}


export default contactCard