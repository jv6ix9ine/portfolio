import { Elms_Sans, Google_Sans } from 'next/font/google';

export const elmsSans = Elms_Sans({
    variable: '--font-elms-sans',
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
    adjustFontFallback: false,
});

export const googleSans = Google_Sans({
    variable: '--font-google-sans',
    subsets: ['latin'],
    adjustFontFallback: false,
});
