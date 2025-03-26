import useTranslation from 'next-translate/useTranslation';

export default function Home() {
  const { t } = useTranslation('common'); // 'common' refers to the common.json file

  return <h1>{t('hello')}</h1>; // Displays "Hello" or "Bonjour" based on the selected locale
}
