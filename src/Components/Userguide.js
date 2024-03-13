import React from 'react';
import { useTranslation } from 'react-i18next';
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";

const UserGuidePage = () => {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <div>
        <button onClick={() => handleLanguageChange('en')}>English</button>
        <button onClick={() => handleLanguageChange('fr')}>French</button>
        {/* Add more language buttons as needed */}
      </div>
      <TransformWrapper>
        <TransformComponent>
          <div className="guide-container">
            <h2>{t('guide.title')}</h2>
            <div className="guide-step">
              <h3>{t('guide.step1.title')}</h3>
              <p>{t('guide.step1.description')}</p>
              {/* Add more guide steps */}
            </div>
          </div>
        </TransformComponent>
      </TransformWrapper>
    </div>
  );
};

export default UserGuidePage;
