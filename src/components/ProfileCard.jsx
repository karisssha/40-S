import React, { useState } from 'react';
import './ProfileCard.css';
import caraImg from '/src/assets/images/cara.png';
import CornerLinks from './CornerLinks';

export default function ProfileCard() {
  const [htmlContent, setHtmlContent] = useState(null);

  return (
    <div className="card">
      <CornerLinks onLoadHtml={setHtmlContent} />

      <div className="card-content">
        {htmlContent ? (
          // Render loaded HTML safely — use 'dangerouslySetInnerHTML'
          <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
        ) : (
          // Default profile info when no page loaded
          <>
            <div className="info">
              <div className="name">Gebhard Löhnert</div>
              <div className="title">
                Psychosozialer Berater<br />
                <sub>in Ausbildung unter Supervision</sub>
              </div>
            </div>
            <div className="headshot">
              <img src={caraImg} alt="Gebhard Löhnert" />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
