'use client';
import {
    createListCollection,
    HStack,
    Text,
    IconButton,
    Portal,
    Select,
    useSelectContext,
    Image,
} from '@chakra-ui/react';
import { useT } from 'next-i18next/client';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import { LuLanguages } from 'react-icons/lu';

const SelectTrigger = () => {
    const select = useSelectContext();

    return (
        <IconButton
            variant='ghost'
            size='sm'
            {...select.getTriggerProps()}
        >
            <LuLanguages />
        </IconButton>
    );
};

const supportedLngs = ['en', 'es'];
const flags: Record<string, string> = {
    en: '/us.svg',
    es: '/mx.svg',
};

export function LanguageSwitcher() {
    const pathname = usePathname();
    const router = useRouter();
    const { i18n, t } = useT('header');
    const [currentLang, setCurrentLang] = useState([i18n.language || 'en']);

    const switchLocale = (locale: string) => {
        const currentHash = window.location.hash;
        const segments = pathname.split('/');
        segments[1] = currentHash ? `${locale}${currentHash}` : locale;
        router.push(segments.join('/'));
    };

    return (
        <Select.Root
            positioning={{ sameWidth: false }}
            collection={createListCollection({
                items: supportedLngs.map((lng) => ({ id: lng, label: lng, flag: flags[lng] })),
            })}
            size='sm'
            onValueChange={(e) => {
                setCurrentLang(e.value);
                switchLocale(e.value[0]);
            }}
            value={currentLang}
            aria-label={t('languageSwitcher')}
        >
            <Select.HiddenSelect />
            <Select.Control>
                <SelectTrigger />
            </Select.Control>
            <Portal>
                <Select.Positioner>
                    <Select.Content minW='32'>
                        {supportedLngs.map((lng) => (
                            <Select.Item
                                item={lng}
                                key={lng}
                                onClick={() => switchLocale(lng)}
                            >
                                <HStack
                                    width={'full'}
                                    fontFamily={'var(--font-elms-sans)'}
                                    justifyContent={'space-between'}
                                >
                                    <Text>{t(`langs.${lng}`)}</Text>
                                    <Select.ItemIndicator />
                                </HStack>
                                <Image
                                    src={flags[lng]}
                                    alt={lng.toUpperCase()}
                                    width='20px'
                                />
                            </Select.Item>
                        ))}
                    </Select.Content>
                </Select.Positioner>
            </Portal>
        </Select.Root>
    );
}
