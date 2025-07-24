import '../../App.css';

function MethodologyCard(){
    return(
        <article className="text-container">
            <header>
                <h1>Methodik</h1>
            </header>
            <section className="body-text">
                <h2 className="sr-only">Leistungsbereich</h2>
                <p>
                    Professionelle Unterstützung
                </p>
                
                <ul>
                    <li>bei privaten und beruflichen Problemen</li>
                    <li>in Krisen und Ausnahmesituationen</li>
                    <li>vor schwierigen Entscheidungen</li>
                </ul>
                
                <h2 className="sr-only">Therapeutischer Ansatz</h2>
                <p>
                    Als Psychosozialer Berater, der bis zum Abschluss seiner Ausbildung unter Aufsicht arbeitet, basiert mein therapeutischer Ansatz auf evidenzbasierten Praktiken, wobei ich in erster Linie kognitive Verhaltenstherapie (KVT) und personenzentrierte Techniken integriere.
                </p>
                
                <p>
                    Ich lege Wert darauf, eine sichere, einfühlsame und kooperative Umgebung zu schaffen, in der sich die Klienten gehört und unterstützt fühlen, wenn sie ihre Gedanken, Emotionen und Verhaltensweisen erforschen.
                </p>   
            </section>
        </article>
    );
}

export default MethodologyCard