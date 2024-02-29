"use client";

import NavBar from "@/components/navigation/NavBar";
import { useLocale, useTranslations } from "next-intl";
import React from "react";
import Image from "next/image";
import HrSeparator from "@/components/HrSeparator";
import DynamicIcon from "@/components/DynamicIcon";
import { useRouter } from "next/navigation";
import { FaArrowCircleLeft } from "react-icons/fa";

export default function Page({ params }: any) {
    const { id } = params
    const t = useTranslations('Missions')
    const router = useRouter()
    const currentLocale = useLocale()

    const techTools = {
        "bouygues": ["SiTerraform", "SiAnsible", "SiPrometheus", "SiGrafana", "SiKubernetes", "SiCeph", "DiPostgresql", "SiGitlab", "SiJira", "SiMattermost"],
        "altrnativ": ["SiTerraform", "SiAnsible", "SiPrometheus", "SiGrafana", "SiKubernetes", "SiCeph", "DiPostgresql", "SiGitlab", "SiJira", "SiMattermost"],
        "cdiscount": ["SiTerraform", "SiAnsible", "SiPrometheus", "SiGrafana", "SiKubernetes", "SiCeph", "DiPostgresql", "SiBitbucket", "SiJira", "SiMicrosoftteams"],
        "mirakl": ["BiLogoGoogleCloud", "SiAmazonaws", "VscAzure", "SiTerraform", "SiArgo", "SiDatadog", "SiHelm", "SiKubernetes", "SiFirebase", "SiPostgresql", "SiGithub", "SiGo", "SiPython", "SiJira", "SiSlack"]
    }

    return (
        <>
            <main className="min-w-screen min-h-screen bg-creme text-justify">
                <NavBar />
                <div className="md:min-w-screen pt-12 md:py-20 px-4 font-body" id="about">
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
                        <HrSeparator />
                        <div className="flex flex-col justify-center items-center pb-8">
                            <div className="mx-auto max-w-60 md:max-w-[900px]">
                                <div className="flex title text-3xl mb-8 justify-center items-center">{t(`taskstitle`)}</div>
                                <div className="font-body ml-1 flex flex-wrap mx-2">
                                    <ul className="mx-auto">
                                        {t(`${id}.tasks`).split('\n').map((item, index) => (
                                            <>
                                                <li className="list-disc my-2" key={index}>
                                                    {item}
                                                </li>
                                            </>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <HrSeparator />
                        {Object.entries(techTools).map(([key, value]) => (
                            id == key
                                ?
                                <>
                                    <DynamicIcon components={value} size="40" color="#3e413f">
                                        <div className="flex title text-3xl mb-8 justify-center items-center">{t(`toolstitle`)}</div>
                                    </DynamicIcon>
                                </>
                                : <></>
                        ))}
                    </div>
                    <div className="mx-2 md:mx-8 py-8">
                        <FaArrowCircleLeft className="text-brown-light object-cover hover:text-brown-hover" size="50" onClick={() => router.push("/" + currentLocale + "/#skills")} />
                    </div>
                </div>
            </main>
        </>
    )
}
