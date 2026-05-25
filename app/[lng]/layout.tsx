import '../globals.css';
import { I18nProvider } from 'next-i18next/client';
import { initServerI18next, getT, getResources, generateI18nStaticParams } from 'next-i18next/server';
import { Lora, Google_Sans } from 'next/font/google';
import { Provider } from '@/components/ui/provider';
import { ReactNode } from 'react';
import i18nConfig from '../i18n/config';
import type { Metadata } from 'next';

initServerI18next(i18nConfig);

export async function generateStaticParams() {
    return generateI18nStaticParams();
}

const lora = Lora({
    variable: '--font-lora',
    subsets: ['latin'],
});

const googleSans = Google_Sans({
    variable: '--font-google-sans',
    subsets: ['latin'],
    adjustFontFallback: false,
});

export const metadata: Metadata = {
    title: 'Joaht Vera',
    description: 'Personal portfolio of Joaht Vera, showcasing projects and skills in web development and design.',
};

type RootLayoutProps = {
    children: ReactNode;
    params: Promise<{ lng: string }>;
};

export default async function RootLayout({ children, params }: Readonly<RootLayoutProps>) {
    const { lng } = await params;
    const { i18n, t } = await getT('', { lng });
    const resources = getResources(i18n);

    return (
        <html
            lang={lng}
            className={`${lora.variable} ${googleSans.variable}`}
            suppressHydrationWarning
        >
            <body>
                <I18nProvider
                    language={lng}
                    resources={resources}
                >
                    <Provider>
                        {children}
                    </Provider>
                </I18nProvider>
            </body>
        </html>
    );
}
