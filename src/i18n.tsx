import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

// Can be imported from a shared config
const locales = ['en', 'fr'];



export default getRequestConfig(async ({ locale }) => {
    const messages = {
        ...(await import(`../messages/${locale}/navbar.json`)).default,
        ...(await import(`../messages/${locale}/hero.json`)).default,
        ...(await import(`../messages/${locale}/about.json`)).default,
        ...(await import(`../messages/${locale}/skills.json`)).default,
        ...(await import(`../messages/${locale}/missions.json`)).default,
        ...(await import(`../messages/${locale}/projects.json`)).default,
        ...(await import(`../messages/${locale}/footer.json`)).default,
    }
    // Validate that the incoming `locale` parameter is valid
    if (!locales.includes(locale as any)) notFound();

    return {
        messages: messages
    };
});
