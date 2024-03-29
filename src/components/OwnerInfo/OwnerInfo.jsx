import React from 'react';
import NavButtons from '../NavButtons/NavButtons';
import './OwnerInfo.css';

function OwnerInfo() {
  return (
    <section className="owner-info section">
      <h1 className="owner-info-title dark-color-text big-text">
        Кулинарный блог
      </h1>
      <h2 className="owner-info-description dark-color-text medium-text small-letter-spacing">
        Марии Резник
      </h2>
      <NavButtons />
    </section>
  );
}

export default OwnerInfo;
