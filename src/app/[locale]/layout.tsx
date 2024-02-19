import type { Metadata } from "next";
import { NextIntlClientProvider, useMessages } from 'next-intl';
import { locales } from '@/navigation';
import { Inter } from "next/font/google";
import "@/public/globals.css";
import { notFound } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "oliviergraciannette",
  description: "Personal DevOps portfolio",
};

export default function RootLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!locales.includes(locale)) {
    notFound();
  }

  const messages = useMessages();

  return (
    <html lang={locale}>
      <NextIntlClientProvider locale={locale} messages={messages}>
        <body className={inter.className}>{children}</body>
      </NextIntlClientProvider>
    </html>
  );
}
