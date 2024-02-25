import NavBar from "@/components/navigation/NavBar";
import { useTranslations } from "next-intl";
import React from "react";
import Image from "next/image";

export default function Page({ params }: any) {
    const { id } = params
    const t = useTranslations('Missions')

    return (
        <>
            <main className="min-w-screen min-h-screen bg-creme text-justify">
                <NavBar />
                <div className="min-w-screen py-20 font-body" id="about">
                    <div className="container mx-auto md:w-1200 border-4 border-[#4d4d4d] rounded">
                        <div className="flex flex-col justify-center items-center p-5">
                            <div className="max-w-1200">
                                <div className="flex flex-col md:flex-row h-full justify-center items-center z-40 gap-12">
                                    <div className="container max-w-550 px-5">
                                        <div className="title text-3xl md:text-4xl">{t(`${id}.title`)}</div>
                                        <div className="flex items-center align-center pb-2 my-5">
                                            <div className="font-bold text-xl body uppercase tracking-widest">{t(`${id}.location`)}</div>
                                            <div className="mx-1 italic">- {t(`${id}.dateShort`)}</div>
                                        </div>
                                        <div className=""><p>{t(`${id}.description`)}</p></div>
                                    </div>
                                    <div className="container w-3/4">
                                        <Image className="w-[465px] h-[304px] object-cover" src={"/images/companies/" + id + ".jpg"} alt="selfie" width={692} height={461} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr className="w-80 md:w-hrWidth h-hrHeight bg-lightBlack mx-auto my-8 border-0 rounded" />
                        <div className="flex flex-col justify-center items-center pb-8">
                            <div className="mx-auto max-w-[900px]">
                                <div className="flex title text-3xl mb-8 justify-center items-center">{t(`taskstitle`)}</div>
                                <div className="font-body ml-1">
                                    <p>{t(`${id}.tasks`)}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
