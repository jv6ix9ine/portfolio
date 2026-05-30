import type { I18nConfig } from 'next-i18next/proxy';

const i18nConfig: I18nConfig = {
    supportedLngs: ['en', 'es'],
    fallbackLng: 'es',
    defaultNS: 'common',
    ns: [
        'common',
        'header',
        'hero',
        'metrics',
        'projects',
        'howIWork',
        'experience',
        'testimonials',
        'contact',
        'footer',
    ],
    hideDefaultLocale: true,
    // Recommended: works on all platforms including Vercel/serverless
    resourceLoader: (language, namespace) =>
        import(`./locales/${language}/${namespace}.json`).then((mod) => mod.default),
};

export default i18nConfig;
