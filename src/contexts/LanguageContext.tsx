import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'hi' | 'kn';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    appName: 'NEEYOGI',
    heroTitle: 'Empowering Farmers with AI and Satellite Intelligence',
    heroDescription: 'We help farmers make smarter choices by combining space data and artificial intelligence to estimate crop area, forecast supply, and predict market prices — all using free and open data.',
    exploreInsights: 'Explore Insights',
    learnMore: 'Learn More',
    aboutTitle: 'What is NEEYOGI?',
    aboutDesc1: 'NEEYOGI is a platform that uses freely available satellite images and machine learning to detect which crops are grown, estimate cultivation areas, and forecast supply-demand balance to predict prices before harvest.',
    aboutDesc2: 'Unlike other agri-data services, NEEYOGI uses open-source technology and radar-based data — meaning it even works during cloudy monsoon seasons when most satellites can\'t capture clear images.',
    featuresTitle: 'What Makes NEEYOGI Unique',
    featuresSubtitle: 'Revolutionary features that put farmers first',
    footer: '© 2024 NEEYOGI. Empowering farmers with technology, not replacing them.',
    supportEmail: 'support@neeyogi.ai',
    infoEmail: 'info@neeyogi.ai',
  },
  hi: {
    appName: 'नीयोगी',
    heroTitle: 'एआई और सैटेलाइट इंटेलिजेंस से किसानों को सशक्त बनाना',
    heroDescription: 'हम किसानों को फसल क्षेत्र का अनुमान लगाने, आपूर्ति का पूर्वानुमान लगाने और बाजार मूल्यों की भविष्यवाणी करने के लिए अंतरिक्ष डेटा और कृत्रिम बुद्धिमत्ता को मिलाकर स्मार्ट विकल्प बनाने में मदद करते हैं।',
    exploreInsights: 'जानकारी देखें',
    learnMore: 'अधिक जानें',
    aboutTitle: 'नीयोगी क्या है?',
    aboutDesc1: 'नीयोगी एक मंच है जो स्वतंत्र रूप से उपलब्ध उपग्रह चित्रों और मशीन लर्निंग का उपयोग करके यह पता लगाता है कि कौन सी फसलें उगाई जा रही हैं, खेती के क्षेत्रों का अनुमान लगाता है, और फसल से पहले कीमतों की भविष्यवाणी करने के लिए आपूर्ति-मांग संतुलन का पूर्वानुमान लगाता है।',
    aboutDesc2: 'अन्य कृषि-डेटा सेवाओं के विपरीत, नीयोगी ओपन-सोर्स तकनीक और रडार-आधारित डेटा का उपयोग करता है - जिसका अर्थ है कि यह बादल वाले मानसून के मौसम में भी काम करता है जब अधिकांश उपग्रह स्पष्ट चित्र नहीं ले सकते हैं।',
    featuresTitle: 'नीयोगी को अद्वितीय क्या बनाता है',
    featuresSubtitle: 'क्रांतिकारी सुविधाएँ जो किसानों को पहले रखती हैं',
    footer: '© 2024 नीयोगी। किसानों को प्रौद्योगिकी से सशक्त बनाना, उन्हें बदलना नहीं।',
    supportEmail: 'support@neeyogi.ai',
    infoEmail: 'info@neeyogi.ai',
  },
  kn: {
    appName: 'ನೀಯೋಗಿ',
    heroTitle: 'AI ಮತ್ತು ಉಪಗ್ರಹ ಬುದ್ಧಿವಂತಿಕೆಯೊಂದಿಗೆ ರೈತರನ್ನು ಸಬಲೀಕರಿಸುವುದು',
    heroDescription: 'ಬಾಹ್ಯಾಕಾಶ ಡೇಟಾ ಮತ್ತು ಕೃತಕ ಬುದ್ಧಿಮತ್ತೆಯನ್ನು ಸಂಯೋಜಿಸಿ ಬೆಳೆ ಪ್ರದೇಶವನ್ನು ಅಂದಾಜು ಮಾಡಲು, ಪೂರೈಕೆಯನ್ನು ಮುನ್ಸೂಚಿಸಲು ಮತ್ತು ಮಾರುಕಟ್ಟೆ ಬೆಲೆಗಳನ್ನು ಊಹಿಸಲು ರೈತರಿಗೆ ಸ್ಮಾರ್ಟ್ ಆಯ್ಕೆಗಳನ್ನು ಮಾಡಲು ನಾವು ಸಹಾಯ ಮಾಡುತ್ತೇವೆ.',
    exploreInsights: 'ಒಳನೋಟಗಳನ್ನು ಅನ್ವೇಷಿಸಿ',
    learnMore: 'ಇನ್ನಷ್ಟು ತಿಳಿಯಿರಿ',
    aboutTitle: 'ನೀಯೋಗಿ ಎಂದರೇನು?',
    aboutDesc1: 'ನೀಯೋಗಿ ಎಂಬುದು ಉಚಿತವಾಗಿ ಲಭ್ಯವಿರುವ ಉಪಗ್ರಹ ಚಿತ್ರಗಳು ಮತ್ತು ಯಂತ್ರ ಕಲಿಕೆಯನ್ನು ಬಳಸಿಕೊಂಡು ಯಾವ ಬೆಳೆಗಳನ್ನು ಬೆಳೆಯಲಾಗುತ್ತಿದೆ ಎಂದು ಪತ್ತೆ ಮಾಡುವ, ಕೃಷಿ ಪ್ರದೇಶಗಳನ್ನು ಅಂದಾಜು ಮಾಡುವ ಮತ್ತು ಸುಗ್ಗಿಯ ಮೊದಲು ಬೆಲೆಗಳನ್ನು ಊಹಿಸಲು ಪೂರೈಕೆ-ಬೇಡಿಕೆ ಸಮತೋಲನವನ್ನು ಮುನ್ಸೂಚಿಸುವ ವೇದಿಕೆಯಾಗಿದೆ.',
    aboutDesc2: 'ಇತರ ಕೃಷಿ-ಡೇಟಾ ಸೇವೆಗಳಿಗಿಂತ ಭಿನ್ನವಾಗಿ, ನೀಯೋಗಿ ಓಪನ್-ಸೋರ್ಸ್ ತಂತ್ರಜ್ಞಾನ ಮತ್ತು ರಾಡಾರ್-ಆಧಾರಿತ ಡೇಟಾವನ್ನು ಬಳಸುತ್ತದೆ - ಅಂದರೆ ಹೆಚ್ಚಿನ ಉಪಗ್ರಹಗಳು ಸ್ಪಷ್ಟ ಚಿತ್ರಗಳನ್ನು ತೆಗೆಯಲು ಸಾಧ್ಯವಾಗದ ಮೋಡದ ಮಾನ್ಸೂನ್ ಋತುಗಳಲ್ಲಿ ಸಹ ಇದು ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ.',
    featuresTitle: 'ನೀಯೋಗಿಯನ್ನು ಅನನ್ಯವಾಗಿ ಮಾಡುವುದು ಏನು',
    featuresSubtitle: 'ರೈತರನ್ನು ಮೊದಲು ಇರಿಸುವ ಕ್ರಾಂತಿಕಾರಿ ವೈಶಿಷ್ಟ್ಯಗಳು',
    footer: '© 2024 ನೀಯೋಗಿ. ರೈತರನ್ನು ತಂತ್ರಜ್ಞಾನದಿಂದ ಸಬಲೀಕರಿಸುವುದು, ಅವರನ್ನು ಬದಲಾಯಿಸುವುದಿಲ್ಲ.',
    supportEmail: 'support@neeyogi.ai',
    infoEmail: 'info@neeyogi.ai',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
