import { Button, Link, Stack } from '@chakra-ui/react';
import { useT } from 'next-i18next/client';
import { LuAppWindow, LuBriefcaseBusiness, LuHouse, LuPhone } from 'react-icons/lu';

const MenuOptions = [
    { label: 'home', href: '/', icon: <LuHouse /> },
    { label: 'projects', href: '/#projects', icon: <LuAppWindow /> },
    { label: 'experience', href: '/#experience', icon: <LuBriefcaseBusiness /> },
    { label: 'contact', href: '/#contact', icon: <LuPhone /> },
];

export default function Navigation() {
    const { t } = useT('header');
    return (
        <Stack
            height={'full'}
            gap={{ base: 10, md: 6 }}
            direction={{ base: 'column', md: 'row' }}
            alignItems={{ base: 'center', md: 'flex-start' }}
            paddingTop={{ base: 10, md: 0 }}
        >
            {MenuOptions.map((option) => (
                <Link
                    key={option.label}
                    href={option.href}
                    aria-current={option.href === '/' ? 'page' : undefined}
                    _currentPage={{ fontWeight: 'bold' }}
                >
                    {t(`nav.${option.label}`)}
                </Link>
            ))}
            <Button
                colorPalette={'shark'}
                size={'lg'}
                hideFrom={'md'}
                rounded={'xl'}
            >
                {t('download')}
            </Button>
        </Stack>
    );
}
