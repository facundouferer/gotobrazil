// public/detect-language.js
// Detects user language and sets it in localStorage
(function () {
  const LANGUAGES = {
    ES: "es",
    PT: "pt",
    EN: "en",
  };

  const DEFAULT_LANGUAGE = LANGUAGES.ES;

  function detectLanguage() {
    // Check if user has already selected a language
    const savedLang = localStorage.getItem("user-language");
    if (savedLang) {
      return savedLang;
    }

    // Detect from browser
    const browserLang = navigator.language || navigator.languages?.[0] || "";
    const langCode = browserLang.toLowerCase().split("-")[0];

    // Map browser language to supported languages
    if (langCode === "pt") return LANGUAGES.PT;
    if (langCode === "es") return LANGUAGES.ES;
    if (langCode === "en") return LANGUAGES.EN;

    // Default to Spanish
    return DEFAULT_LANGUAGE;
  }

  // Set the detected language
  const detectedLang = detectLanguage();
  document.documentElement.setAttribute("data-lang", detectedLang);
  localStorage.setItem("user-language", detectedLang);
})();
