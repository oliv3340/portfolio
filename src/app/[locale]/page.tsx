import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations('Home');
  return (
    <main className="min-w-screen min-h-screen">
      <h1>{t('title')}</h1>
    </main>
  );
}
