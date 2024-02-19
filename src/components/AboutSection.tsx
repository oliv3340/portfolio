import { useTranslations } from "next-intl";
import React from "react";
import Image from "next/image";
import TwoColumnLayout from "./TwoColumnLayout";

export default function HeroSection() {
    const t = useTranslations("About")
    return (
        <>
            <div className="min-w-screen bg-white py-20 font-body" id="about">
                <TwoColumnLayout>
                    <div className="container max-w-550 px-5">
                        <div className="title text-3xl md:text-4xl">{t('title')}</div>
                        <div className="text-base md:text-xl uppercase font-semibold my-8">{t('subtitle')}</div>
                        <div className="">{t('p1')}</div>
                        <div className="my-4">{t('p2')}</div>
                        <div className="">{t('p3')}</div>
                    </div>
                    <div className="container w-3/4">
                        <Image className="" src="/images/selfie.jpg" alt="selfie" width={692} height={461} />
                    </div>
                </TwoColumnLayout>
            </div>
        </>
    )
}
