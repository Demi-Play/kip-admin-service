import polyglotI18nProvider from 'ra-i18n-polyglot';
import ru from 'ra-language-russian';
import en from 'ra-language-english';
// import { useState, setState } from 'react';


const translations = { en, ru };

export const i18nProvider = polyglotI18nProvider(
    locale => translations[locale],
    'en', // default locale
    [ { locale: 'ru', name: 'Русский' }, { locale: 'en', name: 'English' }],
);
