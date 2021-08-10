import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';

const LanguageButton = () => {
  const {i18n} = useTranslation();
 // const [language, setLanguage] = useState(i18n.language);

  const handleLangChange = () => {
    const lng= i18n.language === 'en' ? 'de' : 'en';
    i18n.changeLanguage(lng);
   // setLanguage(lng);
  };
  return (
  <div className="language-selector">
    <button className=""  style={{ color: 'white' }} onClick={handleLangChange}>
    {i18n.language === 'en' ? 'de' : 'en'}
    </button>
  </div>
  );
};

export default LanguageButton;
