import React, { useEffect, useState } from 'react';

export default function AboutCard() {
  const [htmlContent, setHtmlContent] = useState(null);

  useEffect(() => {
    fetch('/pages/eye.html')
      .then(res => {
        if (!res.ok) throw new Error('Failed to load page');
        return res.text();
      })
      .then(html => {
        setHtmlContent(html);
      })
      .catch(err => {
        setHtmlContent(`<p>Error loading page: ${err.message}</p>`);
      });
  }, []);

  return (
    <div className="card">
      <div className="card-content">
        {htmlContent ? (
          <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
        ) : (
          <>
            <div className="info">
              <div className="name">Über mich</div>
              <div className="title">
                Lade Informationen...
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
