import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';
import {Link} from 'react-router-dom'

// Icon images
import EyeClosed from '../../assets/icons/eye-closed.svg?react';
import EyeOpen from '../../assets/icons/eye-open.svg?react';

import BookClosed from '../../assets/icons/book-closed.svg?react';
import BookOpen from '../../assets/icons/book-open.svg?react';

import LetterClosed from '../../assets/icons/letter-closed.svg?react';
import LetterOpen from '../../assets/icons/letter-open.svg?react';

function Button({ onLoadHtml }) {
  const buttonIcon = [
    { 
      href: '/about', 
      title: 'About', 
      className: 'eye',
      Icon: EyeClosed,
    },
    
    { 
      href: '/methodology', 
      title: 'Methodology', 
      className: 'book',
      Icon: BookClosed,
    },
    
    { 
      href: '/contact', 
      title: 'Contact', 
      className: 'letter',
      Icon: LetterClosed,
    },
    
  ];

  const handleClick = (href, e) => {
    e.preventDefault();
    if (onLoadHtml) onLoadHtml(href);
  };

  return (
    <div>
   {buttonIcon.map(({ href, title, className, Icon }) => (
  href.startsWith('/')
    ? (
      <Link
        key={href}
        to={href}
        title={title}
        className={`${styles['menu-icon']} ${styles[className]}`}
      >
        <Icon className={styles['icon-image']} />
      </Link>
    ) : (
      <a
        key={href}
        href={href}
        title={title}
        className={`${styles['menu-icon']} ${styles[className]}`}
        onClick={(e) => handleClick(href, e)}
      >
        <Icon className={styles['icon-image']} />
      </a>
    )
))}
    </div>
  );
}

Button.propTypes = {
  onLoadHtml: PropTypes.func,
  text: PropTypes.string,
  icon: PropTypes.string,
  alt: PropTypes.string,
  to: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string, 
};

export default Button;
