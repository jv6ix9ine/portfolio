import { Button } from '@chakra-ui/react';
import { ComponentPropsWithoutRef } from 'react';

type DownloadProps = {
    isScrolling: boolean;
    t: (key: string) => string;
} & ComponentPropsWithoutRef<typeof Button>;

export default function Download({ isScrolling, t, ...props }: DownloadProps) {
    return (
        <Button
            asChild
            variant={isScrolling ? 'ghost' : 'outline'}
            rounded={'2xl'}
            colorPalette={'gray'}
            transition={'all 0.2 easeInOut'}
            {...props}
            title={t('download')}
        >
            <a
                href='/CV.pdf'
                download='Joaht-Vera-CV.pdf'
                aria-label={t('download')}
            >
                {t('download')}
            </a>
        </Button>
    );
}
