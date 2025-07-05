import React from 'react';
import { useTranslation } from 'react-i18next';

interface ChatLanguageSwitcherProps {
  onLanguageChange?: (lng: string) => void;
}

const ChatLanguageSwitcher: React.FC<ChatLanguageSwitcherProps> = ({ onLanguageChange }) => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    if (onLanguageChange) {
      onLanguageChange(lng);
    }
  };

  return (
    <div className="flex items-center space-x-1">
      <button
        onClick={() => changeLanguage('id')}
        className={`px-2 py-0.5 rounded-md text-xs font-medium ${i18n.language === 'id' ? 'bg-white text-[#075E54]' : 'bg-white/20 text-white hover:bg-white/30'}`}
      >
        ID
      </button>
      <button
        onClick={() => changeLanguage('en')}
        className={`px-2 py-0.5 rounded-md text-xs font-medium ${i18n.language === 'en' ? 'bg-white text-[#075E54]' : 'bg-white/20 text-white hover:bg-white/30'}`}
      >
        EN
      </button>
    </div>
  );
};

export default ChatLanguageSwitcher;