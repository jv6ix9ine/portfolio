import { Button, Stack } from '@chakra-ui/react';
import { getT } from 'next-i18next/server';

export default async function Hero({ lng }: { lng: string }) {
    const { t } = await getT('', { lng });

    return (
        <div >
            <Stack>
                <Button variant="outline" fontFamily="var(--font-google-sans)">
                    {t('welcome')}
                </Button>
                <Button variant="solid" fontFamily="var(--font-lora)">
                    {t('welcome')}
                </Button>
                <Button variant="ghost">
                    {t('welcome')}
                </Button>
            </Stack>
        </div>
    );
}
