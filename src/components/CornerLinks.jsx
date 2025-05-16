import React from 'react';

export default function MenuLinks({ onLoadHtml }) {
  const links = [
    { href: '/eye.html', title: 'Eye Icon', className: 'eye' },
    { href: '/mail.html', title: 'Mail Icon', className: 'book' },
    { href: '/pencil.html', title: 'Pencil Icon', className: 'pencil' },
    { href: '/book.html', title: 'Book Icon', className: 'mail' },
  ];

  return (
    <div className="corners">
      {links.map(({ href, title, className }) => (
        <a
          key={href}
          href={href}
          className={`menu-icon ${className}`}
          title={title}
          onClick={(e) => handleClick(href, e)}
        >
          {/* You can inline your SVG icons here or import them */}
          {/* Example for eye icon (adjust accordingly): */}
          {className === 'eye' && (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12 4.5C7 4.5 2.73 8.11 1 12c1.73 3.89 6 7.5 11 7.5s9.27-3.61 11-7.5C21.27 8.11 17 4.5 12 4.5zm0 12a4.5 4.5 0 110-9 4.5 4.5 0 010 9zm0-7.5a3 3 0 100 6 3 3 0 000-6z" />
            </svg>
          )}
          {/* Add other icons similarly */}
          {className === 'book' && (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 2v.01L12 13 4 6.01V6h16zM4 18V8.23l7.29 5.42a1 1 0 001.42 0L20 8.23V18H4z" />
            </svg>
          )}
          {className === 'pencil' && (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M3 17.25V21h3.75l11-11.03-3.75-3.75L3 17.25zM20.71 7.04a1 1 0 000-1.41l-2.34-2.34a1 1 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
            </svg>
          )}
          {className === 'mail' && (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M18 2H6a2 2 0 00-2 2v16a1 1 0 001.5.87L12 18l6.5 2.87A1 1 0 0020 20V4a2 2 0 00-2-2z" />
            </svg>
          )}
        </a>
      ))}
    </div>
  );
}
