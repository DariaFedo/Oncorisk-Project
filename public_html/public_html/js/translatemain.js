let State = {
  translatedLanguages: ['en', 'pl'],
  selectedlanguage: ['en'],
};

window.addEventListener('hashchange', () => {
  LanguageOnHash();
  updateText();
});

function LanguageOnHash() {
  let hash = window.location.hash.slice(1);
  State.translatedLanguages.includes(hash)
    ? (State.selectedlanguage = hash)
    : (State.selectedlanguage = 'en');
}

function LanguageOnLoad() {
  const detectedLanguage = navigator.language.slice(0, 2);
  State.translatedLanguages.includes(detectedLanguage)
    ? (State.selectedlanguage = detectedLanguage)
    : (State.selectedlanguage = 'en');
}
