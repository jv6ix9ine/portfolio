import { DownloadTrigger, Button } from '@chakra-ui/react';
import { ComponentPropsWithoutRef } from 'react';

const data = 'The quick brown fox jumps over the lazy dog';

type DownloadProps = {
    isScrolling: boolean;
    t: (key: string) => string;
} & ComponentPropsWithoutRef<typeof Button>;

export default function Download({ isScrolling, t, ...props }: DownloadProps) {
    return (
        <DownloadTrigger
            data={data}
            fileName='sample.txt'
            mimeType='text/plain'
            asChild
        >
            <Button
                variant={isScrolling ? 'ghost' : 'outline'}
                rounded={'2xl'}
                colorPalette={'gray'}
                transition={'all 0.2 easeInOut'}
                {...props}
            >
                {t('download')}
            </Button>
        </DownloadTrigger>
    );
}
