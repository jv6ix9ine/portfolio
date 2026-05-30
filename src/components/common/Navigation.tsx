import { HStack, Link, Stack } from '@chakra-ui/react';
import { useT } from 'next-i18next/client';
import { LuAppWindow, LuBriefcaseBusiness, LuHouse, LuPhone } from 'react-icons/lu';
import Download from './Download';
import { LanguageSwitcher } from './LanguageSwitcher';
import { ColorModeButton } from '../ui/color-mode';

export const MenuOptions = [
    { label: 'home', href: '#home', icon: <LuHouse /> },
    { label: 'projects', href: '#projects', icon: <LuAppWindow /> },
    { label: 'experience', href: '#experience', icon: <LuBriefcaseBusiness /> },
    { label: 'contact', href: '#contact', icon: <LuPhone /> },
];

export default function Navigation() {
    const { t } = useT('header');
    
    return (
        <Stack
            as='nav'
            height={'full'}
            gap={{ base: 10, lg: 6 }}
            direction={{ base: 'column', lg: 'row' }}
            alignItems={{ base: 'center', lg: 'flex-start' }}
            paddingTop={{ base: 10, lg: 0 }}
        >
            {MenuOptions.map((option) => (
                <Link
                    key={option.label}
                    href={option.href}
                    variant='plain'
                    focusRing='none'
                >
                    {t(`nav.${option.label}`)}
                </Link>
            ))}

            <HStack hideFrom={'lg'}>
                <Download
                    isScrolling={false}
                    t={t}
                />
                <LanguageSwitcher />
                <ColorModeButton />
            </HStack>
        </Stack>
    );
}
