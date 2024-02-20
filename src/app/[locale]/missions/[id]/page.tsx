import NavBar from "@/components/navigation/NavBar";
import { useTranslations } from "next-intl";
import React from "react";
import Image from "next/image";

export default function Page({ params }: any) {
    const { id } = params
    const t = useTranslations('Missions')

    return (
        <>
            <main className="min-w-screen min-h-screen bg-creme">
                <NavBar />
                <div className="min-w-screen py-20 font-body" id="about">
                    <div className="container mx-auto md:w-1200">
                        <div className="flex flex-col justify-center items-center border-4 rounded p-5">
                            <div className="max-w-1200">
                                <div className="flex flex-col md:flex-row h-full justify-center items-center z-40 gap-12">
                                    <div className="container max-w-550 px-5">
                                        <div className="title text-3xl md:text-4xl">{t(`${id}.title`)}</div>
                                        <div className="flex items-center align-center pb-2 my-5">
                                            <div className="font-bold text-xl">{t(`${id}.location`)}</div>
                                            <div className="mx-1 italic">- {t(`${id}.dateShort`)}</div>
                                        </div>
                                        <div className="">{t(`${id}.description`)}</div>
                                    </div>
                                    <div className="container w-3/4">
                                        <Image className="w-[465px] h-[304px] object-cover" src={"/images/companies/" + id + ".jpg"} alt="selfie" width={692} height={461} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
