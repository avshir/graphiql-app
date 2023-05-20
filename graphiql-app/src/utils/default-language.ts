export const getDefaultLanguage = () => {
  return localStorage.getItem('app-language') ?? 'en';
};
