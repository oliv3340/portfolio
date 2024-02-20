import { useTranslations } from "next-intl";
import React from "react";

export default function HeroSection() {
    const t = useTranslations("Hero")
    return (
        <>
            <div className="min-w-screen h-620 md:h-820 text-white">
                <div className="w-full absolute -z-40">
                    <video
                        autoPlay={true} playsInline={true} muted={true}
                        className="object-cover brightness-75 h-620 md:h-820"
                        src="/videos/video.mp4" width="100%" height="100%"
                    />
                </div>
                <div className="flex flex-col justify-center items-center h-full align-middle z-40">
                    <div className="text-5xl md:text-7xl font-title pb-10 md:pb-20 justify-evenly text-center">Olivier Graciannette</div>
                    <div className="text-xl md:text-4xl uppercase text-center max-w-60 md:max-w-full">{t('text')}</div>
                </div>
            </div>
        </>
    )
}
